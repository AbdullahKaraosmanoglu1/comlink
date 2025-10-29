**Genel Özet**
- Bu çalışma sadece `docs`, `media` ve `template` klasörleri temelinde yapılmıştır.
- `docs` klasöründe Comlink ürün kataloğu (PDF), metin çıkarımı ve bir analiz dokümanı bulunuyor.
- `media` klasörü, katalog sayfalarının görsellerini ve web için çoğaltılmış/optimize edilmiş varyantlarını barındırıyor.
- `template` klasörü, statik bir HTML/CSS şablon (lojistik temalı) içeriyor; katalog içeriğiyle henüz entegre değil.

**Klasörler**
- docs
  - `docs/comlink-catalog.pdf:1` — Ana katalog (≈31 MB).
  - `docs/comlink-catalog.txt:1` — PDF’ten çıkarılmış ham metin (uzun, doğrulama gerekebilir).
  - `docs/comlink-catalog-analiz.md:1` — Kataloğa dair Türkçe analiz ve çıkarımlar; dosyada karakter kodlaması bozulmaları var (UTF‑8’e dönüştürme önerilir).
  - `docs/comlink-grand-catalogue-images:1` — PDF sayfa görsellerinin JPEG hâlleri (001–015).
- media
  - `media/images:1` — `comlink-grand-catalogue_page-####.jpg` dosyaları ile birlikte `w480`, `w768`, `w1200`, `w1920` alt dizinlerinde .avif benzeri web formatı/türevler (responsive kullanım için uygun).
- template
  - `template/html-css-template/index.html:1` — Ana sayfa; şablonda Company, Tracking, Services, Pricing vb. sayfalar mevcut (statik).
  - `template/html-css-template/css/*:1`, `.../js/*:1`, `.../fonts/*:1`, `.../img/*:1` — Bootstrap, eklentiler (slick, magnific-popup, wow, vb.), ikon fontları ve görseller.

**İçerik Bulguları (Katalog)**
- Ürün ailesi (örnekler): CK‑120 üfleyici, CK‑200/210 ot biçme, CK‑300/320 çit/çay budama, CK‑400 testere, CK‑412 yüksek dal budama, CK‑500 toprak burgusu.
- Ortak batarya platformu: V6/V7/V8 serisi Li‑ion paketler; IP66 ve BSMI (R45555) gibi sertifikasyon vurguları.
- Avantajlar: dumansız/benzinsiz kullanım, düşük bakım, sessiz çalışma, belediye/kamu uygulamalarına uygunluk.
- Örnek çalışma süreleri: işe ve kapasiteye bağlı olarak dakikalar‑saatler aralığında; metin çıkarımında aralıklar verilmiş.
- Ödül/sertifika referansları: 2017 Taiwan Excellence dahil çeşitli başarı vurguları.

**Teknik Notlar**
- Karakter kodlaması: `docs/comlink-catalog-analiz.md:1` içinde Türkçe karakterler bozulmuş görünüyor; UTF‑8’e dönüştürme ve/veya Windows konsolda `chcp 65001` ile görüntüleme önerilir.
- Görsel türevleri: `media/images:1` altındaki `w480/w768/w1200/w1920` yapısı, `<picture>` ile AVIF + JPEG fallback senaryoları için uygun.
- Boyutlar: PDF ve tam sayfa JPEG’ler büyük; web yayını için ekstra sıkıştırma/yeniden örnekleme düşünülebilir.

**Öneriler**
- Kodlama düzeltmesi: `docs/comlink-catalog-analiz.md:1` dosyasını UTF‑8’e dönüştürün; gerekiyorsa kaynağı tekrar dışa aktarın.
- Görsel stratejisi: `media/images:1` içinde AVIF birincil, JPEG fallback olarak hizmet verin; `<picture>` kullanın.
- Varlık düzeni: Docs içindeki görsel kopyaları tekilleştirin (tek kaynak `media`), gerekli yolları güncelleyin.
- Performans: Büyük JPEG’leri yeniden sıkıştırma (ör. mozjpeg) ve uygun çözünürlüklere indirme (kaynak ≈3–7 MB) ile hızlandırın.
- İçerik akışı: `docs/comlink-catalog.txt:1` metninden doğrulanmış kısa kopyalar çıkarıp sayfa/section bazlı yerleştirme yapın.

**Sonraki Adımlar**
- [ ] Ürün verilerini kısa, tutarlı bir JSON/YAML olarak çıkar (model, teknik, aksesuar, süre, sertifika vb.).
- [ ] Şablonda ilgili bölümlere içerikleri bağla; `<picture>` ile responsive görselleri kullan.
- [ ] Görsel optimizasyonunu tamamla (AVIF üretimi, JPEG fallback, lazy‑load, boyutlandırma).
- [ ] Son gözden geçirme: tipografi, Türkçe dilbilgisi, erişilebilirlik (alt metinler, kontrast), temel SEO.

