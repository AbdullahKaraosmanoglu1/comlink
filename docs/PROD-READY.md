# 🚀 PRODUCTION-READY CHECKLIST

Bu dokümantasyon, **geliştirici** için hazırlanmıştır. Projeyi müşteriye teslim etmeden önce ve production ortamına deploy etmeden önce yapılması gerekenleri içerir.

---

## 📋 TESLİMAT ÖNCESİ CHECKLIST

### ✅ AŞAMA 1: DOSYA HAZIRLAMA

- [ ] **1.1** `.htaccess.production` dosyasını `.htaccess` olarak kopyala
  ```bash
  # Komut satırında:
  copy .htaccess.production .htaccess

  # Veya manuel olarak:
  # .htaccess.production dosyasını kopyala ve .htaccess olarak kaydet
  ```

- [ ] **1.2** `web.config.production` dosyasını `web.config` olarak kopyala
  ```bash
  copy web.config.production web.config
  ```

- [ ] **1.3** Tüm `.production` dosyalarını teslim paketinde bırak (yedek olarak)

---

### ✅ AŞAMA 2: KOD İNCELEME

- [ ] **2.1** Console.log satırlarını temizle
  ```javascript
  // Tüm console.log(), console.error() vb. kaldırın
  // VEYA production modunda çalışmayacak şekilde ayarlayın
  ```

- [ ] **2.2** Test verilerini temizle
  - `blogs.js` içindeki placeholder metinler var mı?
  - `products.js` içindeki test ürünler var mı?
  - `products.js` içindeki tüm ürünlerde `visualElements` objesi eklenmiş mi?
  - Demo görseller yerine gerçek görseller yüklü mü?

- [ ] **2.3** Dummy linkler ve placeholder'ları kontrol et
  ```html
  <!-- Şunlar olmamalı: -->
  <a href="#">Link</a>
  <a href="javascript:void(0)">Link</a>
  <img src="placeholder.avif" alt="placeholder">
  ```

- [ ] **2.4** Meta tagları güncelle
  - `index.html`, `blog.html`, `blog-details.html`, `urunler.html`, `urun-detay.html` vb. tüm sayfalarda:
  - Title tag'leri doğru mu?
  - Description tag'leri doğru mu?
  - Open Graph meta tag'leri doğru mu?
  - Domain adı placeholder değil gerçek mi?

---

### ✅ AŞAMA 3: INTERNAL LİNKLER

- [ ] **3.1** Tüm internal linkleri kontrol et
  ```html
  <!-- DOĞRU: -->
  <a href="hakkimizda.html">Hakkımızda</a>
  <a href="blog-details.html?id=cevre-donusum">Blog Detay</a>
  <a href="urun-detay.html?id=ck-120">Ürün Detay</a>
  <a href="urunler.html?kategori=cim-bicme">Kategori</a>

  <!-- Production'da .htaccess otomatik clean URL'e çevirecek -->
  <!-- /blog/cevre-donusum, /urun/ck-120, /kategori/cim-bicme -->
  ```

- [ ] **3.2** Absolute URL'leri relative URL'e çevir
  ```html
  <!-- YANLIŞ: -->
  <a href="https://www.comlink.com.tr/hakkimizda.html">Hakkımızda</a>

  <!-- DOĞRU: -->
  <a href="hakkimizda.html">Hakkımızda</a>
  ```

- [ ] **3.3** Görsel yollarını kontrol et
  ```html
  <!-- DOĞRU: -->
  <img src="img/logo/s_logo.avif" alt="Comlink Logo">

  <!-- YANLIŞ: -->
  <img src="/img/logo/s_logo.avif" alt="...">  <!-- Başta / olmamalı -->
  ```

---

### ✅ AŞAMA 4: GÖRSEL OPTİMİZASYONU

- [ ] **4.2** Kullanılmayan görselleri sil
  ```bash
  # Kullanılmayan img/ altındaki dosyalar var mı kontrol et
  ```

- [ ] **4.3** Alt tag'lerini kontrol et
  ```html
  <!-- Tüm görsellerde alt tag olmalı -->
  <img src="img/product.avif" alt="CK-210 Profesyonel Ot Biçme Makinesi">
  ```

