// Comlink Blog Veritabanı

const blogsData = {
    'cevre-donusum': {
        id: 'cevre-donusum',
        title: 'Soluduğunuz Havayı Düşünün: Çocuklarınızın Geleceği İçin Yeşil Dönüşüm',
        slug: 'soludugunuz-havayi-dusunun',
        category: 'Çevre & Sürdürülebilirlik',
        categoryId: 'cevre-surdurulebilirlik',
        date: '5 Kasım 2025',
        author: 'Comlink Ekibi',
        excerpt: 'Her gün binlerce benzinli makine atmosfere ton ton CO2 salıyor. Comlink akülü makinelerle sıfır emisyon, %100 temiz hava. Bugün bir karar verin, yarınlar için. Dönüşüme hazır mısınız?',
        image: 'img/blog/new-blog-images/SoluduğunuzHavayıDüşünün.avif',
        visualElements: {
            statistics: [
                { value: '0%', label: 'SIFIR EMİSYON', icon: 'fa-leaf', color: 'green' },
                { value: '160km', label: 'BENZİNLİ KİRLETİCİ EŞDEĞERİ', icon: 'fa-car', color: 'red' },
                { value: '2026', label: 'AB YASAKLAMA YILI', icon: 'fa-ban', color: 'blue' }
            ],
            badges: [
                { text: '100% Sıfır Emisyon', icon: 'fa-check-circle', type: 'eco' },
                { text: 'Çevre Dostu Teknoloji', icon: 'fa-leaf', type: 'eco' }
            ],
            highlights: [
                {
                    type: 'success',
                    icon: 'fa-lightbulb',
                    title: 'Temiz Hava İçin Karar Verin',
                    text: 'Her küçük adım önemli. Bahçe bakımı düşündüğünüzden çok daha büyük bir etki yaratıyor.'
                },
                {
                    type: 'info',
                    icon: 'fa-info-circle',
                    title: 'Avrupa Birliği Yasağı',
                    text: '2026\'dan itibaren yeni benzinli bahçe makineleri yasaklanıyor. Yeşil dönüşüm başladı.'
                }
            ]
        },
        content: `
            <div class="blog-para">Her sabah bahçenize çıktığınızda, benzinli makinenizin egzozundan çıkan dumanı görüyor musunuz? O duman sadece havayı kirletmiyor, çocuklarınızın geleceğini de karartıyor.</div>

            <div class="blog-para">İstatistikler çarpıcı: Bir benzinli çim biçme makinesi, 1 saatlik kullanımda bir otomobilin 160 km yol katederken yaydığı kadar kirletici salıyor. Türkiye'de her gün yüz binlerce benzinli bahçe makinesi çalışıyor. Bu ne anlama geliyor? Tonlarca CO2, azot oksitler ve uçucu organik bileşikler atmosfere karışıyor.</div>

            <h4>Çocuklarınıza Nasıl Bir Dünya Bırakıyorsunuz?</h4>
            <div class="blog-para">Düşünün: Çocuğunuzun 20 yıl sonra temiz hava soluyabileceği bir dünya için bugün ne yapıyorsunuz? Her küçük adım önemli. Ve bahçe bakımı, düşündüğünüzden çok daha büyük bir etki yaratıyor.</div>

            <blockquote>
                "Sıfır emisyon, %100 temiz hava. Comlink akülü makinelerle bugün bir karar verin, yarınlar için."
            </blockquote>

            <h4>Comlink Farkı: Sıfır Emisyon</h4>
            <div class="blog-para">Comlink akülü bahçe makineleri, tam anlamıyla sıfır emisyon sunar. Hiç egzoz gazı yok, hiç yakıt kokusu yok, hiç duman yok. Sadece temiz, sessiz ve verimli çalışma.</div>

            <ul>
                <li><strong>%100 Sıfır Emisyon:</strong> Hiçbir sera gazı salınmıyor</li>
                <li><strong>Temiz Hava:</strong> Siz çalışırken bile kuş sesleri duyulabiliyor</li>
                <li><strong>Geleceğe Yatırım:</strong> Sürdürülebilir bir gelecek için adım atın</li>
                <li><strong>Çocuklarınız İçin:</strong> Onlara temiz bir dünya bırakın</li>
            </ul>

            <h4>Yeşil Dönüşüm Başlıyor</h4>
            <div class="blog-para">Avrupa Birliği, 2026'dan itibaren yeni benzinli bahçe makinelerini yasaklıyor. Neden? Çünkü artık herkes biliyor: Benzinli makineler sürdürülemez. Siz neden bekliyorsunuz?</div>

            <div class="blog-para">Bugün akülü teknolojiye geçiş yapın. Sadece çevreye değil, kendinize de iyilik yapın. Daha sessiz, daha temiz, daha sağlıklı bir bahçe deneyimi yaşayın.</div>

            <h4>Karar Verme Zamanı</h4>
            <div class="blog-para">Her gün, her kullanımda, bir seçim yapıyorsunuz. Ya geçmişin kirli teknolojisiyle devam edeceksiniz, ya da geleceğin temiz çözümüne geçeceksiniz. Çocuklarınız bu kararı hatırlayacak.</div>

            <div class="blog-para"><strong>Dönüşüme hazır mısınız?</strong> Comlink akülü bahçe makineleri ile temiz hava solumanın keyfini çıkarın. Bugün bir adım atın, yarınlar için.</div>
        `,
        tags: ['Çevre', 'Sürdürülebilirlik', 'Sıfır Emisyon', 'Gelecek', 'Temiz Enerji'],
        readTime: '5 dk'
    },
    'akilli-yatirim': {
        id: 'akilli-yatirim',
        title: '2 Yıl Sonra Bana Teşekkür Edeceksiniz: Akıllı Yatırım Rehberi',
        slug: '2-yil-sonra-tesekkur-edeceksiniz',
        category: 'Ekonomi & Tasarruf',
        categoryId: 'ekonomi-tasarruf',
        date: '4 Kasım 2025',
        author: 'Comlink Ekibi',
        excerpt: 'Benzine harcadığınız para cebinizde kalacak. Bakıma harcadığınız zaman size kalacak. Rakamlar konuşuyor: 2 yılda %300 geri dönüş. Akıllı yatırım, akıllı tasarruf. Comlink.',
        image: 'img/blog/new-blog-images/2YılSonraBanaTeşekkürEdeceksiniz.avif',
        visualElements: {
            statistics: [
                { value: '₺11,750', label: '5 YILLIK TASARRUF', icon: 'fa-piggy-bank', color: 'green' },
                { value: '%47', label: 'MALİYET AZALMASI', icon: 'fa-arrow-down', color: 'blue' },
                { value: '40+ Saat', label: 'YILLIK ZAMAN TASARRUFU', icon: 'fa-clock', color: 'purple' }
            ],
            comparison: {
                title: '5 Yıllık Maliyet Karşılaştırması',
                benzinli: [
                    { label: 'Makine Maliyeti', value: '₺50.000,00', icon: 'fa-shopping-cart' },
                    { label: 'Benzin (5 yıl)', value: '₺50.000,00', icon: 'fa-gas-pump' },
                    { label: 'Yağ Değişimi', value: '₺10,000', icon: 'fa-oil-can' },
                    { label: 'Filtre & Bujiler', value: '₺5,000', icon: 'fa-filter' },
                    { label: 'Bakım & Tamir', value: '₺50.000', icon: 'fa-wrench' }
                ],
                akulu: [
                    { label: 'Makine + Batarya', value: '₺100.000,00 ', icon: 'fa-shopping-cart' },
                    { label: 'Elektrik (5 yıl)', value: '₺10.000,00', icon: 'fa-plug' },
                    { label: 'Bakım', value: '₺0', icon: 'fa-times-circle' },
                    { label: 'Filtre & Bujiler', value: '₺0', icon: 'fa-times-circle' },
                    { label: 'Tamir (5 yıl)', value: '₺0', icon: 'fa-tools' }
                ],
                totalBenzinli: '₺165,000',
                totalAkulu: '₺110,000'
            },
            progressBars: [
                { label: 'Maliyet Tasarrufu', percentage: 50, color: 'green' },
                { label: 'Zaman Tasarrufu', percentage: 85, color: 'blue' },
                { label: 'Bakım Kolaylığı', percentage: 95, color: 'purple' }
            ],
            badges: [
                { text: '2 Yılda Amorti', icon: 'fa-chart-line', type: 'award' },
                { text: 'Sıfır Bakım Maliyeti', icon: 'fa-wrench', type: 'tech' }
            ]
        },
        content: `
            <div class="blog-para">Şimdi size bir soru soracağım: Geçen yıl bahçe makinelerinize ne kadar harcadınız? Benzin, yağ, filtre, bujiler, periyodik bakımlar... Hesapladınız mı hiç?</div>

            <div class="blog-para">Çoğu kişi hesaplamıyor. Ama rakamlar çok net: Ortalama bir benzinli çim biçme makinesi yılda 2.000-3.000 TL işletme maliyeti demek. 5 yılda bu rakam 10.000-15.000 TL'yi buluyor.</div>

            <h4>Gerçek Maliyet Hesabı</h4>
            <div class="blog-para">Bir benzinli çim biçme makinesi ile bir Comlink akülü makineyi karşılaştıralım:</div>

            <div style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h5>BENZİNLİ MAKİNE (5 Yıllık Maliyet)</h5>
                <ul>
                    <li>Makine maliyeti: 50.000 TL</li>
                    <li>Benzin (yıllık): 5.000 TL x 5 = 25.000 TL</li>
                    <li>Yağ değişimi: 2.000 TL x 5 = 10.000 TL</li>
                    <li>Filtre ve bujiler: 500 TL x 5 = 2.500 TL</li>
                    <li>Bakım ve tamir: 15.000 TL x 5 = 75.000 TL</li>
                    <li><strong>TOPLAM: 162.500 TL</strong></li>
                </ul>

                <h5 style="margin-top: 30px;">COMLINK AKÜLÜ MAKİNE (5 Yıllık Maliyet)</h5>
                <ul>
                    <li>Makine + Batarya maliyeti: 100.000 TL</li>
                    <li>Elektrik (yıllık): 1000 TL x 5 = 5.000 TL</li>
                    <li>Bakım: 0 TL (bakımsız sistem)</li>
                    <li>Tamir: 500 TL (5 yılda)</li>
                    <li><strong>TOPLAM: 105.500 TL</strong></li>
                </ul>
            </div>

            <blockquote>
                "5 yılda 57.000 TL tasarruf. Yani neredeyse makine kendini ödüyor. 2 yıl sonra bana teşekkür edeceksiniz."<br>
                • Hesaplamalar günün şartlarına göre hesaplanmıştır. Yıllık zam oranları, dolar kuru vs. hesaba katılmamıştır. Bir fikir vermesi açısından karşılaştırılmıştır.
            </blockquote>

            <h4>Zaman = Para</h4>
            <div class="blog-para">Ama sadece para değil. Zamandan da bahsedelim. Benzinli bir makineyle ne kadar zaman harcıyorsunuz?</div>

            <ul>
                <li>Benzin istasyonuna gidip gelme: Ayda 2 saat</li>
                <li>Motor bakımı, yağ değişimi: Yılda 4 saat</li>
                <li>Arıza ve tamir: Yılda ortalama 12 saat</li>
                <li>Kış depolama hazırlığı: Yılda 2 saat</li>
                <li><strong>Yılda toplam: 40+ saat kayıp</strong></li>
            </ul>

            <div class="blog-para">Comlink akülü makinelerle bu süre neredeyse sıfır. Bataryayı takın, çalışın, bitince şarja bırakın. O kadar.</div>

            <h4>Ortak Batarya Platformu: Asıl Tasarruf Burada</h4>
            <div class="blog-para">Comlink'in en büyük avantajı: Tek batarya ile 9 farklı makine kullanabiliyorsunuz. Üfleyici, çim biçme, çit budama, zincirli testere... Hepsi aynı batarya.</div>

            <div class="blog-para">Rakip markalarda her makine için ayrı batarya almanız gerekiyor. 3 makine = 3 batarya = 20.000+ TL ek maliyet. Comlink'te? Sadece 1 batarya yeterli. Comlink'teki 30Ah'lik bataryanın en yakın rakibi 5Ah'lik bataryalar. Yani Comlink'te 9 saat çalışabilen batarya varken en yakın rakibi 1 saat çalışabiliyor. İnanılmaz değil mi?</div>

            <h4>2 Yıl Sonra...</h4>
            <div class="blog-para">2 yıl sonra bu yazıyı hatırlayacaksınız. Cebinizde kalan parayı, kazandığınız zamanı, stresinizin azaldığını göreceksiniz. Ve diyeceksiniz ki: "Keşke daha önce geçseydim."</div>

            <div class="blog-para"><strong>Akıllı yatırım, akıllı tasarruf.</strong> Comlink akülü bahçe makineleri ile hem paranızı hem zamanınızı kazanın. Bugün yatırım yapın, her gün tasarruf edin. Bu işten daha çok keyif aldığınızı tecrübe edeceksiniz.</div>
        `,
        tags: ['Ekonomi', 'Tasarruf', 'Yatırım', 'Maliyet Analizi', 'ROI'],
        readTime: '6 dk'
    },
    'profesyonel-performans': {
        id: 'profesyonel-performans',
        title: 'Yarış Benzinli Makinelerle Değil, Saatlerle: Profesyonel Performans',
        slug: 'profesyonel-performans',
        category: 'Performans & Verimlilik',
        categoryId: 'performans-verimlilik',
        date: '3 Kasım 2025',
        author: 'Comlink Ekibi',
        excerpt: '400m²\'yi 60 dakikadan 35 dakikaya düşürün. Günde 3 müşteriye değil, 5 müşteriye yetişin. Daha hızlı, daha güçlü, daha karlı işler yapın. Performans farkını yaşayın.',
        image: 'img/blog/new-blog-images/YarışBenzinliMakinelerleDeğil.avif',
        visualElements: {
            statistics: [
                { value: '27 Dk', label: '400M² ZAMAN TASARRUFU', icon: 'fa-stopwatch', color: 'green' },
                { value: '%65', label: 'GELİR ARTIŞI', icon: 'fa-chart-line', color: 'blue' },
                { value: '%30', label: 'DAHA FAZLA GÜÇ', icon: 'fa-bolt', color: 'purple' }
            ],
            comparison: {
                title: '400m² Bahçe Biçme Karşılaştırması',
                benzinli: [
                    { label: 'Hazırlık', value: '5 dakika', icon: 'fa-cog' },
                    { label: 'Biçme Süresi', value: '45 dakika', icon: 'fa-cut' },
                    { label: 'Ara Kesinti', value: '5 dakika', icon: 'fa-pause' },
                    { label: 'Temizlik', value: '5 dakika', icon: 'fa-broom' }
                ],
                akulu: [
                    { label: 'Hazırlık', value: '30 saniye', icon: 'fa-cog' },
                    { label: 'Biçme Süresi', value: '30 dakika', icon: 'fa-cut' },
                    { label: 'Ara Kesinti', value: '0 dakika', icon: 'fa-times-circle' },
                    { label: 'Temizlik', value: '2 dakika', icon: 'fa-broom' }
                ],
                totalBenzinli: '60 dakika',
                totalAkulu: '33 dakika'
            },
            progressBars: [
                { label: 'İş Hızı', percentage: 82, color: 'green' },
                { label: 'Güvenilirlik', percentage: 98, color: 'blue' },
                { label: 'Müşteri Memnuniyeti', percentage: 95, color: 'purple' }
            ],
            badges: [
                { text: 'Taiwan Excellence Ödüllü', icon: 'fa-award', type: 'award' },
                { text: 'IP66 Sertifikalı', icon: 'fa-certificate', type: 'cert' },
                { text: 'Profesyonel Kullanım', icon: 'fa-star', type: 'tech' }
            ],
            highlights: [
                {
                    type: 'tip',
                    icon: 'fa-lightbulb',
                    title: 'Sabah 7\'de Başlayın',
                    text: 'Sessiz çalışma sayesinde erken saatlerde işe başlayabilirsiniz. Günde 2-3 saat daha fazla çalışma imkanı.'
                },
                {
                    type: 'success',
                    icon: 'fa-check-circle',
                    title: 'Ara Vermeden Çalışın',
                    text: 'Ortak batarya sistemi sayesinde bir batarya biterken diğerini takıyorsunuz. Sıfır bekleme.'
                }
            ]
        },
        content: `
            <div class="blog-para">"Akülü makineler güçsüzdür" diyenlere bu yazıyı okumalarını öneririm. Çünkü 2025'te artık akülü teknoloji, benzinli makineleri performansta geride bırakıyor.</div>

            <h4>Performans = Zaman x Güç x Verimlilik</h4>
            <div class="blog-para">Bir profesyonel bahçıvan olarak başarınız üç faktöre bağlı: Ne kadar hızlı çalışıyorsunuz, ne kadar güçlü ekipman kullanıyorsunuz ve ne kadar verimli iş çıkarıyorsunuz.</div>

            <div class="blog-para">Comlink akülü makineler, bu üç faktörde de benzinli rakiplerini geride bırakıyor. Nasıl mı? İşte gerçek rakamlar:</div>

            <h4>Gerçek Performans Testi</h4>
            <div style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h5>400m² Bahçe Biçme Karşılaştırması</h5>

                <div class="blog-para"><strong>Benzinli Makine:</strong></div>
                <ul>
                    <li>Hazırlık (yakıt kontrolü, çekme, ısınma): 5 dakika</li>
                    <li>Biçme süresi: 45 dakika</li>
                    <li>Ara kesinti (yakıt dolumu vb.): 5 dakika</li>
                    <li>Temizlik ve bakım: 5 dakika</li>
                    <li><strong>Toplam: 60 dakika</strong></li>
                </ul>

                <div class="blog-para"><strong>Comlink Akülü Makine:</strong></div>
                <ul>
                    <li>Hazırlık (batarya takma): 30 saniye</li>
                    <li>Biçme süresi: 30 dakika (daha güçlü motor)</li>
                    <li>Ara kesinti: 0 dakika</li>
                    <li>Temizlik ve bakım: 2 dakika</li>
                    <li><strong>Toplam: 33 dakika</strong></li>
                </ul>
            </div>

            <blockquote>
                "400m²'de 27 dakika kazanıyorsunuz. Günde 5 müşteri = 135 dakika = 2 saat 15 dakika. İlave 2 müşteri daha alabileceğiniz süre."
            </blockquote>

            <h4>Fırçasız Motor Teknolojisi: Gücün Sırrı</h4>
            <div class="blog-para">Comlink makineler, patentli fırçasız (brushless) motor teknolojisi kullanıyor. Bu ne demek?</div>

            <ul>
                <li><strong>%30 Daha Fazla Güç:</strong> Aynı enerjiyle daha fazla iş</li>
                <li><strong>Sabit Performans:</strong> İlk dakikadan son dakikaya kadar aynı güç</li>
                <li><strong>Sıfır Güç Kaybı:</strong> Benzinli makinelerde motor yıpranır, güç düşer</li>
                <li><strong>Anında Maksimum Tork:</strong> Düğmeye bastığınız anda full güç</li>
            </ul>

            <div class="blog-para">Benzinli makinelerde motor yıprandıkça güç düşer. 2-3 yıl sonra aynı işi yapmak daha uzun sürer. Comlink'te bu sorun yok.</div>

            <h4>Profesyoneller İçin Kritik Avantajlar</h4>

            <h5>1. Sabah 7'de Başlayın</h5>
            <div class="blog-para">Sessiz çalışma sayesinde komşuları rahatsız etmeden erken saatlerde işe başlayabilirsiniz. Bu da demek oluyor ki günde 2-3 saat daha fazla çalışma imkanı.</div>

            <h5>2. Ara Vermeden Çalışın</h5>
            <div class="blog-para">Comlink'in ortak batarya sistemi sayesinde bir batarya biterken diğerini takıyorsunuz. Yakıt dolumu için durmaya, benzin istasyonuna gitmeye gerek yok.</div>

            <h5>3. Daha Fazla Müşteri, Daha Fazla Kazanç</h5>
            <div class="blog-para">Hesaplayalım: Günde ortalama 3 müşteri yerine 5 müşteriye gidebiliyorsunuz. Aylık 40 yerine 66 müşteri. %65 gelir artışı. Yıllık hesaplarsanız, makine kendini 6 ayda amorti ediyor.</div>

            <h4>Dayanıklılık ve Güvenilirlik</h4>
            <div class="blog-para">Performans sadece hız değil, güvenilirlik de önemli. Comlink makineler:</div>

            <ul>
                <li><strong>IP66 Sertifika:</strong> Her hava koşulunda çalışır</li>
                <li><strong>Taiwan Excellence Ödüllü:</strong> Uluslararası kalite güvencesi</li>
                <li><strong>Profesyonel Kullanım Garantisi:</strong> Ağır işlerde bile dayanıklı</li>
                <li><strong>Minimum Bakım:</strong> Daha az arıza = daha az iş kaybı</li>
            </ul>

            <h4>Yarış Zamanla</h4>
            <div class="blog-para">Profesyonel bahçe bakımı sektöründe rekabet çok yüksek. Fark yaratmak için daha hızlı, daha güçlü ve daha verimli olmalısınız. Comlink bu farkı yaratıyor.</div>

            <div class="blog-para"><strong>Yarış benzinli makinelerle değil, saatlerle.</strong> Her dakika değerli. Her müşteri önemli. Comlink akülü makineler ile performans farkını yaşayın. Daha hızlı, daha güçlü, daha karlı işler yapın.</div>
        `,
        tags: ['Performans', 'Verimlilik', 'Profesyonel', 'Hız', 'Güç'],
        readTime: '6 dk'
    },
    'teknoloji-inovasyon': {
        id: 'teknoloji-inovasyon',
        title: '2024\'te Hala 1970\'lerin Teknolojisiyle mi Çalışıyorsunuz?',
        slug: '1970-teknolojisi',
        category: 'Teknoloji & İnovasyon',
        categoryId: 'teknoloji-inovasyon',
        date: '2 Kasım 2025',
        author: 'Comlink Ekibi',
        excerpt: 'Ödüllü Tayvan teknolojisi, patentli fırçasız motor, akıllı kontrol sistemi. Taiwan Excellence 2017 ve 2019 ödüllü. Geleceğin makineleri bugün sizin elinde. Teknolojiye yatırım yapın.',
        image: 'img/blog/new-blog-images/2024tehala1970lerin teknolojisiilemi.avif',
        visualElements: {
            statistics: [
                { value: '%30', label: 'DAHA VERİMLİ', icon: 'fa-bolt', color: 'purple' },
                { value: '10,000+', label: 'SAAT ÖMÜR', icon: 'fa-infinity', color: 'blue' },
                { value: '2', label: 'TAIWAN EXCELLENCE ÖDÜLÜ', icon: 'fa-trophy', color: 'gold' }
            ],
            comparison: {
                title: 'Benzinli vs Fırçasız Motor Teknolojisi',
                benzinli: [
                    { label: 'Motor Tipi', value: 'Karbüratörlü', icon: 'fa-cog' },
                    { label: 'Verimlilik', value: '%65-70', icon: 'fa-battery-quarter' },
                    { label: 'Bakım', value: 'Yüksek', icon: 'fa-wrench' },
                    { label: 'Güç Kaybı', value: 'Zamanla artar', icon: 'fa-arrow-down' },
                    { label: 'Ömür', value: '2,000 saat', icon: 'fa-hourglass' }
                ],
                akulu: [
                    { label: 'Motor Tipi', value: 'Fırçasız (Brushless)', icon: 'fa-microchip' },
                    { label: 'Verimlilik', value: '%90-95', icon: 'fa-battery-full' },
                    { label: 'Bakım', value: 'Sıfır', icon: 'fa-times-circle' },
                    { label: 'Güç Kaybı', value: 'Yok', icon: 'fa-check-circle' },
                    { label: 'Ömür', value: '10,000+ saat', icon: 'fa-infinity' }
                ],
                totalBenzinli: '1950\'ler Teknolojisi',
                totalAkulu: '2025 Teknolojisi'
            },
            progressBars: [
                { label: 'Enerji Verimliliği', percentage: 95, color: 'green' },
                { label: 'Dayanıklılık', percentage: 100, color: 'blue' },
                { label: 'Teknoloji Seviyesi', percentage: 100, color: 'purple' }
            ],
            badges: [
                { text: 'Taiwan Excellence 2017', icon: 'fa-award', type: 'award' },
                { text: 'Taiwan Excellence 2019', icon: 'fa-award', type: 'award' },
                { text: 'Patentli Fırçasız Motor', icon: 'fa-certificate', type: 'tech' },
                { text: 'IP66 Koruma', icon: 'fa-shield-alt', type: 'cert' }
            ],
            highlights: [
                {
                    type: 'tip',
                    icon: 'fa-lightbulb',
                    title: 'Tesla Teknolojisi Bahçenizde',
                    text: 'Fırçasız motor teknolojisi, Tesla\'nın elektrikli araçlarda kullandığı aynı teknoloji. Artık bahçe makinelerinizde.'
                },
                {
                    type: 'info',
                    icon: 'fa-ban',
                    title: 'Benzinli Motor Yasağı',
                    text: 'AB 2026\'dan, California 2024\'ten itibaren benzinli bahçe makinelerini yasakladı. Gelecek akülü teknolojide.'
                }
            ]
        },
        content: `
            <div class="blog-para">Benzinli bahçe makineleri 1950'lerde icat edildi. 70 yıldır aynı prensiple çalışıyor: Yakıt yakma, piston hareketi, mekanik güç. 2025'te hala bu teknolojiyi kullanıyor musunuz?</div>

            <div class="blog-para">Düşünün: Telefonunuz 70 yıl öncesinin teknolojisi mi? Arabanız? Bilgisayarınız? Hayır. Öyleyse bahçe makineniz neden olsun?</div>

            <h4>Benzinli Motor: 1950'lerin Mirası</h4>
            <div class="blog-para">Benzinli bahçe makinelerinin teknolojisi temelde değişmedi:</div>

            <ul>
                <li>Karbüratör sistemi (1950'lerden kalma)</li>
                <li>Mekanik starter (bazen 10 kere çekmeniz gerek)</li>
                <li>Yakıt pompası ve filtreleri (sürekli bakım gerektirir)</li>
                <li>Egzoz sistemi (emisyon üretiyor)</li>
                <li>Mekanik şanzıman (vites değiştirme, kavrama)</li>
            </ul>

            <div class="blog-para">Bu sistemler eski, verimsiz ve çevreye zararlı. 2025'te bunları kullanmaya devam etmek mantıklı mı?</div>

            <h4>Comlink Teknolojisi: 2025'in Çözümü</h4>

            <h5>1. Fırçasız (Brushless) Motor Teknolojisi</h5>
            <div class="blog-para">Comlink'in kalbi: Patentli fırçasız motor sistemi. Bu teknoloji nedir?</div>

            <ul>
                <li><strong>Elektronik Komütasyon:</strong> Mekanik parça yok, elektronik kontrol var</li>
                <li><strong>%30 Daha Verimli:</strong> Aynı enerjiyle daha fazla iş</li>
                <li><strong>Sıfır Bakım:</strong> Fırça değişimi, yağlama, ayar yok</li>
                <li><strong>Uzun Ömür:</strong> 10.000+ saat sorunsuz çalışma</li>
                <li><strong>Akıllı Güç Yönetimi:</strong> Yük durumuna göre otomatik ayarlama</li>
            </ul>

            <blockquote>
                "Fırçasız motor teknolojisi, Tesla'nın elektrikli araçlarda kullandığı aynı teknoloji. Artık bahçenizde."
            </blockquote>

            <h5>2. Akıllı Batarya Yönetim Sistemi (BMS)</h5>
            <div class="blog-para">Comlink bataryaları sadece enerji deposu değil, akıllı güç merkezleri:</div>

            <ul>
                <li><strong>Sıcaklık Kontrolü:</strong> Aşırı ısınmayı engelleyen sensörler</li>
                <li><strong>Şarj Optimizasyonu:</strong> Batarya ömrünü uzatan akıllı şarj</li>
                <li><strong>Hücre Dengeleme:</strong> Tüm hücrelerin eşit kullanımı</li>
                <li><strong>IP66 Koruma:</strong> Su ve toz geçirmez tasarım</li>
                <li><strong>Gerçek Zamanlı İzleme:</strong> Kalan güç, sağlık durumu gösterimi</li>
            </ul>

            <h5>3. Taiwan Excellence: Uluslararası Kalite</h5>
            <div class="blog-para">Comlink makineler, Taiwan Excellence 2017 ve 2019 ödüllerine sahip. Bu ödüller tesadüf değil:</div>

            <ul>
                <li><strong>Ar-Ge Mükemmelliği:</strong> 5 yıllık araştırma ve geliştirme</li>
                <li><strong>Kalite Standartları:</strong> Uluslararası testlerden geçmiş</li>
                <li><strong>İnovasyon:</strong> Sektörde öncü teknolojiler</li>
                <li><strong>Tasarım:</strong> Ergonomik ve kullanıcı dostu tasarım</li>
            </ul>

            <h4>Dijital Çağın Makineleri</h4>

            <h5>Ortak Batarya Platformu</h5>
            <div class="blog-para">Comlink'in en büyük teknolojik yeniliği: Ortak batarya sistemi. 1 batarya = 9 farklı makine.</div>

            <div class="blog-para">Bu sistem nasıl çalışıyor? Akıllı BMS sayesinde her makine ihtiyacı olan gücü otomatik alıyor. Üfleyici az güç çekiyor, testere daha fazla. Aynı batarya, her makineye optimize performans veriyor.</div>

            <h5>Anında Başlatma</h5>
            <div class="blog-para">Benzinli makinelerde: Çekme, ısınma, ayarlama, bekleme... 5 dakika hazırlık.</div>
            <div class="blog-para">Comlink'te: Bataryayı tak, düğmeye bas. 2 saniye. Anında tam güç.</div>

            <h5>Sessiz Çalışma = İleri Teknoloji</h5>
            <div class="blog-para">Benzinli makineler 95-105 dB gürültü yapıyor. Bu seviye işitme kaybına neden olabilir. Comlink makineler 75-85 dB. Nasıl? İleri akustik mühendislik ve titreşim izolasyonu.</div>  
           
            <h4>Teknoloji = Yatırım</h4>
            <div class="blog-para">İleri teknoloji, başlangıçta daha pahalı görünebilir. Ama uzun vadede:</div>

            <ul>
                <li>Daha az arıza = daha az maliyet</li>
                <li>Daha az bakım = daha az zaman kaybı</li>
                <li>Daha yüksek verimlilik = daha fazla iş</li>
                <li>Daha uzun ömür = daha iyi yatırım getirisi</li>
            </ul>

            <div class="blog-para"><strong>2025'te hala 1970'lerin teknolojisiyle mi çalışacaksınız?</strong> Yoksa geleceğin makinelerine geçiş yapacak mısınız? Comlink ile teknolojiye yatırım yapın. Taiwan Excellence ödüllü, patentli fırçasız motor, akıllı batarya sistemi. Gelecek, bugün elinizde.</div>
        `,
        tags: ['Teknoloji', 'İnovasyon', 'Taiwan Excellence', 'Fırçasız Motor', 'Akıllı Sistem'],
        readTime: '7 dk'
    },
    'yasam-kalitesi': {
        id: 'yasam-kalitesi',
        title: 'Sabah 7\'de Bahçenize Çıkın: Kuş Seslerini Dinleyin',
        slug: 'kus-sesleri',
        category: 'Yaşam Kalitesi',
        categoryId: 'yasam-kalitesi',
        date: '1 Kasım 2025',
        author: 'Comlink Ekibi',
        excerpt: 'Makinenizi açın. Yine kuş sesleri... Sessiz güç bu. Komşunuz sizin çalıştığınızı bile duymasın. Huzurlu bahçe, mutlu hayat. Gürültü kirliliğine son verin, doğayla uyum içinde çalışın.',
        image: 'img/blog/new-blog-images/Sabah7debahçenizeçıkın.avif',
        visualElements: {
            statistics: [
                { value: '75-85 dB', label: 'COMLINK SES SEVİYESİ', icon: 'fa-volume-down', color: 'green' },
                { value: '100 dB', label: 'BENZİNLİ GÜRÜLTÜSÜ', icon: 'fa-volume-up', color: 'red' },
                { value: '20m', label: 'KOMŞU DUYMA MESAFESİ', icon: 'fa-home', color: 'blue' }
            ],
            noiseComparison: [
                {
                    label: '🔇 Normal Konuşma',
                    value: 65,
                    maxValue: 120,
                    db: '60-65 dB',
                    level: 'low',
                    description: 'Rahat ve konforlu seviye'
                },
                {
                    label: '🔉 Comlink Akülü Makineler',
                    value: 80,
                    maxValue: 120,
                    db: '75-85 dB',
                    level: 'low',
                    description: 'Sessiz ve çevre dostu'
                },
                {
                    label: '🔊 Trafik Gürültüsü',
                    value: 85,
                    maxValue: 120,
                    db: '85 dB',
                    level: 'medium',
                    description: 'Orta seviye, uzun süre zararlı'
                },
                {
                    label: '🔊 Benzinli Çim Biçme',
                    value: 100,
                    maxValue: 120,
                    db: '95-105 dB',
                    level: 'high',
                    description: 'Yüksek seviye - işitme kaybı riski'
                },
                {
                    label: '🔊🔊 Rock Konseri',
                    value: 115,
                    maxValue: 120,
                    db: '110-120 dB',
                    level: 'high',
                    description: 'Tehlikeli seviye - hemen koruma gerekli'
                }
            ],
            badges: [
                { text: 'Sessiz Çalışma', icon: 'fa-volume-down', type: 'eco' },
                { text: 'Komşu Dostu', icon: 'fa-home', type: 'eco' },
                { text: 'WHO Standartlarında', icon: 'fa-check-circle', type: 'cert' }
            ],
            highlights: [
                {
                    type: 'info',
                    icon: 'fa-info-circle',
                    title: 'DSÖ Uyarısı',
                    text: 'Dünya Sağlık Örgütü, gürültü kirliliğini hava kirliliğinden sonra ikinci en önemli çevre sağlık riski olarak tanımlıyor.'
                },
                {
                    type: 'success',
                    icon: 'fa-dove',
                    title: 'Doğa İle Uyum',
                    text: 'Comlink kullanıcılarının en çok sevdiği şey: Çalışırken kuş seslerini duyabilmek.'
                }
            ]
        },
        content: `
            <div class="blog-para">Pazar sabahı saat 7. Güneş yeni doğuyor. Kuşlar cıvıldıyor. Komşularınız uyuyor. Ve siz bahçenizde çalışmak istiyorsunuz.</div>

            <div class="blog-para">Benzinli bir makine ile bu mümkün mü? Hayır. Ama Comlink akülü makinelerle? Evet.</div>

            <h4>Sessizlik: Unutulan Lüks</h4>
            <div class="blog-para">Modern dünyada gürültü her yerde. Trafik, inşaat, makineler... Sürekli bir uğultu. Ev sizin huzur alanınız olmalı değil mi? Bahçeniz sizin sessiz köşeniz olmalı değil mi?</div>

            <div class="blog-para">Ama benzinli bir çim biçme makinesi açtığınızda ne oluyor? 100 dB gürültü. Bu seviye ne demek?</div>

            <ul>
                <li>Caddede klakson sesi: 90-95 dB</li>
                <li>Benzinli çim biçme: 95-105 dB</li>
                <li>Rock konseri: 110-120 dB</li>
            </ul>

            <div class="blog-para">Yani bahçenizi biçmek, caddenin ortasında klakürlü araba sürücüleri arasında olmak gibi.</div>

            <h4>Gürültü Kirliliği: Görünmeyen Tehlike</h4>
            <div class="blog-para">Gürültü sadece rahatsız etmiyor. Sağlığa da zararlı:</div>

            <ul>
                <li><strong>İşitme Kaybı:</strong> 85 dB üzeri uzun süre maruz kalma kalıcı hasar verir</li>
                <li><strong>Stres:</strong> Yüksek gürültü kortizol seviyesini artırır</li>
                <li><strong>Uyku Bozukluğu:</strong> Komşularınız için de siz için de</li>
                <li><strong>Kardiyovasküler Sorunlar:</strong> Uzun vadeli gürültü maruziyeti kalp sağlığını etkiler</li>
            </ul>

            <blockquote>
                "Dünya Sağlık Örgütü, gürültü kirliliğini hava kirliliğinden sonra ikinci en önemli çevre sağlık riski olarak tanımlıyor."
            </blockquote>

            <h4>Comlink Farkı: Sessiz Güç</h4>
            <div class="blog-para">Comlink akülü makineler, 75-85 dB seviyesinde çalışıyor. Bu ne kadar sessiz?</div>

            <ul>
                <li>Normal konuşma: 60-65 dB</li>
                <li>Ofis ortamı: 70 dB</li>
                <li>Comlink makineler: 75-85 dB</li>
                <li>Trafik gürültüsü: 85 dB</li>
            </ul>

            <div class="blog-para">Yani Comlink makinenizi çalıştırmak, trafikte yürümekten daha sessiz. Komşunuz 20 metre ötede, sizin çalıştığınızı duyamayabilir.</div>

            <h4>Sabah 7'de Başlayın</h4>
            <div class="blog-para">Sessiz çalışma sadece konfor değil, pratik avantaj da:</div>

            <h5>Profesyoneller İçin:</h5>
            <ul>
                <li>Günün serin saatlerinde çalışın</li>
                <li>Daha erken başlayın, daha erken bitirin</li>
                <li>Daha fazla müşteriye yetişin</li>
                <li>Komşu şikayetleri yok = müşteri kaybı yok</li>
            </ul>

            <h5>Ev Kullanıcıları İçin:</h5>
            <ul>
                <li>Hafta sonu sabah erken bakım yapın</li>
                <li>Çocuklar uyurken çalışın</li>
                <li>Komşu ilişkilerinizi koruyun</li>
                <li>İstediğiniz saatte bahçe bakımı yapın</li>
            </ul>
            
           
        `,
        tags: ['Yaşam Kalitesi', 'Sessiz Çalışma', 'Huzur', 'Komşu İlişkileri', 'Doğa'],
        readTime: '6 dk'
    },
    'ortak-batarya': {
        id: 'ortak-batarya',
        title: 'Tek Batarya, Sonsuz Görev: Ortak Platform Devrimi',
        slug: 'ortak-batarya-platformu',
        category: 'Teknoloji & Pratiklik',
        categoryId: 'teknoloji-pratiklik',
        date: '31 Ekim 2025',
        author: 'Comlink Ekibi',
        excerpt: 'Bir batarya ile 9 farklı makine kullanın. Sabah çim biçin, öğleden sonra dal budayın, akşam yaprak üfleyin. Aynı batarya, aynı verimlilik. IP66 sertifikalı güvenilir sistem.',
        image: 'img/blog/new-blog-images/TekBataryaSonsuzGörev-OrtakPlatform.avif',
        visualElements: {
            statistics: [
                { value: '9', label: 'FARKLI MAKİNE', icon: 'fa-tools', color: 'blue' },
                { value: '1', label: 'BATARYA SİSTEMİ', icon: 'fa-battery-full', color: 'green' },
                { value: '%70', label: 'MALİYET TASARRUFU', icon: 'fa-piggy-bank', color: 'purple' }
            ],
            timeline: [
                {
                    time: '08:00',
                    title: 'Çim Biçme (CK-230D + V7-30Ah)',
                    description: '400m² bahçe, 45 dakika',
                    stats: [
                        { icon: 'fa-battery-three-quarters', text: 'Batarya %60 kaldı' },
                        { icon: 'fa-clock', text: '45 dakika' }
                    ]
                },
                {
                    time: '09:00',
                    title: 'Çit Budama (CK-320 + Aynı Batarya)',
                    description: 'Çit kenarları, 25 dakika',
                    stats: [
                        { icon: 'fa-battery-half', text: 'Batarya %40 kaldı' },
                        { icon: 'fa-clock', text: '25 dakika' }
                    ]
                },
                {
                    time: '09:30',
                    title: 'Yaprak Temizleme (CK-120 + Aynı Batarya)',
                    description: 'Yollar ve bahçe, 20 dakika',
                    stats: [
                        { icon: 'fa-battery-quarter', text: 'Batarya %20 kaldı' },
                        { icon: 'fa-clock', text: '20 dakika' }
                    ]
                },
                {
                    time: '10:00',
                    title: 'Şarj + Kahve Molası',
                    description: 'Batarya şarja takıldı, V7-20Ah yedek batarya kullanıma hazır',
                    stats: [
                        { icon: 'fa-charging-station', text: 'Hızlı şarj' },
                        { icon: 'fa-coffee', text: 'Mola zamanı' }
                    ]
                },
                {
                    time: '11:00',
                    title: 'Ağaç Budama (CK-412 + V7-20Ah)',
                    description: 'Yüksek dallar, 30 dakika',
                    stats: [
                        { icon: 'fa-battery-full', text: 'Yeni batarya' },
                        { icon: 'fa-check', text: 'İş tamamlandı' }
                    ]
                }
            ],
            badges: [
                { text: '56V Li-ion Platform', icon: 'fa-battery-full', type: 'tech' },
                { text: 'IP66 Sertifikalı', icon: 'fa-shield-alt', type: 'cert' },
                { text: 'Akıllı BMS', icon: 'fa-microchip', type: 'tech' }
            ],
            highlights: [
                {
                    type: 'tip',
                    icon: 'fa-lightbulb',
                    title: 'Tek Platform Avantajı',
                    text: '9 makine almak istiyorsunuz. Diğer markalarda: 9 ayrı batarya = 45.000+ TL. Comlink\'te: 2-3 batarya yeterli = 12.000 TL. %70 tasarruf.'
                },
                {
                    type: 'info',
                    icon: 'fa-info-circle',
                    title: 'Akıllı Güç Yönetimi',
                    text: 'BMS sayesinde her makine ihtiyacı kadar güç alıyor. Üfleyici az güç çekiyor, testere daha fazla. Aynı batarya, optimize performans.'
                }
            ]
        },
        content: `
            <div class="blog-para">Hayal edin: Sabah bahçenizi çim biçme makinesiyle biçiyorsunuz. Öğleden sonra aynı bataryayı çit budama makinesine takıyorsunuz. Akşam aynı bataryayı yaprak üfleyicide kullanıyorsunuz. Bir batarya, üç farklı iş, sıfır bekleme.</div>

            <div class="blog-para">Bu sadece hayal değil. Comlink ortak batarya platformunun gerçeği bu.</div>

            <h4>Sorun: Her Makine Için Ayrı Batarya</h4>
            <div class="blog-para">Akülü araç gereçler sektöründeki en büyük sorun: Parçalanmış batarya sistemleri.</div>

            <div class="blog-para">Diğer markalarda durum şöyle:</div>
            <ul>
                <li>Çim biçme makinesi: 40V batarya</li>
                <li>Çit budama: 18V batarya</li>
                <li>Testere: 36V batarya</li>
                <li>Üfleyici: 20V batarya</li>
            </ul>

            <div class="blog-para">3 makine alıyorsunuz, 3 farklı batarya satın alıyorsunuz. 3 farklı şarj aleti. 3 farklı sistem. Toplam maliyet? 20.000+ TL.</div>

            <div class="blog-para">Ama asıl sorun maliyet değil. Pratiklik. Hangi batarya hangi makinede? Şarjlı olan var mı? Hangi şarj aleti nerede?</div>

            <blockquote>
                "Ortalama bir kullanıcının 5 farklı batarya sistemi var. Çoğu zaman hangi bataryanın hangi makineye ait olduğunu karıştırıyor."
            </blockquote>

            <h4>Comlink Çözümü: Tek Platform, Tüm Makineler</h4>
            <div class="blog-para">Comlink'in vizyonu basit ama devrimci: Bir batarya sistemi, dokuz farklı makine.</div>

            <h5>Comlink Ortak Batarya Ailesi:</h5>
            <ul>
                <li>CK-120 Yaprak Üfleyici</li>
                <li>CK-200/210 Ot Biçme</li>
                <li>CK-230D Çim Biçme</li>
                <li>CK-300/320 Çit Budama</li>
                <li>CK-400 Zincirli Testere</li>
                <li>CK-412 Yüksek Dal Budama</li>
                <li>CK-500 Toprak Burgusu</li>
                <li>CK-600 Çapa Makinesi</li>
            </ul>

            <div class="blog-para"><strong>Hepsi aynı batarya ile çalışıyor: 56V Li-ion platform.</strong></div>

            <h4>Akıllı Güç Yönetimi</h4>
            <div class="blog-para">Peki nasıl oluyor da bir batarya tüm bu farklı makinelerde çalışabiliyor?</div>

            <div class="blog-para">Cevap: Akıllı Batarya Yönetim Sistemi (BMS - Battery Management System)</div>

            <ul>
                <li><strong>Otomatik Güç Ayarı:</strong> Her makine ihtiyacı kadar güç alıyor</li>
                <li><strong>Gerilim Optimizasyonu:</strong> Motor tipine göre voltaj ayarlaması</li>
                <li><strong>Akım Kontrolü:</strong> Aşırı yük koruması</li>
                <li><strong>Sıcaklık Yönetimi:</strong> Optimal sıcaklıkta çalışma</li>
            </ul>

            <div class="blog-para">Yani üfleyici az güç çekiyor, testere daha fazla. Ama aynı batarya, ikisine de optimize performans veriyor.</div>

            <h4>Batarya Seçenekleri</h4>
            <div class="blog-para">Comlink üç farklı kapasitede batarya sunuyor:</div>

            <div style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h5>V7-20Ah: Standart Kullanım</h5>
                <ul>
                    <li>Hafif işler için ideal</li>
                    <li>Çim biçme: 60-90 dakika</li>
                    <li>Üfleyici: 80-120 dakika</li>
                    <li>Ağırlık: 3.2 kg</li>
                </ul>

                <h5>V7-30Ah: Profesyonel Kullanım</h5>
                <ul>
                    <li>Uzun süreli işler için</li>
                    <li>Çim biçme: 90-150 dakika</li>
                    <li>Testere: 60-100 dakika</li>
                    <li>Ağırlık: 4.5 kg</li>
                </ul>

                <h5>V8-15Ah: Kompakt Güç</h5>
                <ul>
                    <li>Taşınabilirlik ön planda</li>
                    <li>Hafif makineler için ideal</li>
                    <li>Üfleyici: 60-90 dakika</li>
                    <li>Ağırlık: 2.8 kg</li>
                </ul>
            </div>

            <h4>IP66 Sertifikası: Her Koşulda Güvenli</h4>
            <div class="blog-para">Comlink bataryaları IP66 sertifikalı. Bu ne demek?</div>

            <ul>
                <li><strong>IP6X - Toz Geçirmez:</strong> Hiçbir toz parçacığı giremiyor</li>
                <li><strong>IPX6 - Su Geçirmez:</strong> Yüksek basınçlı su jetine dayanıklı</li>
            </ul>

            <div class="blog-para">Yani yağmurda çalışabilirsiniz, ıslak çimde çalışabilirsiniz, tozlu ortamda çalışabilirsiniz. Batarya her koşulda güvende.</div>

            <h4>Pratik Avantajlar</h4>

            <h5>1. Maliyet Tasarrufu</h5>
            <div class="blog-para">9 makine almak istiyorsunuz. Diğer markalarda: 9 ayrı batarya = 45.000+ TL. Comlink'te: 2-3 batarya yeterli = 12.000 TL. %70 tasarruf.</div>

            <h5>2. Depolama Kolaylığı</h5>
            <div class="blog-para">9 farklı batarya ve şarj aleti yerine 2-3 batarya ve 1 şarj aleti. Garajınızda veya deponuzda %80 daha az yer kaplıyor.</div>

            <h5>3. Zaman Kazancı</h5>
            <div class="blog-para">Bir iş bittiğinde bataryayı çıkar, diğer makineye tak. 10 saniye. Başka bir batarya aramaya gerek yok.</div>

            <h5>4. Esneklik</h5>
            <div class="blog-para">Planladığınız işi bitirdiniz ama batarya hala dolu. Başka bir iş daha yapabilirsiniz. Aynı batarya, farklı makine.</div>
           
            <h4>Tek Batarya Devrimi</h4>
            <div class="blog-para">Ortak batarya platformu sadece bir özellik değil, bir felsefe. Comlink'in vizyonu: Basitlik, verimlilik, ekonomi.</div>

            <div class="blog-para"><strong>Tek batarya, sonsuz görev.</strong> Sabah çim biçin, öğleden sonra dal budayın, akşam yaprak üfleyin. Hep aynı batarya, hep aynı verimlilik. IP66 sertifikalı güvenilir sistem. Comlink ortak platform devrimi ile tanışın.</div>
        `,
        tags: ['Ortak Batarya', 'Pratiklik', 'Verimlilik', 'IP66', 'Platform'],
        readTime: '7 dk'
    }
};

