# COMLINK PROJESİ - YAPILACAKLAR LİSTESİ

**Güncellenme:** 27 Ekim 2025
**Durum:** Basic düzeltmeler tamamlandı, orta seviye görevler bekliyor

---

## ✅ TAMAMLANAN GÖREVLER (Bu Commit'te)

### 1. ✅ HTML Lang Hatası Düzeltildi
- **Dosya:** `website/index.html:2`
- **Değişiklik:** `lang="en"` → `lang="tr"`
- **Durum:** Tamamlandı
- **Rapor:** PROJE-ANALIZ-RAPORU.md - Sorun #8

### 2. ✅ Navigation Link Düzeltmeleri
- **Değişiklik:** `about-us.html` → `hakkimizda.html`
- **Etkilenen Dosyalar (10 adet):**
  - ✅ index.html
  - ✅ index-2.html
  - ✅ index-3.html
  - ✅ hakkimizda.html
  - ✅ urunler.html
  - ✅ galeri.html
  - ✅ iletisim.html
  - ✅ blog.html
  - ✅ blog-classic.html
  - ✅ blog-details.html
- **Durum:** Tamamlandı
- **Rapor:** PROJE-ANALIZ-RAPORU.md - Sorun #1 (kısmi)

### 3. ✅ İspanyolca Yorumlar Türkçeleştirildi
- **Dosya:** `website/js/main.js:8, 11`
- **Değişiklikler:**
  - `// Una vez haya terminado el preloader aparezca el scroll`
    → `// Preloader tamamlandıktan sonra scroll gösterilir`
  - `// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader`
    → `// Preloader kaldırıldıktan sonra tüm preloader bölümü DOM'dan silinir`
- **Durum:** Tamamlandı
- **Rapor:** PROJE-ANALIZ-RAPORU.md - Sorun #16

### 4. ✅ Breadcrumb Linkleri Düzeltildi
- **Değişiklik:** `<a href="#">Ana Sayfa</a>` → `<a href="index.html">Ana Sayfa</a>`
- **Etkilenen Dosyalar (6 adet):**
  - ✅ hakkimizda.html:355
  - ✅ urunler.html:358
  - ✅ galeri.html:357
  - ✅ iletisim.html:355
  - ✅ blog-classic.html:357
  - ✅ blog-details.html:355
- **Durum:** Tamamlandı
- **Rapor:** PROJE-ANALIZ-RAPORU.md - Sorun #23

---

## 📋 YARIM KALAN / YAPILACAK GÖREVLER

### 🟡 ORTATEVİYE ÖNCELK - Sonraki Commit İçin

#### 5. ⏸️ Footer'a Dinamik Yıl Ekle
**Öncelik:** Orta
**Tahmini Süre:** 15 dakika
**Etkilenen Dosyalar:** ~10 HTML dosyası (footer bölümü)

**Mevcut Durum:**
```html
<p>Telif Hakkı © <span>Comlink</span> | Tüm Hakları Saklıdır</p>
```

**Yapılacak:**
```html
<p>Telif Hakkı © <span id="currentYear">2025</span> <span>Comlink</span> | Tüm Hakları Saklıdır</p>
<script>document.getElementById('currentYear').textContent = new Date().getFullYear();</script>
```

**Düzeltilecek Dosyalar:**
- [ ] index.html
- [ ] index-2.html
- [ ] index-3.html
- [ ] hakkimizda.html
- [ ] urunler.html
- [ ] galeri.html
- [ ] iletisim.html
- [ ] blog.html
- [ ] blog-classic.html
- [ ] blog-details.html

**Rapor Referansı:** PROJE-ANALIZ-RAPORU.md - Sorun #17

---

#### 6. ⏸️ Payment Method Görselini Kaldır
**Öncelik:** Düşük (sitede ödeme yok)
**Tahmini Süre:** 5 dakika
**Etkilenen Dosyalar:** ~10 HTML dosyası (footer bölümü)

**Mevcut Durum:**
```html
<div class="footer-payment text-center text-md-right">
    <img src="img/images/card_img.png" alt="img">
</div>
```

**Yapılacak:**
Bu bölümü tamamen kaldır (ödeme sistemi yok).

**Düzeltilecek Dosyalar:**
- [ ] index.html:~1137
- [ ] index-2.html
- [ ] index-3.html
- [ ] hakkimizda.html
- [ ] urunler.html
- [ ] galeri.html
- [ ] iletisim.html
- [ ] blog.html
- [ ] blog-classic.html
- [ ] blog-details.html

**Rapor Referansı:** Raporda silindi (ödeme yok)

---

#### 7. ⏸️ Kullanılmayan Navigation Linklerini Yorum Satırına Al
**Öncelik:** Yüksek
**Tahmini Süre:** 30 dakika
**Etkilenen Dosyalar:** Tüm HTML dosyaları (navigation bölümü)

