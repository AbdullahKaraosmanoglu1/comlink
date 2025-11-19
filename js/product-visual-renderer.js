/**
 * COMLINK PRODUCT VISUAL RENDERER
 * Ürün detay sayfalarındaki görsel öğeleri dinamik olarak render eder
 */

(function () {
    'use strict';

    // ==================== RENDER FONKSİYONLARI ====================

    /**
     * İstatistik kartlarını render et (Ürünler için)
     */
    function renderStatistics(statistics) {
        if (!statistics || statistics.length === 0) return '';

        let html = '<div class="stat-grid product-stats" data-aos="fade-up" style="margin: 30px 0;">';

        statistics.forEach((stat, index) => {
            const colorClass = stat.color ? ` ${stat.color}` : '';
            const delay = index * 100;

            html += `
                <div class="stat-card${colorClass}" data-aos="zoom-in" data-aos-delay="${delay}">
                    <i class="fas ${stat.icon} stat-card-icon"></i>
                    <div class="stat-card-value">${stat.value}</div>
                    <div class="stat-card-label">${stat.label}</div>
                </div>
            `;
        });

        html += '</div>';
        return html;
    }

    /**
     * Performans metrikleri (Progress Bars)
     */
    function renderPerformanceMetrics(metrics) {
        if (!metrics || metrics.length === 0) return '';

        let html = '<div class="performance-metrics" data-aos="fade-up" style="margin: 40px 0;">';
        html += '<h4 style="text-align: center; margin-bottom: 30px;"><i class="fas fa-chart-line"></i> Performans Metrikleri</h4>';

        metrics.forEach((metric, index) => {
            const delay = index * 100;
            const colorClass = metric.color || 'blue';

            html += `
                <div class="progress-item" data-aos="fade-up" data-aos-delay="${delay}">
                    <div class="progress-header">
                        <div class="progress-label">
                            <i class="fas ${metric.icon}"></i> ${metric.label}
                        </div>
                        <div class="progress-percentage">%${metric.percentage}</div>
                    </div>
                    <div class="progress-bar-wrapper">
                        <div class="progress-bar-fill progress-${colorClass}" style="width: 0%;" data-width="${metric.percentage}"></div>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        return html;
    }

    /**
     * Karşılaştırma tablosu (Benzinli vs Comlink) - Ürünlere özel
     */
    function renderComparison(comparison) {
        if (!comparison) return '';

        let html = `
            <div class="comparison-table product-comparison" data-aos="fade-up" style="margin: 40px 0;">
                <h4 style="text-align: center; margin-bottom: 20px;">${comparison.title}</h4>
                <div class="comparison-header">
                    <div class="comparison-col-header benzinli">
                        <i class="fas fa-gas-pump"></i> BENZİNLİ
                    </div>
                    <div class="comparison-col-header akulu">
                        <i class="fas fa-battery-full"></i> COMLINK AKÜLÜ
                    </div>
                </div>
        `;

        // Satırları oluştur
        const maxRows = Math.max(comparison.benzinli.length, comparison.comlink.length);
        for (let i = 0; i < maxRows; i++) {
            const benzinliItem = comparison.benzinli[i] || {};
            const comlinkItem = comparison.comlink[i] || {};

            html += `
                <div class="comparison-row" data-aos="fade-up" data-aos-delay="${i * 50}">
                    <div class="comparison-cell benzinli">
                        <i class="fas ${benzinliItem.icon || 'fa-circle'}"></i>
                        <div class="comparison-cell-content">
                            <div class="comparison-cell-title">${benzinliItem.label || ''}</div>
                            <div class="comparison-cell-value">${benzinliItem.value || ''}</div>
                            ${benzinliItem.note ? `<small style="color: #999; display: block; margin-top: 3px;">${benzinliItem.note}</small>` : ''}
                        </div>
                    </div>
                    <div class="comparison-cell akulu">
                        <i class="fas ${comlinkItem.icon || 'fa-circle'}"></i>
                        <div class="comparison-cell-content">
                            <div class="comparison-cell-title">${comlinkItem.label || ''}</div>
                            <div class="comparison-cell-value">${comlinkItem.value || ''}</div>
                            ${comlinkItem.note ? `<small style="color: #999; display: block; margin-top: 3px;">${comlinkItem.note}</small>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        html += '</div>';
        return html;
    }

    /**
     * Badge'leri render et
     */
    function renderBadges(badges) {
        if (!badges || badges.length === 0) return '';

        let html = '<div class="badge-container" data-aos="fade-up" style="margin: 25px 0;">';

        badges.forEach((badge, index) => {
            const typeClass = badge.type ? ` ${badge.type}-badge` : ' award-badge';
            const delay = index * 50;

            html += `
                <div class="${typeClass}" data-aos="zoom-in" data-aos-delay="${delay}">
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

        let html = '<div class="product-highlights" style="margin: 30px 0;">';

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

        html += '</div>';
        return html;
    }

    /**
     * Teknik özellikler tablosu (güzel görsel tablo)
     */
    function renderTechnicalSpecs(specs) {
        if (!specs || Object.keys(specs).length === 0) return '';

        let html = `
            <div class="technical-specs" data-aos="fade-up" style="margin: 40px 0;">
                <h4 style="text-align: center; margin-bottom: 25px;">
                    <i class="fas fa-cog"></i> Teknik Özellikler
                </h4>
                <div class="specs-grid">
        `;

        let index = 0;
        for (const [key, value] of Object.entries(specs)) {
            const delay = index * 30;
            html += `
                <div class="spec-item" data-aos="fade-up" data-aos-delay="${delay}">
                    <div class="spec-label">${key}</div>
                    <div class="spec-value">${value}</div>
                </div>
            `;
            index++;
        }

        html += `
                </div>
            </div>
        `;

        return html;
    }

    /**
     * Tüm görsel öğeleri render et ve içeriğe ekle
     */
    function injectVisualElements(product) {
        if (!product || !product.visualElements) return;

        const visualElements = product.visualElements;

        // Ürün detay container'ı bul
        const detailContainer = $('.product-details-content, .tab-content, .blog-details-content');
        if (!detailContainer.length) return;

        // Ürün açıklamasının hemen altına eklemek için yer bul
        const descriptionArea = detailContainer.find('p').first();

        let insertPoint = descriptionArea.length ? descriptionArea : detailContainer;

        // 1. İstatistikler - En üstte
        if (visualElements.statistics) {
            const statsHtml = renderStatistics(visualElements.statistics);
            insertPoint.after(statsHtml);
            insertPoint = detailContainer.find('.product-stats');
        }

        // 2. Badge'ler - İstatistiklerden sonra
        if (visualElements.badges) {
            const badgesHtml = renderBadges(visualElements.badges);
            if (insertPoint.length) {
                insertPoint.after(badgesHtml);
                insertPoint = detailContainer.find('.badge-container').last();
            }
        }

        // 3. Performance Metrics
        if (visualElements.performanceMetrics) {
            const metricsHtml = renderPerformanceMetrics(visualElements.performanceMetrics);
            if (insertPoint.length) {
                insertPoint.after(metricsHtml);
                insertPoint = detailContainer.find('.performance-metrics');
            }
        }

        // 4. Karşılaştırma tablosu
        if (visualElements.comparison) {
            const comparisonHtml = renderComparison(visualElements.comparison);
            if (insertPoint.length) {
                insertPoint.after(comparisonHtml);
                insertPoint = detailContainer.find('.product-comparison');
            }
        }

        // 5. Highlight kutular
        if (visualElements.highlights) {
            const highlightsHtml = renderHighlights(visualElements.highlights);
            if (insertPoint.length) {
                insertPoint.after(highlightsHtml);
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

        // AOS refresh
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    // ==================== ÜRÜN KART GÖRSELLERİ (Liste Sayfası İçin) ====================

    /**
     * Ürün kartlarına badge ekle
     */
    function addProductCardBadges(productCard, product) {
        if (!product.visualElements || !product.visualElements.badges) return;

        const badges = product.visualElements.badges.slice(0, 2); // İlk 2 badge
        let badgeHTML = '<div class="product-card-badges">';

        badges.forEach(badge => {
            const typeClass = badge.type || 'tech';
            badgeHTML += `
                <span class="product-badge ${typeClass}-badge-small">
                    <i class="fas ${badge.icon}"></i> ${badge.text}
                </span>
            `;
        });

        badgeHTML += '</div>';

        $(productCard).find('.product-thumb').prepend(badgeHTML);
    }

    /**
     * Ürün kartlarına performans göstergesi ekle
     */
    function addProductCardPerformance(productCard, product) {
        if (!product.visualElements || !product.visualElements.performanceMetrics) return;

        const topMetric = product.visualElements.performanceMetrics[0];
        if (!topMetric) return;

        const performanceHTML = `
            <div class="product-card-performance">
                <small><i class="fas ${topMetric.icon}"></i> ${topMetric.label}</small>
                <div class="mini-progress-bar">
                    <div class="mini-progress-fill progress-${topMetric.color}" style="width: ${topMetric.percentage}%"></div>
                </div>
            </div>
        `;

        $(productCard).find('.product-content').append(performanceHTML);
    }

    // ==================== GLOBAL EXPOSE ====================

    // Global scope'a expose et
    window.ProductVisualRenderer = {
        injectVisualElements: injectVisualElements,
        renderStatistics: renderStatistics,
        renderPerformanceMetrics: renderPerformanceMetrics,
        renderComparison: renderComparison,
        renderBadges: renderBadges,
        renderHighlights: renderHighlights,
        renderTechnicalSpecs: renderTechnicalSpecs,
        addProductCardBadges: addProductCardBadges,
        addProductCardPerformance: addProductCardPerformance
    };

})();
