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
            main: 'img/products/ck-120-profesyonel-yaprak-ufleyici.png',
            gallery: [
                'img/products/ÜRÜNLER/CK-120/1.jpg',
                'img/products/ÜRÜNLER/CK-120/11.jpg',
                'img/products/ÜRÜNLER/CK-120/CK-120 PROFESYONEL YAPRAK ÜFLEYICI.png'
            ]
        },
        tags: ['Yaprak Üfleyici', 'Akülü', 'Profesyonel', 'Bahçe'],
        whyChoose: 'Comlink CK-120 yaprak üfleyici, profesyonel kullanıcılar için özel olarak geliştirilmiş yüksek performanslı bir üründür. Fırçasız motor teknolojisi sayesinde uzun ömürlü kullanım, bakım gerektirmeyen yapı ve sessiz çalışma özellikleri sunar.',
        whyChoose2: 'IP66 sertifikalı bataryalar ile her türlü hava koşulunda güvenle kullanabilirsiniz. Ortak batarya platformu sayesinde tüm Comlink ürünleriyle uyumlu çalışır, bu da hem ekonomik hem de pratik bir çözüm sağlar.',
        visualElements: {
            statistics: [
                { value: '240 km/h', label: 'MAX HAVA HIZI', icon: 'fa-wind', color: 'blue' },
                { value: '85 dB', label: 'SES SEVİYESİ', icon: 'fa-volume-down', color: 'green' },
                { value: '2.8 kg', label: 'HAFİF TASARIM', icon: 'fa-weight', color: 'purple' }
            ],
            performanceMetrics: [
                { label: 'Güç/Performans', percentage: 95, color: 'blue', icon: 'fa-bolt' },
                { label: 'Sessiz Çalışma', percentage: 88, color: 'green', icon: 'fa-volume-down' },
                { label: 'Batarya Verimliliği', percentage: 92, color: 'purple', icon: 'fa-battery-full' }
            ],
            badges: [
                { text: 'Taiwan Excellence', icon: 'fa-award', type: 'award' },
                { text: 'IP66 Sertifikalı', icon: 'fa-shield-alt', type: 'cert' },
                { text: 'Fırçasız Motor', icon: 'fa-cog', type: 'tech' },
                { text: 'Sıfır Emisyon', icon: 'fa-leaf', type: 'eco' }
            ],
            highlights: [
                {
                    type: 'success',
                    icon: 'fa-check-circle',
                    title: 'Ayarlanabilir Hız Kontrolü',
                    text: '0-240 km/h arası hassas hız ayarı. İş yüküne göre optimize edin, batarya ömrünü uzatın.'
                },
                {
                    type: 'tip',
                    icon: 'fa-battery-full',
                    title: 'Ortak Batarya Platformu',
                    text: 'Tüm Comlink ürünleriyle uyumlu. Bir batarya, 9 farklı makine. Ekonomik ve pratik.'
                }
            ],
            comparison: {
                title: 'Benzinli vs Comlink CK-120',
                benzinli: [
                    { label: 'Çalışma Süresi', value: '2-3 saat', icon: 'fa-clock', note: 'Yakıt dolumu gerekir' },
                    { label: 'Ses Seviyesi', value: '100+ dB', icon: 'fa-volume-up', note: 'Kulaklık gerekli' },
                    { label: 'Ağırlık', value: '4-5 kg', icon: 'fa-weight-hanging', note: 'Yorucu' },
                    { label: 'Bakım', value: 'Yüksek', icon: 'fa-wrench', note: 'Yağ, filtre değişimi' },
                    { label: 'Emisyon', value: 'Yüksek CO2', icon: 'fa-smog', note: 'Çevre kirliliği' }
                ],
                comlink: [
                    { label: 'Çalışma Süresi', value: '40-90 dk', icon: 'fa-battery-three-quarters', note: 'Bataryaya göre' },
                    { label: 'Ses Seviyesi', value: '≤85 dB', icon: 'fa-volume-down', note: 'Sessiz çalışma' },
                    { label: 'Ağırlık', value: '2.8 kg', icon: 'fa-feather', note: 'Hafif ve ergonomik' },
                    { label: 'Bakım', value: 'Sıfır', icon: 'fa-times-circle', note: 'Bakım gerektirmez' },
                    { label: 'Emisyon', value: 'Sıfır', icon: 'fa-leaf', note: 'Çevre dostu' }
                ]
            }
        }
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
            main: 'img/products/ck-210-profesyonel-ot-bicme-makinesi.png',
            gallery: ['img/products/ÜRÜNLER/CK-210/21.png', 'img/products/ÜRÜNLER/CK-210/22.png', 'img/products/ÜRÜNLER/CK-210/23.png']
        },
        tags: ['Ot Biçme', 'Akülü', 'Profesyonel', 'Bahçe'],
        whyChoose: 'CK-200/210 ot biçme makinesi, geniş alanlarda profesyonel performans sunar. Tek kesimli sistemi ile düzgün ve temiz kesim sağlar. Fırçasız motor teknolojisi sayesinde uzun ömürlü ve bakım gerektirmeyen kullanım imkanı sunar.',
        whyChoose2: 'IP66 sertifikalı bataryalar ile her türlü hava koşulunda güvenle çalışabilirsiniz. Ergonomik tasarımı sayesinde uzun süreli kullanımlarda bile yorulmadan çalışırsınız.',
        visualElements: {
            statistics: [
                { value: '42 cm', label: 'KESİM GENİŞLİĞİ', icon: 'fa-arrows-alt-h', color: 'blue' },
                { value: '≤88 dB', label: 'SES SEVİYESİ', icon: 'fa-volume-down', color: 'green' },
                { value: '8.5 kg', label: 'AĞIRLIK', icon: 'fa-weight', color: 'purple' }
            ],
            performanceMetrics: [
                { label: 'Güç/Performans', percentage: 90, color: 'blue', icon: 'fa-bolt' },
                { label: 'Kesim Kalitesi', percentage: 93, color: 'green', icon: 'fa-cut' },
                { label: 'Batarya Verimliliği', percentage: 90, color: 'purple', icon: 'fa-battery-full' }
            ],
            badges: [
                { text: 'Taiwan Excellence', icon: 'fa-award', type: 'award' },
                { text: 'IP66 Sertifikalı', icon: 'fa-shield-alt', type: 'cert' },
                { text: 'Fırçasız Motor', icon: 'fa-cog', type: 'tech' },
                { text: 'Sıfır Emisyon', icon: 'fa-leaf', type: 'eco' }
            ],
            highlights: [
                {
                    type: 'success',
                    icon: 'fa-ruler-horizontal',
                    title: 'Geniş Kesim Alanı (42cm)',
                    text: 'Profesyonel performans için tasarlanmış 42cm geniş kesim alanı. Daha az geçişle daha çok iş yapın.'
                },
                {
                    type: 'tip',
                    icon: 'fa-battery-full',
                    title: 'Uzun Çalışma Süresi',
                    text: 'V7-30Ah batarya ile 120 dakikaya kadar kesintisiz çalışma. Geniş alanları tek şarjla bitirin.'
                }
            ],
            comparison: {
                title: 'Benzinli vs Comlink CK-200/210',
                benzinli: [
                    { label: 'Çalışma Süresi', value: '2-3 saat', icon: 'fa-clock', note: 'Yakıt dolumu gerekir' },
                    { label: 'Ses Seviyesi', value: '95+ dB', icon: 'fa-volume-up', note: 'Kulaklık gerekli' },
                    { label: 'Ağırlık', value: '15-20 kg', icon: 'fa-weight-hanging', note: 'Ağır ve hantal' },
                    { label: 'Bakım', value: 'Yüksek', icon: 'fa-wrench', note: 'Yağ, filtre, bujiler' },
                    { label: 'Emisyon', value: 'Yüksek CO2', icon: 'fa-smog', note: 'Çevre kirliliği' }
                ],
                comlink: [
                    { label: 'Çalışma Süresi', value: '45-120 dk', icon: 'fa-battery-three-quarters', note: 'Bataryaya göre' },
                    { label: 'Ses Seviyesi', value: '≤88 dB', icon: 'fa-volume-down', note: 'Sessiz çalışma' },
                    { label: 'Ağırlık', value: '8.5 kg', icon: 'fa-feather', note: 'Hafif ve dengeli' },
                    { label: 'Bakım', value: 'Sıfır', icon: 'fa-times-circle', note: 'Bakım gerektirmez' },
                    { label: 'Emisyon', value: 'Sıfır', icon: 'fa-leaf', note: 'Çevre dostu' }
                ]
            }
        }
    },
    'ck-400': {
        id: 'ck-400',
        model: 'CK-400',
        name: 'CK-400 El Tipi Zincirli Testere',
        category: 'Dal Budama',
        categoryId: 'dal-budama',
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
            main: 'img/products/ck-400-el-tipi-zincirli-testere.png',
            gallery: ['img/products/ÜRÜNLER/CK-400/1.jpg', 'img/products/ÜRÜNLER/CK-400/2.jpg']
        },
        tags: ['Zincirli Testere', 'Akülü', 'Profesyonel', 'Ağaç Kesimi'],
        whyChoose: 'CK-400 zincirli testere, profesyonel ağaç kesimi ve budama işleri için idealdir. Otomatik yağlama sistemi sayesinde bakım gerektirmez. Güvenlik özellikleri ile korumalı kullanım sağlar.',
        whyChoose2: 'Benzinli testerelere göre çok daha sessiz ve çevre dostudur. Bakım maliyeti düşüktür. IP66 sertifikalı bataryalar ile her hava koşulunda güvenle kullanılabilir.',
        visualElements: {
            statistics: [
                { value: '35 cm', label: 'KILIÇ UZUNLUĞU', icon: 'fa-ruler', color: 'blue' },
                { value: '15 m/s', label: 'ZİNCİR HIZI', icon: 'fa-tachometer-alt', color: 'red' },
                { value: '4.8 kg', label: 'AĞIRLIK', icon: 'fa-weight', color: 'purple' }
            ],
            performanceMetrics: [
                { label: 'Kesim Gücü', percentage: 92, color: 'blue', icon: 'fa-cut' },
                { label: 'Güvenlik', percentage: 95, color: 'green', icon: 'fa-shield-alt' },
                { label: 'Batarya Verimliliği', percentage: 88, color: 'purple', icon: 'fa-battery-full' }
            ],
            badges: [
                { text: 'Taiwan Excellence', icon: 'fa-award', type: 'award' },
                { text: 'IP66 Sertifikalı', icon: 'fa-shield-alt', type: 'cert' },
                { text: 'Zincir Fren Sistemi', icon: 'fa-hand-paper', type: 'tech' },
                { text: 'Sıfır Emisyon', icon: 'fa-leaf', type: 'eco' }
            ],
            highlights: [
                {
                    type: 'success',
                    icon: 'fa-oil-can',
                    title: 'Otomatik Zincir Yağlama',
                    text: 'Otomatik yağlama sistemi ile zincir sürekli yağlanır. Bakım ihtiyacını minimize eder.'
                },
                {
                    type: 'tip',
                    icon: 'fa-hand-paper',
                    title: 'Gelişmiş Güvenlik Sistemi',
                    text: 'Zincir fren sistemi ve geri tepme koruması ile maksimum güvenlik. Her koşulda güvenle çalışın.'
                }
            ],
            comparison: {
                title: 'Benzinli Testere vs Comlink CK-400',
                benzinli: [
                    { label: 'Çalışma Süresi', value: '2-3 saat', icon: 'fa-clock', note: 'Yakıt dolumu gerekir' },
                    { label: 'Ses Seviyesi', value: '110+ dB', icon: 'fa-volume-up', note: 'Çok gürültülü' },
                    { label: 'Ağırlık', value: '6-8 kg', icon: 'fa-weight-hanging', note: 'Ağır' },
                    { label: 'Bakım', value: 'Yüksek', icon: 'fa-wrench', note: 'Yağ, filtre, bujiler' },
                    { label: 'Titreşim', value: 'Yüksek', icon: 'fa-exclamation-triangle', note: 'Yorucu' }
                ],
                comlink: [
                    { label: 'Çalışma Süresi', value: '30-60 dk', icon: 'fa-battery-three-quarters', note: 'Bataryaya göre' },
                    { label: 'Ses Seviyesi', value: '≤95 dB', icon: 'fa-volume-down', note: 'Sessiz çalışma' },
                    { label: 'Ağırlık', value: '4.8 kg', icon: 'fa-feather', note: 'Hafif ve dengeli' },
                    { label: 'Bakım', value: 'Minimum', icon: 'fa-check-circle', note: 'Sadece zincir yağı' },
                    { label: 'Titreşim', value: 'Düşük', icon: 'fa-smile', note: 'Rahat kullanım' }
                ]
            }
        }
    },
    'ck-230d': {
        id: 'ck-230d',
        model: 'CK-230D',
        name: 'CK-230D Çim Biçme Makinesi',
        category: 'Çim Biçme',
        categoryId: 'cim-bicme',
        shortDesc: 'Küçük tanklı profesyonel çim ve ot biçme makinesi. Motor ve uzatma borusu dahil. Bahçe bakımı için ideal.',
        description: 'CK-230D küçük tanklı profesyonel çim biçme makinesi, motor ve uzatma borusu ile birlikte gelir. Çift bölmeli ve çıkarılabilir yapısı ile kolay taşıma ve saklama imkanı sunar.',
        description2: '167x38x17 cm ölçülerinde ve 4 kg ağırlığında hafif bir makinedir. IP46 su ve toz geçirmez özelliği ile her koşulda güvenle kullanılabilir.',
        features: [
            'Küçük tanklı tasarım',
            'Motor ve uzatma borusu dahil',
            'Çift bölmeli yapı',
            'IP46 su ve toz geçirmez',
            'Hafif ve kullanışlı (4 kg)',
            'Çim biçme için özel',
            'Kolay depolama (54x38x16 cm)',
            'Profesyonel performans'
        ],
        specs: {
            'Model': 'CK-230D',
            'Vücut Ölçüsü': '167x38x17 cm',
            'Depolama Boyu': '54x38x16 cm',
            'Ağırlık': '4 kg (üst bölüm: 2.9 kg)',
            'Su ve Toz Geçirmez': 'IP46',
            'Gövde Yapısı': 'Çift bölmeli, çıkarılabilir',
            'İçerik': 'Motor + Uzatma borusu',
            'Uyumlu Bataryalar': 'V7-20Ah / V7-30Ah / V8-15Ah',
            'Kullanım Alanı': 'Çim ve ot biçme'
        },
        usageAreas: [
            { icon: 'leaf', text: 'Çim biçme' },
            { icon: 'home', text: 'Konut bahçeleri' },
            { icon: 'tree', text: 'Park bakımı' },
            { icon: 'building', text: 'Küçük yeşil alanlar' },
            { icon: 'industry', text: 'Bahçe bakımı' },
            { icon: 'garden', text: 'Peyzaj düzenleme' }
        ],
        images: {
            main: 'img/products/ck-230d-cim-bicme-makinesi.png',
            gallery: ['img/products/ÜRÜNLER/CK-230D/IMG_5785-scaled.jpg', 'img/products/ÜRÜNLER/CK-230D/IMG_5789-scaled.jpg']
        },
        tags: ['Çim Biçme', 'Akülü', 'Profesyonel', 'Küçük Tank'],
        whyChoose: 'CK-230D çim biçme makinesi, küçük ve orta boy bahçeler için ideal bir çözümdür. Motor ve uzatma borusu dahil olarak gelen makine, kolay montaj ve kullanım sağlar.',
        whyChoose2: 'Hafif yapısı sayesinde uzun süreli kullanımlarda yorulmadan çalışabilirsiniz. Çift bölmeli tasarımı ile depolama alanından tasarruf edersiniz.',
        visualElements: {
            statistics: [
                { value: '4 kg', label: 'AĞIRLIK', icon: 'fa-weight', color: 'purple' },
                { value: 'IP46', label: 'SU/TOZ KORUMA', icon: 'fa-shield-alt', color: 'blue' },
                { value: '167 cm', label: 'UZUNLUK', icon: 'fa-ruler-vertical', color: 'green' }
            ],
            performanceMetrics: [
                { label: 'Hafiflik', percentage: 95, color: 'purple', icon: 'fa-feather-alt' },
                { label: 'Taşınabilirlik', percentage: 93, color: 'blue', icon: 'fa-suitcase' },
                { label: 'Dayanıklılık', percentage: 90, color: 'green', icon: 'fa-shield-alt' }
            ],
            badges: [
                { text: 'IP46 Sertifikalı', icon: 'fa-shield-alt', type: 'cert' },
                { text: 'Çift Bölmeli', icon: 'fa-layer-group', type: 'tech' },
                { text: 'Hafif Tasarım', icon: 'fa-feather', type: 'tech' },
                { text: 'Sıfır Emisyon', icon: 'fa-leaf', type: 'eco' }
            ],
            highlights: [
                {
                    type: 'success',
                    icon: 'fa-archive',
                    title: 'Kolay Depolama',
                    text: 'Çift bölmeli tasarımı sayesinde 54x38x16 cm\'ye kadar küçülür. Dar alanlarda kolayca saklanır.'
                },
                {
                    type: 'tip',
                    icon: 'fa-tools',
                    title: 'Komple Set',
                    text: 'Motor ve uzatma borusu dahil. Kutudan çıkar çıkmaz kullanıma hazır. Ek aksesuar almaya gerek yok.'
                }
            ],
            comparison: {
                title: 'Benzinli vs Comlink CK-230D',
                benzinli: [
                    { label: 'Ağırlık', value: '6-8 kg', icon: 'fa-weight-hanging', note: 'Yorucu' },
                    { label: 'Ses Seviyesi', value: '95+ dB', icon: 'fa-volume-up', note: 'Gürültülü' },
                    { label: 'Depolama', value: 'Büyük', icon: 'fa-warehouse', note: 'Yer kaplar' },
                    { label: 'Bakım', value: 'Yüksek', icon: 'fa-wrench', note: 'Sürekli bakım' },
                    { label: 'Emisyon', value: 'Yüksek CO2', icon: 'fa-smog', note: 'Çevre kirliliği' }
                ],
                comlink: [
                    { label: 'Ağırlık', value: '4 kg', icon: 'fa-feather', note: 'Çok hafif' },
                    { label: 'Ses Seviyesi', value: '≤85 dB', icon: 'fa-volume-down', note: 'Sessiz' },
                    { label: 'Depolama', value: '54x38x16 cm', icon: 'fa-compress', note: 'Kompakt' },
                    { label: 'Bakım', value: 'Sıfır', icon: 'fa-check-circle', note: 'Bakımsız' },
                    { label: 'Emisyon', value: 'Sıfır', icon: 'fa-leaf', note: 'Çevre dostu' }
                ]
            }
        }
    },
    'ck-320': {
        id: 'ck-320',
        model: 'CK-320',
        name: 'CK-320 Çift Taraflı Çit Budama Makinesi',
        category: 'Çit Budama',
        categoryId: 'cit-budama',
        shortDesc: 'Elde taşınabilir çift taraflı çit budama makinesi. 60 cm çift kenarlı bıçak ile profesyonel kesim. Çit, çay ve meyve ağacı budama için ideal.',
        description: 'CK-320 çift taraflı çit budama makinesi, 60 cm uzunluğunda çift kenarlı bıçağı ile profesyonel kesim performansı sunar. Çitler, çay ağaçları ve meyve ağaçlarının budanması için ideal bir çözümdür.',
        description2: '125x9x9.5 cm ölçülerinde ve 3.7 kg ağırlığında hafif bir makinedir. Ergonomik tasarımı sayesinde uzun süreli kullanımlarda rahat çalışma imkanı sunar.',
        features: [
            'Çift taraflı kesim',
            '60 cm çift kenarlı bıçak',
            'Hafif ve dengeli (3.7 kg)',
            'Çit, çay, meyve ağacı için',
            'Profesyonel performans',
            'Ergonomik tutamaklar',
            'Güçlü motor',
            'Ortak batarya platformu'
        ],
        specs: {
            'Model': 'CK-320',
            'Gövde Ölçüsü': '125x9x9.5 cm',
            'Ağırlık': '3.7 kg',
            'Bıçak Tipi': 'Çift kenarlı',
            'Bıçak Uzunluğu': '60 cm',
            'Uygulanabilirlik': 'Çit, çay ağacı, meyve ağacı budama',
            'Uyumlu Bataryalar': 'V7-20Ah / V7-30Ah / V8-15Ah',
            'Pil IP Sertifika': 'IP66',
            'BSMI Sertifika': 'R45555'
        },
        usageAreas: [
            { icon: 'leaf', text: 'Çit budama' },
            { icon: 'tree', text: 'Çay bahçeleri' },
            { icon: 'apple', text: 'Meyve ağaçları' },
            { icon: 'home', text: 'Konut bahçeleri' },
            { icon: 'building', text: 'Belediye peyzaj' },
            { icon: 'park', text: 'Park bakımı' }
        ],
        images: {
            main: 'img/products/ck-320-elde-tasinabilir-cift-tarafli-cit-budama-makinesi.png',
            gallery: ['img/products/ÜRÜNLER/CK-320/1.png', 'img/products/ÜRÜNLER/CK-320/ÇİT BUDAMA.png']
        },
        tags: ['Çit Budama', 'Akülü', 'Profesyonel', 'Çift Taraflı'],
        whyChoose: 'CK-320 çift taraflı çit budama makinesi, profesyonel budama işleri için en verimli çözümdür. Çift kenarlı bıçağı sayesinde hem ileriye hem geriye doğru kesim yapabilirsiniz, bu da iş verimliliğini artırır.',
        whyChoose2: 'Çitler, çay bahçeleri ve meyve ağaçlarının budanmasında mükemmel performans gösterir. Hafif yapısı ve dengeli tasarımı ile uzun süreli kulanımlarda yorulmadan çalışabilirsiniz.',
        visualElements: {
            statistics: [
                { value: '60 cm', label: 'BIÇAK UZUNLUĞU', icon: 'fa-ruler-horizontal', color: 'blue' },
                { value: '3.7 kg', label: 'AĞIRLIK', icon: 'fa-weight', color: 'purple' },
                { value: '2 Yön', label: 'ÇİFT TARAFLI', icon: 'fa-arrows-alt-h', color: 'green' }
            ],
            performanceMetrics: [
                { label: 'Kesim Verimliliği', percentage: 94, color: 'blue', icon: 'fa-cut' },
                { label: 'Ergonomi', percentage: 92, color: 'green', icon: 'fa-hand-holding' },
                { label: 'Batarya Verimliliği', percentage: 90, color: 'purple', icon: 'fa-battery-full' }
            ],
            badges: [
                { text: 'IP66 Sertifikalı', icon: 'fa-shield-alt', type: 'cert' },
                { text: 'Çift Taraflı Bıçak', icon: 'fa-arrows-alt-h', type: 'tech' },
                { text: 'BSMI Onaylı', icon: 'fa-certificate', type: 'cert' },
                { text: 'Sıfır Emisyon', icon: 'fa-leaf', type: 'eco' }
            ],
            highlights: [
                {
                    type: 'success',
                    icon: 'fa-ruler-horizontal',
                    title: '60cm Uzun Bıçak',
                    text: '60 cm çift kenarlı bıçak ile geniş alanları hızla budayın. Profesyonel sonuçlar alın.'
                },
                {
                    type: 'tip',
                    icon: 'fa-arrows-alt-h',
                    title: 'Çift Yönlü Kesim',
                    text: 'İleri ve geri yönde kesim yapabilen çift taraflı bıçak. Çalışma verimliliğini %50 artırır.'
                }
            ],
            comparison: {
                title: 'Benzinli vs Comlink CK-320',
                benzinli: [
                    { label: 'Ağırlık', value: '5-6 kg', icon: 'fa-weight-hanging', note: 'Yorucu' },
                    { label: 'Ses Seviyesi', value: '100+ dB', icon: 'fa-volume-up', note: 'Çok gürültülü' },
                    { label: 'Titreşim', value: 'Yüksek', icon: 'fa-exclamation-triangle', note: 'El yorgunluğu' },
                    { label: 'Bakım', value: 'Yüksek', icon: 'fa-wrench', note: 'Sürekli bakım' },
                    { label: 'Emisyon', value: 'Yüksek CO2', icon: 'fa-smog', note: 'Çevre kirliliği' }
                ],
                comlink: [
                    { label: 'Ağırlık', value: '3.7 kg', icon: 'fa-feather', note: 'Çok hafif' },
                    { label: 'Ses Seviyesi', value: '≤85 dB', icon: 'fa-volume-down', note: 'Sessiz' },
                    { label: 'Titreşim', value: 'Düşük', icon: 'fa-smile', note: 'Rahat kullanım' },
                    { label: 'Bakım', value: 'Sıfır', icon: 'fa-check-circle', note: 'Bakımsız' },
                    { label: 'Emisyon', value: 'Sıfır', icon: 'fa-leaf', note: 'Çevre dostu' }
                ]
            }
        }
    },
    'ck-500': {
        id: 'ck-500',
        model: 'CK-500',
        name: 'CK-500 Profesyonel Toprak Matkabı',
        category: 'Toprak Burgu',
        categoryId: 'toprak-burgu',
        shortDesc: '1150W güçlü motor ile profesyonel toprak delme. İki çalışma modu (Standart ve Uzman). 15 cm altı çalışma ölçüsü önerilir.',
        description: 'CK-500 profesyonel toprak matkabı, 1150W güçlü motor ve iki farklı çalışma modu ile profesyonel performans sunar. Standart mod ve Uzman modu ile farklı toprak koşullarına uygun çalışma imkanı sağlar.',
        description2: '65x36x29 cm ölçülerinde ve 4.5 kg ağırlığında güçlü bir makinedir. V7-20Ah batarya ile uzun çalışma süresi sunar. Direk dikimi, ağaç dikimi ve tarımsal işler için idealdir.',
        features: [
            '1150W güçlü motor',
            'İki çalışma modu (Standart + Uzman)',
            'Profesyonel toprak delme',
            '15 cm altı önerilen çalışma ölçüsü',
            'V7-20Ah batarya uyumlu',
            'IP66 batarya koruması',
            'BSMI sertifikalı',
            'Ergonomik çift tutamaklı tasarım'
        ],
        specs: {
            'Model': 'CK-500',
            'Motor Gücü': '1150W',
            'Vücut Ölçüsü': '65x36x29 cm',
            'Ağırlık': '4.5 kg',
            'Çalışma Ölçüsü Önerisi': '15 cm altı',
            'Pil': 'DC36V-20.0Ah (V7-20Ah)',
            'Pil Boyutu': '47x26x12 cm',
            'Pil Ağırlığı': '5 kg',
            'BSMI Sertifika': 'R45555',
            'Pil IP Sertifika': 'IP66',
            'Özellik': 'İki çalışma modu'
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
            main: 'img/products/ck-500-toprak-burgu-makinesi.png',
            gallery: ['img/products/ÜRÜNLER/CK-500/TOPRAK BURGU.png', 'img/products/ÜRÜNLER/CK-500/CK-500 Toprak Delme Makinesi.png']
        },
        tags: ['Toprak Burgusu', 'Akülü', 'Profesyonel', 'Tarım'],
        whyChoose: 'CK-500 profesyonel toprak matkabı, iki farklı çalışma modu ile hem standart hem de zorlu toprak koşullarında etkili çalışma imkanı sunar. 1150W güçlü motor ile sert topraklarda bile güvenle kullanılabilir.',
        whyChoose2: 'Standart mod günlük işler için, Uzman modu ise zorlu ve sert topraklar için idealdir. IP66 sertifikalı batarya ile her hava koşulunda güvenle çalışabilirsiniz.',
        visualElements: {
            statistics: [
                { value: '1150W', label: 'MOTOR GÜCÜ', icon: 'fa-bolt', color: 'red' },
                { value: '2 Mod', label: 'ÇALIŞMA MODU', icon: 'fa-cogs', color: 'blue' },
                { value: '4.5 kg', label: 'AĞIRLIK', icon: 'fa-weight', color: 'purple' }
            ],
            performanceMetrics: [
                { label: 'Güç', percentage: 95, color: 'red', icon: 'fa-bolt' },
                { label: 'Verimlilik', percentage: 90, color: 'blue', icon: 'fa-chart-line' },
                { label: 'Dayanıklılık', percentage: 93, color: 'green', icon: 'fa-shield-alt' }
            ],
            badges: [
                { text: 'IP66 Sertifikalı', icon: 'fa-shield-alt', type: 'cert' },
                { text: 'BSMI Onaylı', icon: 'fa-certificate', type: 'cert' },
                { text: 'Çift Çalışma Modu', icon: 'fa-cogs', type: 'tech' },
                { text: 'Sıfır Emisyon', icon: 'fa-leaf', type: 'eco' }
            ],
            highlights: [
                {
                    type: 'success',
                    icon: 'fa-cogs',
                    title: 'İki Çalışma Modu',
                    text: 'Standart mod günlük işler için, Uzman modu zorlu topraklar için. Her koşulda maksimum verim.'
                },
                {
                    type: 'tip',
                    icon: 'fa-bolt',
                    title: '1150W Güçlü Motor',
                    text: 'Profesyonel güç ile sert topraklarda bile kolay delme. Direk dikimi ve ağaç dikimi için ideal.'
                }
            ],
            comparison: {
                title: 'Benzinli Matkap vs Comlink CK-500',
                benzinli: [
                    { label: 'Ağırlık', value: '8-10 kg', icon: 'fa-weight-hanging', note: 'Çok ağır' },
                    { label: 'Ses Seviyesi', value: '110+ dB', icon: 'fa-volume-up', note: 'Çok gürültülü' },
                    { label: 'Titreşim', value: 'Çok Yüksek', icon: 'fa-exclamation-triangle', note: 'Yorucu' },
                    { label: 'Bakım', value: 'Yüksek', icon: 'fa-wrench', note: 'Sürekli bakım' },
                    { label: 'Emisyon', value: 'Yüksek CO2', icon: 'fa-smog', note: 'Çevre kirliliği' }
                ],
                comlink: [
                    { label: 'Ağırlık', value: '4.5 kg', icon: 'fa-feather', note: 'Hafif' },
                    { label: 'Ses Seviyesi', value: '≤90 dB', icon: 'fa-volume-down', note: 'Sessiz' },
                    { label: 'Titreşim', value: 'Düşük', icon: 'fa-smile', note: 'Rahat kullanım' },
                    { label: 'Bakım', value: 'Sıfır', icon: 'fa-check-circle', note: 'Bakımsız' },
                    { label: 'Emisyon', value: 'Sıfır', icon: 'fa-leaf', note: 'Çevre dostu' }
                ]
            }
        }
    },
    'ck-600': {
        id: 'ck-600',
        model: 'CK-600',
        name: 'CK-600 Akülü Çapa Makinesi',
        category: 'Çapa Makinası',
        categoryId: 'capa-makinesi',
        shortDesc: 'Bahçe ve tarla çapalama işleri için ideal akülü çapa makinesi. Güçlü motor ve dayanıklı yapısı ile uzun ömürlü kullanım.',
        description: 'CK-600 akülü çapa makinesi, bahçe ve tarla çapalama işleri için özel olarak tasarlanmıştır. Güçlü fırçasız motoru ve dayanıklı yapısı ile uzun ömürlü kullanım imkanı sunar.',
        description2: 'Ergonomik tasarımı ve kolay kullanımı ile hem profesyonel hem de bireysel kullanıcılar için idealdir. Ortak batarya platformu sayesinde tüm Comlink ürünleriyle uyumlu çalışır.',
        features: [
            'Güçlü fırçasız motor',
            'Bahçe ve tarla çapalama',
            'Dayanıklı yapı',
            'Ergonomik tasarım',
            'Kolay kullanım',
            'Ortak batarya platformu',
            'Uzun ömürlü',
            'Bakım gerektirmez'
        ],
        specs: {
            'Model': 'CK-600',
            'Motor Tipi': 'Fırçasız (Brushless) Motor',
            'Kullanım Alanı': 'Bahçe ve tarla çapalama',
            'Batarya Voltajı': '56V Li-ion',
            'Uyumlu Bataryalar': 'V7-20Ah / V7-30Ah / V8-15Ah',
            'Pil IP Sertifika': 'IP66',
            'BSMI Sertifika': 'R45555',
            'Özellik': 'Dumansız, benzinsiz, bakımsız'
        },
        usageAreas: [
            { icon: 'seedling', text: 'Tarla çapalama' },
            { icon: 'home', text: 'Bahçe bakımı' },
            { icon: 'leaf', text: 'Yeşil alan bakımı' },
            { icon: 'tree', text: 'Tarımsal işler' },
            { icon: 'industry', text: 'Profesyonel kullanım' },
            { icon: 'garden', text: 'Hobi bahçeleri' }
        ],
        images: {
            main: 'img/products/ck-600-akulu-capa-makinesi.png',
            gallery: ['img/products/ÜRÜNLER/CK-600 Akülü Çapa Makinesi/1.jpg', 'img/products//ÜRÜNLER/CK-600 Akülü Çapa Makinesi/11.jpg']
        },
        tags: ['Çapa Makinesi', 'Akülü', 'Profesyonel', 'Tarım'],
        whyChoose: 'CK-600 akülü çapa makinesi, bahçe ve tarla çapalama işlerinde benzinli makinelere çevreci bir alternatiftir. Sessiz çalışması sayesinde yerleşim yerlerinde rahatlıkla kullanılabilir.',
        whyChoose2: 'Dumansız, benzinsiz ve bakımsız çalışma özelliği ile düşük işletme maliyeti sunar. Ortak batarya platformu sayesinde ekonomik kullanım imkanı sağlar.',
        visualElements: {
            statistics: [
                { value: '56V', label: 'BATARYA GERİLİMİ', icon: 'fa-battery-full', color: 'blue' },
                { value: 'IP66', label: 'SU/TOZ KORUMA', icon: 'fa-shield-alt', color: 'green' },
                { value: '%0', label: 'BAKIM GEREKSİNİMİ', icon: 'fa-times-circle', color: 'purple' }
            ],
            performanceMetrics: [
                { label: 'Verimlilik', percentage: 92, color: 'blue', icon: 'fa-chart-line' },
                { label: 'Dayanıklılık', percentage: 90, color: 'green', icon: 'fa-shield-alt' },
                { label: 'Çevre Dostu', percentage: 100, color: 'green', icon: 'fa-leaf' }
            ],
            badges: [
                { text: 'IP66 Sertifikalı', icon: 'fa-shield-alt', type: 'cert' },
                { text: 'BSMI Onaylı', icon: 'fa-certificate', type: 'cert' },
                { text: 'Fırçasız Motor', icon: 'fa-cog', type: 'tech' },
                { text: 'Sıfır Emisyon', icon: 'fa-leaf', type: 'eco' }
            ],
            highlights: [
                {
                    type: 'success',
                    icon: 'fa-leaf',
                    title: 'Dumansız, Benzinsiz, Bakımsız',
                    text: 'Çevre dostu akülü sistem. Yakıt, yağ, filtre değişimi yok. Düşük işletme maliyeti.'
                },
                {
                    type: 'tip',
                    icon: 'fa-battery-full',
                    title: 'Ortak Batarya Platformu',
                    text: 'Tüm Comlink ürünleriyle aynı bataryayı kullanın. Bir batarya, 9 farklı makine. Ekonomik.'
                }
            ],
            comparison: {
                title: 'Benzinli Çapa vs Comlink CK-600',
                benzinli: [
                    { label: 'Ses Seviyesi', value: '100+ dB', icon: 'fa-volume-up', note: 'Çok gürültülü' },
                    { label: 'Emisyon', value: 'Yüksek CO2', icon: 'fa-smog', note: 'Çevre kirliliği' },
                    { label: 'Bakım', value: 'Yüksek', icon: 'fa-wrench', note: 'Yağ, filtre, bujiler' },
                    { label: 'Çalıştırma', value: 'Zor', icon: 'fa-exclamation-triangle', note: 'Manuel starterli' },
                    { label: 'Maliyet', value: 'Yüksek', icon: 'fa-money-bill-wave', note: 'Yakıt + bakım' }
                ],
                comlink: [
                    { label: 'Ses Seviyesi', value: '≤85 dB', icon: 'fa-volume-down', note: 'Sessiz' },
                    { label: 'Emisyon', value: 'Sıfır', icon: 'fa-leaf', note: 'Çevre dostu' },
                    { label: 'Bakım', value: 'Sıfır', icon: 'fa-check-circle', note: 'Bakımsız' },
                    { label: 'Çalıştırma', value: 'Kolay', icon: 'fa-power-off', note: 'Tek tuşla başlat' },
                    { label: 'Maliyet', value: 'Düşük', icon: 'fa-piggy-bank', note: 'Sadece elektrik' }
                ]
            }
        }
    },
    'ck-300v2': {
        id: 'ck-300v2',
        model: 'CK-300V2',
        name: 'CK-300V2 Tek Kenarlı Çit Budama Makinesi',
        category: 'Çit Budama',
        categoryId: 'cit-budama',
        shortDesc: '70 cm tek bıçaklı, 20 mm çapa kadar dal kesebilme kapasiteli çit budama makinesi. Sadece 3.9 kg ağırlık.',
        description: 'CK-300V2 tek kenarlı çit budama makinesi, çit budaması, çay ağacı budaması ve meyve ağacı budaması için idealdir. 70 cm tek bıçaklı bıçağı ile 20 mm çapa kadar dalları kesebilir.',
        description2: 'Sadece 3.9 kg ağırlığında olup hafif ve kullanımı kolaydır. Çim biçme makineleriyle aynı sırt tipi bataryayı paylaşıyor ve bir bataryayı birden fazla amaç için kullanabilir. Küçük, hafif, düşük gürültülü ve yüksek güçlüdür.',
        features: [
            '70 cm tek bıçaklı sistem',
            '20 mm çapa kadar dal kesimi',
            'Sadece 3.9 kg ağırlık',
            'Hafif ve kullanışlı',
            '108cm x 35cm x 20cm boyutlar',
            'Ortak batarya platformu',
            'Düşük gürültü seviyesi',
            'Tayvan Ar-Ge kalitesi'
        ],
        specs: {
            'Model': 'CK-300V2',
            'Bıçak Tipi': 'Tek kenarlı',
            'Bıçak Uzunluğu': '70 cm',
            'Maksimum Kesim Çapı': '20 mm',
            'Ağırlık': '3.9 kg',
            'Boyutlar': '108cm x 35cm x 20cm',
            'Batarya Voltajı': '56V Li-ion',
            'Uyumlu Bataryalar': 'V6-5Ah / V7-20Ah / V7-30Ah / V8-15Ah',
            'Çalışma Süresi (V6-5Ah)': '60-90 dakika',
            'Çalışma Süresi (V8-15Ah)': '3-4.5 saat',
            'Çalışma Süresi (V7-20Ah)': '4-6 saat',
            'Çalışma Süresi (V7-30Ah)': '6-9 saat',
            'Kullanım Alanı': 'Çit, çay ağacı, meyve ağacı budama'
        },
        usageAreas: [
            { icon: 'leaf', text: 'Çit budama' },
            { icon: 'tree', text: 'Çay bahçeleri' },
            { icon: 'apple', text: 'Meyve ağaçları' },
            { icon: 'home', text: 'Konut bahçeleri' },
            { icon: 'building', text: 'Belediye peyzaj' },
            { icon: 'park', text: 'Park bakımı' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/CK-300V2/CK-300 ELDE TAŞINABİLİR TEK KENARLI & SEPETLİ ÇİT VE ÇAY BUDAMA MAKİNESİ.png',
            gallery: ['img/products/ÜRÜNLER/CK-300V2/1.png', 'img/products/ÜRÜNLER/CK-300V2/CK-300 ELDE TAŞINABİLİR TEK KENARLI & SEPETLİ ÇİT VE ÇAY BUDAMA MAKİNESİ.png']
        },
        tags: ['Çit Budama', 'Akülü', 'Profesyonel', 'Tek Kenarlı'],
        whyChoose: 'CK-300V2 çit budama makinesi, hafif yapısı ve güçlü performansı ile çit, çay ve meyve ağacı budama işlerinde profesyonel sonuçlar verir. 70 cm bıçak uzunluğu ile geniş alanlarda verimli çalışma imkanı sunar.',
        whyChoose2: 'Ortak batarya platformu sayesinde tüm Comlink ürünleriyle aynı bataryayı kullanabilirsiniz. Düşük gürültü seviyesi ile yerleşim yerlerinde rahatlıkla kullanılabilir.'
    },
    'ck-412d': {
        id: 'ck-412d',
        model: 'CK-412D',
        name: 'CK-412D Profesyonel Yüksek Dal Budama Makinesi',
        category: 'Yüksek Dal Budama',
        categoryId: 'yuksek-dal-budama',
        shortDesc: '2019 Taiwan Excellence ödüllü, sadece 2.0 kg ağırlığında motorlu testere başlığı. 183 cm uzunluğa kadar uzatılabilir.',
        description: 'CK-412D profesyonel yüksek dal budama makinesi, 2019 yılında Ekonomi Bakanlığı tarafından Taiwan Excellence Ödülü\'ne layık görülmüştür. Motorlu testere başlığı sadece 2.0 kg ağırlığında olup küçük, hafif ve oldukça güçlüdür.',
        description2: 'Zincir dişlisi, tahrik mili veya redüksiyon dişlisi olmaksızın doğrudan fırçasız bir motorla tahrik edilir. İki farklı uzunluk seçeneği mevcut olup en uzunu 183 cm\'dir. Opsiyonel olarak 1.2 metrelik uzatma borusu eklenebilir, maksimum uzunluğu 3 metredir.',
        features: [
            'Taiwan Excellence 2019 ödüllü',
            'Sadece 2.0 kg motorlu testere başlığı',
            'Fırçasız motor doğrudan tahrik',
            'Zincir dişlisi/tahrik mili/redüksiyon yok',
            '183 cm standart uzunluk',
            '3 metreye kadar uzatma imkanı',
            'V6-5Ah ile 10cm çalıdan 100 kesim',
            'V7-30Ah ile 10cm çalıdan 500 kesim'
        ],
        specs: {
            'Model': 'CK-412D',
            'Motor Ağırlığı': '2.0 kg',
            'Motor Tipi': 'Fırçasız (Brushless) Motor',
            'Tahrik Sistemi': 'Doğrudan tahrik (zincir/mil/redüksiyon yok)',
            'Standart Uzunluk': '183 cm',
            'Maksimum Uzunluk': '300 cm (1.2m uzatma ile)',
            'Batarya Voltajı': '56V Li-ion',
            'Uyumlu Bataryalar': 'V6-5Ah / V7-20Ah / V7-30Ah',
            'Kesim Kapasitesi (V6-5Ah)': '100 adet (10cm çalı)',
            'Kesim Kapasitesi (V7-20Ah)': '300 adet (10cm çalı)',
            'Kesim Kapasitesi (V7-30Ah)': '500 adet (10cm çalı)',
            'Ödül': 'Taiwan Excellence 2019'
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
            main: 'img/products/ÜRÜNLER/CK-412D/CK-412 PROFESYONEL YÜKSEK DAL BUDAMA MAKİNESİ.png',
            gallery: ['img/products/ÜRÜNLER/CK-412D/1.jpg', 'img/products/ÜRÜNLER/CK-412D/CK-412D-.jpg', 'img/products/ÜRÜNLER/CK-412D/CK-412D.jpg']
        },
        tags: ['Dal Budama', 'Akülü', 'Profesyonel', 'Taiwan Excellence'],
        whyChoose: 'CK-412D yüksek dal budama makinesi, Taiwan Excellence 2019 ödülü ile kalitesi onaylanmış bir üründür. Sadece 2.0 kg motorlu testere başlığı ile piyasadaki en hafif profesyonel dal budama makinesidir.',
        whyChoose2: 'Doğrudan fırçasız motor tahrik sistemi sayesinde bakım gerektirmez ve uzun ömürlüdür. 3 metreye kadar uzatma imkanı ile merdiven kullanmadan yüksek dallara güvenle ulaşabilirsiniz.'
    },
    'ck-460d': {
        id: 'ck-460d',
        model: 'CK-460D',
        name: 'CK-460D Profesyonel Yüksek Dallı Dairesel Testere Kafası',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: 'Çim biçme makinesinin üst kısmıyla kullanılan dairesel testere kafası. 8 cm çapa kadar çalı kesebilir.',
        description: 'CK-460D profesyonel dairesel testere kafası, fırçasız bir motorla doğrudan tahrik edilen sistemde tahrik mili veya redüksiyon dişlisi bulunmamaktadır. Çim biçme makinesinin üst kısmını paylaşır (ayrı satılır).',
        description2: 'Dış boyutları 140 cm uzunluk x 28.6 cm genişlik x 8 cm yüksekliktir (bıçak ve koruyucu plaka dahil). Ağırlığı sadece 1.8 kg\'dır. Çapı 8 cm\'ye kadar olan çalıları kesebilir. Küçük, hafif, düşük gürültü, yüksek güç özellikleriyle Tayvan\'ın Ar-Ge, üretim ve kalite güvencesi garantilidir.',
        features: [
            'Fırçasız motor doğrudan tahrik',
            'Tahrik mili/redüksiyon dişlisi yok',
            'Çim biçme üst kısmıyla uyumlu',
            'Sadece 1.8 kg ağırlık',
            '140 cm uzunluk',
            '8 cm çapa kadar kesim',
            '230 mm sessiz dairesel testere bıçağı',
            'Koruyucu plaka dahil'
        ],
        specs: {
            'Model': 'CK-460D',
            'Motor Tipi': 'Fırçasız (Brushless) Motor',
            'Tahrik Sistemi': 'Doğrudan tahrik',
            'Ağırlık': '1.8 kg (bıçak ve koruyucu plaka dahil)',
            'Boyutlar': '140cm x 28.6cm x 8cm',
            'Maksimum Kesim Çapı': '8 cm',
            'Bıçak Çapı': '230 mm',
            'Bıçak Tipi': 'Sessiz dairesel testere',
            'Uyumluluk': 'Çim biçme makinesinin üst kısmı ile',
            'Özellik': 'Küçük, hafif, düşük gürültü, yüksek güç'
        },
        usageAreas: [
            { icon: 'tree', text: 'Çalı kesimi' },
            { icon: 'leaf', text: 'Dal budama' },
            { icon: 'home', text: 'Bahçe bakımı' },
            { icon: 'building', text: 'Peyzaj düzenleme' },
            { icon: 'park', text: 'Park alanları' },
            { icon: 'forest', text: 'Ağaçlandırma bakımı' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/CK-460D/Profesyonel yüksek dallı dairesel testere kafası.png',
            gallery: ['img/products/ÜRÜNLER/CK-460D/Screenshot_7 Topaz Gigapixel 2x Ölçek.jpg', 'img/products/ÜRÜNLER/CK-460D/Profesyonel yüksek dallı dairesel testere kafası.png']
        },
        tags: ['Testere Kafası', 'Akülü', 'Profesyonel', 'Modüler'],
        whyChoose: 'CK-460D dairesel testere kafası, modüler yapısı sayesinde çim biçme makinesinin üst kısmıyla kullanılabilen çok yönlü bir üründür. 8 cm çapa kadar çalı kesebilme kapasitesi ile profesyonel performans sunar.',
        whyChoose2: 'Sadece 1.8 kg ağırlığı ile hafif ve kullanışlıdır. 230 mm sessiz dairesel testere bıçağı ile düşük gürültü seviyesinde çalışır. Tayvan\'ın kalite garantisi ile güvence altındadır.'
    },
    // ==================== BATARYALAR ====================
    'v6-5ah': {
        id: 'v6-5ah',
        model: 'V6-5.0Ah',
        name: 'V6-5.0Ah Lityum İyon Batarya',
        category: 'Bataryalar',
        categoryId: 'batarya',
        shortDesc: '56V 5.0Ah lityum iyon batarya. IP66 su ve toz geçirmez. Tüm Comlink makineleriyle uyumlu. Hafif ve uzun ömürlü.',
        description: 'V6-5.0Ah lityum iyon batarya, Comlink\'in tüm 56V ürün ailesiyle uyumludur. IP66 sertifikası ile su ve toz geçirmez özelliğe sahiptir. BSMI güvenlik sertifikalıdır.',
        description2: 'Hafif yapısı sayesinde taşıması kolaydır. Uzun ömürlü lityum iyon hücreler kullanılmıştır. Düşük ağırlık, yüksek enerji yoğunluğu sunar.',
        features: [
            '56V 5.0Ah kapasiteli',
            'IP66 su ve toz geçirmez',
            'BSMI sertifikalı',
            'Tüm Comlink ürünleriyle uyumlu',
            'Hafif ve taşınabilir',
            'Uzun ömürlü Li-ion hücreler',
            'Hızlı şarj desteği',
            'Güvenli kullanım'
        ],
        specs: {
            'Model': 'V6-5.0Ah',
            'Voltaj': '56V DC',
            'Kapasite': '5.0Ah (280Wh)',
            'Batarya Tipi': 'Lityum İyon',
            'IP Sertifikası': 'IP66',
            'BSMI Sertifikası': 'R45555',
            'Şarj Süresi': '60-90 dakika',
            'Ağırlık': 'Yaklaşık 2.0 kg',
            'Çalışma Sıcaklığı': '-10°C ~ +50°C'
        },
        usageAreas: [
            { icon: 'wind', text: 'Yaprak üfleyici' },
            { icon: 'cut', text: 'Çit budama' },
            { icon: 'leaf', text: 'Çim biçme' },
            { icon: 'tools', text: 'Hafif işler' },
            { icon: 'battery', text: 'Yedek batarya' },
            { icon: 'home', text: 'Ev bahçeleri' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/V6 5.0Ah/V6 5.0Ah.jpg',
            gallery: ['img/products/ÜRÜNLER/V6 5.0Ah/V6 5.0Ah.jpg', 'img/products/ÜRÜNLER/V6 5.0Ah/V6 5.0Ah.jpg']
        },
        tags: ['Batarya', 'Lityum İyon', 'IP66', 'BSMI', 'Şarj Edilebilir'],
        whyChoose: 'V6-5.0Ah batarya, hafif işler için ideal bir seçimdir. Kompakt boyutu ve hafif ağırlığı ile taşıması kolaydır.',
        whyChoose2: 'IP66 koruma sınıfı ile her hava koşulunda güvenle kullanılabilir. Tüm Comlink ürünleriyle uyumlu çalışır.'
    },
    'v7-20ah': {
        id: 'v7-20ah',
        model: 'V7-20.0Ah',
        name: 'V7-20.0Ah Lityum İyon Batarya',
        category: 'Bataryalar',
        categoryId: 'batarya',
        shortDesc: '56V 20.0Ah yüksek kapasiteli lityum iyon batarya. IP66 su ve toz geçirmez. Uzun çalışma süresi. Profesyonel kullanım.',
        description: 'V7-20.0Ah lityum iyon batarya, Comlink\'in en popüler bataryasıdır. 20.0Ah kapasitesi ile uzun çalışma süresi sunar. IP66 sertifikası ile su ve toz geçirmez özelliğe sahiptir.',
        description2: 'Profesyonel kullanıcılar için idealdir. Tüm Comlink 56V ürün ailesiyle uyumludur. BSMI güvenlik sertifikalıdır. Uzun ömürlü ve güvenilir performans sağlar.',
        features: [
            '56V 20.0Ah yüksek kapasite',
            'IP66 su ve toz geçirmez',
            'BSMI sertifikalı',
            'Tüm Comlink ürünleriyle uyumlu',
            'Uzun çalışma süresi',
            'Profesyonel kalite',
            'Güvenli şarj sistemi',
            'Dayanıklı yapı'
        ],
        specs: {
            'Model': 'V7-20.0Ah',
            'Voltaj': '56V DC (36V nominal)',
            'Kapasite': '20.0Ah (1120Wh)',
            'Batarya Tipi': 'Lityum İyon',
            'IP Sertifikası': 'IP66',
            'BSMI Sertifikası': 'R45555',
            'Şarj Süresi': '120-180 dakika',
            'Ağırlık': 'Yaklaşık 5.0 kg',
            'Boyutlar': '47x26x12 cm',
            'Çalışma Sıcaklığı': '-10°C ~ +50°C'
        },
        usageAreas: [
            { icon: 'tree', text: 'Ağır işler' },
            { icon: 'industry', text: 'Profesyonel kullanım' },
            { icon: 'leaf', text: 'Geniş alanlar' },
            { icon: 'battery-full', text: 'Uzun çalışma süresi' },
            { icon: 'tools', text: 'Tüm makineler' },
            { icon: 'award', text: 'Yüksek performans' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/V7-20.0Ah/V7-20.0Ah.png',
            gallery: ['img/products/ÜRÜNLER/V7-20.0Ah/V7-20.0Ah.png', 'img/products/ÜRÜNLER/V7-20.0Ah/V7-20.0Ah.png']
        },
        tags: ['Batarya', 'Lityum İyon', 'Profesyonel', 'Yüksek Kapasite', 'IP66'],
        whyChoose: 'V7-20.0Ah batarya, Comlink\'in en çok tercih edilen bataryasıdır. 20.0Ah yüksek kapasitesi ile gün boyu kesintisiz çalışma imkanı sunar.',
        whyChoose2: 'Profesyonel kullanıcılar için özel olarak geliştirilmiştir. IP66 koruma sınıfı ile her hava koşulunda güvenle kullanılabilir.'
    },
    'v7-30ah': {
        id: 'v7-30ah',
        model: 'V7-30.0Ah',
        name: 'V7-30.0Ah Lityum İyon Batarya',
        category: 'Bataryalar',
        categoryId: 'batarya',
        shortDesc: '56V 30.0Ah ultra yüksek kapasiteli lityum iyon batarya. IP66 su ve toz geçirmez. Maksimum çalışma süresi. En zorlu işler için.',
        description: 'V7-30.0Ah lityum iyon batarya, Comlink\'in en yüksek kapasiteli bataryasıdır. 30.0Ah kapasitesi ile maksimum çalışma süresi sunar. En zorlu profesyonel işler için idealdir.',
        description2: 'IP66 sertifikası ile su ve toz geçirmez özelliğe sahiptir. BSMI güvenlik sertifikalıdır. Tüm Comlink 56V ürün ailesiyle uyumludur. Uzun ömürlü ve güvenilir performans.',
        features: [
            '56V 30.0Ah ultra yüksek kapasite',
            'IP66 su ve toz geçirmez',
            'BSMI sertifikalı',
            'Maksimum çalışma süresi',
            'Zorlu işler için ideal',
            'Profesyonel kalite',
            'Güvenli şarj sistemi',
            'Dayanıklı yapı'
        ],
        specs: {
            'Model': 'V7-30.0Ah',
            'Voltaj': '56V DC (36V nominal)',
            'Kapasite': '30.0Ah (1680Wh)',
            'Batarya Tipi': 'Lityum İyon',
            'IP Sertifikası': 'IP66',
            'BSMI Sertifikası': 'R45555',
            'Şarj Süresi': '180-240 dakika',
            'Ağırlık': 'Yaklaşık 7.0 kg',
            'Çalışma Sıcaklığı': '-10°C ~ +50°C'
        },
        usageAreas: [
            { icon: 'industry', text: 'Endüstriyel kullanım' },
            { icon: 'tree', text: 'Ağır işler' },
            { icon: 'battery-full', text: 'Maksimum süre' },
            { icon: 'award', text: 'Profesyonel' },
            { icon: 'tools', text: 'Tüm makineler' },
            { icon: 'shield', text: 'Dayanıklı' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/30.0Ah/30.0Ah.jpg',
            gallery: ['img/products/ÜRÜNLER/30.0Ah/30.0Ah.jpg', 'img/products/ÜRÜNLER/30.0Ah/30.0Ah.jpg']
        },
        tags: ['Batarya', 'Lityum İyon', 'Ultra Yüksek Kapasite', 'Profesyonel', 'IP66'],
        whyChoose: 'V7-30.0Ah batarya, Comlink\'in en yüksek kapasiteli bataryasıdır. 30.0Ah ultra yüksek kapasitesi ile tam gün kesintisiz çalışma imkanı sunar.',
        whyChoose2: 'En zorlu profesyonel işler için özel olarak geliştirilmiştir. IP66 koruma sınıfı ile her koşulda güvenle kullanılabilir.'
    },
    'v8-15ah': {
        id: 'v8-15ah',
        model: 'V8-15Ah',
        name: 'V8-15Ah Lityum İyon Batarya',
        category: 'Bataryalar',
        categoryId: 'batarya',
        shortDesc: '56V 15Ah lityum iyon batarya. IP66 su ve toz geçirmez. Dengeli kapasite ve ağırlık. Çok yönlü kullanım.',
        description: 'V8-15Ah lityum iyon batarya, kapasite ve ağırlık dengesi sunan çok yönlü bir bataryadır. IP66 sertifikası ile su ve toz geçirmez özelliğe sahiptir.',
        description2: 'Tüm Comlink 56V ürün ailesiyle uyumludur. BSMI güvenlik sertifikalıdır. Orta ve uzun süreli işler için idealdir. Profesyonel ve bireysel kullanıma uygundur.',
        features: [
            '56V 15Ah dengeli kapasite',
            'IP66 su ve toz geçirmez',
            'BSMI sertifikalı',
            'Orta ağırlıklı',
            'Çok yönlü kullanım',
            'Uzun çalışma süresi',
            'Güvenli şarj sistemi',
            'Taşınabilir'
        ],
        specs: {
            'Model': 'V8-15Ah',
            'Voltaj': '56V DC',
            'Kapasite': '15Ah (840Wh)',
            'Batarya Tipi': 'Lityum İyon',
            'IP Sertifikası': 'IP66',
            'BSMI Sertifikası': 'R45555',
            'Şarj Süresi': '90-150 dakika',
            'Ağırlık': 'Yaklaşık 4.0 kg',
            'Çalışma Sıcaklığı': '-10°C ~ +50°C'
        },
        usageAreas: [
            { icon: 'leaf', text: 'Orta işler' },
            { icon: 'tools', text: 'Çok yönlü' },
            { icon: 'battery', text: 'Dengeli kapasite' },
            { icon: 'home', text: 'Ev ve profesyonel' },
            { icon: 'award', text: 'Kaliteli' },
            { icon: 'shield', text: 'Güvenli' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/V8_15/V8_15.png',
            gallery: ['img/products/ÜRÜNLER/V8_15/V8_15.png', 'img/products/ÜRÜNLER/V8_15/V8_15.png']
        },
        tags: ['Batarya', 'Lityum İyon', 'Orta Kapasite', 'Çok Yönlü', 'IP66'],
        whyChoose: 'V8-15Ah batarya, kapasite ve ağırlık dengesi arayan kullanıcılar için ideal bir seçimdir. 15Ah kapasitesi ile uzun çalışma süresi sunar.',
        whyChoose2: 'IP66 koruma sınıfı ile her hava koşulunda güvenle kullanılabilir. Hem profesyonel hem de bireysel kullanıcılar için uygundur.'
    },
    // ==================== ŞARJ CİHAZLARI ====================
    'lityum-pil-standart-sarj': {
        id: 'lityum-pil-standart-sarj',
        model: 'Standart Şarj Cihazı',
        name: 'Lityum Pil Standart Şarj Cihazı',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: 'V6 ve V7 bataryalar için standart şarj cihazı. Güvenli ve hızlı şarj. LED gösterge. Kompakt tasarım.',
        description: 'Lityum pil standart şarj cihazı, V6-5Ah ve V7 serisi bataryalar için tasarlanmıştır. Güvenli ve hızlı şarj özelliği sunar. LED gösterge ile şarj durumunu takip edebilirsiniz.',
        description2: 'Kompakt ve hafif tasarımı ile taşıması kolaydır. Aşırı şarj koruması ve ısı yönetimi sistemi ile güvenli kullanım sağlar. CE ve BSMI sertifikalıdır.',
        features: [
            'V6 ve V7 bataryalarla uyumlu',
            'Güvenli ve hızlı şarj',
            'LED gösterge',
            'Aşırı şarj koruması',
            'Isı yönetimi sistemi',
            'Kompakt tasarım',
            'CE ve BSMI sertifikalı',
            'Hafif ve taşınabilir'
        ],
        specs: {
            'Model': 'Standart Şarj Cihazı',
            'Giriş': 'AC 100-240V 50/60Hz',
            'Çıkış': 'DC 58.4V 4A',
            'Uyumlu Bataryalar': 'V6-5Ah, V7-20Ah, V7-30Ah',
            'Şarj Süresi (V6-5Ah)': '60-90 dakika',
            'Şarj Süresi (V7-20Ah)': '4-5 saat',
            'Şarj Süresi (V7-30Ah)': '6-7 saat',
            'Ağırlık': 'Yaklaşık 1.2 kg',
            'Koruma': 'Aşırı şarj, ısı, kısa devre'
        },
        usageAreas: [
            { icon: 'plug', text: 'Batarya şarjı' },
            { icon: 'home', text: 'Ev kullanımı' },
            { icon: 'tools', text: 'Atölye' },
            { icon: 'shield', text: 'Güvenli' },
            { icon: 'award', text: 'Sertifikalı' },
            { icon: 'battery', text: 'V6/V7 uyumlu' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Lityum Pil Standart Şarj Cihazı/25.png',
            gallery: ['img/products/ÜRÜNLER/Lityum Pil Standart Şarj Cihazı/25.png', 'img/products/ÜRÜNLER/Lityum Pil Standart Şarj Cihazı/25.png']
        },
        tags: ['Şarj Cihazı', 'Batarya', 'Standart', 'Güvenli', 'LED Gösterge'],
        whyChoose: 'Standart şarj cihazı, V6 ve V7 bataryalar için güvenli ve etkili şarj sağlar. LED gösterge ile şarj durumunu kolayca takip edebilirsiniz.',
        whyChoose2: 'Aşırı şarj koruması ve ısı yönetimi sistemi ile batarya ömrünü korur. CE ve BSMI sertifikaları ile güvenlik garantisi sunar.'
    },
    'lityum-pil-ozel-sarj': {
        id: 'lityum-pil-ozel-sarj',
        model: 'Özel Şarj Cihazı',
        name: 'Lityum Pil Özel Şarj Cihazı',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: 'Tüm Comlink bataryaları için özel şarj cihazı. Hızlı şarj modu. Akıllı şarj yönetimi. Dijital gösterge.',
        description: 'Lityum pil özel şarj cihazı, V6, V7 ve V8 serisi tüm Comlink bataryaları için tasarlanmıştır. Akıllı şarj yönetimi ile hızlı ve güvenli şarj sağlar.',
        description2: 'Dijital gösterge ile şarj durumu, kalan süre ve batarya sağlığını takip edebilirsiniz. Çoklu koruma sistemleri ile maksimum güvenlik sunar.',
        features: [
            'Tüm Comlink bataryalarla uyumlu',
            'Hızlı şarj modu',
            'Akıllı şarj yönetimi',
            'Dijital gösterge ekranı',
            'Çoklu koruma sistemi',
            'Otomatik durdurma',
            'CE ve BSMI sertifikalı',
            'Profesyonel kalite'
        ],
        specs: {
            'Model': 'Özel Şarj Cihazı',
            'Giriş': 'AC 100-240V 50/60Hz',
            'Çıkış': 'DC 58.4V 6A',
            'Uyumlu Bataryalar': 'V6-5Ah, V7-20Ah, V7-30Ah, V8-15Ah',
            'Hızlı Şarj': 'Destekli',
            'Gösterge': 'Dijital LCD ekran',
            'Ağırlık': 'Yaklaşık 1.5 kg',
            'Koruma': 'Aşırı şarj, ısı, kısa devre, ters polarite'
        },
        usageAreas: [
            { icon: 'bolt', text: 'Hızlı şarj' },
            { icon: 'industry', text: 'Profesyonel' },
            { icon: 'display', text: 'Dijital ekran' },
            { icon: 'shield', text: 'Güvenli' },
            { icon: 'battery-full', text: 'Tüm bataryalar' },
            { icon: 'award', text: 'Sertifikalı' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Lityum Pil Özel Şarj Cihazı/25.png',
            gallery: ['img/products/ÜRÜNLER/Lityum Pil Özel Şarj Cihazı/25.png', 'img/products/ÜRÜNLER/Lityum Pil Özel Şarj Cihazı/25.png']
        },
        tags: ['Şarj Cihazı', 'Hızlı Şarj', 'Akıllı', 'Dijital', 'Profesyonel'],
        whyChoose: 'Özel şarj cihazı, tüm Comlink bataryaları için akıllı şarj yönetimi sunar. Hızlı şarj modu ile zaman kazandırır.',
        whyChoose2: 'Dijital gösterge ekranı ile şarj durumunu detaylı takip edebilirsiniz. Çoklu koruma sistemi ile batarya ömrünü uzatır.'
    },
    'yuksek-guclu-hizli-sarj': {
        id: 'yuksek-guclu-hizli-sarj',
        model: 'Yüksek Güçlü Hızlı Şarj',
        name: 'Yüksek Güçlü Lityum Pil Hızlı Şarj Cihazı',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: 'Yüksek kapasiteli bataryalar için hızlı şarj cihazı. 8A şarj akımı. V7-30Ah için ideal. Profesyonel kullanım.',
        description: 'Yüksek güçlü hızlı şarj cihazı, V7-20Ah ve V7-30Ah yüksek kapasiteli bataryalar için özel olarak tasarlanmıştır. 8A şarj akımı ile son derece hızlı şarj sağlar.',
        description2: 'Profesyonel kullanıcılar için ideal bir çözümdür. Akıllı ısı yönetimi ve çoklu güvenlik sistemleri ile batarya ömrünü korur. Dijital gösterge ile detaylı bilgi sunar.',
        features: [
            '8A yüksek şarj akımı',
            'V7-20Ah ve V7-30Ah uyumlu',
            'Ultra hızlı şarj',
            'Akıllı ısı yönetimi',
            'Dijital gösterge',
            'Çoklu güvenlik sistemi',
            'Profesyonel kalite',
            'CE ve BSMI sertifikalı'
        ],
        specs: {
            'Model': 'Yüksek Güçlü Hızlı Şarj',
            'Giriş': 'AC 100-240V 50/60Hz',
            'Çıkış': 'DC 58.4V 8A',
            'Uyumlu Bataryalar': 'V7-20Ah, V7-30Ah',
            'Şarj Süresi (V7-20Ah)': '2-2.5 saat',
            'Şarj Süresi (V7-30Ah)': '3-4 saat',
            'Ağırlık': 'Yaklaşık 2.0 kg',
            'Koruma': 'Tüm güvenlik sistemleri'
        },
        usageAreas: [
            { icon: 'bolt', text: 'Ultra hızlı şarj' },
            { icon: 'industry', text: 'Endüstriyel' },
            { icon: 'tools', text: 'Profesyonel' },
            { icon: 'battery-full', text: 'Yüksek kapasite' },
            { icon: 'shield', text: 'Güvenli' },
            { icon: 'award', text: 'Sertifikalı' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Yüksek Güçlü Lityum Pil Hızlı Şarj Cihazı/26.png',
            gallery: ['img/products/ÜRÜNLER/Yüksek Güçlü Lityum Pil Hızlı Şarj Cihazı/26.png', 'img/products/ÜRÜNLER/Yüksek Güçlü Lityum Pil Hızlı Şarj Cihazı/26.png']
        },
        tags: ['Şarj Cihazı', 'Ultra Hızlı', 'Yüksek Güçlü', 'Profesyonel', '8A'],
        whyChoose: 'Yüksek güçlü hızlı şarj cihazı, V7-20Ah ve V7-30Ah bataryaları çok kısa sürede şarj eder. Profesyonel kullanıcılar için zaman kazandırır.',
        whyChoose2: '8A şarj akımı ile piyasadaki en hızlı şarj cihazlarından biridir. Akıllı ısı yönetimi ile güvenli şarj sağlar.'
    },
    // ==================== GÜÇ KABLOSU & DÖNÜŞTÜRÜCÜLER ====================
    'lityum-iyon-guc-kablosu': {
        id: 'lityum-iyon-guc-kablosu',
        model: 'Lityum İyon Güç Kablosu',
        name: 'Lityum İyon Güç Kablosu',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: 'Comlink makineleri için özel güç kablosu. Yüksek kalite bakır iletkenler. Dayanıklı yapı. Tüm modellere uyumlu.',
        description: 'Lityum iyon güç kablosu, Comlink makineleri ile bataryalar arasında güvenli güç aktarımı sağlar. Yüksek kalite bakır iletkenler kullanılmıştır.',
        description2: 'Dayanıklı kılıf yapısı ile uzun ömürlü kullanım sunar. Tüm Comlink 56V ürün ailesiyle uyumludur. Profesyonel kalite bağlantı elemanları.',
        features: [
            'Yüksek kalite bakır iletkenler',
            'Dayanıklı kılıf yapısı',
            'Tüm Comlink makineleriyle uyumlu',
            'Güvenli bağlantı',
            'Uzun ömürlü',
            'Profesyonel kalite',
            'Esnek yapı',
            'Kolay kullanım'
        ],
        specs: {
            'Model': 'Lityum İyon Güç Kablosu',
            'Uyumluluk': 'Tüm Comlink 56V makineleri',
            'İletken Malzeme': 'Yüksek kalite bakır',
            'Kılıf': 'Dayanıklı PVC',
            'Maksimum Akım': '30A',
            'Uzunluk': 'Standart',
            'Bağlantı Tipi': 'Orijinal Comlink konnektör'
        },
        usageAreas: [
            { icon: 'plug', text: 'Güç aktarımı' },
            { icon: 'tools', text: 'Tüm makineler' },
            { icon: 'battery', text: 'Batarya bağlantısı' },
            { icon: 'shield', text: 'Güvenli' },
            { icon: 'award', text: 'Profesyonel' },
            { icon: 'industry', text: 'Dayanıklı' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Lityum İyon Güç Kablosu/4.png',
            gallery: ['img/products/ÜRÜNLER/Lityum İyon Güç Kablosu/4.png', 'img/products/ÜRÜNLER/Lityum İyon Güç Kablosu/4.png']
        },
        tags: ['Güç Kablosu', 'Aksesuar', 'Yedek Parça', 'Comlink Orijinal'],
        whyChoose: 'Lityum iyon güç kablosu, Comlink orijinal parçasıdır. Yüksek kalite bakır iletkenler ile güvenli güç aktarımı sağlar.',
        whyChoose2: 'Dayanıklı yapısı ile uzun ömürlü kullanım sunar. Tüm Comlink makineleriyle tam uyumludur.'
    },
    'yuksek-guclu-guc-kablosu': {
        id: 'yuksek-guclu-guc-kablosu',
        model: 'Yüksek Güçlü Güç Kablosu',
        name: 'Yüksek Güçlü Pil Özel Güç Kablosu',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: 'Yüksek kapasiteli bataryalar için özel güç kablosu. 40A akım kapasitesi. Ekstra kalın iletkenler. Ağır işler için.',
        description: 'Yüksek güçlü pil özel güç kablosu, V7-30Ah ve yüksek kapasiteli bataryalar için özel olarak tasarlanmıştır. 40A akım kapasitesi ile ağır işlere dayanıklıdır.',
        description2: 'Ekstra kalın bakır iletkenler ve takviyeli kılıf yapısı ile profesyonel kullanıma uygundur. Zorlu çalışma koşullarında güvenli güç aktarımı sağlar.',
        features: [
            '40A yüksek akım kapasitesi',
            'Ekstra kalın bakır iletkenler',
            'Takviyeli kılıf yapısı',
            'Yüksek kapasiteli bataryalara uygun',
            'Ağır işler için ideal',
            'Profesyonel kalite',
            'Uzun ömürlü',
            'Güvenli bağlantı'
        ],
        specs: {
            'Model': 'Yüksek Güçlü Güç Kablosu',
            'Uyumluluk': 'V7-30Ah, Yüksek güçlü makineler',
            'Maksimum Akım': '40A',
            'İletken Kesiti': 'Ekstra kalın',
            'Kılıf': 'Takviyeli PVC',
            'Uzunluk': 'Standart',
            'Özellik': 'Ağır işler için'
        },
        usageAreas: [
            { icon: 'bolt', text: 'Yüksek güç' },
            { icon: 'industry', text: 'Ağır işler' },
            { icon: 'battery-full', text: 'Yüksek kapasite' },
            { icon: 'shield', text: 'Güvenli' },
            { icon: 'tools', text: 'Profesyonel' },
            { icon: 'award', text: 'Kaliteli' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Yüksek Güçlü Pil Özel Güç Kablosu/4.png',
            gallery: ['img/products/ÜRÜNLER/Yüksek Güçlü Pil Özel Güç Kablosu/4.png', 'img/products/ÜRÜNLER/Yüksek Güçlü Pil Özel Güç Kablosu/4.png']
        },
        tags: ['Güç Kablosu', 'Yüksek Güçlü', 'Profesyonel', '40A', 'Ağır İş'],
        whyChoose: 'Yüksek güçlü güç kablosu, V7-30Ah gibi yüksek kapasiteli bataryalar için özel olarak tasarlanmıştır. 40A akım kapasitesi ile ağır işlerde güvenle kullanılır.',
        whyChoose2: 'Ekstra kalın iletkenler ve takviyeli kılıf yapısı ile zorlu koşullarda uzun ömürlü performans sağlar.'
    },
    'yuksek-guclu-guc-kablosu-600cm': {
        id: 'yuksek-guclu-guc-kablosu-600cm',
        model: 'Yüksek Güçlü Güç Kablosu 600cm',
        name: 'Yüksek Güçlü Pil Özel Güç Kablosu 600cm',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: '600cm ekstra uzun güç kablosu. Sırt tipi batarya kullanımı için ideal. 40A akım kapasitesi. Hareket özgürlüğü.',
        description: 'Yüksek güçlü pil özel güç kablosu 600cm, sırt tipi batarya kullanımı için özel olarak tasarlanmıştır. 6 metre uzunluğu ile maksimum hareket özgürlüğü sağlar.',
        description2: '40A akım kapasitesi ile yüksek güçlü makinelerde güvenle kullanılabilir. Ekstra kalın iletkenler ve esnek kılıf yapısı ile uzun ömürlü performans sunar.',
        features: [
            '600cm ekstra uzun kablo',
            '40A yüksek akım kapasitesi',
            'Sırt tipi batarya için ideal',
            'Maksimum hareket özgürlüğü',
            'Ekstra kalın iletkenler',
            'Esnek yapı',
            'Profesyonel kalite',
            'Uzun ömürlü'
        ],
        specs: {
            'Model': 'Yüksek Güçlü Güç Kablosu 600cm',
            'Uzunluk': '600 cm (6 metre)',
            'Maksimum Akım': '40A',
            'Uyumluluk': 'Tüm Comlink makineleri',
            'İletken': 'Ekstra kalın bakır',
            'Kılıf': 'Esnek PVC',
            'Özellik': 'Sırt tipi batarya için'
        },
        usageAreas: [
            { icon: 'arrows-alt', text: 'Hareket özgürlüğü' },
            { icon: 'battery', text: 'Sırt tipi batarya' },
            { icon: 'tools', text: 'Tüm makineler' },
            { icon: 'bolt', text: 'Yüksek güç' },
            { icon: 'industry', text: 'Profesyonel' },
            { icon: 'award', text: 'Kaliteli' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Yüksek Güçlü Pil Özel Güç Kablosu 600cm/4.png',
            gallery: ['img/products/ÜRÜNLER/Yüksek Güçlü Pil Özel Güç Kablosu 600cm/4.png', 'img/products/ÜRÜNLER/Yüksek Güçlü Pil Özel Güç Kablosu 600cm/4.png']
        },
        tags: ['Güç Kablosu', 'Ekstra Uzun', '600cm', 'Sırt Tipi', 'Profesyonel'],
        whyChoose: 'Yüksek güçlü güç kablosu 600cm, sırt tipi batarya kullanımı için ideal çözümdür. 6 metre uzunluğu ile maksimum hareket özgürlüğü sağlar.',
        whyChoose2: '40A akım kapasitesi ile tüm Comlink makineleriyle güvenle kullanılabilir. Ekstra kalın iletkenler ile güç kaybı minimuma indirilmiştir.'
    },
    'inv-300s': {
        id: 'inv-300s',
        model: 'INV-300S',
        name: 'Güç Dönüştürücü INV-300S',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: '300W güç dönüştürücü. 56V DC\'den 220V AC\'ye. Elektronik cihazlar için. Taşınabilir güç kaynağı. Comlink bataryalarıyla uyumlu.',
        description: 'Güç dönüştürücü INV-300S, Comlink bataryalarından elektronik cihazlarınıza güç sağlar. 300W kapasitesi ile laptop, telefon, kamera gibi cihazları şarj edebilirsiniz.',
        description2: '56V DC\'yi 220V AC\'ye dönüştürür. Saf sinüs dalga çıkışı ile hassas elektronik cihazlar için güvenlidir. Taşınabilir güç kaynağı olarak kullanılabilir.',
        features: [
            '300W güç kapasitesi',
            '56V DC - 220V AC dönüşüm',
            'Saf sinüs dalga çıkışı',
            'Comlink bataryalarıyla uyumlu',
            'Elektronik cihazlar için güvenli',
            'Taşınabilir güç kaynağı',
            'Aşırı yük koruması',
            'LED gösterge'
        ],
        specs: {
            'Model': 'INV-300S',
            'Giriş': '56V DC (Comlink batarya)',
            'Çıkış': '220V AC 50Hz',
            'Güç': '300W sürekli',
            'Dalga Tipi': 'Saf sinüs',
            'Verimlilik': '>90%',
            'Koruma': 'Aşırı yük, kısa devre, düşük voltaj',
            'Ağırlık': 'Yaklaşık 1.5 kg'
        },
        usageAreas: [
            { icon: 'laptop', text: 'Laptop şarjı' },
            { icon: 'mobile', text: 'Telefon şarjı' },
            { icon: 'camera', text: 'Kamera ekipmanları' },
            { icon: 'lightbulb', text: 'Aydınlatma' },
            { icon: 'tools', text: 'Küçük aletler' },
            { icon: 'camping', text: 'Kamp kullanımı' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Güç Dönüştürücü INV-300S/1.png',
            gallery: ['img/products/ÜRÜNLER/Güç Dönüştürücü INV-300S/1.png', 'img/products/ÜRÜNLER/Güç Dönüştürücü INV-300S/1.png']
        },
        tags: ['Güç Dönüştürücü', 'Inverter', '300W', 'Saf Sinüs', 'Taşınabilir'],
        whyChoose: 'INV-300S güç dönüştürücü, Comlink bataryalarınızı taşınabilir güç kaynağına dönüştürür. 300W kapasitesi ile çoğu elektronik cihazı çalıştırabilirsiniz.',
        whyChoose2: 'Saf sinüs dalga çıkışı ile laptop, kamera gibi hassas elektronik cihazlar için güvenli kullanım sağlar. Kamp, piknik ve acil durumlarda ideal çözümdür.'
    },
    'inv-600s': {
        id: 'inv-600s',
        model: 'INV-600S',
        name: 'Güç Dönüştürücü INV-600S',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: '600W yüksek güçlü dönüştürücü. 56V DC\'den 220V AC\'ye. Profesyonel kullanım. Elektrikli aletler için. Saf sinüs dalga.',
        description: 'Güç dönüştürücü INV-600S, 600W yüksek güç kapasitesi ile profesyonel kullanım için tasarlanmıştır. Elektrikli el aletleri, güçlü elektronik cihazlar ve aydınlatma sistemleri için idealdir.',
        description2: '56V DC\'yi 220V AC\'ye dönüştürür. Saf sinüs dalga çıkışı ile tüm cihazlar için güvenli kullanım sağlar. Comlink bataryalarıyla uyumludur. Taşınabilir güç istasyonu olarak kullanılabilir.',
        features: [
            '600W yüksek güç kapasitesi',
            '56V DC - 220V AC dönüşüm',
            'Saf sinüs dalga çıkışı',
            'Profesyonel kullanım için',
            'Elektrikli aletler için uygun',
            'Comlink bataryalarıyla uyumlu',
            'Çoklu koruma sistemleri',
            'Dijital gösterge'
        ],
        specs: {
            'Model': 'INV-600S',
            'Giriş': '56V DC (Comlink batarya)',
            'Çıkış': '220V AC 50Hz',
            'Güç': '600W sürekli, 1200W pik',
            'Dalga Tipi': 'Saf sinüs',
            'Verimlilik': '>92%',
            'Koruma': 'Aşırı yük, kısa devre, düşük voltaj, aşırı ısı',
            'Ağırlık': 'Yaklaşık 2.5 kg'
        },
        usageAreas: [
            { icon: 'tools', text: 'Elektrikli aletler' },
            { icon: 'bolt', text: 'Güçlü cihazlar' },
            { icon: 'industry', text: 'Profesyonel kullanım' },
            { icon: 'lightbulb', text: 'Aydınlatma sistemleri' },
            { icon: 'tv', text: 'Ev elektroniği' },
            { icon: 'camping', text: 'Outdoor kullanım' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Güç Dönüştürücü INV-600S/2.png',
            gallery: ['img/products/ÜRÜNLER/Güç Dönüştürücü INV-600S/2.png']
        },
        tags: ['Güç Dönüştürücü', 'Inverter', '600W', 'Profesyonel', 'Saf Sinüs'],
        whyChoose: 'INV-600S güç dönüştürücü, 600W yüksek güç kapasitesi ile elektrikli el aletleri ve güçlü elektronik cihazları çalıştırabilir. Profesyonel kullanım için idealdir.',
        whyChoose2: 'Saf sinüs dalga çıkışı ile tüm cihaz tiplerinde güvenli kullanım sağlar. Çoklu koruma sistemleri ile batarya ve cihazlarınızı korur.'
    },
    // ==================== AKSESUARLAR ====================
    'aluminyum-bobin': {
        id: 'aluminyum-bobin',
        model: 'Alüminyum Bobin',
        name: 'Alüminyum Bobin',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: 'CK-210, CK-230D ot biçme makineleri için alüminyum bobin. Dayanıklı ve hafif. Uzun ömürlü. Kolay değişim.',
        description: 'Alüminyum bobin, CK-210 ve CK-230D ot biçme makineleri için özel olarak tasarlanmıştır. Dayanıklı alüminyum yapısı ile uzun ömürlü kullanım sağlar.',
        description2: 'Hafif yapısı sayesinde makineye ekstra yük bindirmez. Kolay değiştirilebilir tasarımı ile pratik kullanım sunar. Comlink orijinal yedek parçasıdır.',
        features: [
            'Dayanıklı alüminyum yapı',
            'CK-210 ve CK-230D uyumlu',
            'Hafif tasarım',
            'Uzun ömürlü',
            'Kolay değişim',
            'Orijinal Comlink parçası',
            'Profesyonel kalite',
            'Yüksek performans'
        ],
        specs: {
            'Model': 'Alüminyum Bobin',
            'Malzeme': 'Alüminyum',
            'Uyumluluk': 'CK-210, CK-230D',
            'Tip': 'Orijinal yedek parça',
            'Özellik': 'Hafif ve dayanıklı'
        },
        usageAreas: [
            { icon: 'leaf', text: 'Ot biçme' },
            { icon: 'tools', text: 'CK-210' },
            { icon: 'cog', text: 'CK-230D' },
            { icon: 'sync', text: 'Yedek parça' },
            { icon: 'award', text: 'Orijinal' },
            { icon: 'shield', text: 'Dayanıklı' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Alüminyum Bobin/11.png',
            gallery: ['img/products/ÜRÜNLER/Alüminyum Bobin/11.png', 'img/products/ÜRÜNLER/Alüminyum Bobin/111.jpg']
        },
        tags: ['Aksesuar', 'Bobin', 'Alüminyum', 'Yedek Parça', 'Orijinal'],
        whyChoose: 'Alüminyum bobin, CK-210 ve CK-230D ot biçme makineleri için Comlink orijinal yedek parçasıdır. Dayanıklı alüminyum yapısı ile uzun ömürlü kullanım sağlar.',
        whyChoose2: 'Hafif tasarımı sayesinde makineye ekstra yük bindirmez. Kolay değiştirilebilir yapısı ile pratik kullanım sunar.'
    },
    'standart-bobin': {
        id: 'standart-bobin',
        model: 'Standart Bobin',
        name: 'Standart Bobin',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: 'Tüm Comlink ot biçme makineleri için standart bobin. Ekonomik seçenek. Kolay değişim. Yedek parça.',
        description: 'Standart bobin, tüm Comlink ot biçme makineleri için uyumlu evrensel bobindir. Ekonomik fiyatı ile tercih edilen yedek parçadır.',
        description2: 'Kolay değiştirilebilir tasarımı ile pratik kullanım sağlar. Dayanıklı plastik yapısı ile uzun ömürlü performans sunar. Comlink orijinal parçasıdır.',
        features: [
            'Evrensel uyumluluk',
            'Tüm Comlink makinelerine uygun',
            'Ekonomik fiyat',
            'Kolay değişim',
            'Dayanıklı plastik',
            'Uzun ömürlü',
            'Orijinal Comlink',
            'Yedek parça'
        ],
        specs: {
            'Model': 'Standart Bobin',
            'Malzeme': 'Dayanıklı plastik',
            'Uyumluluk': 'Tüm Comlink ot biçme makineleri',
            'Tip': 'Evrensel yedek parça',
            'Özellik': 'Ekonomik ve pratik'
        },
        usageAreas: [
            { icon: 'leaf', text: 'Ot biçme' },
            { icon: 'tools', text: 'Tüm makineler' },
            { icon: 'sync', text: 'Yedek parça' },
            { icon: 'dollar', text: 'Ekonomik' },
            { icon: 'award', text: 'Orijinal' },
            { icon: 'home', text: 'Kolay kullanım' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Standart Bobin/10.png',
            gallery: ['img/products/ÜRÜNLER/Standart Bobin/1.jpg', 'img/products/ÜRÜNLER/Standart Bobin/10.png']
        },
        tags: ['Aksesuar', 'Bobin', 'Standart', 'Yedek Parça', 'Ekonomik'],
        whyChoose: 'Standart bobin, tüm Comlink ot biçme makineleri için uyumlu evrensel bobindir. Ekonomik fiyatı ile tercih edilen yedek parçadır.',
        whyChoose2: 'Kolay değiştirilebilir tasarımı ile pratik kullanım sağlar. Comlink orijinal parçası olarak kalite garantisi sunar.'
    },
    'dairesel-testere-bicagi': {
        id: 'dairesel-testere-bicagi',
        model: 'Dairesel Testere Bıçağı',
        name: 'Dairesel Testere Bıçağı',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: 'CK-460D testere kafası için 230mm dairesel bıçak. Sertleştirilmiş çelik. Keskin kesim. Uzun ömürlü.',
        description: 'Dairesel testere bıçağı, CK-460D profesyonel dairesel testere kafası için özel olarak tasarlanmıştır. 230mm çapında sertleştirilmiş çelik bıçaktır.',
        description2: 'Keskin kesim ağzı ile 8 cm çapa kadar çalıları kolayca kesebilir. Sessiz çalışma özelliği ile düşük gürültü seviyesi sağlar. Uzun ömürlü kullanım için özel kaplama.',
        features: [
            '230mm çap',
            'Sertleştirilmiş çelik',
            'CK-460D uyumlu',
            'Keskin kesim ağzı',
            '8cm çapa kadar kesim',
            'Sessiz çalışma',
            'Uzun ömürlü kaplama',
            'Orijinal yedek parça'
        ],
        specs: {
            'Model': 'Dairesel Testere Bıçağı',
            'Çap': '230 mm',
            'Malzeme': 'Sertleştirilmiş çelik',
            'Uyumluluk': 'CK-460D',
            'Maksimum Kesim': '8 cm çap',
            'Özellik': 'Sessiz çalışma',
            'Tip': 'Orijinal yedek parça'
        },
        usageAreas: [
            { icon: 'cut', text: 'Çalı kesimi' },
            { icon: 'tree', text: 'Dal budama' },
            { icon: 'tools', text: 'CK-460D' },
            { icon: 'sync', text: 'Yedek bıçak' },
            { icon: 'award', text: 'Orijinal' },
            { icon: 'shield', text: 'Dayanıklı' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Dairesel Testere Bıçağı/16.png',
            gallery: ['img/products/ÜRÜNLER/Dairesel Testere Bıçağı/1.jpg', 'img/products/ÜRÜNLER/Dairesel Testere Bıçağı/16.png']
        },
        tags: ['Aksesuar', 'Bıçak', 'Dairesel Testere', 'Yedek Parça', '230mm'],
        whyChoose: 'Dairesel testere bıçağı, CK-460D için Comlink orijinal yedek parçasıdır. 230mm çapında sertleştirilmiş çelik bıçak, keskin ve uzun ömürlü kesim sağlar.',
        whyChoose2: 'Sessiz çalışma özelliği ile düşük gürültü seviyesi sunar. 8 cm çapa kadar çalıları kolayca kesebilir.'
    },
    'uc-bicak': {
        id: 'uc-bicak',
        model: 'Üç Bıçak',
        name: 'Üç Bıçak',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: 'Ot biçme makineleri için üç bıçaklı kesim sistemi. Geniş kesim alanı. Hızlı çalışma. Dayanıklı çelik.',
        description: 'Üç bıçak sistemi, Comlink ot biçme makineleri için tasarlanmış üçlü kesim aparatıdır. Geniş kesim alanı ile hızlı ve etkili çalışma sağlar.',
        description2: 'Dayanıklı çelik yapısı ile uzun ömürlü kullanım sunar. Üç kesim noktası ile düzgün ve temiz kesim performansı sağlar. Kolay montaj ve değişim.',
        features: [
            'Üç bıçaklı sistem',
            'Geniş kesim alanı',
            'Hızlı ve etkili çalışma',
            'Dayanıklı çelik yapı',
            'Düzgün kesim',
            'Kolay montaj',
            'Uzun ömürlü',
            'Orijinal aksesuar'
        ],
        specs: {
            'Model': 'Üç Bıçak',
            'Malzeme': 'Dayanıklı çelik',
            'Bıçak Sayısı': '3 adet',
            'Uyumluluk': 'Comlink ot biçme makineleri',
            'Özellik': 'Geniş kesim alanı',
            'Tip': 'Orijinal aksesuar'
        },
        usageAreas: [
            { icon: 'leaf', text: 'Ot biçme' },
            { icon: 'cut', text: 'Geniş alan' },
            { icon: 'bolt', text: 'Hızlı kesim' },
            { icon: 'tools', text: 'Comlink makineler' },
            { icon: 'award', text: 'Orijinal' },
            { icon: 'shield', text: 'Dayanıklı' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Üç Bıçak/1.jpg',
            gallery: ['img/products/ÜRÜNLER/Üç Bıçak/1.jpg', 'img/products/ÜRÜNLER/Üç Bıçak/1.jpg']
        },
        tags: ['Aksesuar', 'Bıçak', 'Üçlü Sistem', 'Ot Biçme', 'Yedek Parça'],
        whyChoose: 'Üç bıçak sistemi, geniş kesim alanı ile hızlı ve etkili ot biçme sağlar. Üç kesim noktası ile düzgün ve temiz kesim performansı sunar.',
        whyChoose2: 'Dayanıklı çelik yapısı ile uzun ömürlü kullanım sağlar. Kolay montaj ve değişim ile pratik kullanım sunar.'
    },
    'hafif-ot-bariyeri': {
        id: 'hafif-ot-bariyeri',
        model: 'Hafif Yabani Ot Bariyeri',
        name: 'Hafif Yabani Ot Bariyeri',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: 'Ot biçme makineleri için hafif koruma bariyeri. Taş ve debris koruması. Güvenli çalışma. Kolay montaj.',
        description: 'Hafif yabani ot bariyeri, ot biçme işlemi sırasında taş, çakıl ve diğer debris\'lere karşı koruma sağlar. Hafif yapısı ile makineye ekstra yük bindirmez.',
        description2: 'Dayanıklı plastik malzemeden üretilmiştir. Kolay montaj ve demontaj özelliği ile pratik kullanım sağlar. Kullanıcıyı ve çevreyi korur.',
        features: [
            'Hafif koruma bariyeri',
            'Taş ve debris koruması',
            'Dayanıklı plastik',
            'Kolay montaj',
            'Makineye yük bindirmez',
            'Güvenli çalışma',
            'Pratik kullanım',
            'Uzun ömürlü'
        ],
        specs: {
            'Model': 'Hafif Yabani Ot Bariyeri',
            'Malzeme': 'Dayanıklı plastik',
            'Uyumluluk': 'Comlink ot biçme makineleri',
            'Özellik': 'Hafif ve koruyucu',
            'Montaj': 'Kolay',
            'Tip': 'Güvenlik aksesuarı'
        },
        usageAreas: [
            { icon: 'shield', text: 'Taş koruması' },
            { icon: 'leaf', text: 'Ot biçme' },
            { icon: 'user-shield', text: 'Kullanıcı güvenliği' },
            { icon: 'tools', text: 'Comlink makineler' },
            { icon: 'award', text: 'Kaliteli' },
            { icon: 'home', text: 'Kolay montaj' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Hafif Yabani Ot Bariyeri/20.png',
            gallery: ['img/products/ÜRÜNLER/Hafif Yabani Ot Bariyeri/20.png', 'img/products/ÜRÜNLER/Hafif Yabani Ot Bariyeri/20.png']
        },
        tags: ['Aksesuar', 'Bariyer', 'Koruma', 'Güvenlik', 'Hafif'],
        whyChoose: 'Hafif yabani ot bariyeri, ot biçme işlemi sırasında taş ve debris\'lere karşı etkili koruma sağlar. Hafif yapısı ile makineye ekstra yük bindirmez.',
        whyChoose2: 'Kolay montaj ve demontaj özelliği ile pratik kullanım sağlar. Kullanıcı ve çevre güvenliği için önemli bir aksesuar.'
    },
    'sarili-ot-bariyeri': {
        id: 'sarili-ot-bariyeri',
        model: 'Sarılı Ot Bariyeri',
        name: 'Sarılı Ot Bariyeri',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: 'Ağır hizmet tipi ot bariyeri. Takviyeli yapı. Maksimum koruma. Profesyonel kullanım için.',
        description: 'Sarılı ot bariyeri, ağır hizmet tipi koruma bariyeridir. Takviyeli yapısı ile maksimum koruma sağlar. Profesyonel kullanıcılar için tasarlanmıştır.',
        description2: 'Sert ve yoğun bitki örtüsü, taşlı araziler ve zorlu koşullarda kullanım için idealdir. Dayanıklı malzeme ve güçlendirme ile uzun ömürlü performans sunar.',
        features: [
            'Ağır hizmet tipi bariyer',
            'Takviyeli yapı',
            'Maksimum koruma',
            'Profesyonel kullanım',
            'Zorlu koşullara dayanıklı',
            'Uzun ömürlü',
            'Güçlü malzeme',
            'Güvenli çalışma'
        ],
        specs: {
            'Model': 'Sarılı Ot Bariyeri',
            'Malzeme': 'Takviyeli plastik',
            'Uyumluluk': 'Comlink ot biçme makineleri',
            'Özellik': 'Ağır hizmet tipi',
            'Montaj': 'Profesyonel',
            'Tip': 'Güvenlik aksesuarı'
        },
        usageAreas: [
            { icon: 'shield', text: 'Maksimum koruma' },
            { icon: 'industry', text: 'Profesyonel' },
            { icon: 'tree', text: 'Zorlu araziler' },
            { icon: 'tools', text: 'Ağır işler' },
            { icon: 'award', text: 'Dayanıklı' },
            { icon: 'user-shield', text: 'Güvenlik' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Sarılı Ot Bariyeri/15.png',
            gallery: ['img/products/ÜRÜNLER/Sarılı Ot Bariyeri/15.png', 'img/products/ÜRÜNLER/Sarılı Ot Bariyeri/15.png']
        },
        tags: ['Aksesuar', 'Bariyer', 'Ağır Hizmet', 'Profesyonel', 'Koruma'],
        whyChoose: 'Sarılı ot bariyeri, ağır hizmet tipi koruma sağlar. Takviyeli yapısı ile zorlu koşullarda maksimum güvenlik sunar.',
        whyChoose2: 'Profesyonel kullanıcılar için idealdir. Sert bitki örtüsü ve taşlı arazilerde güvenli çalışma imkanı sağlar.'
    },
    'cim-bicme-yardimci': {
        id: 'cim-bicme-yardimci',
        model: 'Çim Biçme Yardımcı Aracı',
        name: 'Çim Biçme Yardımcı Aracı',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: 'Çim biçme işlemini kolaylaştıran yardımcı araç. Ergonomik tasarım. Yorulmadan çalışma. Sırt desteği.',
        description: 'Çim biçme yardımcı aracı, uzun süreli ot biçme işlemlerinde ergonomik destek sağlar. Sırt tipi destek sistemi ile makinenin ağırlığını dengeler.',
        description2: 'Ayarlanabilir askı sistemi ve rahat omuz bantları ile yorulmadan çalışma imkanı sunar. Tüm Comlink ot biçme makineleriyle uyumludur. Profesyonel kullanıcılar için ideal.',
        features: [
            'Ergonomik sırt desteği',
            'Ayarlanabilir askı sistemi',
            'Rahat omuz bantları',
            'Ağırlık dengeleme',
            'Yorulmadan çalışma',
            'Tüm Comlink makineleriyle uyumlu',
            'Dayanıklı malzeme',
            'Kolay kullanım'
        ],
        specs: {
            'Model': 'Çim Biçme Yardımcı Aracı',
            'Tip': 'Sırt tipi destek sistemi',
            'Uyumluluk': 'Tüm Comlink ot biçme makineleri',
            'Özellik': 'Ergonomik ve ayarlanabilir',
            'Malzeme': 'Dayanıklı plastik ve tekstil',
            'Kategori': 'Konfor aksesuarı'
        },
        usageAreas: [
            { icon: 'leaf', text: 'Ot biçme' },
            { icon: 'user', text: 'Ergonomik' },
            { icon: 'clock', text: 'Uzun süreli çalışma' },
            { icon: 'tools', text: 'Tüm makineler' },
            { icon: 'award', text: 'Profesyonel' },
            { icon: 'home', text: 'Kolay kullanım' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Çim Biçme Yardımcı Aracı/11.jpg',
            gallery: ['img/products/ÜRÜNLER/Çim Biçme Yardımcı Aracı/11.jpg', 'img/products/ÜRÜNLER/Çim Biçme Yardımcı Aracı/11.jpg']
        },
        tags: ['Aksesuar', 'Ergonomik', 'Sırt Desteği', 'Konfor', 'Yardımcı'],
        whyChoose: 'Çim biçme yardımcı aracı, uzun süreli çalışmalarda ergonomik destek sağlar. Sırt tipi destek sistemi ile makinenin ağırlığını dengeler.',
        whyChoose2: 'Ayarlanabilir askı ve rahat omuz bantları ile yorulmadan çalışma imkanı sunar. Profesyonel kullanıcılar için idealdir.'
    },
    // ==================== GÜVENLİK EKİPMANLARI ====================
    'koruyucu-onluk': {
        id: 'koruyucu-onluk',
        model: 'Koruyucu Önlük',
        name: 'Koruyucu Önlük',
        category: 'Aksesuarlar',
        categoryId: 'aksesuar',
        shortDesc: 'Ot biçme ve budama için koruyucu önlük. Dayanıklı kumaş. Debris ve nem koruması. Ayarlanabilir askılar. Profesyonel.',
        description: 'Koruyucu önlük, ot biçme, budama ve diğer bahçe işlerinde vücudu korur. Dayanıklı kumaştan üretilmiştir. Debris, nem ve kir koruması sağlar.',
        description2: 'Ayarlanabilir omuz ve bel askıları ile tüm vücut tiplerine uyum sağlar. Geniş cep sistemi ile pratik kullanım sunar. Yıkanabilir ve uzun ömürlü. Profesyonel bahçe işçileri için ideal.',
        features: [
            'Dayanıklı kumaş',
            'Debris ve nem koruması',
            'Ayarlanabilir askılar',
            'Tüm bedenlere uygun',
            'Geniş cep sistemi',
            'Yıkanabilir',
            'Uzun ömürlü',
            'Profesyonel kalite'
        ],
        specs: {
            'Model': 'Koruyucu Önlük',
            'Malzeme': 'Dayanıklı polyester kumaş',
            'Ayarlama': 'Omuz ve bel askıları',
            'Özellik': 'Su itici, dayanıklı',
            'Bakım': 'Makinede yıkanabilir',
            'Beden': 'Universal (ayarlanabilir)',
            'Kullanım': 'Bahçe işleri'
        },
        usageAreas: [
            { icon: 'user-shield', text: 'Vücut koruması' },
            { icon: 'leaf', text: 'Ot biçme' },
            { icon: 'cut', text: 'Budama' },
            { icon: 'tree', text: 'Bahçe işleri' },
            { icon: 'shield', text: 'Debris koruması' },
            { icon: 'award', text: 'Profesyonel' }
        ],
        images: {
            main: 'img/products/ÜRÜNLER/Koruyucu Önlük/1.jpg',
            gallery: ['img/products/ÜRÜNLER/Koruyucu Önlük/1.jpg', 'img/products/ÜRÜNLER/Koruyucu Önlük/1.jpg']
        },
        tags: ['Güvenlik', 'Önlük', 'Koruyucu', 'Dayanıklı', 'Profesyonel'],
        whyChoose: 'Koruyucu önlük, bahçe işlerinde vücudu debris, nem ve kire karşı korur. Dayanıklı kumaş yapısı ile uzun ömürlü kullanım sağlar.',
        whyChoose2: 'Ayarlanabilir askılar ve geniş cep sistemi ile pratik kullanım sunar. Yıkanabilir ve bakımı kolaydır. Profesyonel bahçe işçileri için ideal.'
    }
};

// ==================== ÜRÜN QUERY FONKSİYONLARI ====================

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

// Arama terimine göre ürünleri filtrele
function searchProducts(searchTerm) {
    if (!searchTerm || searchTerm.trim() === '') {
        return getAllProducts();
    }

    const term = searchTerm.toLowerCase().trim();
    return Object.values(productsData).filter(product => {
        return product.name.toLowerCase().includes(term) ||
            product.model.toLowerCase().includes(term) ||
            product.shortDesc.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term) ||
            (product.tags && product.tags.some(tag => tag.toLowerCase().includes(term)));
    });
}

// Gelişmiş filtreleme fonksiyonu
function filterProducts(options = {}) {
    let products = getAllProducts();

    // Kategori filtresi
    if (options.category && options.category !== 'all') {
        products = products.filter(p => p.categoryId === options.category);
    }

    // Arama filtresi
    if (options.search) {
        const term = options.search.toLowerCase().trim();
        products = products.filter(p => {
            return p.name.toLowerCase().includes(term) ||
                p.model.toLowerCase().includes(term) ||
                p.shortDesc.toLowerCase().includes(term) ||
                p.category.toLowerCase().includes(term) ||
                (p.tags && p.tags.some(tag => tag.toLowerCase().includes(term)));
        });
    }

    // Sıralama
    if (options.sort) {
        switch (options.sort) {
            case 'name-asc':
                products.sort((a, b) => a.name.localeCompare(b.name, 'tr'));
                break;
            case 'name-desc':
                products.sort((a, b) => b.name.localeCompare(a.name, 'tr'));
                break;
            case 'model-asc':
                products.sort((a, b) => a.model.localeCompare(b.model, 'tr'));
                break;
            case 'model-desc':
                products.sort((a, b) => b.model.localeCompare(a.model, 'tr'));
                break;
            default:
                // Varsayılan: ID sırasına göre (ekleme sırası)
                break;
        }
    }

    return products;
}

// ==================== PAGINATION FONKSİYONLARI ====================

// Sayfalanmış ürünleri getir
function getProductsPaginated(page = 1, itemsPerPage = 6, filters = {}) {
    const allProducts = filterProducts(filters);
    const totalItems = allProducts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Sayfa numarasını düzelt
    page = Math.max(1, Math.min(page, totalPages));

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const products = allProducts.slice(startIndex, endIndex);

    return {
        products: products,
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
function getTotalPages(itemsPerPage = 6, filters = {}) {
    const allProducts = filterProducts(filters);
    return Math.ceil(allProducts.length / itemsPerPage);
}

// Tüm kategorileri getir (ürün sayısıyla birlikte)
function getCategories() {
    const categories = {};
    const products = getAllProducts();

    products.forEach(product => {
        if (!categories[product.categoryId]) {
            categories[product.categoryId] = {
                id: product.categoryId,
                name: product.category,
                count: 0
            };
        }
        categories[product.categoryId].count++;
    });

    // Kategorileri özel sıraya göre düzenle
    // Müşteri tarafından belirlenen sıralama
    const categoryOrder = [
        'batarya',
        'ot-bicme',
        'dal-budama',
        'yuksek-dal-budama',
        'cit-budama',
        'yaprak-ufleyici',
        'cim-bicme',
        'toprak-burgu',
        'capa-makinesi',
        'aksesuar'
    ];

    return Object.values(categories).sort((a, b) => {
        const indexA = categoryOrder.indexOf(a.id);
        const indexB = categoryOrder.indexOf(b.id);

        // Her ikisi de listede varsa, sıralarına göre
        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        }

        // Sadece A listede varsa, A önce
        if (indexA !== -1) return -1;

        // Sadece B listede varsa, B önce
        if (indexB !== -1) return 1;

        // İkisi de listede yoksa alfabetik sırala
        return a.name.localeCompare(b.name, 'tr');
    });
}

// Toplam ürün sayısını getir
function getTotalProductCount() {
    return getAllProducts().length;
}