- [ ] **4.4** Favicon ve icon'ları kontrol et
  - `img/favicon.avif` yüklü mü?

---
### ✅ AŞAMA 7: SEO VE ANALİTİK

- [ ] **7.1** Google Analytics kodu eklendi mi?
  ```html
  <!-- Google Analytics 4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  ```

- [ ] **7.2** Google Search Console için site doğrulama kodu eklendi mi?
  ```html
  <meta name="google-site-verification" content="XXXXXX" />
  ```

- [ ] **7.3** robots.txt dosyası oluşturuldu mu?
  ```
  # Proje root'unda robots.txt olmalı
  User-agent: *
  Allow: /
  Sitemap: https://www.comlink.com.tr/sitemap.xml
  ```

- [ ] **7.4** sitemap.xml oluşturuldu mu?
  - `sitemap.xml` dosyası var mı?
  - Tüm sayfalar sitemap'te listelenmiş mi?

---

### ✅ AŞAMA 8: PERFORMANS

- [ ] **8.1** .htaccess performans ayarları aktif mi?
  - Gzip compression aktif
  - Browser caching aktif

- [ ] **8.2** Lazy loading çalışıyor mu?
  ```html
  <!-- Blog görselleri lazy load ile yükleniyor mu? -->
  <img class="lazy-load" data-src="img/blog/image.avif" alt="...">
  ```

- [ ] **8.3** PageSpeed Insights testi yapıldı mı?
  - https://pagespeed.web.dev/
  - Skor: 80+ (Yeşil) olmalı

---

### ✅ AŞAMA 11: GÜVENLİK

- [ ] **11.1** .htaccess güvenlik ayarları aktif mi?
  - Directory listing kapalı mı?
  - Tehlikeli dosya uzantıları engellendi mi?

- [ ] **11.2** Gizli dosyalar korunuyor mu?
  ```apache
  # .htaccess, .env, .git gibi dosyalar erişime kapalı olmalı
  ```

- [ ] **11.3** SQL injection riski var mı?
  - Form input'ları sanitize ediliyor mu?
  - Backend güvenli mi?

---


## 🎁 TESLİMAT PAKETİ HAZIRLAMA

### Adım 1: Gereksiz Dosyaları Temizle

```bash
# Silmeden önce yedek alın!

# Node modules (varsa)
rm -rf node_modules/

# Git dosyaları (müşteriye gerek yok)
rm -rf .git/
rm .gitignore

# Geliştirici notları
rm TODO.md
rm NOTES.md

# Test dosyaları
rm test.html
```

### Adım 2: Son Dosya Yapısını Kontrol Et

```
comlink/
├── .htaccess                    ✅ Production için hazır
├── .htaccess.production         ✅ Yedek olarak
├── web.config                   ✅ Production için hazır
├── web.config.production        ✅ Yedek olarak
├── robots.txt                   ✅ SEO için
├── sitemap.xml                  ✅ SEO için
├── HOSTING-KURULUM.md           ✅ Müşteri rehberi
├── PROD-READY.md                ✅ Bu dosya
├── index.html                   ✅
├── blog.html                    ✅
├── blog-details.html            ✅
├── urunler.html                 ✅
├── urun-detay.html              ✅
├── hakkimizda.html              ✅
├── iletisim.html                ✅
├── css/
│   ├── blog-visuals.css         ✅ Blog + Ürün görsel elementler
│   └── ...                      ✅ Diğer CSS dosyaları
├── js/
│   ├── url-helper.js            ✅ Dual-mode URL sistemi
│   ├── blogs.js                 ✅ Blog verileri + visualElements
│   ├── blog-catalog.js          ✅ Blog listeleme + pagination
│   ├── blog-visual-renderer.js  ✅ Blog görsel renderer
│   ├── products.js              ✅ Ürün verileri + visualElements
│   ├── product-visual-renderer.js ✅ Ürün görsel renderer
│   └── ...                      ✅ Diğer JS dosyaları
├── img/                         ✅ Optimize edilmiş görseller
└── kataloglar/                  ✅ PDF kataloğu
```

### Adım 3: ZIP Paketi Oluştur

```bash
# Komut satırında:
zip -r comlink-website-v1.0.zip comlink/
```

### Adım 4: Teslim Notu Hazırla