**Kaldırılacak/Yorum Satırına Alınacak Linkler:**
- [ ] `tracking.html` → Dosya yok
- [ ] `service-air.html` → Dosya yok
- [ ] `service-Railway.html` → Dosya yok
- [ ] `service-door-to-door.html` → Dosya yok
- [ ] `service-warehouse.html` → Dosya yok
- [ ] `pricing.html` → Dosya yok
- [ ] `blog-with-sidebar.html` → Dosya yok
- [ ] `support.html` → Dosya yok

**Örnek Çözüm:**
```html
<!-- Geçici olarak kaldırıldı - dosya oluşturulacak
<li><a href="tracking.html">Takip</a></li>
-->
```

**Rapor Referansı:** PROJE-ANALIZ-RAPORU.md - Sorun #1

---

### 🔴 YÜKSEK ÖNCELİK - Gerçek Bilgi Gerekli

#### 8. ⏸️ İletişim Bilgilerini Güncelle
**Öncelik:** Kritik
**Tahmini Süre:** 20 dakika
**Gereken Bilgiler:** Gerçek adres, telefon, e-posta

**Düzeltilecek Yerler:**

1. **iletisim.html (satır 418, 429, 441-442, 453)**
```html
<!-- MEVCUT (Hatalı) -->
<span>99 NY Address street, Bronk Center Brooklyn</span>
<span>+1 212-226-3126</span>
<span>info@startesk@gmail.com</span>  <!-- Çift @ hatalı! -->

<!-- YAPILACAK (Gerçek bilgilerle değiştirilecek) -->
<span>[GERÇEK ADRES GEREKLİ]</span>
<span>+90 [TELEFON]</span>
<span>info@comlink.com.tr</span>
```

2. **Footer (Tüm sayfalarda, satır ~1050, 1092)**
```html
<!-- MEVCUT -->
<p>Orem Ipsum iş simply dumm text...</p>

<!-- YAPILACAK -->
<p>Comlink akülü bahçe makineleri hakkında bilgi için iletişime geçin.</p>
```

3. **Sosyal Medya Linkleri (Footer, satır ~1056-1060)**
```html
<!-- MEVCUT -->
<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>

<!-- YAPILACAK (Gerçek linklerle veya kaldır) -->
<!-- Geçici olarak kaldırıldı
<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
-->
```

**Rapor Referansı:** PROJE-ANALIZ-RAPORU.md - Sorun #2, #14

---

#### 9. ⏸️ Form Action'larını Düzelt
**Öncelik:** Kritik
**Tahmini Süre:** 10 dakika
**Bağımlılıklar:** mail.php yapılandırması gerekli

**Düzeltilecek Formlar:**

1. **İletişim Formu (iletisim.html:382)**
```html
<!-- MEVCUT -->
<form action="#" method="post">

<!-- YAPILACAK -->
<form action="mail.php" method="POST" id="contact-form" class="contact-form">
```

2. **Newsletter Formu (Tüm sayfalar)**
```html
<!-- MEVCUT -->
<form action="#">

<!-- YAPILACAK -->
<form action="newsletter-subscribe.php" method="POST">
```

**Not:** `newsletter-subscribe.php` dosyası oluşturulmalı.

**Rapor Referansı:** PROJE-ANALIZ-RAPORU.md - Sorun #3

---

### 🟢 DÜŞÜK ÖNCELİK - İyileştirmeler

#### 10. ⏸️ Google Maps Koordinatlarını Güncelle
**Öncelik:** Düşük
**Tahmini Süre:** 2 dakika
**Dosya:** `iletisim.html:609, 622`
**Gerekli:** Gerçek adres koordinatları

```javascript
// MEVCUT (New York!)
center: new google.maps.LatLng(40.6700, -73.9400),

// YAPILACAK (İstanbul örnek)
center: new google.maps.LatLng(41.0082, 28.9784),
```

**Rapor Referansı:** PROJE-ANALIZ-RAPORU.md - Sorun #24

---

#### 11. ⏸️ Alt Text Eksiklerini Tamamla
**Öncelik:** Orta (SEO + Erişilebilirlik)
**Tahmini Süre:** 1 saat
**Etkilenen Dosyalar:** Tüm HTML dosyaları

**Örnek Düzeltmeler:**
```html
<!-- MEVCUT -->
<img src="img/slider/golve.png" alt="">  <!-- BOŞ! -->
<img src="img/images/services_img01.jpg" alt="img">  <!-- Anlamlı değil! -->

<!-- YAPILACAK -->
<img src="img/slider/golve.png" alt="Comlink akülü bahçe makineleri görseli">
<img src="img/images/services_img01.jpg" alt="Sessiz ve güçlü profesyonel akülü sistem">
```

