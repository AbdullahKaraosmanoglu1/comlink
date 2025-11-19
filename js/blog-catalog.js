/**
 * Comlink Blog Kataloğu - Dinamik Rendering ve Pagination Sistemi
 * Blog yazılarını dinamik olarak listeler, filtreler ve sayfalandırır
 */

// Katalog State Yönetimi
const blogCatalogState = {
    currentPage: 1,
    itemsPerPage: 9999, // Tüm blogları tek sayfada göster (pagination kapalı)
    currentCategory: 'all',
    currentSearch: '',
    currentSort: 'date-desc',
    isLoading: false
};

// LocalStorage Key
const BLOG_STORAGE_KEY = 'comlink_blog_prefs';

// URL parametresinden kategori yükle
function loadCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        console.log('URL\'den kategori yüklendi:', category);
        blogCatalogState.currentCategory = category;
        blogCatalogState.currentPage = 1;
    } else {
        console.log('URL\'de kategori parametresi yok');
    }
}

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function () {
    // Önce kategoriyi 'all' olarak ayarla
    blogCatalogState.currentCategory = 'all';
    blogCatalogState.currentPage = 1;
    blogCatalogState.currentSearch = '';

    // Eğer URL'de kategori parametresi varsa onu kullan
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');

    if (categoryParam) {
        console.log('URL parametresinden kategori yüklendi:', categoryParam);
        blogCatalogState.currentCategory = categoryParam;
    } else {
        console.log('URL parametresi yok - Tüm yazılar gösteriliyor');
    }

    // Kategori listesini güncelle
    updateBlogCategoryList();

    // İlk blog listesini yükle
    loadBlogs();

    // Event listener'ları ekle
    setupBlogEventListeners();

    // Browser geri/ileri butonları için
    window.addEventListener('popstate', function (e) {
        // URL'den kategoriyi tekrar oku
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');

        blogCatalogState.currentCategory = categoryParam || 'all';
        blogCatalogState.currentPage = 1;

        console.log('Browser geri/ileri - Kategori:', blogCatalogState.currentCategory);

        // Kategori listesini ve blogları güncelle
        updateBlogCategoryList();
        loadBlogs();
    });
});

// LocalStorage'dan kullanıcı tercihlerini yükle
function loadBlogUserPreferences() {
    try {
        const saved = localStorage.getItem(BLOG_STORAGE_KEY);
        if (saved) {
            const prefs = JSON.parse(saved);
            blogCatalogState.currentPage = prefs.page || 1;
            blogCatalogState.currentCategory = prefs.category || 'all';
            blogCatalogState.currentSort = prefs.sort || 'date-desc';
        }
    } catch (error) {
        console.error('Tercihler yüklenirken hata:', error);
    }
}

// Kullanıcı tercihlerini LocalStorage'a kaydet
function saveBlogUserPreferences() {
    try {
        const prefs = {
            page: blogCatalogState.currentPage,
            category: blogCatalogState.currentCategory,
            sort: blogCatalogState.currentSort,
            timestamp: Date.now()
        };
        localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(prefs));
    } catch (error) {
        console.error('Tercihler kaydedilirken hata:', error);
    }
}

// Kategori listesini dinamik olarak oluştur
function updateBlogCategoryList() {
    console.log('updateBlogCategoryList çağrıldı - Mevcut kategori:', blogCatalogState.currentCategory);

    const categories = getBlogCategories();
    const totalCount = getTotalPostCount();

    const categoryList = document.querySelector('.cat-list ul');
    if (!categoryList) {
        console.warn('Kategori listesi DOM\'da bulunamadı!');
        return;
    }

    // Listeyi temizle
    categoryList.innerHTML = '';

    // "Tüm Yazılar" kategorisi
    const allItem = document.createElement('li');
    allItem.className = blogCatalogState.currentCategory === 'all' ? 'active' : '';
    allItem.innerHTML = `<a href="#" data-filter="all">Tüm Yazılar <span>(${totalCount})</span></a>`;
    categoryList.appendChild(allItem);

    // Diğer kategoriler
    categories.forEach(cat => {
        const li = document.createElement('li');
        li.className = blogCatalogState.currentCategory === cat.id ? 'active' : '';
        li.innerHTML = `<a href="#" data-filter="${cat.id}">${cat.name} <span>(${cat.count})</span></a>`;
        categoryList.appendChild(li);
    });
}

