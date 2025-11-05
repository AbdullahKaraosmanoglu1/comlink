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
            gallery: ['img/products/ck-120-profesyonel-yaprak-ufleyici.png', 'img/products/ck-120-profesyonel-yaprak-ufleyici.png']
        },
        tags: ['Yaprak Üfleyici', 'Akülü', 'Profesyonel', 'Bahçe'],
        whyChoose: 'Comlink CK-120 yaprak üfleyici, profesyonel kullanıcılar için özel olarak geliştirilmiş yüksek performanslı bir üründür. Fırçasız motor teknolojisi sayesinde uzun ömürlü kullanım, bakım gerektirmeyen yapı ve sessiz çalışma özellikleri sunar.',
        whyChoose2: 'IP66 sertifikalı bataryalar ile her türlü hava koşulunda güvenle kullanabilirsiniz. Ortak batarya platformu sayesinde tüm Comlink ürünleriyle uyumlu çalışır, bu da hem ekonomik hem de pratik bir çözüm sağlar.'
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
            gallery: ['img/products/ck-210-profesyonel-ot-bicme-makinesi.png', 'img/products/ck-210-profesyonel-ot-bicme-makinesi.png']
        },
        tags: ['Ot Biçme', 'Akülü', 'Profesyonel', 'Bahçe'],
        whyChoose: 'CK-200/210 ot biçme makinesi, geniş alanlarda profesyonel performans sunar. Tek kesimli sistemi ile düzgün ve temiz kesim sağlar. Fırçasız motor teknolojisi sayesinde uzun ömürlü ve bakım gerektirmeyen kullanım imkanı sunar.',
        whyChoose2: 'IP66 sertifikalı bataryalar ile her türlü hava koşulunda güvenle çalışabilirsiniz. Ergonomik tasarımı sayesinde uzun süreli kullanımlarda bile yorulmadan çalışırsınız.'
    },
    'ck-300': {
        id: 'ck-300',
        model: 'CK-300/320',
        name: 'CK-300/320 Çit/Çay Budama',
        category: 'Çit Budama',
        categoryId: 'cit-budama',
        shortDesc: 'Tek ve çift kenarlı budama seçenekleri. Keskin bıçaklar ile mükemmel kesim performansı. Çitler ve çay bahçeleri için ideal çözüm.',
        description: 'CK-300/320 çit budama makinesi, hem tek kenarlı (CK-300) hem de çift kenarlı (CK-320) modelleri ile farklı ihtiyaçlara cevap verir. Keskin lazer kesim bıçakları ile mükemmel kesim performansı sağlar. Çitler, çay bahçeleri ve yeşil alan bakımı için idealdir.',
        description2: 'Hafif ve dengeli tasarımı sayesinde uzun süreli kullanımlarda bile yorulmadan çalışabilirsiniz. Comlink\'in ortak batarya platformu ile ekonomik kullanım imkanı sunar.',
        features: [
            'Tek/Çift kenarlı kesim seçenekleri',
            'Lazer kesim keskin bıçaklar',
            'Ayarlanabilir kesim hızı',
            'Ergonomik ve dengeli tasarım',
            '60cm bıçak uzunluğu',
            'Güvenlik kilidi sistemi',
            'Titreşim azaltma teknolojisi',
            'Hafif ve kullanışlı'
        ],
        specs: {
            'Model': 'CK-300/320',
            'Motor Tipi': 'Fırçasız (Brushless) Motor',
            'Bıçak Uzunluğu': '60 cm',
            'Kesim Tipi': 'Tek kenarlı (300) / Çift kenarlı (320)',
            'Kesim Aralığı': '22 mm',
            'Batarya Voltajı': '56V Li-ion',
            'Uyumlu Bataryalar': 'V6-5Ah / V7-20Ah / V8-15Ah',
            'Çalışma Süresi': '50-100 dakika (bataryaya göre)',
            'Şarj Süresi': '60-180 dakika',
            'Ağırlık': '4.2 kg (batarya hariç)',
            'Gürültü Seviyesi': '≤84 dB',
            'Koruma Sınıfı': 'IP66 (Batarya)'
        },
        usageAreas: [
            { icon: 'leaf', text: 'Çit budama' },
            { icon: 'tree', text: 'Çay bahçeleri' },
            { icon: 'home', text: 'Konut bahçeleri' },
            { icon: 'building', text: 'Belediye peyzaj' },
            { icon: 'industry', text: 'Tesis yeşil alanlar' },
            { icon: 'park', text: 'Park ve bahçeler' }
        ],
        images: {
            main: 'img/products/ck-300-elde-tasinabilir-tek-kenarli-sepetli-cit-ve-cay-budama-makinesi.png',
            gallery: ['img/products/ck-300-elde-tasinabilir-tek-kenarli-sepetli-cit-ve-cay-budama-makinesi.png', 'img/products/ck-300-elde-tasinabilir-tek-kenarli-sepetli-cit-ve-cay-budama-makinesi.png']
        },
        tags: ['Çit Budama', 'Akülü', 'Profesyonel', 'Bahçe'],
        whyChoose: 'CK-300/320 serisi, profesyonel çit budama işleri için en ideal çözümdür. Keskin bıçakları ve güçlü motoruyla kalın dalları bile kolayca keser. Titreşim azaltma sistemi sayesinde rahat kullanım sağlar.',
        whyChoose2: 'Hem tek kenarlı hem de çift kenarlı model seçenekleri ile farklı ihtiyaçlara cevap verir. IP66 koruma sınıfı ile her hava koşulunda güvenle kullanılabilir.'
    },
    'ck-400': {
        id: 'ck-400',
        model: 'CK-400',
        name: 'CK-400 El Tipi Zincirli Testere',
        category: 'Zincirli Testere',
        categoryId: 'testere',
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
            gallery: ['img/products/ck-400-el-tipi-zincirli-testere.png', 'img/products/ck-400-el-tipi-zincirli-testere.png']
        },
        tags: ['Zincirli Testere', 'Akülü', 'Profesyonel', 'Ağaç Kesimi'],
        whyChoose: 'CK-400 zincirli testere, profesyonel ağaç kesimi ve budama işleri için idealdir. Otomatik yağlama sistemi sayesinde bakım gerektirmez. Güvenlik özellikleri ile korumalı kullanım sağlar.',
        whyChoose2: 'Benzinli testerelere göre çok daha sessiz ve çevre dostudur. Bakım maliyeti düşüktür. IP66 sertifikalı bataryalar ile her hava koşulunda güvenle kullanılabilir.'
    },
    'ck-412': {
        id: 'ck-412',
        model: 'CK-412',
        name: 'CK-412 Yüksek Dal Budama',
        category: 'Dal Budama',
        categoryId: 'dal-budama',
        shortDesc: 'Teleskopik sap ile yüksek dallara kolayca ulaşın. Güvenli ve etkili budama için özel tasarım. Meyve bahçeleri ve park alanları için mükemmel.',
        description: 'CK-412 yüksek dal budama makinesi, teleskopik sap sistemi ile 3 metreye kadar yükseklikteki dallara güvenle ulaşmanızı sağlar. Meyve bahçeleri, park alanları ve yüksek ağaçların budanması için idealdir.',
        description2: 'Hafif ve dengeli tasarımı sayesinde uzun süreli kullanımlarda bile yorulmadan çalışabilirsiniz. Otomatik zincir yağlama sistemi ve güvenlik özellikleri ile profesyonel performans sunar.',
        features: [
            'Teleskopik sap (1.8-3m)',
            'Otomatik zincir yağlama',
            'Ayarlanabilir baş açısı',
            'Hafif ve dengeli',
            '25cm zincir uzunluğu',
            'Güvenlik kilidi sistemi',
            'Ergonomik tutma sapı',
            'Titreşim azaltma'
        ],
        specs: {
            'Model': 'CK-412',
            'Motor Tipi': 'Fırçasız (Brushless) Motor',
            'Kılıç Uzunluğu': '25 cm (10")',
            'Teleskopik Uzunluk': '1.8 - 3.0 metre',
            'Baş Açısı': '0-30° ayarlanabilir',
            'Batarya Voltajı': '56V Li-ion',
            'Uyumlu Bataryalar': 'V7-20Ah / V7-30Ah / V8-15Ah',
            'Çalışma Süresi': '40-80 dakika (bataryaya göre)',
            'Şarj Süresi': '90-180 dakika',
            'Ağırlık': '5.2 kg (batarya hariç)',
            'Yağ Tank Kapasitesi': '150 ml',
            'Koruma Sınıfı': 'IP66 (Batarya)'
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
            main: 'img/products/ck-412-profesyonel-yuksek-dal-budama-makinesi.png',
            gallery: ['img/products/ck-412-profesyonel-yuksek-dal-budama-makinesi.png', 'img/products/ck-412-profesyonel-yuksek-dal-budama-makinesi.png']
        },
        tags: ['Dal Budama', 'Akülü', 'Profesyonel', 'Teleskopik'],
        whyChoose: 'CK-412 yüksek dal budama makinesi, merdiven kullanmadan güvenli budama imkanı sunar. Teleskopik sistemi ile 3 metreye kadar yüksekliğe ulaşabilirsiniz. Meyve bahçelerinde hasat öncesi budama için idealdir.',
        whyChoose2: 'Hafif yapısı ve dengeli tasarımı sayesinde uzun süreli kullanımlarda bile yorulmadan çalışabilirsiniz. Otomatik yağlama sistemi sayesinde bakım gerektirmez.'
    },
    'ck-210': {
        id: 'ck-210',
        model: 'CK-210',
        name: 'CK-210 Profesyonel Ot Biçme Makinesi',
        category: 'Ot Biçme',
        categoryId: 'ot-bicme',
        shortDesc: 'Çift bölmeli profesyonel ot biçme makinesi. Taiwan Excellence 2017 ve 2019 ödüllü. Uzun çalışma süresi ve kolay taşıma imkanı.',
        description: 'CK-210 profesyonel ot biçme makinesi, çift bölmeli ve çıkarılabilir gövde yapısı ile kolay saklama ve taşıma imkanı sunar. Taiwan Excellence 2017 ve 2019 ödüllerine sahip bu makine, profesyonel kullanıcılar için ideal bir çözümdür.',
        description2: '1150W güçlü motor ve IP46 su/toz geçirmez özelliği ile her koşulda güvenle kullanılabilir. V7-20Ah veya V7-30Ah batarya seçenekleri ile uzun çalışma süresi sağlar.',
        features: [
            'Çift bölmeli çıkarılabilir gövde',
            '1150W güçlü motor',
            'Taiwan Excellence ödüllü',
            'IP46 su ve toz geçirmez',
            'Ergonomik tasarım',
            'V7-20Ah / V7-30Ah batarya uyumlu',
            'Kolay saklama (88x22x17 cm)',
            'Tayvan tarım sertifikalı'
        ],
        specs: {
            'Model': 'CK-210',
            'Motor Gücü': '1150W',
            'Vücut Ölçüsü': '168x22x17 cm',
            'Depolama Boyu': '88x22x17 cm',
            'Ağırlık': '2.3 kg',
            'Su ve Toz Geçirmez': 'IP46',
            'Tayvan Tarım Sertifika': 'NO.368',
            'Uyumlu Bataryalar': 'V7-20Ah / V7-30Ah',
            'Pil IP Sertifika': 'IP66',
            'BSMI Sertifika': 'R45555',
            'Ödüller': 'Taiwan Excellence 2017, 2019'
        },
        usageAreas: [
            { icon: 'leaf', text: 'Bahçe bakımı' },
            { icon: 'tree', text: 'Park alanları' },
            { icon: 'building', text: 'Belediye yeşil alanlar' },
            { icon: 'home', text: 'Konut bahçeleri' },
            { icon: 'industry', text: 'Profesyonel kullanım' },
            { icon: 'award', text: 'Ödüllü tasarım' }
        ],
        images: {
            main: 'img/products/ck-210-profesyonel-ot-bicme-makinesi.png',
            gallery: ['img/products/ck-210-profesyonel-ot-bicme-makinesi.png', 'img/products/ck-210-profesyonel-ot-bicme-makinesi.png']
        },
        tags: ['Ot Biçme', 'Akülü', 'Profesyonel', 'Taiwan Excellence'],
        whyChoose: 'CK-210 ot biçme makinesi, Taiwan Excellence 2017 ve 2019 ödüllerine sahip prestijli bir üründür. Çift bölmeli tasarımı sayesinde kolay taşıma ve saklama imkanı sunar. 168 cm boyuyla uzun boylu kullanıcılar için özel olarak tasarlanmıştır.',
        whyChoose2: '1150W güçlü motor ve IP46 koruma sınıfı ile her türlü arazide güvenle kullanabilirsiniz. Ortak batarya platformu sayesinde ekonomik kullanım sağlar.'
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
            gallery: ['img/products/ck-230d-cim-bicme-makinesi.png', 'img/products/ck-230d-cim-bicme-makinesi.png']
        },
        tags: ['Çim Biçme', 'Akülü', 'Profesyonel', 'Küçük Tank'],
        whyChoose: 'CK-230D çim biçme makinesi, küçük ve orta boy bahçeler için ideal bir çözümdür. Motor ve uzatma borusu dahil olarak gelen makine, kolay montaj ve kullanım sağlar.',
        whyChoose2: 'Hafif yapısı sayesinde uzun süreli kullanımlarda yorulmadan çalışabilirsiniz. Çift bölmeli tasarımı ile depolama alanından tasarruf edersiniz.'
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
            gallery: ['img/products/ck-320-elde-tasinabilir-cift-tarafli-cit-budama-makinesi.png', 'img/products/ck-320-elde-tasinabilir-cift-tarafli-cit-budama-makinesi.png']
        },
        tags: ['Çit Budama', 'Akülü', 'Profesyonel', 'Çift Taraflı'],
        whyChoose: 'CK-320 çift taraflı çit budama makinesi, profesyonel budama işleri için en verimli çözümdür. Çift kenarlı bıçağı sayesinde hem ileriye hem geriye doğru kesim yapabilirsiniz, bu da iş verimliliğini artırır.',
        whyChoose2: 'Çitler, çay bahçeleri ve meyve ağaçlarının budanmasında mükemmel performans gösterir. Hafif yapısı ve dengeli tasarımı ile uzun süreli kullanımlarda yorulmadan çalışabilirsiniz.'
    },
    'ck-500': {
        id: 'ck-500',
        model: 'CK-500',
        name: 'CK-500 Profesyonel Toprak Matkabı',
        category: 'Toprak Burgusu',
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
            gallery: ['img/products/ck-500-toprak-burgu-makinesi.png', 'img/products/ck-500-toprak-burgu-makinesi.png']
        },
        tags: ['Toprak Burgusu', 'Akülü', 'Profesyonel', 'Tarım'],
        whyChoose: 'CK-500 profesyonel toprak matkabı, iki farklı çalışma modu ile hem standart hem de zorlu toprak koşullarında etkili çalışma imkanı sunar. 1150W güçlü motor ile sert topraklarda bile güvenle kullanılabilir.',
        whyChoose2: 'Standart mod günlük işler için, Uzman modu ise zorlu ve sert topraklar için idealdir. IP66 sertifikalı batarya ile her hava koşulunda güvenle çalışabilirsiniz.'
    },
    'ck-600': {
        id: 'ck-600',
        model: 'CK-600',
        name: 'CK-600 Akülü Çapa Makinesi',
        category: 'Çapa Makinesi',
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
            gallery: ['img/products/ck-600-akulu-capa-makinesi.png', 'img/products/ck-600-akulu-capa-makinesi.png']
        },
        tags: ['Çapa Makinesi', 'Akülü', 'Profesyonel', 'Tarım'],
        whyChoose: 'CK-600 akülü çapa makinesi, bahçe ve tarla çapalama işlerinde benzinli makinelere çevreci bir alternatiftir. Sessiz çalışması sayesinde yerleşim yerlerinde rahatlıkla kullanılabilir.',
        whyChoose2: 'Dumansız, benzinsiz ve bakımsız çalışma özelliği ile düşük işletme maliyeti sunar. Ortak batarya platformu sayesinde ekonomik kullanım imkanı sağlar.'
    }
};

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
