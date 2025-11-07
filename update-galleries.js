const fs = require('fs');
const path = require('path');

// Ürün klasörlerindeki tüm görselleri bul ve products.js'i güncelle

const productsFolder = 'C:\\Users\\akogl\\projects\\comlink\\img\\products\\ÜRÜNLER';
const productsJsPath = 'C:\\Users\\akogl\\projects\\comlink\\js\\products.js';

// Ürün ID'leri ile klasör isimlerini eşle
const productFolderMapping = {
    'ck-120': 'CK-120',
    'ck-200': 'CK-200',
    'ck-210': 'CK-210',
    'ck-230d': 'CK-230D',
    'ck-300v2': 'CK-300V2',
    'ck-320': 'CK-320',
    'ck-400': 'CK-400',
    'ck-412d': 'CK-412D',
    'ck-460d': 'CK-460D',
    'ck-500': 'CK-500',
    'ck-600': 'CK-600 Akülü Çapa Makinesi',
    'v6-5ah': 'V6 5.0Ah',
    'v7-20ah': 'V7-20.0Ah',
    'v7-30ah': '30.0Ah',
    'v8-15ah': 'V8_15',
    'lityum-pil-standart-sarj': 'Lityum Pil Standart Şarj Cihazı',
    'lityum-pil-ozel-sarj': 'Lityum Pil Özel Şarj Cihazı',
    'yuksek-guclu-hizli-sarj': 'Yüksek Güçlü Lityum Pil Hızlı Şarj Cihazı',
    'lityum-iyon-guc-kablosu': 'Lityum İyon Güç Kablosu',
    'yuksek-guclu-guc-kablosu': 'Yüksek Güçlü Pil Özel Güç Kablosu',
    'yuksek-guclu-guc-kablosu-600cm': 'Yüksek Güçlü Pil Özel Güç Kablosu 600cm',
    'inv-300s': 'Güç Dönüştürücü INV-300S',
    'inv-600s': 'Güç Dönüştürücü INV-600S',
    'aluminyum-bobin': 'Alüminyum Bobin',
    'standart-bobin': 'Standart Bobin',
    'dairesel-testere-bicagi': 'Dairesel Testere Bıçağı',
    'uc-bicak': 'Üç Bıçak',
    'hafif-ot-bariyeri': 'Hafif Yabani Ot Bariyeri',
    'sarili-ot-bariyeri': 'Sarılı Ot Bariyeri',
    'cim-bicme-yardimci': 'Çim Biçme Yardımcı Aracı',
    'demir-yuz-siperi': 'Demir Örgülü Koruyucu Yüz Siperi',
    'koruyucu-onluk': 'Koruyucu Önlük'
};

// Her ürün klasöründeki görselleri topla
const productGalleries = {};

for (const [productId, folderName] of Object.entries(productFolderMapping)) {
    const folderPath = path.join(productsFolder, folderName);

    if (fs.existsSync(folderPath)) {
        const files = fs.readdirSync(folderPath);
        const images = files
            .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
            .map(file => `img/products/ÜRÜNLER/${folderName}/${file}`);

        if (images.length > 0) {
            productGalleries[productId] = {
                main: images[0],
                gallery: images
            };
            console.log(`✅ ${productId}: ${images.length} görsel bulundu`);
        } else {
            console.log(`⚠️  ${productId}: Görsel bulunamadı`);
        }
    } else {
        console.log(`❌ ${productId}: Klasör bulunamadı - ${folderPath}`);
    }
}

// products.js dosyasını oku
let productsJsContent = fs.readFileSync(productsJsPath, 'utf8');

// Her ürün için gallery güncelle
for (const [productId, imageData] of Object.entries(productGalleries)) {
    // images bloğunu bul ve değiştir
    const regex = new RegExp(`('${productId}':\\s*{[\\s\\S]*?images:\\s*{[\\s\\S]*?})(,\\s*tags:)`, 'm');

    const match = productsJsContent.match(regex);
    if (match) {
        const oldImagesBlock = match[1];

        // Yeni images bloğunu oluştur
        const galleryArray = imageData.gallery.map(img => `'${img}'`).join(',\n                ');
        const newImagesBlock = `images: {
            main: '${imageData.main}',
            gallery: [
                ${galleryArray}
            ]
        }`;

        // Eski images bloğunu yeni ile değiştir
        const productBlockRegex = new RegExp(`(images:\\s*{[\\s\\S]*?})(,\\s*tags:)`, 'm');
        const productMatch = oldImagesBlock.match(productBlockRegex);

        if (productMatch) {
            const oldImages = productMatch[1];
            productsJsContent = productsJsContent.replace(oldImages, newImagesBlock);
            console.log(`🔄 ${productId} güncellendi`);
        }
    } else {
        console.log(`❓ ${productId}: images bloğu bulunamadı`);
    }
}

// Güncellenen dosyayı kaydet
fs.writeFileSync(productsJsPath, productsJsContent, 'utf8');
console.log('\n✅ Tüm gallery\'ler güncellendi!');
