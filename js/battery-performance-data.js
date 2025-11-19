// Batarya Performans Verileri
const batteryPerformanceData = {
    'ck-120': {
        productName: 'CK-120 Profesyonel Yaprak Üfleyici',
        performanceType: 'time', // time, cuts, holes
        unit: 'Dakika',
        batteries: [
            {
                id: 'v6-5ah',
                name: 'V6 5.0Ah',
                image: 'img/products/ÜRÜNLER/V6 5.0Ah/V6 5.0Ah.avif',
                performance: '17-40',
                displayValue: '17-40 Dakika'
            },
            {
                id: 'v8-15ah',
                name: 'V8 15Ah',
                image: 'img/products/ÜRÜNLER/V8_15/V8_15.avif',
                performance: '27-135',
                displayValue: '27-135 Dakika'
            },
            {
                id: 'v7-20ah',
                name: 'V7 20.0Ah',
                image: 'img/products/ÜRÜNLER/V7-20.0Ah/V7-20.0Ah.avif',
                performance: '35-180',
                displayValue: '35-180 Dakika'
            },
            {
                id: 'v7-30ah',
                name: 'V7 30.0Ah',
                image: 'img/products/ÜRÜNLER/30.0Ah/30.0Ah.avif',
                performance: '50-240',
                displayValue: '50-240 Dakika'
            }
        ]
    },
    'ck-200': {
        productName: 'CK-200/210 Tek Kesimli Ot Biçme Makinası',
        performanceType: 'time',
        unit: 'Dakika/Saat',
        batteries: [
            {
                id: 'v6-5ah',
                name: 'V6 5.0Ah',
                image: 'img/products/ÜRÜNLER/V6 5.0Ah/V6 5.0Ah.avif',
                performance: '30-90',
                displayValue: '30-90 Dakika'
            },
            {
                id: 'v8-15ah',
                name: 'V8 15Ah',
                image: 'img/products/ÜRÜNLER/V8_15/V8_15.avif',
                performance: '75-240',
                displayValue: '75-240 Dakika'
            },
            {
                id: 'v7-20ah',
                name: 'V7 20.0Ah',
                image: 'img/products/ÜRÜNLER/V7-20.0Ah/V7-20.0Ah.avif',
                performance: '2-5',
                displayValue: '2-5 Saat'
            },
            {
                id: 'v7-30ah',
                name: 'V7 30.0Ah',
                image: 'img/products/ÜRÜNLER/30.0Ah/30.0Ah.avif',
                performance: '3-8',
                displayValue: '3-8 Saat'
            }
        ]
    },
    'ck-400': {
        productName: 'CK-400 El Tipi Zincirli Testere',
        performanceType: 'cuts',
        unit: 'Kesim',
        context: 'Ağaç çapı 10 cm',
        batteries: [
            {
                id: 'v6-5ah',
                name: 'V6 5.0Ah',
                image: 'img/products/ÜRÜNLER/V6 5.0Ah/V6 5.0Ah.avif',
                performance: '100',
                displayValue: '100 Kesim'
            },
            {
                id: 'v8-15ah',
                name: 'V8 15Ah',
                image: 'img/products/ÜRÜNLER/V8_15/V8_15.avif',
                performance: '200',
                displayValue: '200 Kesim'
            },
            {
                id: 'v7-20ah',
                name: 'V7 20.0Ah',
                image: 'img/products/ÜRÜNLER/V7-20.0Ah/V7-20.0Ah.avif',
                performance: '300',
                displayValue: '300 Kesim'
            },
            {
                id: 'v7-30ah',
                name: 'V7 30.0Ah',
                image: 'img/products/ÜRÜNLER/30.0Ah/30.0Ah.avif',
                performance: '500',
                displayValue: '500 Kesim'
            }
        ]
    },
    'ck-230d': {
        productName: 'CK-230D Çim Biçme Makinası',
        performanceType: 'time',
        unit: 'Dakika/Saat',
        context: 'Çim uzunluğu 10cm ≤',
        batteries: [
            {
                id: 'v6-5ah',
                name: 'V6 5.0Ah',
                image: 'img/products/ÜRÜNLER/V6 5.0Ah/V6 5.0Ah.avif',
                performance: '20-60',
                displayValue: '20-60 Dakika'
            },
            {
                id: 'v8-15ah',
                name: 'V8 15Ah',
                image: 'img/products/ÜRÜNLER/V8_15/V8_15.avif',
                performance: '50-200',
                displayValue: '50-200 Dakika'
            },
            {
                id: 'v7-20ah',
                name: 'V7 20.0Ah',
                image: 'img/products/ÜRÜNLER/V7-20.0Ah/V7-20.0Ah.avif',
                performance: '1-5',
                displayValue: '1-5 Saat'
            },
            {
                id: 'v7-30ah',
                name: 'V7 30.0Ah',
                image: 'img/products/ÜRÜNLER/30.0Ah/30.0Ah.avif',
                performance: '2-7',
                displayValue: '2-7 Saat'
            }
        ]
    },
    'ck-320': {
        productName: 'CK-320 Çift Taraflı Çit Budama Makinası',
        performanceType: 'time',
        unit: 'Dakika/Saat',
        batteries: [
            {
                id: 'v6-5ah',
                name: 'V6 5.0Ah',
                image: 'img/products/ÜRÜNLER/V6 5.0Ah/V6 5.0Ah.avif',
                performance: '60-90',
                displayValue: '60-90 Dakika'
            },
            {
                id: 'v8-15ah',
                name: 'V8 15Ah',
                image: 'img/products/ÜRÜNLER/V8_15/V8_15.avif',
                performance: '3-4.5',
                displayValue: '3-4,5 Saat'
            },
            {
                id: 'v7-20ah',
                name: 'V7 20.0Ah',
                image: 'img/products/ÜRÜNLER/V7-20.0Ah/V7-20.0Ah.avif',
                performance: '4-6',
                displayValue: '4-6 Saat'
            },
            {
                id: 'v7-30ah',
                name: 'V7 30.0Ah',
                image: 'img/products/ÜRÜNLER/30.0Ah/30.0Ah.avif',
                performance: '6-9',
                displayValue: '6-9 Saat'
            }
        ]
    },
    'ck-500': {
        productName: 'CK-500 Profesyonel Toprak Burgusu',
        performanceType: 'holes',
        unit: 'Delik',
        batteries: [
            {
                id: 'v6-5ah',
                name: 'V6 5.0Ah',
                image: 'img/products/ÜRÜNLER/V6 5.0Ah/V6 5.0Ah.avif',
                performance: '30',
                displayValue: '+30 Delik'
            },
            {
                id: 'v8-15ah',
                name: 'V8 15Ah',
                image: 'img/products/ÜRÜNLER/V8_15/V8_15.avif',
                performance: '70',
                displayValue: '+70 Delik'
            },
            {
                id: 'v7-20ah',
                name: 'V7 20.0Ah',
                image: 'img/products/ÜRÜNLER/V7-20.0Ah/V7-20.0Ah.avif',
                performance: '100',
                displayValue: '+100 Delik'
            },
            {
                id: 'v7-30ah',
                name: 'V7 30.0Ah',
                image: 'img/products/ÜRÜNLER/30.0Ah/30.0Ah.avif',
                performance: '160',
                displayValue: '+160 Delik'
            }
        ]
    },
    'ck-300v2': {
        productName: 'CK-300v2 Tek Kenarlı Çit Budama Makinesi',
        performanceType: 'time',
        unit: 'Dakika/Saat',
        batteries: [
            {
                id: 'v6-5ah',
                name: 'V6 5.0Ah',
                image: 'img/products/ÜRÜNLER/V6 5.0Ah/V6 5.0Ah.avif',
                performance: '60-90',
                displayValue: '60-90 Dakika'
            },
            {
                id: 'v8-15ah',
                name: 'V8 15Ah',
                image: 'img/products/ÜRÜNLER/V8_15/V8_15.avif',
                performance: '3-4.5',
                displayValue: '3-4,5 Saat'
            },
            {
                id: 'v7-20ah',
                name: 'V7 20.0Ah',
                image: 'img/products/ÜRÜNLER/V7-20.0Ah/V7-20.0Ah.avif',
                performance: '4-6',
                displayValue: '4-6 Saat'
            },
            {
                id: 'v7-30ah',
                name: 'V7 30.0Ah',
                image: 'img/products/ÜRÜNLER/30.0Ah/30.0Ah.avif',
                performance: '6-9',
                displayValue: '6-9 Saat'
            }
        ]
    },
    'ck-412d': {
        productName: 'CK-412d Profesyonel Aktifli Yüksek Dal Budama Makinesi',
        performanceType: 'cuts',
        unit: 'Kesim',
        context: 'Ağaç çapı 10 cm',
        batteries: [
            {
                id: 'v6-5ah',
                name: 'V6 5.0Ah',
                image: 'img/products/ÜRÜNLER/V6 5.0Ah/V6 5.0Ah.avif',
                performance: '100',
                displayValue: '100 Kesim'
            },
            {
                id: 'v8-15ah',
                name: 'V8 15Ah',
                image: 'img/products/ÜRÜNLER/V8_15/V8_15.avif',
                performance: '200',
                displayValue: '200 Kesim'
            },
            {
                id: 'v7-20ah',
                name: 'V7 20.0Ah',
                image: 'img/products/ÜRÜNLER/V7-20.0Ah/V7-20.0Ah.avif',
                performance: '300',
                displayValue: '300 Kesim'
            },
            {
                id: 'v7-30ah',
                name: 'V7 30.0Ah',
                image: 'img/products/ÜRÜNLER/30.0Ah/30.0Ah.avif',
                performance: '500',
                displayValue: '500 Kesim'
            }
        ]
    }
};