**Rapor Referansı:** PROJE-ANALIZ-RAPORU.md - Sorun #11

---

#### 12. ⏸️ Counter Sayılarını Gerçekçi Yap
**Öncelik:** Düşük
**Tahmini Süre:** 5 dakika
**Dosya:** `index.html:650-686`

**Mevcut (Mantıksız):**
```html
<h4><span class="count">3,560</span> km</h4>
<h6>Teslim Edilen Ürün</h6>  <!-- KM??? -->

<h4><span class="count">195</span></h4>
<h6>Hizmet Verilen Ülke</h6>  <!-- 195 ülke çok fazla! -->

<h4><span class="count">99</span> Yr</h4>
<h6>Yıllık Deneyim</h6>  <!-- 99 yıl??? -->
```

**Yapılacak:** Gerçekçi istatistiklerle değiştir.

**Rapor Referansı:** PROJE-ANALIZ-RAPORU.md - Sorun #26

---

## 🚀 İLERİ SEVİYE GÖREVLER (Sonraki Sprint)

### 13. Eksik Sayfaları Oluştur
**Tahmini Toplam Süre:** 28 saat

| Dosya | Öncelik | Süre |
|-------|---------|------|
| `tracking.html` | Yüksek | 2 saat |
| `service-air.html` | Orta | 3 saat |
| `service-Railway.html` | Orta | 3 saat |
| `service-door-to-door.html` | Orta | 3 saat |
| `service-warehouse.html` | Orta | 3 saat |
| `pricing.html` | Düşük | 4 saat |
| `blog-with-sidebar.html` | Çok Düşük | 2 saat |
| `support.html` | Düşük | 3 saat |
| `404.html` | Düşük | 1 saat |
| `politika.html` | Düşük | 2 saat |
| `kullanim-sartlari.html` | Düşük | 2 saat |

**Rapor Referansı:** PROJE-ANALIZ-RAPORU.md - Eksik Dosyalar Listesi

---

### 14. SEO Dosyalarını Oluştur
**Tahmini Süre:** 2 saat

- [ ] `robots.txt` - 15 dakika
- [ ] `sitemap.xml` - 30 dakika (auto-generate tercih edilir)
- [ ] `.htaccess` - 1 saat (güvenlik başlıkları)
- [ ] `site.webmanifest` - 15 dakika

**Rapor Referansı:** PROJE-ANALIZ-RAPORU.md - Sorun #6

---

### 15. Responsive Image Tag'lerini Düzelt
**Öncelik:** Yüksek (Performans)
**Tahmini Süre:** 4 saat
**Etkilenen:** Galeri ve tüm ürün görselleri

**Yapılacak:** Picture element ile AVIF/WebP/JPEG fallback'leri ekle.

**Rapor Referansı:** PROJE-ANALIZ-RAPORU.md - Sorun #9

---

### 16. İngilizce Placeholder İçerikleri Türkçeleştir
**Öncelik:** Kritik
**Tahmini Süre:** 8 saat
**Etkilenen:** ~500+ satır metin

**Alanlar:**
- Müşteri yorumları
- FAQ metinleri
- Ürün açıklamaları
- Blog içerikleri
- Modal metinleri

**Rapor Referansı:** PROJE-ANALIZ-RAPORU.md - Sorun #4

---

## 📊 İLERLEME DURUMU

```
Toplam Görev: 16
Tamamlanan: 4 (✅)
Devam Eden: 0 (🔄)
Bekliyen: 12 (⏸️)

İlerleme: ████░░░░░░░░░░░░░░░░ 25%
```

---

## 🎯 ÖNERİLEN SIRA (Sonraki 3 Commit)

### Commit #2 (Sonraki)
1. Footer'a dinamik yıl ekle
2. Payment method kaldır
3. Kullanılmayan linkleri yorum satırına al

**Tahmini Süre:** 50 dakika

### Commit #3
4. İletişim bilgilerini güncelle (gerçek bilgiler gerekli)
5. Form action'larını düzelt
6. Counter sayılarını gerçekçi yap

**Tahmini Süre:** 35 dakika

### Commit #4
7. Alt text eksiklerini tamamla
8. Google Maps koordinatlarını güncelle
9. 404 sayfası oluştur

**Tahmini Süre:** 1 saat 10 dakika

---

## 📝 NOTLAR

- Gerçek iletişim bilgileri bekliyor (adres, telefon, e-posta)
- Newsletter için ayrı PHP dosyası oluşturulmalı
- Template'teki İngilizce içerikler için Türkçe metinler yazılmalı
- Google Maps API key güvenlik sorunu var (environment variable gerekli)

**Son Güncelleme:** 27 Ekim 2025 - Claude Code
