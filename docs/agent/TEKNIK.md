# TEKNİK DÖKÜMANTASYON

## Teknolojiler
- HTML5, CSS3, ES5/ES6 (Vanilla JS)
- CSS Framework: Bootstrap 4 (minified paket)
- JS Kütüphaneleri/Eklentiler:
  - jQuery 1.12.4
  - Slick slider (`js/slick.min.js`)
  - Magnific Popup (`js/jquery.magnific-popup.min.js`)
  - Isotope + ImagesLoaded (grid/filtre)
  - WOW.js + Animate.css (animasyonlar)
  - MeanMenu (mobil menü)
  - Nice Select (select stilleri)

## Dosya Yapısı (website/)
- Kök HTML: `index.html`, `hakkimizda.html`, `urunler.html`, `galeri.html`, `iletisim.html`
- Stil: `css/` (bootstrap, responsive, theme)
- Script: `js/` (eklenti ve `main.js`)
- Tema görselleri: `img/`
- Proje görselleri: `images/` (katalog sayfaları, ürün görselleri)
- Katalog PDF: `kataloglar/`
- Fontlar: `fonts/`

## Önemli Sınıflar
- `.popup-image`: Magnific Popup tetikleyici (galeri büyütme)
- `.gallery-active`: Isotope grid seçicisi
- `.mobile-menu`: MeanMenu yer tutucu
- `.btn`: tema butonları

## Formlar
- Formlar demo amaçlıdır, arka uç yoktur. Gerçek gönderim için bir form endpoint’i (ör. Netlify Forms) ekleyin veya sunucuda mail handler yazın.