// Blog yazılarını yükle ve göster
function loadBlogs() {
    if (blogCatalogState.isLoading) return;
    blogCatalogState.isLoading = true;

    // Filtreleme seçenekleri
    const filters = {
        category: blogCatalogState.currentCategory,
        search: blogCatalogState.currentSearch,
        sort: blogCatalogState.currentSort
    };

    console.log('Blog yükleniyor - Mevcut kategori:', blogCatalogState.currentCategory);
    console.log('Filtreleme seçenekleri:', filters);

    // Sayfalanmış blog yazılarını al
    const result = getPostsPaginated(
        blogCatalogState.currentPage,
        blogCatalogState.itemsPerPage,
        filters
    );

    console.log('getPostsPaginated sonucu:', result.posts.length, 'blog');
    console.log('Blog detayları:', result.posts.map(p => ({ title: p.title, categoryId: p.categoryId })));

    // Blog yazılarını render et
    renderBlogs(result.posts);

    // Pagination'ı render et
    renderBlogPagination(result.pagination);

    // Tercihleri kaydet
    saveBlogUserPreferences();

    blogCatalogState.isLoading = false;
}

// Blog kartlarını DOM'a ekle
function renderBlogs(posts) {
    console.log('renderBlogs çağrıldı -', posts.length, 'blog render edilecek');

    const container = document.querySelector('.blog-area .row .col-lg-8 .row');
    if (!container) {
        console.error('Blog container bulunamadı');
        return;
    }

    // Container'ı temizle
    container.innerHTML = '';

    // Blog bulunamadı mesajı
    if (posts.length === 0) {
        console.log('Hiç blog bulunamadı, boş mesajı gösteriliyor');

        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <h4>Blog yazısı bulunamadı</h4>
                <p>Arama kriterlerinize uygun blog yazısı bulunmamaktadır.</p>
            </div>
        `;
        return;
    }

    // Her blog için kart oluştur
    posts.forEach(post => {
        const blogCard = createBlogCard(post);
        container.appendChild(blogCard);
    });

    // Lazy loading için Intersection Observer ekle
    setupBlogLazyLoading();
}

// Tek bir blog kartı oluştur
function createBlogCard(post) {
    const col = document.createElement('div');
    col.className = 'col-md-6 blog-item';
    col.setAttribute('data-category', post.categoryId);
    col.setAttribute('data-title', post.title);
    col.setAttribute('data-keywords', post.tags ? post.tags.join(' ').toLowerCase() : '');

    // URL Helper ile blog detay linki oluştur (hem dev hem prod için çalışır)
    const blogURL = typeof URLHelper !== 'undefined'
        ? URLHelper.createBlogDetailURL(post.id)
        : `blog-details.html?id=${post.id}`; // Fallback

    col.innerHTML = `
        <div class="single-blog-post s-single-blog-post mb-45">
            <div class="blog-thumb">
                <a href="${blogURL}">
                    <img src="${post.image}"
                         data-src="${post.image}"
                         alt="${post.title}"
                         class="lazy-load"
                         loading="lazy">
                </a>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <ul>
                        <li><a href="#${post.categoryId}">${post.category}</a></li>
                        <li>${post.date}</li>
                    </ul>
                </div>
                <h4><a href="${blogURL}">${post.title}</a></h4>
                <p>${post.excerpt}</p>
                <a href="${blogURL}">Devamını Oku <i class="fas fa-long-arrow-alt-right"></i></a>
            </div>
        </div>
    `;

    return col;
}

// Pagination kontrollerini render et
function renderBlogPagination(pagination) {
    const container = document.querySelector('.blog-area .row .col-lg-8');
    if (!container) return;

    // Mevcut pagination'ı temizle
    let existingPagination = container.querySelector('.pagination-row');
    if (existingPagination) {
        existingPagination.remove();
    }

    // Pagination devre dışı - tüm bloglar tek sayfada gösteriliyor
    return;

    // Pagination için row wrapper oluştur
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row pagination-row';

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
    setupBlogPaginationEvents();
}

// Event listener'ları kur
function setupBlogEventListeners() {
    // Kategori filtreleme
    document.addEventListener('click', function (e) {
        const filterLink = e.target.closest('.cat-list a');
        if (filterLink) {
            e.preventDefault();
            const filter = filterLink.getAttribute('data-filter');

            // Kategori değiştir
            blogCatalogState.currentCategory = filter;
            blogCatalogState.currentPage = 1; // İlk sayfaya dön
            blogCatalogState.currentSearch = ''; // Aramayı temizle
            const searchInput = document.getElementById('blogSearchInput');
            if (searchInput) searchInput.value = '';

            // Active sınıfını güncelle
            document.querySelectorAll('.cat-list li').forEach(li => li.classList.remove('active'));
            filterLink.parentElement.classList.add('active');

            // URL'i güncelle (sayfayı yenilemeden)
            const newUrl = filter === 'all'
                ? window.location.pathname  // Tüm Yazılar için parametresiz
                : `${window.location.pathname}?category=${filter}`;  // Kategori için parametre ekle
            window.history.pushState({ category: filter }, '', newUrl);

            // Blog yazılarını yeniden yükle
            loadBlogs();

            // Sayfayı scroll et
            smoothScrollToBlogs();
        }
    });

    // Arama
    const searchInput = document.getElementById('blogSearchInput');
    const searchForm = document.getElementById('blogSearchForm');

    if (searchInput) {
        // Gerçek zamanlı arama (debounce ile)
        let searchTimeout;
        searchInput.addEventListener('input', function () {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                blogCatalogState.currentSearch = this.value.trim();
                blogCatalogState.currentPage = 1;
                blogCatalogState.currentCategory = 'all'; // Tüm kategorilerde ara

                // Active kategoriyi güncelle
                document.querySelectorAll('.cat-list li').forEach(li => li.classList.remove('active'));
                const allCategoryLink = document.querySelector('.cat-list a[data-filter="all"]');
                if (allCategoryLink) allCategoryLink.parentElement.classList.add('active');

                loadBlogs();
            }, 500); // 500ms debounce
        });
    }

    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            blogCatalogState.currentSearch = searchInput.value.trim();
            blogCatalogState.currentPage = 1;
            blogCatalogState.currentCategory = 'all';
            loadBlogs();
            smoothScrollToBlogs();
        });
    }
}

// Pagination event listener'ları
function setupBlogPaginationEvents() {
    // Önceki sayfa
    document.querySelectorAll('.prev-page').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            if (blogCatalogState.currentPage > 1) {
                blogCatalogState.currentPage--;
                loadBlogs();
                smoothScrollToBlogs();
            }
        });
    });

    // Sonraki sayfa
    document.querySelectorAll('.next-page').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const totalPages = getTotalBlogPages(blogCatalogState.itemsPerPage, {
                category: blogCatalogState.currentCategory,
                search: blogCatalogState.currentSearch
            });
            if (blogCatalogState.currentPage < totalPages) {
                blogCatalogState.currentPage++;
                loadBlogs();
                smoothScrollToBlogs();
            }
        });
    });

    // Sayfa numaraları
    document.querySelectorAll('.page-num').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const page = parseInt(this.getAttribute('data-page'));
            if (page !== blogCatalogState.currentPage) {
                blogCatalogState.currentPage = page;
                loadBlogs();
                smoothScrollToBlogs();
            }
        });
    });
}

// Smooth scroll to blogs
function smoothScrollToBlogs() {
    const blogsSection = document.querySelector('.blog-area');
    if (blogsSection) {
        const offset = 100; // Header yüksekliği için offset
        const top = blogsSection.offsetTop - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    }
}

// Lazy Loading için Intersection Observer
function setupBlogLazyLoading() {
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
