 # TEMPLATE ANALİZ RAPORU

 ## Özellikler
 - Sayfalar: index, about, services (çeşitli), pricing, blog (çeşitli), support, tracking
 - Bileşenler: slider (Slick), modal, arama modalı, sayaç (CounterUp), grid (Isotope), galeri popup (Magnific), parallax (Paroller), mobil menü (MeanMenu)

 ## Framework ve Kütüphaneler
 - Bootstrap 4 (css/bootstrap.min.css)
 - jQuery 1.12.4
 - Eklentiler: slick, magnific-popup, isotope, imagesloaded, wow, meanmenu, nice-select

 ## Güçlü Yönler
 - Zengin bileşen seti ve hazır stiller
 - Mobil menü ve responsive yapıya hazır
 - Galeri ve grid için hazır JS entegrasyonu

 ## Zayıf Yönler
 - İngilizce placeholder/metinler (lokalizasyon gerek)
 - Tüm sayfalarda tekrar eden header/nav (partial yapısı yok)
 - Google Maps API anahtarını gömülü bekliyor (env yok)

 ## Öneriler
 - Ortak header/footer’ı basit bir include yapısı ile tekilleştirme (gerekirse build aşamasında)
 - Görsel kaynaklarını `images/` altında konsolide edin, AVIF + lazy-load
 - Kullanılmayan sayfaları (ör. demo service/blog sayfaları) yayından çıkarın
