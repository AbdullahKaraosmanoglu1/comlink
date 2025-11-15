# 🚀 Comlink.com.tr - NATRO Hosting Kurulum Rehberi

## 📋 İçindekiler
1. [Gerekli Dosyalar](#gerekli-dosyalar)
2. [Natro'ya Kayıt ve Hazırlık](#natroya-kayıt-ve-hazırlık)
3. [Dosya Yükleme Adımları](#dosya-yükleme-adımları)
4. [Domain Ayarları](#domain-ayarları)
5. [SSL Sertifikası Kurulumu](#ssl-sertifikası-kurulumu)
6. [SEO ve Google Ayarları](#seo-ve-google-ayarları)
7. [Test ve Kontrol](#test-ve-kontrol)
8. [Sorun Giderme](#sorun-giderme)

---

## ✅ Gerekli Dosyalar

Proje içinde hosting için hazır olan dosyalar:

```
comlink/
├── .htaccess                    ✅ (YENİ - Apache yapılandırma)
├── robots.txt                   ✅ (SEO için)
├── sitemap.xml                  ✅ (SEO için - Tarihler güncellendi)
├── 404.html                     ✅ (Hata sayfası)
├── index.html                   ✅ (Ana sayfa)
├── blog.html                    ✅
├── urunler.html                 ✅
├── iletisim.html                ✅ (Web3Forms entegreli)
├── tesekkurler.html             ✅
├── hakkimizda.html              ✅
├── ... (diğer HTML sayfaları)
├── css/                         ✅
├── js/                          ✅
├── img/                         ✅
├── images/                      ✅
├── fonts/                       ✅
└── kataloglar/                  ✅
```

---

## 🌐 Natro'ya Kayıt ve Hazırlık

### 1. Natro Hesabı Oluşturun
- **Website:** https://www.natro.com
- Ücretsiz hosting paketi seçin
- E-posta doğrulamasını yapın

### 2. cPanel Erişimi
- Natro panel → Hosting Yönetimi
- cPanel giriş bilgilerinizi alın
- cPanel'e giriş yapın

### 3. Önemli Bilgiler
```
FTP Host: ftp.comlink.com.tr (domain aktif olduktan sonra)
FTP Port: 21
FTP Kullanıcı Adı: (Natro tarafından verilecek)
FTP Şifre: (Natro tarafından verilecek)
```

---

## 📤 Dosya Yükleme Adımları

### Yöntem 1: cPanel File Manager (ÖNERİLEN)

1. **cPanel'e Giriş Yapın**
   - Natro panel → cPanel'i Aç

2. **public_html Dizinine Gidin**
   - File Manager'ı açın
   - `public_html` klasörüne çift tıklayın
   - **ÖNEMLİ:** Varsayılan dosyaları silin (default.html, index.html vb.)

3. **Dosyaları Yükleyin**

   **Option A: ZIP ile Yükleme (HIZLI)**
   ```
   a. Projenizi ZIP'leyin (comlink.zip)
   b. File Manager → Upload
   c. comlink.zip dosyasını yükleyin
   d. ZIP dosyasına sağ tıklayın → Extract
   e. public_html içine çıkartın
   f. ZIP dosyasını silin
   ```

   **Option B: Manuel Yükleme**
   ```
   a. File Manager → Upload
   b. Tüm dosya ve klasörleri seçin
   c. Yükleme tamamlanana kadar bekleyin (196MB)
   ```

4. **Dosya Yapısını Kontrol Edin**
   ```
   public_html/
   ├── .htaccess
   ├── index.html
   ├── 404.html
   ├── robots.txt
   ├── sitemap.xml
   ├── css/
   ├── js/
   ├── img/
   └── ... (diğer dosyalar)
   ```

### Yöntem 2: FTP ile Yükleme

1. **FileZilla İndirin**
   - https://filezilla-project.org/download.php

2. **Bağlantı Ayarları**
   ```
   Host: ftp.comlink.com.tr
   Username: (Natro'dan alın)
   Password: (Natro'dan alın)
   Port: 21
   ```

3. **Dosyaları Yükleyin**
   - Sol panel: Yerel proje klasörü
   - Sağ panel: public_html
   - Tüm dosyaları sürükle-bırak yapın

---

## 🌍 Domain Ayarları

### 1. Domain Name (Alan Adı) Satın Alın
- **Önerilen Sağlayıcılar:**
  - Natro (entegre)
  - GoDaddy
  - Hostinger
  - TurkticareNet

### 2. Domain'i Natro'ya Bağlayın

**Seçenek A: Natro'dan Domain Aldıysanız**
- Otomatik olarak bağlanır
- DNS ayarları otomatik yapılır

**Seçenek B: Başka Sağlayıcıdan Domain Aldıysanız**

Domain sağlayıcınızın DNS ayarlarına gidin ve Nameserver'ları değiştirin:

```
Nameserver 1: ns1.natro.com
Nameserver 2: ns2.natro.com
```

**DNS Yayılma Süresi:** 24-48 saat

### 3. Domain'i cPanel'de Ekleyin
```
cPanel → Domains → Addon Domains
Domain Name: comlink.com.tr
Document Root: /public_html
```

---

## 🔒 SSL Sertifikası Kurulumu

### Ücretsiz Let's Encrypt SSL (ÖNERİLEN)

1. **cPanel → SSL/TLS Status**
2. **"Run AutoSSL"** butonuna tıklayın
3. Domain seçin: `comlink.com.tr` ve `www.comlink.com.tr`
4. Sertifika otomatik kurulacak (5-10 dakika)

### SSL Aktif Olduktan Sonra

1. **.htaccess Dosyasını Düzenleyin**

   File Manager → .htaccess → Edit

   **Aşağıdaki satırların başındaki # işaretlerini kaldırın:**

   ```apache
   # HTTPS yönlendirmesi (Natro SSL aktif olduktan sonra)
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

   **Şuna dönüştürün:**
   ```apache
   # HTTPS yönlendirmesi (Natro SSL aktif olduktan sonra)
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

2. **Test Edin**
   ```
   http://comlink.com.tr → https://comlink.com.tr (otomatik yönlendirilmeli)
   ```

---

## 🔍 SEO ve Google Ayarları

### 1. Google Search Console

1. **Kayıt Olun**
   - https://search.google.com/search-console

2. **Site Ekleyin**
   - URL prefix: `https://www.comlink.com.tr`

3. **Sahipliği Doğrulayın**
   - **Yöntem:** HTML dosyası yükleme
   - Google'ın verdiği dosyayı `public_html/` içine yükleyin
   - Doğrulama butonuna tıklayın

4. **Sitemap Gönderin**
   ```
   Sitemap URL: https://www.comlink.com.tr/sitemap.xml
   ```

### 2. Google Analytics (İsteğe Bağlı)

1. **Google Analytics Hesabı Oluşturun**
   - https://analytics.google.com

2. **Tracking ID Alın**
   - Örnek: `G-XXXXXXXXXX`

3. **Her HTML Sayfasına Ekleyin**

   `<head>` etiketinin içine, diğer script'lerden ÖNCE:

   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### 3. Google My Business (İsteğe Bağlı)
- Şirket konumunu Google Maps'e ekleyin
- Müşteri yorumları toplayın

---

## ✅ Test ve Kontrol

### 1. Site Çalışıyor mu?

Tarayıcıda test edin:
```
✓ https://comlink.com.tr/
✓ https://comlink.com.tr/blog.html
✓ https://comlink.com.tr/urunler.html
✓ https://comlink.com.tr/iletisim.html
✓ https://comlink.com.tr/404 (404 sayfası görünmeli)
```

### 2. İletişim Formu Test

1. **İletişim Sayfasına Gidin**
   - https://comlink.com.tr/iletisim.html

2. **Test Mesajı Gönderin**
   - Form doldurun ve gönderin
   - Web3Forms e-posta adresinize mesaj gönderecek
   - `tesekkurler.html` sayfasına yönlendirilmelisiniz

3. **E-posta Kontrolü**
   - Web3Forms dashboard: https://web3forms.com/
   - Access Key: `daeaa48c-0652-409d-aef7-6e55d2555c56`

### 3. SEO Testi

**Google PageSpeed Insights:**
- https://pagespeed.web.dev/
- URL girin: `https://comlink.com.tr`
- Mobile ve Desktop skorlarını kontrol edin

**SEO Checker:**
- https://www.seobility.net/en/seocheck/
- Site analizini yapın

### 4. SSL/HTTPS Testi

- https://www.ssllabs.com/ssltest/
- Grade: A+ olmalı

### 5. Mobile Responsive Test

- https://search.google.com/test/mobile-friendly
- Tüm sayfalar mobile-friendly olmalı

---

## 🐛 Sorun Giderme

### Problem 1: Sayfa 404 Hatası Veriyor

**Çözüm:**
```
1. .htaccess dosyasının public_html içinde olduğunu kontrol edin
2. cPanel → File Manager → .htaccess
3. Permissions (İzinler): 644 olmalı
4. Sağ tıklayın → Change Permissions → 644
```

### Problem 2: CSS/JS Dosyaları Yüklenmiyor

**Çözüm:**
```
1. Tarayıcı Console'u açın (F12)
2. Hataları kontrol edin
3. Dosya yollarını kontrol edin (case-sensitive)
4. .htaccess içinde MIME types düzgün ayarlanmış mı kontrol edin
```

### Problem 3: İletişim Formu Çalışmıyor

**Çözüm:**
```
1. Web3Forms Access Key'i kontrol edin (iletisim.html:193)
2. HTTPS aktif mi kontrol edin
3. Tarayıcı Console'da JavaScript hatalarını kontrol edin
4. Web3Forms dashboard'da mesajları kontrol edin
```

### Problem 4: Site Yavaş Yükleniyor

**Çözüm:**
```
1. .htaccess dosyasında GZIP compression aktif mi?
2. Browser caching ayarları doğru mu?
3. Görsel dosyaları optimize ettiniz mi?
4. PERFORMANCE_REPORT.md dosyasındaki önerileri uygulayın
```

### Problem 5: HTTPS Yönlendirmesi Çalışmıyor

**Çözüm:**
```
1. SSL sertifikası kurulu mu? (cPanel → SSL/TLS Status)
2. .htaccess içinde HTTPS redirect kodu aktif mi?
3. Browser cache'i temizleyin (Ctrl + Shift + Delete)
4. Incognito modda test edin
```

### Problem 6: www ile www olmadan farklı görünüyor

**Çözüm:**
```
.htaccess dosyasına ekleyin:

# www'siz yönlendirme
RewriteCond %{HTTP_HOST} ^www\.comlink\.com\.tr [NC]
RewriteRule ^(.*)$ https://comlink.com.tr/$1 [L,R=301]
```

---

## 📞 Destek ve Yardım

### Natro Destek
- **Website:** https://www.natro.com/destek
- **E-posta:** destek@natro.com
- **Telefon:** (Natro web sitesinde mevcut)

### Web3Forms Destek
- **Website:** https://web3forms.com/
- **Documentation:** https://docs.web3forms.com/

### Comlink Proje Notları
- **Performance Report:** `PERFORMANCE_REPORT.md`
- **Git Repository:** Mevcut commit geçmişini inceleyin

---

## 📝 Yapılacaklar (Yayından Sonra)

- [ ] Google Search Console'a site ekle
- [ ] Google Analytics ekle (isteğe bağlı)
- [ ] PERFORMANCE_REPORT.md'deki optimizasyonları uygula
- [ ] İlk 1 hafta içinde düzenli olarak site hızını test et
- [ ] İletişim formu e-postalarını kontrol et
- [ ] Haftalık sitemap güncellemesi yapılandır (otomatik)
- [ ] Google My Business profili oluştur
- [ ] Sosyal medya linkleri ekle (footer'da var)
- [ ] Favicon.ico'yu kök dizine kopyala

---

## ✨ Başarılar!

Projeniz hosting için tamamen hazır. Yukarıdaki adımları takip ederek sitenizi kolayca yayınlayabilirsiniz.

**Son Kontrol Listesi:**
- ✅ .htaccess oluşturuldu ve yapılandırıldı
- ✅ sitemap.xml tarihleri güncellendi (2025-11-15)
- ✅ robots.txt hazır
- ✅ 404.html modern ve işlevsel
- ✅ SSL için hazırlık yapıldı
- ✅ SEO meta etiketleri mevcut
- ✅ İletişim formu entegre (Web3Forms)
- ✅ Performans optimizasyonları yapıldı (.htaccess)

**İyi şanslar! 🚀**
