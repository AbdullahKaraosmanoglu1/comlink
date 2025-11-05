// Custom Cursor - Nokta ve halka ayrı hareket eder
document.addEventListener('DOMContentLoaded', function() {
    // Sadece mouse olan cihazlarda çalıştır
    if (window.matchMedia('(pointer: fine)').matches) {
        const cursorDot = document.getElementById('cursor-dot');
        const cursorCircle = document.getElementById('cursor-circle');

        let mouseX = 0;
        let mouseY = 0;
        let circleX = 0;
        let circleY = 0;

        let dotX = 0;
        let dotY = 0;

        // Mouse hareketi - gerçek pozisyonu kaydet
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Nokta da YAVAŞÇA takip eder (ama halkadan biraz daha hızlı)
        function animateDot() {
            const dotSpeed = 0.3; // Halka 0.15, nokta 0.3 (2x daha hızlı)

            dotX += (mouseX - dotX) * dotSpeed;
            dotY += (mouseY - dotY) * dotSpeed;

            cursorDot.style.left = dotX + 'px';
            cursorDot.style.top = dotY + 'px';

            requestAnimationFrame(animateDot);
        }

        // Animasyonu başlat
        animateDot();

        // Halka YAVAŞÇA takip eder (ping efekti)
        function animateCircle() {
            // Easing hesaplaması - halka yavaşça mouse'a yaklaşır
            const speed = 0.15; // Ne kadar küçükse o kadar yavaş takip eder

            circleX += (mouseX - circleX) * speed;
            circleY += (mouseY - circleY) * speed;

            cursorCircle.style.left = circleX + 'px';
            cursorCircle.style.top = circleY + 'px';

            requestAnimationFrame(animateCircle);
        }

        // Animasyonu başlat
        animateCircle();

        // Click animasyonu - sadece halka
        document.addEventListener('mousedown', function() {
            cursorCircle.classList.add('clicked');
        });

        document.addEventListener('mouseup', function() {
            cursorCircle.classList.remove('clicked');
        });

        // Sayfa dışına çıkınca gizle
        document.addEventListener('mouseleave', function() {
            cursorDot.style.opacity = '0';
            cursorCircle.style.opacity = '0';
        });

        document.addEventListener('mouseenter', function() {
            cursorDot.style.opacity = '1';
            cursorCircle.style.opacity = '1';
        });
    }
});
