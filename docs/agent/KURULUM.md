# KURULUM KLAVUZU

## Gereksinimler
- Statik dosya sunabilen herhangi bir hosting (Apache/Nginx, Netlify, Vercel, GitHub Pages vb.)
- PHP gerekmez (form demo amaçlıdır). Google Maps anahtarını kullanacaksanız tarayıcı erişimi yeterlidir.

## Klasör Yapısı
- `website/` klasörü yayına çıkılacak içeriğin köküdür.
  - `index.html, hakkimizda.html, urunler.html, oduller-sertifikalar.html, iletisim.html`
  - `css/`, `js/`, `img/`, `fonts/`
  - `images/` (proje görselleri)
  - `kataloglar/` (PDF dosyaları)

## Yükleme
1. `website/` klasörünün içeriğini hosting köküne yükleyin (ör. `/var/www/html` veya hosting panelinizdeki `public_html`).
2. Alan adınızı hosting sağlayıcınızda hedef dizine yönlendirin (A/CNAME kayıtları).
3. CDN/Cache kullanıyorsanız, dağıtım sonrası önbelleği temizleyin.

## Domain Ayarları
- `A` kaydı: alanadiniz.com → sunucu IP
- `CNAME` kaydı: `www` → alanadiniz.com
- SSL: Let’s Encrypt veya sağlayıcınızın panelinden ücretsiz sertifika.

## Yerel Önizleme
- Basit HTTP sunucu: `website/` klasöründe `python -m http.server 8080` (veya VSCode Live Server) ile önizleyin.