// Blog ID'sine göre blog bilgisini getiren fonksiyon
function getPost(postId) {
    return blogsData[postId] || null;
}

// Tüm blogları getiren fonksiyon
function getAllPosts() {
    return Object.values(blogsData);
}

// Kategoriye göre blogları getiren fonksiyon
function getPostsByCategory(categoryId) {
    return Object.values(blogsData).filter(post => post.categoryId === categoryId);
}

// Son N blog yazısını getiren fonksiyon
function getRecentPosts(count = 3) {
    return Object.values(blogsData).slice(0, count);
}

// ==================== FİLTRELEME FONKSİYONLARI ====================

// Blog yazılarını filtrele
function filterPosts(filters = {}) {
    let posts = getAllPosts();

    // Kategoriye göre filtrele
    if (filters.category && filters.category !== 'all') {
        posts = posts.filter(post => post.categoryId === filters.category);
    }

    // Aramaya göre filtrele
    if (filters.search && filters.search.trim() !== '') {
        const searchTerm = filters.search.toLowerCase().trim();
        posts = posts.filter(post => {
            const titleMatch = post.title.toLowerCase().includes(searchTerm);
            const excerptMatch = post.excerpt.toLowerCase().includes(searchTerm);
            const categoryMatch = post.category.toLowerCase().includes(searchTerm);
            const tagsMatch = post.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            return titleMatch || excerptMatch || categoryMatch || tagsMatch;
        });
    }

    // Sıralamaya göre düzenle
    if (filters.sort) {
        switch (filters.sort) {
            case 'date-desc':
                // Yeni yazılar önce (varsayılan)
                posts = posts.sort((a, b) => b.id.localeCompare(a.id));
                break;
            case 'date-asc':
                // Eski yazılar önce
                posts = posts.sort((a, b) => a.id.localeCompare(b.id));
                break;
            case 'title-asc':
                // A-Z
                posts = posts.sort((a, b) => a.title.localeCompare(b.title, 'tr'));
                break;
            case 'title-desc':
                // Z-A
                posts = posts.sort((a, b) => b.title.localeCompare(a.title, 'tr'));
                break;
            default:
                // Varsayılan: Yeni yazılar önce
                posts = posts.sort((a, b) => b.id.localeCompare(a.id));
        }
    }

    return posts;
}

