// Comlink Ürün Veritabanı
const productsData = {
    'ck-120': {
        id: 'ck-120',
        model: 'CK-120',
        name: 'CK-120 Profesyonel Yaprak Üfleyici',
        category: 'Yaprak Üfleyici',
        categoryId: 'yaprak-ufleyici',
        shortDesc: 'Güçlü fırçasız motor teknolojisi ile sessiz ve etkili çalışma. Bahçe ve park alanlarında yaprakları hızla temizler. Ayarlanabilir hız kontrolü.',
        description: 'CK-120 profesyonel yaprak üfleyici, güçlü fırçasız motor teknolojisi ile sessiz ve etkili çalışma sunar. Bahçe ve park alanlarında yaprakları hızla temizlemek için ideal bir çözümdür. Ergonomik tasarımı sayesinde uzun süreli kullanımda bile yorulmadan çalışabilirsiniz.',
        description2: 'Comlink\'in ortak batarya platformu sayesinde tek bir yüksek kapasiteli akü ile tüm Comlink ürünlerini kullanabilirsiniz. Bu da hem ekonomik hem de pratik bir çözüm sağlar.',
        features: [
            'Güçlü fırçasız motor teknolojisi',
            'Sessiz çalışma (düşük gürültü seviyesi)',
            'Ayarlanabilir hız kontrolü',
            'Ergonomik ve hafif tasarım',
            'IP66 sertifikalı batarya uyumluluğu',
            'Dumansız ve benzinsiz çevre dostu kullanım',
            'Ortak batarya platformu (V6/V7/V8)',
            'Uzun çalışma süresi'
        ],
        specs: {
            'Model': 'CK-120',
            'Motor Tipi': 'Fırçasız (Brushless) Motor',
            'Hava Hızı': '0-240 km/h (Ayarlanabilir)',
            'Hava Akış Hacmi': '16 m³/dk',
            'Batarya Voltajı': '56V Li-ion',
            'Uyumlu Bataryalar': 'V6-5Ah / V7-20Ah / V7-30Ah / V8-15Ah',
            'Çalışma Süresi': '40-90 dakika (bataryaya göre)',
            'Şarj Süresi': '60-180 dakika',
            'Ağırlık': '2.8 kg (batarya hariç)',
            'Gürültü Seviyesi': '≤85 dB',
            'Koruma Sınıfı': 'IP66 (Batarya)'
        },
        usageAreas: [
            { icon: 'leaf', text: 'Bahçe temizliği' },
            { icon: 'tree', text: 'Park alanları' },
            { icon: 'building', text: 'Belediye kullanımı' },
            { icon: 'road', text: 'Yaya yolları' },
            { icon: 'warehouse', text: 'Endüstriyel alanlar' },
            { icon: 'home', text: 'Konut bahçeleri' }
        ],
        images: {
            main: 'img/products/product-1.jpg',
            gallery: ['img/products/product-1.jpg', 'img/products/product-1.jpg']
        },
        tags: ['Yaprak Üfleyici', 'Akülü', 'Profesyonel', 'Bahçe'],
        whyChoose: 'Comlink CK-120 yaprak üfleyici, profesyonel kullanıcılar için özel olarak geliştirilmiş yüksek performanslı bir üründür. Fırçasız motor teknolojisi sayesinde uzun ömürlü kullanım, bakım gerektirmeyen yapı ve sessiz çalışma özellikleri sunar.',
        whyChoose2: 'IP66 sertifikalı bataryalar ile her türlü hava koşulunda güvenle kullanabilirsiniz. Ortak batarya platformu sayesinde tüm Comlink ürünleriyle uyumlu çalışır, bu da hem ekonomik hem de pratik bir çözüm sağlar.'
    },
    'ck-200': {
        id: 'ck-200',
        model: 'CK-200/210',
        name: 'CK-200/210 Tek Kesimli Ot Biçme',
        category: 'Ot Biçme',
        categoryId: 'ot-bicme',
        shortDesc: 'Profesyonel kullanım için tasarlanmış tek kesimli ot biçme makinesi. Uzun çalışma süresi ve kolay kullanım. Ergonomik tasarım ile yorulmadan çalışın.',
        description: 'CK-200/210 tek kesimli ot biçme makinesi, profesyonel kullanım için özel olarak tasarlanmıştır. Güçlü fırçasız motor teknolojisi ile geniş alanlarda hızlı ve etkili çalışma sunar. Ergonomik tutamakları ve ayarlanabilir yükseklik sistemi ile rahat kullanım sağlar.',
        description2: 'Comlink\'in ortak batarya platformu sayesinde tek bir yüksek kapasiteli akü ile tüm Comlink ürünlerini kullanabilirsiniz. Uzun çalışma süresi ile geniş alanları tek şarjla biçebilirsiniz.',
        features: [
            'Güçlü fırçasız motor',
            'Tek kesimli etkili biçim sistemi',
            'Ayarlanabilir kesim yüksekliği',
            'Ergonomik tutamaklar',
            'Geniş kesim alanı (42cm)',
            'Hafif ve dengeli tasarım',
            'Ortak batarya platformu',
            'Düşük bakım maliyeti'
        ],
        specs: {
            'Model': 'CK-200/210',
            'Motor Tipi': 'Fırçasız (Brushless) Motor',
            'Kesim Genişliği': '42 cm',
            'Kesim Yüksekliği': '25-75 mm (ayarlanabilir)',
            'Batarya Voltajı': '56V Li-ion',
            'Uyumlu Bataryalar': 'V7-20Ah / V7-30Ah / V8-15Ah',
            'Çalışma Süresi': '45-120 dakika (bataryaya göre)',
            'Şarj Süresi': '90-180 dakika',
            'Ağırlık': '8.5 kg (batarya hariç)',
            'Gürültü Seviyesi': '≤88 dB',
            'Koruma Sınıfı': 'IP66 (Batarya)'
        },
        usageAreas: [
            { icon: 'leaf', text: 'Bahçe bakımı' },
            { icon: 'tree', text: 'Park alanları' },
            { icon: 'building', text: 'Belediye yeşil alanlar' },
            { icon: 'futbol', text: 'Spor sahaları' },
            { icon: 'home', text: 'Konut bahçeleri' },
            { icon: 'industry', text: 'Endüstriyel tesisler' }
        ],
        images: {
            main: 'img/products/product-2.jpg',
            gallery: ['img/products/product-2.jpg', 'img/products/product-2.jpg']
        },
        tags: ['Ot Biçme', 'Akülü', 'Profesyonel', 'Bahçe'],
        whyChoose: 'CK-200/210 ot biçme makinesi, geniş alanlarda profesyonel performans sunar. Tek kesimli sistemi ile düzgün ve temiz kesim sağlar. Fırçasız motor teknolojisi sayesinde uzun ömürlü ve bakım gerektirmeyen kullanım imkanı sunar.',
        whyChoose2: 'IP66 sertifikalı bataryalar ile her türlü hava koşulunda güvenle çalışabilirsiniz. Ergonomik tasarımı sayesinde uzun süreli kullanımlarda bile yorulmadan çalışırsınız.'
    },
    'ck-300': {
        id: 'ck-300',
        model: 'CK-300/320',
        name: 'CK-300/320 Çit/Çay Budama',
        category: 'Çit Budama',
        categoryId: 'cit-budama',
        shortDesc: 'Tek ve çift kenarlı budama seçenekleri. Keskin bıçaklar ile mükemmel kesim performansı. Çitler ve çay bahçeleri için ideal çözüm.',
        description: 'CK-300/320 çit budama makinesi, hem tek kenarlı (CK-300) hem de çift kenarlı (CK-320) modelleri ile farklı ihtiyaçlara cevap verir. Keskin lazer kesim bıçakları ile mükemmel kesim performansı sağlar. Çitler, çay bahçeleri ve yeşil alan bakımı için idealdir.',
        description2: 'Hafif ve dengeli tasarımı sayesinde uzun süreli kullanımlarda bile yorulmadan çalışabilirsiniz. Comlink\'in ortak batarya platformu ile ekonomik kullanım imkanı sunar.',
        features: [
            'Tek/Çift kenarlı kesim seçenekleri',
            'Lazer kesim keskin bıçaklar',
            'Ayarlanabilir kesim hızı',
            'Ergonomik ve dengeli tasarım',
            '60cm bıçak uzunluğu',
            'Güvenlik kilidi sistemi',
            'Titreşim azaltma teknolojisi',
            'Hafif ve kullanışlı'
        ],
        specs: {
            'Model': 'CK-300/320',
            'Motor Tipi': 'Fırçasız (Brushless) Motor',
            'Bıçak Uzunluğu': '60 cm',
            'Kesim Tipi': 'Tek kenarlı (300) / Çift kenarlı (320)',
            'Kesim Aralığı': '22 mm',
            'Batarya Voltajı': '56V Li-ion',
            'Uyumlu Bataryalar': 'V6-5Ah / V7-20Ah / V8-15Ah',
            'Çalışma Süresi': '50-100 dakika (bataryaya göre)',
            'Şarj Süresi': '60-180 dakika',
            'Ağırlık': '4.2 kg (batarya hariç)',
            'Gürültü Seviyesi': '≤84 dB',
            'Koruma Sınıfı': 'IP66 (Batarya)'
        },
        usageAreas: [
            { icon: 'leaf', text: 'Çit budama' },
            { icon: 'tree', text: 'Çay bahçeleri' },
            { icon: 'home', text: 'Konut bahçeleri' },
            { icon: 'building', text: 'Belediye peyzaj' },
            { icon: 'industry', text: 'Tesis yeşil alanlar' },
            { icon: 'park', text: 'Park ve bahçeler' }
        ],
        images: {
            main: 'img/products/product-3.jpg',
            gallery: ['img/products/product-3.jpg', 'img/products/product-3.jpg']
        },
        tags: ['Çit Budama', 'Akülü', 'Profesyonel', 'Bahçe'],
        whyChoose: 'CK-300/320 serisi, profesyonel çit budama işleri için en ideal çözümdür. Keskin bıçakları ve güçlü motoruyla kalın dalları bile kolayca keser. Titreşim azaltma sistemi sayesinde rahat kullanım sağlar.',
        whyChoose2: 'Hem tek kenarlı hem de çift kenarlı model seçenekleri ile farklı ihtiyaçlara cevap verir. IP66 koruma sınıfı ile her hava koşulunda güvenle kullanılabilir.'
    },
    'ck-400': {
        id: 'ck-400',
        model: 'CK-400',
        name: 'CK-400 El Tipi Zincirli Testere',
        category: 'Zincirli Testere',
        categoryId: 'testere',
        shortDesc: 'Güçlü kesim kapasitesi ile ağaç kesimi ve budama işlerinde profesyonel performans. Güvenli kullanım özellikleri ve otomatik zincir yağlama sistemi.',
        description: 'CK-400 el tipi zincirli testere, ağaç kesimi ve budama işlerinde profesyonel performans sunar. Güçlü fırçasız motoruyla kalın ağaçları bile kolayca kesebilirsiniz. Otomatik zincir yağlama sistemi ile bakım ihtiyacını minimuma indirir.',
        description2: 'Güvenlik özellikleri ile korumalı kullanım sağlar. Zincir fren sistemi ve geri tepme koruma özellikleri ile güvenli çalışma imkanı sunar. Comlink batarya platformuyla ekonomik kullanım.',
        features: [
            'Güçlü fırçasız motor',
            'Otomatik zincir yağlama sistemi',
            'Zincir fren sistemi',
            'Geri tepme koruma',
            '35cm kılıç uzunluğu',
            'Hızlı zincir germe sistemi',
            'Ergonomik tutamaklar',
            'Güvenlik kilidi'
        ],
        specs: {
            'Model': 'CK-400',
            'Motor Tipi': 'Fırçasız (Brushless) Motor',
            'Kılıç Uzunluğu': '35 cm (14")',
            'Zincir Hızı': '15 m/s',
            'Zincir Tipi': 'Oregon 91VXL',
            'Batarya Voltajı': '56V Li-ion',
            'Uyumlu Bataryalar': 'V7-20Ah / V7-30Ah / V8-15Ah',
            'Çalışma Süresi': '30-60 dakika (bataryaya göre)',
            'Şarj Süresi': '90-180 dakika',
            'Ağırlık': '4.8 kg (batarya hariç)',
            'Yağ Tank Kapasitesi': '200 ml',
            'Koruma Sınıfı': 'IP66 (Batarya)'
        },
        usageAreas: [
            { icon: 'tree', text: 'Ağaç kesimi' },
            { icon: 'cut', text: 'Dal budama' },
            { icon: 'wood', text: 'Odun hazırlama' },
            { icon: 'forest', text: 'Orman bakımı' },
            { icon: 'home', text: 'Bahçe bakımı' },
            { icon: 'building', text: 'Belediye kullanımı' }
        ],
        images: {
            main: 'img/products/product-4.jpg',
            gallery: ['img/products/product-4.jpg', 'img/products/product-4.jpg']
        },
        tags: ['Zincirli Testere', 'Akülü', 'Profesyonel', 'Ağaç Kesimi'],
        whyChoose: 'CK-400 zincirli testere, profesyonel ağaç kesimi ve budama işleri için idealdir. Otomatik yağlama sistemi sayesinde bakım gerektirmez. Güvenlik özellikleri ile korumalı kullanım sağlar.',
        whyChoose2: 'Benzinli testerelere göre çok daha sessiz ve çevre dostudur. Bakım maliyeti düşüktür. IP66 sertifikalı bataryalar ile her hava koşulunda güvenle kullanılabilir.'
    },
    'ck-412': {
        id: 'ck-412',
        model: 'CK-412',
        name: 'CK-412 Yüksek Dal Budama',
        category: 'Dal Budama',
        categoryId: 'dal-budama',
        shortDesc: 'Teleskopik sap ile yüksek dallara kolayca ulaşın. Güvenli ve etkili budama için özel tasarım. Meyve bahçeleri ve park alanları için mükemmel.',
        description: 'CK-412 yüksek dal budama makinesi, teleskopik sap sistemi ile 3 metreye kadar yükseklikteki dallara güvenle ulaşmanızı sağlar. Meyve bahçeleri, park alanları ve yüksek ağaçların budanması için idealdir.',
        description2: 'Hafif ve dengeli tasarımı sayesinde uzun süreli kullanımlarda bile yorulmadan çalışabilirsiniz. Otomatik zincir yağlama sistemi ve güvenlik özellikleri ile profesyonel performans sunar.',
        features: [
            'Teleskopik sap (1.8-3m)',
            'Otomatik zincir yağlama',
            'Ayarlanabilir baş açısı',
            'Hafif ve dengeli',
            '25cm zincir uzunluğu',
            'Güvenlik kilidi sistemi',
            'Ergonomik tutma sapı',
            'Titreşim azaltma'
        ],
        specs: {
            'Model': 'CK-412',
            'Motor Tipi': 'Fırçasız (Brushless) Motor',
            'Kılıç Uzunluğu': '25 cm (10")',
            'Teleskopik Uzunluk': '1.8 - 3.0 metre',
            'Baş Açısı': '0-30° ayarlanabilir',
            'Batarya Voltajı': '56V Li-ion',
            'Uyumlu Bataryalar': 'V7-20Ah / V7-30Ah / V8-15Ah',
            'Çalışma Süresi': '40-80 dakika (bataryaya göre)',
            'Şarj Süresi': '90-180 dakika',
            'Ağırlık': '5.2 kg (batarya hariç)',
            'Yağ Tank Kapasitesi': '150 ml',
            'Koruma Sınıfı': 'IP66 (Batarya)'
        },
        usageAreas: [
            { icon: 'tree', text: 'Yüksek dal budama' },
            { icon: 'apple-alt', text: 'Meyve bahçeleri' },
            { icon: 'leaf', text: 'Park alanları' },
            { icon: 'building', text: 'Belediye bakımı' },
            { icon: 'home', text: 'Konut bahçeleri' },
            { icon: 'forest', text: 'Orman bakımı' }
        ],
        images: {
            main: 'img/products/product-5.jpg',
            gallery: ['img/products/product-5.jpg', 'img/products/product-5.jpg']
        },
        tags: ['Dal Budama', 'Akülü', 'Profesyonel', 'Teleskopik'],
        whyChoose: 'CK-412 yüksek dal budama makinesi, merdiven kullanmadan güvenli budama imkanı sunar. Teleskopik sistemi ile 3 metreye kadar yüksekliğe ulaşabilirsiniz. Meyve bahçelerinde hasat öncesi budama için idealdir.',
        whyChoose2: 'Hafif yapısı ve dengeli tasarımı sayesinde uzun süreli kullanımlarda bile yorulmadan çalışabilirsiniz. Otomatik yağlama sistemi sayesinde bakım gerektirmez.'
    },
    'ck-500': {
        id: 'ck-500',
        model: 'CK-500',
        name: 'CK-500 Toprak Burgu/Matkap',
        category: 'Toprak Burgusu',
        categoryId: 'toprak-burgu',
        shortDesc: 'Direk dikimi, ağaç dikimi ve tarım işleri için güçlü toprak burgusu. Farklı çap seçenekleri ile her türlü işe uygun. Yüksek tork gücü.',
        description: 'CK-500 toprak burgusu, direk dikimi, ağaç dikimi, çit kurulumu ve tarımsal işler için özel olarak tasarlanmıştır. Güçlü fırçasız motoru ve yüksek tork kapasitesi ile sert topraklarda bile etkili çalışma sağlar.',
        description2: 'Farklı çap seçenekleri (10-20cm) ile her türlü işe uygun kullanım imkanı sunar. Ergonomik tutamakları ve titreşim azaltma sistemi ile rahat çalışma sağlar.',
        features: [
            'Güçlü yüksek tork motor',
            'Farklı çap seçenekleri (10-20cm)',
            'Çift tutamak ergonomik tasarım',
            'Titreşim azaltma sistemi',
            'Güvenlik debriyaj',
            'Hızlı burgu değiştirme',
            'Sert toprak performansı',
            'Profesyonel kullanım'
        ],
        specs: {
            'Model': 'CK-500',
            'Motor Tipi': 'Fırçasız (Brushless) Motor',
            'Tork Gücü': '60 Nm',
            'Devir': '0-180 rpm',
            'Burgu Çapı': '10-20 cm (değiştirilebilir)',
            'Burgu Derinliği': '60 cm',
            'Batarya Voltajı': '56V Li-ion',
            'Uyumlu Bataryalar': 'V7-20Ah / V7-30Ah / V8-15Ah',
            'Çalışma Süresi': '25-50 delik (bataryaya göre)',
            'Şarj Süresi': '90-180 dakika',
            'Ağırlık': '6.5 kg (burgu ve batarya hariç)',
            'Koruma Sınıfı': 'IP66 (Batarya)'
        },
        usageAreas: [
            { icon: 'tree', text: 'Ağaç dikimi' },
            { icon: 'industry', text: 'Direk dikimi' },
            { icon: 'fence', text: 'Çit kurulumu' },
            { icon: 'seedling', text: 'Tarım işleri' },
            { icon: 'building', text: 'İnşaat hazırlık' },
            { icon: 'tools', text: 'Peyzaj düzenleme' }
        ],
        images: {
            main: 'img/products/product-6.jpg',
            gallery: ['img/products/product-6.jpg', 'img/products/product-6.jpg']
        },
        tags: ['Toprak Burgusu', 'Akülü', 'Profesyonel', 'Tarım'],
        whyChoose: 'CK-500 toprak burgusu, profesyonel kullanıcılar için vazgeçilmez bir araçtır. Yüksek tork gücü ile sert topraklarda bile etkili çalışır. Güvenlik debriyaj sistemi ile korumalı kullanım sağlar.',
        whyChoose2: 'Benzinli burgulara göre çok daha sessiz ve çevre dostudur. Bakım gerektirmez. Farklı çap burgu seçenekleri ile her türlü işe uygun kullanım imkanı sunar.'
    }
};

// Ürün ID'sine göre ürün bilgisini getiren fonksiyon
function getProduct(productId) {
    return productsData[productId] || null;
}

// Tüm ürünleri getiren fonksiyon
function getAllProducts() {
    return Object.values(productsData);
}

// Kategoriye göre ürünleri getiren fonksiyon
function getProductsByCategory(categoryId) {
    return Object.values(productsData).filter(product => product.categoryId === categoryId);
}
