(function ($) {
  "use strict";

  // preloader
  var preloaderClosed = false;

  function loader() {
    if (preloaderClosed) return; // Bir kez çalışsın
    preloaderClosed = true;

    $('#ctn-preloader').addClass('loaded');
    $("#loading").fadeOut(500);
    // Preloader tamamlandıktan sonra scroll gösterilir

    if ($('#ctn-preloader').hasClass('loaded')) {
      // Preloader kaldırıldıktan sonra tüm preloader bölümü DOM'dan silinir
      $('#preloader').delay(900).queue(function () {
        $(this).remove();
      });
    }
  }

  // 1. DOMContentLoaded - Hızlı başlat (1 saniye sonra)
  $(document).ready(function () {
    setTimeout(loader, 1000);
  });

  // 2. Maksimum timeout - Mobil için güvenlik (3 saniye sonra zorla)
  setTimeout(loader, 3000);

  // 3. Window load - Normal akış (tüm kaynaklar yüklendiğinde)
  $(window).on('load', function () {
    loader();
    wowanimation();
    mainSlider();
    counterOn()
  });


  // meanmenu
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "992"
  });


  // sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#header-sticky").removeClass("sticky-menu");
    } else {
      $("#header-sticky").addClass("sticky-menu");
    }
  });

  $(function () {
    $('a.icon-scroll').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 80
      }, 1000);
      event.preventDefault();
    });
  });

  // mainSlider
  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 6000,
      dots: false,
      fade: true,
      arrows: false,
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }


  // about-active
  $('.about-active').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        }
      }
    ]
  });


  // testimonial-active
  $('.testimonial-active').slick({
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    infinite: true,
    autoplay: false,
    speed: 1000,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          fade: true,
        }
      }
    ]
  });


  // control-active
  $('.control-active').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,//burayı düzenle
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });

  // brand-active
  $('.brand-active').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });

  // product-slider-active
  $('.product-slider-active').slick({
    dots: true,
    infinite: true,
    speed: 800,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      },
    ]
  });

  // s-testimonial-active
  $('.s-testi-active').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-up"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-down"></i></button>',
    vertical: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });

  // active
  $('.single-pricing').on('mouseenter', function () {
    $(this).addClass('active').parent().siblings().find('.single-pricing').removeClass('active');
  })

  // paroller
  if ($('.paroller').length) {
    $('.paroller').paroller();
  }

  // niceSelect;
  $(".selected").niceSelect();


  /* magnificPopup img view */
  $('.popup-image').not('#flipbook img, #flipbook .popup-image, #flipbookModal img').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function (openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  /* magnificPopup video view */
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });

  // counterUp
  function counterOn() {
    $('.count').counterUp({
      delay: 10,
      time: 2000
    });
  }



  // isotop
  $('.gallery-active,.blog-active').imagesLoaded(function () {
    // init Isotope
    var $grid = $('.gallery-active,.blog-active').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: 1,
      }
    });
    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });


  // aos-active
  AOS.init({
    duration: 1000,
    mirror: true
  });

  /* slider video */
  $(".youtube-bg").YTPlayer({
    containment: ".youtube-bg",
    autoPlay: true,
    loop: true,
    mute: true,
    opacity: 100,
    addRaster: true,
    showControls: false,
  });


  // scrollToTop
  $.scrollUp({
    scrollName: 'scrollUp',
    topDistance: '300',
    topSpeed: 500,
    animation: 'fade',
    animationInSpeed: 200,
    animationOutSpeed: 200,
    scrollText: '<i class="fas fa-level-up-alt"></i>',
    activeOverlay: false,
  });

  // WOW active
  function wowanimation() {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true
    });
    wow.init();
  }

  // ===================================================
  // Product Tooltip - Mouse Following Premium System
  // ===================================================

  // Icon mapping for usage areas
  const iconMapping = {
    'leaf': 'fas fa-leaf',
    'tree': 'fas fa-tree',
    'building': 'fas fa-building',
    'road': 'fas fa-road',
    'warehouse': 'fas fa-warehouse',
    'home': 'fas fa-home',
    'city': 'fas fa-city',
    'industry': 'fas fa-industry',
    'mountain': 'fas fa-mountain',
    'tractor': 'fas fa-tractor',
    'seedling': 'fas fa-seedling',
    'spa': 'fas fa-spa',
    'store': 'fas fa-store',
    'wood': 'fas fa-tree',
    'forest': 'fas fa-tree',
    'apple': 'fas fa-apple-alt',
    'apple-alt': 'fas fa-apple-alt',
    'futbol': 'fas fa-futbol',
    'park': 'fas fa-tree',
    'cut': 'fas fa-cut',
    'shield': 'fas fa-shield-alt',
    'battery': 'fas fa-battery-full',
    'check': 'fas fa-check-circle',
    'tools': 'fas fa-tools',
    'plug': 'fas fa-plug',
    'backpack': 'fas fa-shopping-bag',
    'camping': 'fas fa-campground',
    'coins': 'fas fa-coins',
    'shield-virus': 'fas fa-shield-alt',
    'garden': 'fas fa-leaf'
  };

  // Tooltip elementi
  const tooltip = $('#product-tooltip');
  const tooltipContent = $('.tooltip-content');

  let currentProductId = null;
  let isTooltipActive = false;

  // Mouse tracking
  let mouseX = 0;
  let mouseY = 0;

  $(document).on('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (isTooltipActive) {
      updateTooltipPosition();
    }
  });

  function updateTooltipPosition() {
    tooltip.css({
      left: mouseX + 'px',
      top: mouseY + 'px'
    });
  }

  // Product hover events
  $(document).on('mouseenter', '.single-product-item[data-product-id]', function() {
    const productId = $(this).data('product-id');

    if (currentProductId === productId && isTooltipActive) return;

    currentProductId = productId;
    showTooltip(productId);
  });

  $(document).on('mouseleave', '.single-product-item[data-product-id]', function() {
    hideTooltip();
  });

  function showTooltip(productId) {
    // productsData global değişkeninden ürün bilgisini al
    if (typeof productsData === 'undefined') {
      console.warn('productsData not found');
      return;
    }

    // Product ID'yi küçük harfe çevir (productsData'da key'ler lowercase)
    const productKey = productId.toLowerCase();
    const product = productsData[productKey];

    if (!product || !product.usageAreas || product.usageAreas.length === 0) {
      console.warn('Product not found or no usage areas:', productId);
      return;
    }

    // Tooltip içeriğini oluştur
    let htmlContent = '';

    product.usageAreas.forEach(function(area, index) {
      const iconClass = iconMapping[area.icon] || 'fas fa-check-circle';
      const delay = index * 50; // Stagger animation

      htmlContent += `
        <div class="tooltip-usage-item" style="animation-delay: ${delay}ms;">
          <div class="tooltip-usage-icon">
            <i class="${iconClass}"></i>
          </div>
          <div class="tooltip-usage-text">${area.text}</div>
        </div>
      `;
    });

    tooltipContent.html(htmlContent);

    // Tooltip'i göster
    isTooltipActive = true;
    updateTooltipPosition();
    tooltip.addClass('active');
  }

  function hideTooltip() {
    isTooltipActive = false;
    currentProductId = null;
    tooltip.removeClass('active');

    // İçeriği temizle (animasyon bittikten sonra)
    setTimeout(function() {
      if (!isTooltipActive) {
        tooltipContent.html('');
      }
    }, 350);
  }

  // Slider hareket ettiğinde tooltip'i gizle
  $('.product-slider-active').on('beforeChange', function() {
    hideTooltip();
  });


})(jQuery);
