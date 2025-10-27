// Normalize main navigation across pages and fix corrupted markup
(function(){
  function applyFix(){
    try {
      var nav = document.querySelector('#mobile-menu');
      if (nav) {
        var path = (location.pathname || '').toLowerCase();
        function isActive(file) { return path.endsWith('/' + file) || path.endsWith('\\' + file) || (path === '' && file === 'index.html'); }
        var html = '';
        html += '<ul>';
        html += '<li' + (isActive('index.html') ? ' class="active"' : '') + '><a href="index.html">Anasayfa</a></li>';
        html += '<li' + (isActive('hakkimizda.html') ? ' class="active"' : '') + '><a href="hakkimizda.html">Hakkımızda</a></li>';
        html += '<li' + (isActive('urunler.html') ? ' class="active"' : '') + '><a href="urunler.html">Ürünler</a></li>';
        html += '<li' + (isActive('galeri.html') ? ' class="active"' : '') + '><a href="galeri.html">Galeri</a></li>';
        html += '<li' + (isActive('iletisim.html') ? ' class="active"' : '') + '><a href="iletisim.html">İletişim</a></li>';
        html += '</ul>';
        nav.innerHTML = html;
        // Remove any stray <li> elements accidentally placed outside the nav
        var mainMenu = nav.closest('.main-menu') || nav.parentElement;
        if (mainMenu) {
          var strayLis = Array.from(mainMenu.querySelectorAll('li')).filter(function(li){ return !nav.contains(li); });
          strayLis.forEach(function(li){ li.parentNode && li.parentNode.removeChild(li); });
        }
        // Re-init meanmenu for updated markup (avoid duplicates)
        try {
          if (window.jQuery && typeof jQuery.fn.meanmenu === 'function') {
            var $ = window.jQuery;
            var $container = $('.mobile-menu');
            $container.empty();
            $('#mobile-menu').meanmenu({ meanMenuContainer: '.mobile-menu', meanScreenWidth: '992' });
          }
        } catch (e) {}
      }

      // Update header button to download catalog PDF
      var btn = document.querySelector('.header-btn a.btn, .s-header-btn a.btn');
      if (btn) {
        btn.setAttribute('href', 'kataloglar/comlink-catalog.pdf');
        btn.setAttribute('download', '');
        btn.innerHTML = '<img src="img/icon/calculator-symbols02.png" alt="icon">Katalog İndir (PDF)';
        btn.removeAttribute('data-toggle');
        btn.removeAttribute('data-target');
      }
    } catch (e) {
      // no-op
    }
  }

  function run(){
    if (window.__NAV_FIX_LOADED__) return; // prevent double execution
    window.__NAV_FIX_LOADED__ = true;
    applyFix();
    // Re-run shortly after in case other scripts manipulate the DOM late
    setTimeout(applyFix, 50);
    setTimeout(applyFix, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();

