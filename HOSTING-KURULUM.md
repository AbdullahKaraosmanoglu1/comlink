# 🚀 COMLINK WEBSİTE HOSTİNG KURULUM REHBERİ

Bu dokümantasyon, Comlink web sitesinin hosting sunucusuna yüklenmesi ve yapılandırılması için hazırlanmıştır.

---

## 📋 İÇİNDEKİLER

1. [Ön Hazırlık](#ön-hazırlık)
2. [Dosyaların Yüklenmesi](#dosyaların-yüklenmesi)
3. [Sunucu Tipine Göre Kurulum](#sunucu-tipine-göre-kurulum)
4. [SSL Sertifikası Kurulumu](#ssl-sertifikası-kurulumu)
5. [Domain Ayarları](#domain-ayarları)
6. [Test ve Doğrulama](#test-ve-doğrulama)
7. [Sorun Giderme](#sorun-giderme)

---

## 📦 ÖN HAZIRLIK

### Gerekli Bilgiler

Hosting kurulumu öncesi şu bilgileri hazır bulundurun:

- ✅ Hosting sağlayıcı bilgileri (cPanel/Plesk kullanıcı adı ve şifre)
- ✅ FTP/SFTP erişim bilgileri
- ✅ Domain adı (örn: www.comlink.com.tr)
- ✅ Hosting panel erişim adresi
- ✅ Sunucu tipi (Apache, IIS, Nginx)

### Hosting Minimum Gereksinimleri

- **Web Sunucu:** Apache 2.4+ veya IIS 8.0+ veya Nginx 1.18+
- **PHP:** Gerekmez (statik site)
- **Disk Alanı:** Minimum 100 MB
- **SSL Sertifikası:** Önerilir (ücretsiz Let's Encrypt kullanılabilir)

---

## 📤 DOSYALARIN YÜKLENMESİ

### Adım 1: Dosyaları Hazırlayın

Teslim edilen ZIP dosyasını açın. İçinde şu dosya ve klasörler olacak:

```
comlink/
├── index.html
├── blog.html
├── blog-details.html
├── urunler.html
├── urun-detay.html            ← Ürün detay sayfası
├── hakkimizda.html
├── iletisim.html
├── css/
├── js/
├── img/
├── kataloglar/
├── .htaccess.production       ← Önemli!
├── web.config.production      ← IIS için
├── HOSTING-KURULUM.md         ← Bu dosya
└── PROD-READY.md              ← Production checklist
```

### Adım 2: FTP/SFTP ile Yükleme

#### FileZilla ile Yükleme:

1. FileZilla'yı açın
2. **Host:** ftp.comlink.com.tr (hosting sağlayıcınızdan alacaksınız)
3. **Kullanıcı Adı:** FTP kullanıcı adınız
4. **Şifre:** FTP şifreniz
5. **Port:** 21 (FTP) veya 22 (SFTP)
6. **Bağlan**'a tıklayın

7. Sağ tarafta (sunucu) `public_html` veya `www` veya `httpdocs` klasörüne gidin
8. Sol tarafta (lokal) proje klasörünü seçin
9. **Tüm dosya ve klasörleri** sağ tarafa sürükleyin

**UYARI:** Yükleme işlemi 5-10 dakika sürebilir.

#### cPanel File Manager ile Yükleme:

1. cPanel'e giriş yapın
2. **File Manager** (Dosya Yöneticisi) tıklayın
3. `public_html` klasörüne gidin
4. **Upload** (Yükle) butonuna tıklayın
5. ZIP dosyasını seçin ve yükleyin
6. Yüklendikten sonra ZIP dosyasına sağ tıklayın
7. **Extract** (Çıkart) seçeneğini seçin
8. Dosyalar çıkarıldıktan sonra ZIP dosyasını silebilirsiniz

---

## ⚙️ SUNUCU TİPİNE GÖRE KURULUM

Hosting sağlayıcınızdan **hangi web sunucu kullandığınızı** öğrenin.

### 🔷 APACHE SUNUCU (En yaygın - cPanel/Plesk)

#### Adım 1: .htaccess Dosyasını Aktifleştirin

1. FTP veya File Manager ile sunucuya bağlanın
2. `public_html` klasöründe `.htaccess.production` dosyasını bulun
3. Bu dosyayı `.htaccess` olarak **yeniden adlandırın**

**FileZilla'da:**
- Dosyaya sağ tıklayın → Rename → `.htaccess` yazın

**cPanel File Manager'da:**
- Dosyaya sağ tıklayın → Rename → `.htaccess` yazın

#### Adım 2: Gizli Dosyaları Göster

cPanel File Manager'da sağ üst köşede **Settings** → **Show Hidden Files** seçeneğini aktif edin.

#### Adım 3: Test Edin

Tarayıcıda şu URL'leri test edin:

```
✅ https://www.comlink.com.tr/
✅ https://www.comlink.com.tr/hakkimizda
✅ https://www.comlink.com.tr/blog
✅ https://www.comlink.com.tr/blog/cevre-donusum
✅ https://www.comlink.com.tr/urunler
✅ https://www.comlink.com.tr/urun/ck-120
✅ https://www.comlink.com.tr/kategori/cim-bicme
```

**ÖNEMLİ:** `.html` uzantısı URL'de görünmemelidir!

---

### 🔷 IIS SUNUCU (Windows Server)

#### Adım 1: URL Rewrite Modülünü Kontrol Edin

1. IIS Manager'ı açın
2. Sol panelde sitenizi seçin
3. Orta panelde **URL Rewrite** ikonunu arayın
4. Yoksa şu linkten indirin: [URL Rewrite Module](https://www.iis.net/downloads/microsoft/url-rewrite)

#### Adım 2: web.config Dosyasını Aktifleştirin

1. FTP veya RDP ile sunucuya bağlanın
2. Site kök klasöründe `web.config.production` dosyasını bulun
3. Bu dosyayı `web.config` olarak **yeniden adlandırın**

#### Adım 3: Uygulama Havuzunu Yeniden Başlatın

1. IIS Manager'da sol panelden **Application Pools** seçin
2. Sitenizin havuzunu bulun
3. Sağ tıklayın → **Recycle**

#### Adım 4: Test Edin

```
✅ https://www.comlink.com.tr/
✅ https://www.comlink.com.tr/hakkimizda
✅ https://www.comlink.com.tr/blog/cevre-donusum
✅ https://www.comlink.com.tr/urun/ck-120
✅ https://www.comlink.com.tr/kategori/cim-bicme
```

---

### 🔷 NGINX SUNUCU

#### Adım 1: Nginx Config Dosyasını Düzenleyin

1. Sunucuya SSH ile bağlanın
2. Nginx config dosyasını açın:
   ```bash
   sudo nano /etc/nginx/sites-available/comlink.com.tr
   ```

3. Şu konfigürasyonu ekleyin:

```nginx
server {
    listen 80;
    server_name comlink.com.tr www.comlink.com.tr;
    root /var/www/comlink;
    index index.html;

    # .html uzantısını gizle
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # Blog detay sayfası
    location ~ ^/blog/([a-zA-Z0-9\-]+)/?$ {
        try_files $uri /blog-details.html?id=$1 last;
    }

    # Ürün detay sayfası
    location ~ ^/urun/([a-zA-Z0-9\-]+)/?$ {
        try_files $uri /urun-detay.html?id=$1 last;
    }

    # Kategori sayfası
    location ~ ^/kategori/([a-zA-Z0-9\-]+)/?$ {
        try_files $uri /urunler.html?kategori=$1 last;
    }

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

4. Kaydedin ve çıkın (Ctrl+X, Y, Enter)
5. Nginx'i test edin:
   ```bash
   sudo nginx -t
   ```

6. Nginx'i yeniden başlatın:
   ```bash
   sudo systemctl reload nginx
   ```

---

## 🔒 SSL SERTİFİKASI KURULUMU

### Let's Encrypt (Ücretsiz SSL)

#### cPanel üzerinden:

1. cPanel'e giriş yapın
2. **SSL/TLS Status** bölümüne gidin
3. Domain'inizi seçin
4. **Run AutoSSL** butonuna tıklayın
5. 5-10 dakika bekleyin

#### Manuel Kurulum:

Hosting sağlayıcınızdan SSL sertifikası kurulumu için destek talep edin.

### SSL Yönlendirmesi

SSL kurulduktan sonra, `.htaccess` dosyasında şu satırları aktif edin:

```apache
# HTTPS Redirect
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Satırların başındaki `#` işaretini kaldırın.

---

## 🌐 DOMAIN AYARLARI

### www veya www'sız Yönlendirme

#### www eklemek için (www.comlink.com.tr):

`.htaccess` dosyasında şu satırları aktif edin:

```apache
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^(.*)$ https://www.%{HTTP_HOST}/$1 [R=301,L]
```

#### www kaldırmak için (comlink.com.tr):

```apache
RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
```

### DNS Ayarları

Hosting sağlayıcınızın name server'larını domain kayıt firmanızda (natro, turhost vb.) ayarlayın:

```
NS1: ns1.hostingsaglamayici.com
NS2: ns2.hostingsaglamayici.com
```

**UYARI:** DNS propagation 24-48 saat sürebilir.

---

## ✅ TEST VE DOĞRULAMA

### 1. URL Testi

Aşağıdaki URL'leri tarayıcıda test edin:

```
✅ https://www.comlink.com.tr/
✅ https://www.comlink.com.tr/hakkimizda
✅ https://www.comlink.com.tr/urunler
✅ https://www.comlink.com.tr/blog
✅ https://www.comlink.com.tr/blog/cevre-donusum
✅ https://www.comlink.com.tr/blog/akulu-bahce-aletleri
✅ https://www.comlink.com.tr/urun/ck-120
✅ https://www.comlink.com.tr/urun/ck-200
✅ https://www.comlink.com.tr/kategori/cim-bicme
✅ https://www.comlink.com.tr/kategori/dal-budama
✅ https://www.comlink.com.tr/iletisim
```

**Kontrol Listesi:**
- [ ] `.html` uzantısı URL'de görünmüyor
- [ ] Blog detay sayfaları açılıyor
- [ ] Ürün detay sayfaları açılıyor
- [ ] Kategori filtreleme çalışıyor
- [ ] Tüm görseller yükleniyor
- [ ] CSS ve JavaScript dosyaları çalışıyor
- [ ] Mobil görünüm düzgün

### 2. SEO Testi

- **Google PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/

### 3. Tarayıcı Testi

Farklı tarayıcılarda test edin:
- Chrome
- Firefox
- Safari
- Edge

---

## 🔧 SORUN GİDERME

### Problem: .htaccess çalışmıyor

**Çözüm 1:** Hosting sağlayıcınızdan `.htaccess` desteğinin açık olduğunu doğrulayın.

**Çözüm 2:** Sunucu Apache değil, IIS veya Nginx olabilir. Sunucu tipini kontrol edin.

**Çözüm 3:** `.htaccess` dosyasının izinlerini 644 yapın:
```bash
chmod 644 .htaccess
```

### Problem: 500 Internal Server Error

**Çözüm 1:** `.htaccess` dosyasında syntax hatası olabilir. Dosyayı geçici olarak silin ve tekrar test edin.

**Çözüm 2:** Hosting error log'larına bakın (cPanel → Errors)

**Çözüm 3:** `.htaccess` dosyasındaki `RewriteEngine On` satırının aktif olduğundan emin olun.

### Problem: Görseller yüklenmiyor

**Çözüm 1:** `img/` klasörünün doğru yüklendiğinden emin olun.

**Çözüm 2:** Dosya izinlerini kontrol edin:
- Klasörler: 755
- Dosyalar: 644

**Çözüm 3:** Tarayıcı console'unda (F12) hata mesajlarını kontrol edin.

### Problem: Blog detay sayfaları 404 veriyor

**Çözüm 1:** `.htaccess` dosyasının aktif olduğundan emin olun.

**Çözüm 2:** `blog-details.html` dosyasının yüklendiğini kontrol edin.

**Çözüm 3:** URL'yi şu şekilde test edin:
```
https://www.comlink.com.tr/blog-details.html?id=cevre-donusum
```
Bu çalışıyorsa .htaccess sorunu var demektir.

### Problem: Ürün detay sayfaları 404 veriyor

**Çözüm 1:** `.htaccess` dosyasının aktif olduğundan emin olun.

**Çözüm 2:** `urun-detay.html` dosyasının yüklendiğini kontrol edin.

**Çözüm 3:** URL'yi şu şekilde test edin:
```
https://www.comlink.com.tr/urun-detay.html?id=ck-120
```
Bu çalışıyorsa .htaccess sorunu var demektir.

**Çözüm 4:** `.htaccess` dosyasında ürün URL rewrite kurallarının olduğunu kontrol edin:
```apache
RewriteRule ^urun/([a-zA-Z0-9-]+)/?$ urun-detay.html?id=$1 [L,QSA]
RewriteRule ^kategori/([a-zA-Z0-9-]+)/?$ urunler.html?kategori=$1 [L,QSA]
```

### Problem: SSL sertifikası çalışmıyor

**Çözüm 1:** SSL kurulumunun tamamlandığından emin olun (24 saat bekleme süresi olabilir).

**Çözüm 2:** HTTPS yönlendirmesini geçici olarak devre dışı bırakın (.htaccess'te yorum satırı yapın).

**Çözüm 3:** Hosting sağlayıcınızdan destek alın.

---

## 📞 DESTEK

Kurulum sırasında sorun yaşarsanız:

1. **Hosting Sağlayıcı Desteği:** İlk olarak hosting firmanızın teknik desteğine danışın.
2. **Error Log'ları:** cPanel → Errors bölümünden hata loglarını kontrol edin.
3. **Geliştirici Desteği:** Proje geliştiricisi ile iletişime geçin.

---

## 📝 EK BİLGİLER

### Dosya İzinleri (Permissions)

Önerilen dosya izinleri:

- **Klasörler:** 755
- **Dosyalar:** 644
- **.htaccess:** 644

### Performans İyileştirme

1. **Gzip Compression:** `.htaccess` dosyasında zaten aktif
2. **Browser Caching:** `.htaccess` dosyasında zaten yapılandırılmış
3. **CDN Kullanımı:** Cloudflare ücretsiz plan kullanılabilir

### Yedekleme

Düzenli olarak site yedeği alın:
- cPanel → Backup Wizard
- Manuel FTP ile tüm dosyaları indirin
- Haftalık otomatik yedekleme ayarlayın

---

**✅ Kurulum Tamamlandı!**

Web siteniz artık canlıda ve SEO-friendly URL'lerle çalışıyor.

İyi çalışmalar! 🚀
