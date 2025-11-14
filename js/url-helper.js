/**
 * COMLINK URL HELPER
 * Dual-Mode URL Builder System
 *
 * Bu dosya hem development hem production ortamında çalışır.
 * Development: .html uzantılı linkler
 * Production: Clean URL'ler (.htaccess ile)
 */

(function(window) {
    'use strict';

    /**
     * Ortam tespiti
     * @returns {boolean} - true ise production, false ise development
     */
    function isProductionEnvironment() {
        const protocol = window.location.protocol;
        const hostname = window.location.hostname;

        // GitHub Pages kontrolü - demo amaçlı development gibi davransın
        if (hostname.includes('github.io')) {
            return false;
        }

        // Production koşulları:
        // 1. HTTPS veya HTTP protokolü (file:// değil)
        // 2. Domain adı localhost, 127.0.0.1 veya boş değil
        // 3. GitHub Pages DEĞİL
        const isHTTPProtocol = protocol === 'https:' || protocol === 'http:';
        const isRealDomain = hostname &&
                             hostname !== 'localhost' &&
                             hostname !== '127.0.0.1' &&
                             hostname !== '';

        return isHTTPProtocol && isRealDomain;
    }

    /**
     * Blog detay sayfası URL oluştur
     * @param {string} blogId - Blog slug/id (örn: "cevre-donusum")
     * @returns {string} - Oluşturulan URL
     */
    function createBlogDetailURL(blogId) {
        if (isProductionEnvironment()) {
            // Production: Clean URL
            return `/blog/${blogId}`;
        } else {
            // Development: .html uzantılı
            return `blog-details.html?id=${blogId}`;
        }
    }

    /**
     * Sayfa URL'i oluştur (genel sayfalar için)
     * @param {string} pageName - Sayfa adı (örn: "hakkimizda")
     * @returns {string} - Oluşturulan URL
     */
    function createPageURL(pageName) {
        if (isProductionEnvironment()) {
            // Production: Clean URL
            return `/${pageName}`;
        } else {
            // Development: .html uzantılı
            return `${pageName}.html`;
        }
    }

    /**
     * Ürün detay sayfası URL oluştur (gelecek için hazır)
     * @param {string} productId - Ürün slug/id
     * @returns {string} - Oluşturulan URL
     */
    function createProductDetailURL(productId) {
        if (isProductionEnvironment()) {
            // Production: Clean URL
            return `/urun/${productId}`;
        } else {
            // Development: .html uzantılı
            return `urun-detay.html?id=${productId}`;
        }
    }

    /**
     * Kategori sayfası URL oluştur (gelecek için hazır)
     * @param {string} categoryId - Kategori slug/id
     * @returns {string} - Oluşturulan URL
     */
    function createCategoryURL(categoryId) {
        if (isProductionEnvironment()) {
            // Production: Clean URL
            return `/kategori/${categoryId}`;
        } else {
            // Development: .html uzantılı
            return `urunler.html?kategori=${categoryId}`;
        }
    }

    /**
     * Ana sayfa URL'i
     * @returns {string}
     */
    function createHomeURL() {
        if (isProductionEnvironment()) {
            return '/';
        } else {
            return 'index.html';
        }
    }

    /**
     * Mevcut URL'den blog ID'sini çıkar
     * Hem /blog/slug hem blog-details.html?id=slug formatlarını destekler
     * @returns {string|null} - Blog ID veya null
     */
    function getBlogIdFromURL() {
        const url = window.location.href;
        const pathname = window.location.pathname;

        // Production format: /blog/cevre-donusum
        const cleanURLMatch = pathname.match(/\/blog\/([a-zA-Z0-9\-]+)/);
        if (cleanURLMatch) {
            return cleanURLMatch[1];
        }

        // Development format: blog-details.html?id=cevre-donusum
        const urlParams = new URLSearchParams(window.location.search);
        const blogId = urlParams.get('id');
        if (blogId) {
            return blogId;
        }

        return null;
    }

    /**
     * Mevcut URL'den ürün ID'sini çıkar (gelecek için hazır)
     * @returns {string|null}
     */
    function getProductIdFromURL() {
        const pathname = window.location.pathname;

        // Production format: /urun/ck-210
        const cleanURLMatch = pathname.match(/\/urun\/([a-zA-Z0-9\-]+)/);
        if (cleanURLMatch) {
            return cleanURLMatch[1];
        }

        // Development format: urun-detay.html?id=ck-210
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        if (productId) {
            return productId;
        }

        return null;
    }

    /**
     * Mevcut URL'den kategori ID'sini çıkar (gelecek için hazır)
     * @returns {string|null}
     */
    function getCategoryIdFromURL() {
        const pathname = window.location.pathname;

        // Production format: /kategori/cim-bicme
        const cleanURLMatch = pathname.match(/\/kategori\/([a-zA-Z0-9\-]+)/);
        if (cleanURLMatch) {
            return cleanURLMatch[1];
        }

        // Development format: urunler.html?kategori=cim-bicme
        const urlParams = new URLSearchParams(window.location.search);
        const categoryId = urlParams.get('kategori');
        if (categoryId) {
            return categoryId;
        }

        return null;
    }

    /**
     * Link element'ine doğru href ekle
     * @param {HTMLElement} linkElement - <a> elementi
     * @param {string} type - Link tipi: 'blog', 'page', 'product', 'category', 'home'
     * @param {string} id - Sayfa/içerik ID'si
     */
    function updateLinkElement(linkElement, type, id) {
        if (!linkElement) return;

        let url;
        switch(type) {
            case 'blog':
                url = createBlogDetailURL(id);
                break;
            case 'page':
                url = createPageURL(id);
                break;
            case 'product':
                url = createProductDetailURL(id);
                break;
            case 'category':
                url = createCategoryURL(id);
                break;
            case 'home':
                url = createHomeURL();
                break;
            default:
                console.warn('Unknown link type:', type);
                return;
        }

        linkElement.setAttribute('href', url);
    }

    /**
     * Tüm blog linklerini otomatik güncelle
     * data-blog-id attribute'una sahip <a> elementlerini günceller
     */
    function updateAllBlogLinks() {
        const blogLinks = document.querySelectorAll('a[data-blog-id]');
        blogLinks.forEach(link => {
            const blogId = link.getAttribute('data-blog-id');
            if (blogId) {
                updateLinkElement(link, 'blog', blogId);
            }
        });
    }

    /**
     * Environment bilgisini console'a yazdır (debug için)
     */
    function logEnvironmentInfo() {
        const isProd = isProductionEnvironment();
        console.log('=== COMLINK URL HELPER ===');
        console.log('Environment:', isProd ? 'PRODUCTION' : 'DEVELOPMENT');
        console.log('Protocol:', window.location.protocol);
        console.log('Hostname:', window.location.hostname);
        console.log('URL Format:', isProd ? 'Clean URLs (/blog/slug)' : 'HTML URLs (page.html?id=slug)');
        console.log('========================');
    }

    /**
     * Sayfa yüklendiğinde otomatik çalışacak init fonksiyonu
     */
    function init() {
        // Debug mode aktifse environment bilgisi göster
        const debugMode = window.location.search.includes('debug=true');
        if (debugMode) {
            logEnvironmentInfo();
        }

        // Data attribute'lu linkleri otomatik güncelle
        updateAllBlogLinks();
    }

    // Global obje olarak export et
    window.URLHelper = {
        // Environment
        isProduction: isProductionEnvironment,

        // URL Builders
        createBlogDetailURL: createBlogDetailURL,
        createPageURL: createPageURL,
        createProductDetailURL: createProductDetailURL,
        createCategoryURL: createCategoryURL,
        createHomeURL: createHomeURL,

        // URL Parsers
        getBlogIdFromURL: getBlogIdFromURL,
        getProductIdFromURL: getProductIdFromURL,
        getCategoryIdFromURL: getCategoryIdFromURL,

        // DOM Helpers
        updateLinkElement: updateLinkElement,
        updateAllBlogLinks: updateAllBlogLinks,

        // Debug
        logEnvironmentInfo: logEnvironmentInfo,

        // Init
        init: init
    };

    // Sayfa yüklendiğinde otomatik init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})(window);


/**
 * KULLANIM ÖRNEKLERİ:
 *
 * 1. Blog detay linki oluşturma:
 *    const url = URLHelper.createBlogDetailURL('cevre-donusum');
 *    // Dev: blog-details.html?id=cevre-donusum
 *    // Prod: /blog/cevre-donusum
 *
 * 2. URL'den blog ID alma:
 *    const blogId = URLHelper.getBlogIdFromURL();
 *    // Dev veya Prod'da çalışır
 *
 * 3. Link element'ini güncelleme:
 *    const link = document.querySelector('a');
 *    URLHelper.updateLinkElement(link, 'blog', 'cevre-donusum');
 *
 * 4. Otomatik link güncelleme (HTML'de):
 *    <a href="#" data-blog-id="cevre-donusum">Blog Yazısı</a>
 *    // Otomatik olarak doğru href ile güncellenecek
 *
 * 5. Environment kontrolü:
 *    if (URLHelper.isProduction()) {
 *        console.log('Production ortamında');
 *    } else {
 *        console.log('Development ortamında');
 *    }
 *
 * 6. Debug modu:
 *    URL'ye ?debug=true ekleyin
 *    Örn: http://localhost/index.html?debug=true
 */
