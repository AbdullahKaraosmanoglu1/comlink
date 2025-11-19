// Batarya Performans Renderer
class BatteryPerformanceRenderer {
    constructor() {
        this.performanceData = batteryPerformanceData;
    }

    // Ürün detay sayfasına batarya performans bölümünü ekle
    injectBatteryPerformance(productId) {
        // Veri kontrolü
        const data = this.performanceData[productId];
        if (!data) {
            console.log(`Batarya performans verisi bulunamadı: ${productId}`);
            return;
        }

        // Hedef elementi bul (etiketler bölümünün üstüne eklemek için)
        const targetElement = document.querySelector('.blog-classic-meta');
        if (!targetElement) {
            console.error('Hedef element bulunamadı: .blog-classic-meta');
            return;
        }

        // Batarya performans HTML'ini oluştur
        const performanceHTML = this.createBatteryPerformanceHTML(data);

        // Etiketler bölümünün hemen üstüne ekle
        targetElement.insertAdjacentHTML('beforebegin', performanceHTML);
    }

    // Batarya performans HTML'ini oluştur
    createBatteryPerformanceHTML(data) {
        const contextHTML = data.context ?
            `<p class="battery-perf-context"><i class="fas fa-info-circle"></i> ${data.context}</p>` : '';

        // Sabit progress bar yüzdeleri: 25%, 50%, 75%, 100%
        const progressPercentages = [25, 50, 75, 100];

        const batteriesHTML = data.batteries.map((battery, index) => {
            const barWidth = progressPercentages[index] || 100;

            return `
                <div class="battery-perf-card">
                    <div class="battery-perf-card-header">
                        <img src="${battery.image}" alt="${battery.name}" class="battery-perf-image" loading="lazy">
                        <h4 class="battery-perf-name">${battery.name}</h4>
                    </div>
                    <div class="battery-perf-card-body">
                        <div class="battery-perf-value">${battery.displayValue}</div>
                        <div class="battery-perf-bar-container">
                            <div class="battery-perf-bar" style="width: ${barWidth}%"></div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <section class="battery-performance-section">
                <div class="battery-perf-header">
                    <i class="fas fa-battery-three-quarters battery-perf-icon"></i>
                    <h3 class="battery-perf-title">Batarya Performans Karşılaştırması</h3>
                </div>
                ${contextHTML}
                <div class="battery-perf-grid">
                    ${batteriesHTML}
                </div>
                <div class="battery-perf-footer">
                    <p><i class="fas fa-info-circle"></i> Performans değerleri ortalama kullanım koşullarına göre değişiklik gösterebilir.</p>
                </div>
            </section>
        `;
    }

    // Progress bar genişliğini hesapla
    calculateBarWidth(batteries, currentIndex) {
        const performances = batteries.map(b => {
            // Performans değerini sayıya çevir (aralık varsa ortalamasını al)
            const perfValue = b.performance;
            if (perfValue.includes('-')) {
                const [min, max] = perfValue.split('-').map(v => parseFloat(v));
                return (min + max) / 2;
            }
            return parseFloat(perfValue);
        });

        const maxPerformance = Math.max(...performances);
        const currentPerformance = performances[currentIndex];

        return Math.round((currentPerformance / maxPerformance) * 100);
    }
}

// Global instance oluştur
const batteryPerformanceRenderer = new BatteryPerformanceRenderer();