// ==================== PAGINATION FONKSİYONLARI ====================

// Sayfalanmış blog yazılarını getir
function getPostsPaginated(page = 1, itemsPerPage = 6, filters = {}) {
    const allPosts = filterPosts(filters);
    const totalItems = allPosts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Sayfa numarasını düzelt
    page = Math.max(1, Math.min(page, totalPages));

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const posts = allPosts.slice(startIndex, endIndex);

    return {
        posts: posts,
        pagination: {
            currentPage: page,
            totalPages: totalPages,
            totalItems: totalItems,
            itemsPerPage: itemsPerPage,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1,
            startIndex: startIndex + 1,
            endIndex: Math.min(endIndex, totalItems)
        }
    };
}

// Toplam sayfa sayısını getir
function getTotalBlogPages(itemsPerPage = 6, filters = {}) {
    const allPosts = filterPosts(filters);
    return Math.ceil(allPosts.length / itemsPerPage);
}

// Tüm kategorileri getir (blog sayısıyla birlikte)
function getBlogCategories() {
    const categories = {};
    const posts = getAllPosts();

    posts.forEach(post => {
        if (!categories[post.categoryId]) {
            categories[post.categoryId] = {
                id: post.categoryId,
                name: post.category,
                count: 0
            };
        }
        categories[post.categoryId].count++;
    });

    return Object.values(categories).sort((a, b) => a.name.localeCompare(b.name, 'tr'));
}

// Toplam blog yazısı sayısını getir
function getTotalPostCount() {
    return getAllPosts().length;
}