`TESLIM-NOTU.txt` dosyası oluştur:

```
COMLINK WEBSİTE TESLİMAT PAKETİ
================================

Versiyon: 1.0
Tarih: [TARİH]
Geliştirici: [ADINIZ]

PAKET İÇERİĞİ:
- Tüm HTML, CSS, JavaScript dosyaları
- Blog sistemi (dinamik listeleme, pagination, görselleştirme)
- Ürün sistemi (dinamik listeleme, kategori filtreleme, görselleştirme)
- Dual-mode URL sistemi (dev ve production uyumlu)
- Optimize edilmiş görseller
- SEO-friendly URL yapılandırması (.htaccess ve web.config)
- Hosting kurulum dokümantasyonu (HOSTING-KURULUM.md)

ÖZELLİKLER:
- Blog ve Ürün sayfalarında zengin görsel elementler
- İstatistik kartları, performans metrikleri, karşılaştırma tabloları
- Clean URL'ler: /blog/slug-name, /urun/product-id, /kategori/category-id
- Responsive tasarım (mobil, tablet, desktop uyumlu)
- AOS animasyonlar, lazy loading

KURULUM:
1. HOSTING-KURULUM.md dosyasını okuyun
2. Dosyaları hosting sunucusuna yükleyin
3. .htaccess.production dosyasını .htaccess olarak yeniden adlandırın
4. SSL sertifikasını kurun
5. URL testlerini yapın

İLETİŞİM:
Email: [EMAIL]
Telefon: [TELEFON]

İyi çalışmalar!
```

---

## 🧪 SON TEST (PRODUCTION ORTAMINDA)

Hosting'e yüklendikten sonra:

### Test Adımları:

1. **Ana Sayfa Test**
   ```
   https://www.comlink.com.tr/
   ✅ Sayfa açılıyor
   ✅ Görseller yükleniyor
   ✅ Slider çalışıyor
   ```

2. **Clean URL Test**
   ```
   https://www.comlink.com.tr/hakkimizda
   ✅ .html görünmüyor
   ✅ 200 OK response
   ```

3. **Blog Test**
   ```
   https://www.comlink.com.tr/blog/cevre-donusum
   ✅ Blog detay açılıyor
   ✅ Görsel öğeler render ediliyor
   ✅ Animasyonlar çalışıyor
   ```

4. **Ürün Test**
   ```
   https://www.comlink.com.tr/urun/ck-120
   ✅ Ürün detay açılıyor
   ✅ İstatistik kartları gösteriliyor
   ✅ Performans metrikleri çalışıyor
   ✅ Karşılaştırma tabloları gösteriliyor
   ```

5. **Kategori Test**
   ```
   https://www.comlink.com.tr/kategori/cim-bicme
   ✅ Kategori filtreleme çalışıyor
   ✅ Ürünler listeleniyoruyor
   ```

6. **Form Test**
   ```
   ✅ İletişim formu gönderiliyor
   ✅ Email alınıyor
   ✅ Hata mesajları gösteriliyor
   ```

7. **SSL Test**
   ```
   https://www.ssllabs.com/ssltest/
   ✅ A veya A+ rating
   ```

8. **PageSpeed Test**
   ```
   https://pagespeed.web.dev/
   ✅ Desktop: 90+
   ✅ Mobile: 80+
   ```

9. **Mobil Test**
   ```
   ✅ Responsive tasarım çalışıyor
   ✅ Touch event'ler çalışıyor
   ✅ Menü açılıyor
   ```

---

## ✅ TESLİMAT ONAY FORMU

Aşağıdaki tüm maddeleri tamamladıysanız, proje teslim edilmeye hazırdır:

- [ ] Tüm dosyalar hazır ve test edildi
- [ ] .htaccess ve web.config production moduna alındı
- [ ] Dokümantasyon tamamlandı
- [ ] ZIP paketi oluşturuldu
- [ ] Test listesi tamamlandı
- [ ] Müşteri ile ön görüşme yapıldı
- [ ] Hosting bilgileri alındı

**Teslim Tarihi:** ___________

**Geliştirici İmza:** ___________

---

**🎉 Tebrikler! Proje production'a hazır!**

İyi çalışmalar! 🚀
