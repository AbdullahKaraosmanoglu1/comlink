/**
 * Comlink Ürün Kataloğu - Dinamik Rendering ve Pagination Sistemi
 * 32 ürünü dinamik olarak listeler, filtreler ve sayfalandırır
 */

// Katalog State Yönetimi
const catalogState = {
    currentPage: 1,
    itemsPerPage: 6,
    currentCategory: 'all',
    currentSearch: '',
    currentSort: 'default',
    isLoading: false
};

// LocalStorage Key
const STORAGE_KEY = 'comlink_catalog_prefs';

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function () {
    // LocalStorage'dan tercihleri yükle
    loadUserPreferences();

    // Kategori listesini güncelle
    updateCategoryList();

    // İlk ürün listesini yükle
    loadProducts();

    // Event listener'ları ekle
    setupEventListeners();
});

// LocalStorage'dan kullanıcı tercihlerini yükle
function loadUserPreferences() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const prefs = JSON.parse(saved);
            catalogState.currentPage = prefs.page || 1;
            catalogState.currentCategory = prefs.category || 'all';
            catalogState.currentSort = prefs.sort || 'default';
        }
    } catch (error) {
        console.error('Tercihler yüklenirken hata:', error);
    }
}

// Kullanıcı tercihlerini LocalStorage'a kaydet
function saveUserPreferences() {
    try {
        const prefs = {
            page: catalogState.currentPage,
            category: catalogState.currentCategory,
            sort: catalogState.currentSort,
            timestamp: Date.now()
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch (error) {
        console.error('Tercihler kaydedilirken hata:', error);
    }
}

// Kategori listesini dinamik olarak oluştur
function updateCategoryList() {
    const categories = getCategories();
    const totalCount = getTotalProductCount();

    const categoryList = document.querySelector('.cat-list ul');
    if (!categoryList) return;

    // Listeyi temizle
    categoryList.innerHTML = '';

    // "Tüm Ürünler" kategorisi
    const allItem = document.createElement('li');
    allItem.className = catalogState.currentCategory === 'all' ? 'active' : '';
    allItem.innerHTML = `<a href="#" data-filter="all">Tüm Ürünler <span>(${totalCount})</span></a>`;
    categoryList.appendChild(allItem);

    // Diğer kategoriler
    categories.forEach(cat => {
        const li = document.createElement('li');
        li.className = catalogState.currentCategory === cat.id ? 'active' : '';
        li.innerHTML = `<a href="#" data-filter="${cat.id}">${cat.name} <span>(${cat.count})</span></a>`;
        categoryList.appendChild(li);
    });
}

// Ürünleri yükle ve göster
function loadProducts() {
    if (catalogState.isLoading) return;
    catalogState.isLoading = true;

    // Filtreleme seçenekleri
    const filters = {
        category: catalogState.currentCategory,
        search: catalogState.currentSearch,
        sort: catalogState.currentSort
    };

    // Sayfalanmış ürünleri al
    const result = getProductsPaginated(
        catalogState.currentPage,
        catalogState.itemsPerPage,
        filters
    );

    // Ürünleri render et
    renderProducts(result.products);

    // Pagination'ı render et
    renderPagination(result.pagination);

    // Tercihleri kaydet
    saveUserPreferences();

    catalogState.isLoading = false;
}

// Ürün kartlarını DOM'a ekle
function renderProducts(products) {
    const container = document.querySelector('.blog-area .row .col-lg-8 .row');
    if (!container) {
        console.error('Ürün container bulunamadı');
        return;
    }

    // Container'ı temizle
    container.innerHTML = '';

    // Ürün bulunamadı mesajı
    if (products.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <h4>Ürün bulunamadı</h4>
                <p>Arama kriterlerinize uygun ürün bulunmamaktadır.</p>
            </div>
        `;
        return;
    }

    // Her ürün için kart oluştur
    products.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });

    // Lazy loading için Intersection Observer ekle
    setupLazyLoading();
}

// Tek bir ürün kartı oluştur
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-md-6 product-item';
    col.setAttribute('data-category', product.categoryId);
    col.setAttribute('data-name', product.name);
    col.setAttribute('data-keywords', product.tags ? product.tags.join(' ').toLowerCase() : '');

    col.innerHTML = `
        <div class="single-blog-post s-single-blog-post mb-45">
            <div class="blog-thumb">
                <a href="urun-detay.html?id=${product.id}">
                    <img src="${product.images.main}"
                         data-src="${product.images.main}"
                         alt="${product.name}"
                         class="lazy-load"
                         loading="lazy">
                </a>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <ul>
                        <li><a href="#${product.categoryId}">${product.category}</a></li>
                        <li>Model: ${product.model}</li>
                    </ul>
                </div>
                <h4><a href="urun-detay.html?id=${product.id}">${product.name}</a></h4>
                <p>${product.shortDesc}</p>
                <a href="urun-detay.html?id=${product.id}">Detaylı İncele <i class="fas fa-long-arrow-alt-right"></i></a>
            </div>
        </div>
    `;

    return col;
}

// Pagination kontrollerini render et (blog.html tasarımı ile)
function renderPagination(pagination) {
    const container = document.querySelector('.blog-area .row .col-12');
    if (!container) return;

    // Mevcut pagination'ı temizle
    let existingPagination = container.querySelector('.pagination-wrap');
    if (existingPagination) {
        existingPagination.remove();
    }

    // Pagination için row wrapper oluştur
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';

    const colDiv = document.createElement('div');
    colDiv.className = 'col-12';

    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination-wrap mt-30 text-center';

    // Nav elementi ile pagination oluştur
    let paginationHTML = '<nav><ul class="pagination">';

    // Önceki sayfa butonu
    if (pagination.hasPrevPage) {
        paginationHTML += `
            <li class="page-item"><a href="#" class="prev-page"><i class="fas fa-chevron-left"></i></a></li>
        `;
    } else {
        paginationHTML += `
            <li class="page-item disabled"><a href="#" class="disabled"><i class="fas fa-chevron-left"></i></a></li>
        `;
    }

    // Sayfa numaraları
    const maxVisiblePages = 5;
    let startPage = Math.max(1, pagination.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(pagination.totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // İlk sayfa
    if (startPage > 1) {
        paginationHTML += `<li class="page-item"><a href="#" class="page-num" data-page="1">01</a></li>`;
        if (startPage > 2) {
            paginationHTML += `<li class="page-item"><a href="#">...</a></li>`;
        }
    }

    // Görünür sayfa numaraları
    for (let i = startPage; i <= endPage; i++) {
        const pageNum = i < 10 ? '0' + i : i.toString();
        const activeClass = i === pagination.currentPage ? 'active' : '';
        paginationHTML += `
            <li class="page-item ${activeClass}"><a href="#" class="page-num" data-page="${i}">${pageNum}</a></li>
        `;
    }

    // Son sayfa
    if (endPage < pagination.totalPages) {
        if (endPage < pagination.totalPages - 1) {
            paginationHTML += `<li class="page-item"><a href="#">...</a></li>`;
        }
        const lastPageNum = pagination.totalPages < 10 ? '0' + pagination.totalPages : pagination.totalPages.toString();
        paginationHTML += `<li class="page-item"><a href="#" class="page-num" data-page="${pagination.totalPages}">${lastPageNum}</a></li>`;
    }

    // Sonraki sayfa butonu
    if (pagination.hasNextPage) {
        paginationHTML += `
            <li class="page-item"><a href="#" class="next-page"><i class="fas fa-chevron-right"></i></a></li>
        `;
    } else {
        paginationHTML += `
            <li class="page-item disabled"><a href="#" class="disabled"><i class="fas fa-chevron-right"></i></a></li>
        `;
    }

    paginationHTML += '</ul></nav>';

    paginationDiv.innerHTML = paginationHTML;
    colDiv.appendChild(paginationDiv);
    rowDiv.appendChild(colDiv);
    container.appendChild(rowDiv);

    // Pagination event listener'ları ekle
    setupPaginationEvents();
}

// Event listener'ları kur
function setupEventListeners() {
    // Kategori filtreleme
    document.addEventListener('click', function (e) {
        const filterLink = e.target.closest('.cat-list a');
        if (filterLink) {
            e.preventDefault();
            const filter = filterLink.getAttribute('data-filter');

            // Kategori değiştir
            catalogState.currentCategory = filter;
            catalogState.currentPage = 1; // İlk sayfaya dön
            catalogState.currentSearch = ''; // Aramayı temizle
            document.getElementById('product-search-input').value = '';

            // Active sınıfını güncelle
            document.querySelectorAll('.cat-list li').forEach(li => li.classList.remove('active'));
            filterLink.parentElement.classList.add('active');

            // Ürünleri yeniden yükle
            loadProducts();

            // Sayfayı scroll et
            smoothScrollToProducts();
        }
    });

    // Arama
    const searchInput = document.getElementById('product-search-input');
    const searchForm = document.getElementById('product-search-form');

    if (searchInput) {
        // Gerçek zamanlı arama (debounce ile)
        let searchTimeout;
        searchInput.addEventListener('input', function () {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                catalogState.currentSearch = this.value.trim();
                catalogState.currentPage = 1;
                catalogState.currentCategory = 'all'; // Tüm kategorilerde ara

                // Active kategoriyi güncelle
                document.querySelectorAll('.cat-list li').forEach(li => li.classList.remove('active'));
                document.querySelector('.cat-list a[data-filter="all"]').parentElement.classList.add('active');

                loadProducts();
            }, 500); // 500ms debounce
        });
    }

    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            catalogState.currentSearch = searchInput.value.trim();
            catalogState.currentPage = 1;
            catalogState.currentCategory = 'all';
            loadProducts();
            smoothScrollToProducts();
        });
    }
}

// Pagination event listener'ları
function setupPaginationEvents() {
    // Önceki sayfa
    document.querySelectorAll('.prev-page').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            if (catalogState.currentPage > 1) {
                catalogState.currentPage--;
                loadProducts();
                smoothScrollToProducts();
            }
        });
    });

    // Sonraki sayfa
    document.querySelectorAll('.next-page').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const totalPages = getTotalPages(catalogState.itemsPerPage, {
                category: catalogState.currentCategory,
                search: catalogState.currentSearch
            });
            if (catalogState.currentPage < totalPages) {
                catalogState.currentPage++;
                loadProducts();
                smoothScrollToProducts();
            }
        });
    });

    // Sayfa numaraları
    document.querySelectorAll('.page-num').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const page = parseInt(this.getAttribute('data-page'));
            if (page !== catalogState.currentPage) {
                catalogState.currentPage = page;
                loadProducts();
                smoothScrollToProducts();
            }
        });
    });
}

// Smooth scroll to products
function smoothScrollToProducts() {
    const productsSection = document.querySelector('.blog-area');
    if (productsSection) {
        const offset = 100; // Header yüksekliği için offset
        const top = productsSection.offsetTop - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    }
}

// Lazy Loading için Intersection Observer
function setupLazyLoading() {
    const images = document.querySelectorAll('img.lazy-load');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');

                    if (src) {
                        img.src = src;
                        img.classList.remove('lazy-load');
                        img.classList.add('lazy-loaded');
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px' // 50px önceden yüklemeye başla
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback: IntersectionObserver desteklenmiyorsa hepsini yükle
        images.forEach(img => {
            const src = img.getAttribute('data-src');
            if (src) {
                img.src = src;
                img.classList.remove('lazy-load');
                img.classList.add('lazy-loaded');
            }
        });
    }
}
