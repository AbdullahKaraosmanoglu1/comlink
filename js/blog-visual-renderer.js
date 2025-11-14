/**
 * COMLINK BLOG VİZUAL RENDERER
 * Blog yazılarındaki görsel öğeleri dinamik olarak render eder
 */

(function () {
    'use strict';

    // ==================== RENDER FONKSİYONLARI ====================

    /**
     * İstatistik kartlarını render et
     */
    function renderStatistics(statistics) {
        if (!statistics || statistics.length === 0) return '';

        let html = '<div class="stat-grid" data-aos="fade-up">';

        statistics.forEach((stat, index) => {
            const colorClass = stat.color ? ` ${stat.color}` : '';
            const delay = index * 100;

            html += `
                <div class="stat-card${colorClass}" data-aos="zoom-in" data-aos-delay="${delay}">
                    <i class="fas ${stat.icon} stat-card-icon"></i>
                    <div class="stat-card-value counter" data-target="${stat.value}">${stat.value}</div>
                    <div class="stat-card-label">${stat.label}</div>
                </div>
            `;
        });

        html += '</div>';
        return html;
    }

    /**
     * Karşılaştırma tablosunu render et
     */
    function renderComparison(comparison) {
        if (!comparison) return '';

        let html = `
            <div class="comparison-table" data-aos="fade-up">
                <h4 style="text-align: center; margin-bottom: 20px;">${comparison.title}</h4>
                <div class="comparison-header">
                    <div class="comparison-col-header benzinli">
                        <i class="fas fa-gas-pump"></i> BENZİNLİ MAKİNE
                    </div>
                    <div class="comparison-col-header akulu">
                        <i class="fas fa-battery-full"></i> COMLINK AKÜLÜ
                    </div>
                </div>
        `;

        // Satırları oluştur
        const maxRows = Math.max(comparison.benzinli.length, comparison.akulu.length);
        for (let i = 0; i < maxRows; i++) {
            const benzinliItem = comparison.benzinli[i] || {};
            const akuluItem = comparison.akulu[i] || {};

            html += `
                <div class="comparison-row" data-aos="fade-up" data-aos-delay="${i * 50}">
                    <div class="comparison-cell benzinli">
                        <i class="fas ${benzinliItem.icon || 'fa-circle'}"></i>
                        <div class="comparison-cell-content">
                            <div class="comparison-cell-title">${benzinliItem.label || ''}</div>
                            <div class="comparison-cell-value">${benzinliItem.value || ''}</div>
                        </div>
                    </div>
                    <div class="comparison-cell akulu">
                        <i class="fas ${akuluItem.icon || 'fa-circle'}"></i>
                        <div class="comparison-cell-content">
                            <div class="comparison-cell-title">${akuluItem.label || ''}</div>
                            <div class="comparison-cell-value">${akuluItem.value || ''}</div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Toplam satırı
        if (comparison.totalBenzinli && comparison.totalAkulu) {
            html += `
                <div class="comparison-row" style="background: #f8f9fa; font-weight: 700;" data-aos="fade-up">
                    <div class="comparison-cell benzinli">
                        <i class="fas fa-calculator"></i>
                        <div class="comparison-cell-content">
                            <div class="comparison-cell-title">TOPLAM MALİYET</div>
                            <div class="comparison-cell-value" style="font-size: 20px; color: #dc3545;">${comparison.totalBenzinli}</div>
                        </div>
                    </div>
                    <div class="comparison-cell akulu">
                        <i class="fas fa-calculator"></i>
                        <div class="comparison-cell-content">
                            <div class="comparison-cell-title">TOPLAM MALİYET</div>
                            <div class="comparison-cell-value" style="font-size: 20px; color: #28a745;">${comparison.totalAkulu}</div>
                        </div>
                    </div>
                </div>
            `;
        }

        html += '</div>';
        return html;
    }

    /**
     * Ses seviyesi karşılaştırmasını render et
     */
    function renderNoiseComparison(noiseData) {
        if (!noiseData || noiseData.length === 0) return '';

        let html = `
            <div class="noise-comparison" data-aos="fade-up">
                <h4 style="text-align: center; margin-bottom: 25px;">
                    <i class="fas fa-volume-up"></i> Ses Seviyesi Karşılaştırması
                </h4>
        `;

        noiseData.forEach((item, index) => {
            const widthPercentage = (item.value / item.maxValue) * 100;
            const delay = index * 100;

            html += `
                <div class="noise-item" data-aos="fade-right" data-aos-delay="${delay}">
                    <div class="noise-header">
                        <div class="noise-label">${item.label}</div>
                        <div class="noise-value">${item.db}</div>
                    </div>
                    <div class="noise-bar-container">
                        <div class="noise-bar ${item.level}" style="width: 0%;" data-width="${widthPercentage}">
                            ${item.label}
                        </div>
                    </div>
                    <div class="noise-description">${item.description}</div>
                </div>
            `;
        });

        html += '</div>';
        return html;
    }

    /**
     * Timeline'ı render et
     */
    function renderTimeline(timelineData) {
        if (!timelineData || timelineData.length === 0) return '';

        let html = '<div class="timeline" data-aos="fade-up">';

        timelineData.forEach((item, index) => {
            const delay = index * 100;

            let statsHtml = '';
            if (item.stats && item.stats.length > 0) {
                statsHtml = '<div class="timeline-stats">';
                item.stats.forEach(stat => {
                    statsHtml += `
                        <div class="timeline-stat">
                            <i class="fas ${stat.icon}"></i> ${stat.text}
                        </div>
                    `;
                });
                statsHtml += '</div>';
            }

            html += `
                <div class="timeline-item" data-aos="fade-right" data-aos-delay="${delay}">
                    <div class="timeline-time">${item.time}</div>
                    <div class="timeline-title">${item.title}</div>
                    <div class="timeline-description">${item.description}</div>
                    ${statsHtml}
                </div>
            `;
        });

        html += '</div>';
        return html;
    }

    /**
     * Badge'leri render et
     */
    function renderBadges(badges) {
        if (!badges || badges.length === 0) return '';

        let html = '<div class="badge-container" data-aos="fade-up">';

        badges.forEach((badge, index) => {
            // Tüm badge'lere temel award-badge class'ını ekle, sonra tip varsa ek class ekle
            const baseClass = 'award-badge';
            const typeClass = badge.type && badge.type !== 'award' ? ` ${badge.type}-badge` : '';
            const fullClass = baseClass + typeClass;
            const delay = index * 50;

            html += `
                <div class="${fullClass}" data-aos="zoom-in" data-aos-delay="${delay}">
                    <i class="fas ${badge.icon}"></i>
                    <span>${badge.text}</span>
                </div>
            `;
        });

        html += '</div>';
        return html;
    }

    /**
     * Highlight kutularını render et
     */
    function renderHighlights(highlights) {
        if (!highlights || highlights.length === 0) return '';

        let html = '';

        highlights.forEach((highlight, index) => {
            const delay = index * 100;

            html += `
                <div class="highlight-box ${highlight.type}" data-aos="fade-left" data-aos-delay="${delay}">
                    <i class="fas ${highlight.icon}"></i>
                    <div class="highlight-box-content">
                        <h5>${highlight.title}</h5>
                        <p>${highlight.text}</p>
                    </div>
                </div>
            `;
        });

        return html;
    }

    /**
     * Progress bar'ları render et
     */
    function renderProgressBars(progressBars) {
        if (!progressBars || progressBars.length === 0) return '';

        let html = '<div class="progress-container" data-aos="fade-up" style="margin: 30px 0;">';

        progressBars.forEach((bar, index) => {
            const delay = index * 100;
            const colorClass = bar.color || 'green';

            html += `
                <div class="progress-item" data-aos="fade-up" data-aos-delay="${delay}">
                    <div class="progress-header">
                        <div class="progress-label">${bar.label}</div>
                        <div class="progress-percentage">%${bar.percentage}</div>
                    </div>
                    <div class="progress-bar-wrapper">
                        <div class="progress-bar-fill progress-${colorClass}" style="width: 0%;" data-width="${bar.percentage}"></div>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        return html;
    }

    /**
     * Tüm görsel öğeleri render et ve içeriğe ekle
     */
    function injectVisualElements(post) {
        if (!post || !post.visualElements) return;

        const visualElements = post.visualElements;
        const contentContainer = $('.blog-details-content');

        if (!contentContainer.length) return;

        // İlk h4'ü bul ve görsel öğeleri oraya ekle
        const firstH4 = contentContainer.find('h4').first();

        // 1. İstatistikler - En üstte göster
        if (visualElements.statistics) {
            const statsHtml = renderStatistics(visualElements.statistics);
            if (firstH4.length) {
                firstH4.before(statsHtml);
            } else {
                contentContainer.prepend(statsHtml);
            }
        }

        // 2. Badge'ler - İstatistiklerden sonra
        if (visualElements.badges) {
            const badgesHtml = renderBadges(visualElements.badges);
            const statGrid = contentContainer.find('.stat-grid');
            if (statGrid.length) {
                statGrid.after(badgesHtml);
            }
        }

        // 3. Karşılaştırma tablosu - İçeriğin ortasına ekle
        if (visualElements.comparison) {
            const comparisonHtml = renderComparison(visualElements.comparison);
            const targetH4 = contentContainer.find('h4').eq(1); // İkinci h4
            if (targetH4.length) {
                targetH4.after(comparisonHtml);
            }
        }

        // 4. Ses seviyesi karşılaştırması
        if (visualElements.noiseComparison) {
            const noiseHtml = renderNoiseComparison(visualElements.noiseComparison);
            const targetH4 = contentContainer.find('h4').eq(1);
            if (targetH4.length) {
                targetH4.after(noiseHtml);
            }
        }

        // 5. Progress bar'lar
        if (visualElements.progressBars) {
            const progressHtml = renderProgressBars(visualElements.progressBars);
            const comparison = contentContainer.find('.comparison-table');
            if (comparison.length) {
                comparison.after(progressHtml);
            }
        }

        // 6. Timeline
        if (visualElements.timeline) {
            const timelineHtml = renderTimeline(visualElements.timeline);
            const targetH4 = contentContainer.find('h4').eq(2); // Üçüncü h4
            if (targetH4.length) {
                targetH4.after(timelineHtml);
            }
        }

        // 7. Highlight kutular - İçeriğe serpiştirilmiş olarak
        if (visualElements.highlights) {
            const highlightsHtml = renderHighlights(visualElements.highlights);
            const lastH4 = contentContainer.find('h4').last();
            if (lastH4.length) {
                lastH4.before(highlightsHtml);
            }
        }

        // Animasyonları başlat
        initAnimations();
    }

    /**
     * Animasyonları başlat
     */
    function initAnimations() {
        // Progress bar animasyonları
        setTimeout(function() {
            $('.progress-bar-fill').each(function() {
                const targetWidth = $(this).data('width');
                $(this).css('width', targetWidth + '%');
            });
        }, 300);

        // Noise bar animasyonları
        setTimeout(function() {
            $('.noise-bar').each(function() {
                const targetWidth = $(this).data('width');
                $(this).css('width', targetWidth + '%');
            });
        }, 500);

        // Counter animasyonları
        animateCounters();

        // AOS refresh
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    /**
     * Sayı sayaçlarını animasyonlu olarak artır
     */
    function animateCounters() {
        $('.counter').each(function() {
            const $this = $(this);
            const target = $this.data('target');

            // Eğer target sayısal değilse, direkt göster
            if (!target || typeof target !== 'string') return;

            // Sayısal kısmı çıkar
            const numberMatch = target.match(/[\d,]+/);
            if (!numberMatch) {
                $this.text(target);
                return;
            }

            const numberStr = numberMatch[0].replace(/,/g, '');
            const number = parseInt(numberStr);

            if (isNaN(number)) {
                $this.text(target);
                return;
            }

            // Prefix ve suffix'i bul
            const prefix = target.substring(0, target.indexOf(numberMatch[0]));
            const suffix = target.substring(target.indexOf(numberMatch[0]) + numberMatch[0].length);

            // Animasyonu başlat
            let current = 0;
            const increment = number / 50;
            const duration = 1500;
            const stepTime = duration / 50;

            const timer = setInterval(function() {
                current += increment;
                if (current >= number) {
                    current = number;
                    clearInterval(timer);
                }

                const displayNumber = Math.floor(current).toLocaleString('tr-TR');
                $this.text(prefix + displayNumber + suffix);
            }, stepTime);
        });
    }

    // ==================== SCROLL OBSERVER ====================

    /**
     * Scroll ile görünür olunca animasyonları tetikle
     */
    function observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.fade-in-up').forEach(el => {
            observer.observe(el);
        });
    }

    // ==================== GLOBAL EXPOSE ====================

    // Global scope'a expose et
    window.BlogVisualRenderer = {
        injectVisualElements: injectVisualElements,
        renderStatistics: renderStatistics,
        renderComparison: renderComparison,
        renderNoiseComparison: renderNoiseComparison,
        renderTimeline: renderTimeline,
        renderBadges: renderBadges,
        renderHighlights: renderHighlights,
        renderProgressBars: renderProgressBars
    };

})();
