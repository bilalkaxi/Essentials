  // ================= TESTIMONIALS CAROUSEL =================
// ================= TESTIMONIALS CAROUSEL (screenshot reviews) =================
(function () {
  // Add one entry per review screenshot. "image" is required.
  // "googleLink" is optional — when set, a "Verify on Google" link shows under the screenshot.
  var testimonials = [
    {
      image: "images/reviews/review-1.png",
      alt: "5-star Google review from Haider Anjum",
      googleLink: "https://maps.app.goo.gl/eupMmEV3DzRed2nS7",
    },
    {
      image: "images/reviews/review-2.png",
      alt: "5-star Google review from Muhammad Rafay",
      googleLink: "https://maps.app.goo.gl/DmKGFthjhE5NKeNf7",
    },
    {
      image: "images/reviews/review-3.png",
      alt: "4-star Google review from Usman Zafar",
      googleLink: "https://maps.app.goo.gl/5Rhs8j4pUAV2KVHY8",
    },
    {
      image: "images/reviews/review-4.png",
      alt: "5-star Google review from Hanzalah Idrees",
      googleLink: "https://maps.app.goo.gl/3oAE5SxV6L6sKUzQ6",
    },
  ];

  var track = document.getElementById("tTrack");
  var dotsWrap = document.getElementById("tDots");
  var prevBtn = document.getElementById("tPrev");
  var nextBtn = document.getElementById("tNext");
  var carousel = document.getElementById("testimonialsCarousel");
  var current = 0;
  var timer;

  testimonials.forEach(function (t, i) {
    var slide = document.createElement("div");
    slide.className = "t-slide";
    slide.innerHTML =
      '<div class="t-card">' +
      '<img class="t-screenshot" src="' + t.image + '" alt="' + (t.alt || "Student review") + '" loading="lazy">' +
      (t.googleLink
        ? '<a href="' + t.googleLink + '" target="_blank" rel="noopener" class="t-verify">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6M10 14L21 3"/></svg>' +
          "Verify on Google" +
          "</a>"
        : "") +
      "</div>";
    track.appendChild(slide);

    var dot = document.createElement("button");
    dot.className = "t-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Go to testimonial " + (i + 1));
    dot.addEventListener("click", function () {
      goTo(i);
      resetAutoplay();
    });
    dotsWrap.appendChild(dot);
  });

  var dots = dotsWrap.querySelectorAll(".t-dot");

  function goTo(i) {
    current = (i + testimonials.length) % testimonials.length;
    track.style.transform = "translateX(-" + current * 100 + "%)";
    dots.forEach(function (d, idx) {
      d.classList.toggle("active", idx === current);
    });
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  prevBtn.addEventListener("click", function () { prev(); resetAutoplay(); });
  nextBtn.addEventListener("click", function () { next(); resetAutoplay(); });

  function startAutoplay() { timer = setInterval(next, 6000); }
  function resetAutoplay() { clearInterval(timer); startAutoplay(); }
  if (testimonials.length > 1) startAutoplay();

  carousel.addEventListener("mouseenter", function () { clearInterval(timer); });
  carousel.addEventListener("mouseleave", startAutoplay);

  // swipe support
  var startX = null;
  track.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); resetAutoplay(); }
    startX = null;
  });
})();  // theme toggle (dark / light)
  (function(){
    var root = document.documentElement;
    var btn = document.getElementById('themeToggle');
    var saved = localStorage.getItem('eqa-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(saved || (prefersDark ? 'dark' : 'light'));
    btn.addEventListener('click', function(){
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
    function setTheme(t){
      root.setAttribute('data-theme', t);
      localStorage.setItem('eqa-theme', t);
      btn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
    }
  })();

  // mobile menu toggle
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');
  toggle.addEventListener('click', function(){
    var open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ menu.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); });
  });

  // footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // scroll reveal
  var els = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold:0.12, rootMargin:'0px 0px -60px 0px' });
    els.forEach(function(el){ io.observe(el); });
  } else {
    els.forEach(function(el){ el.classList.add('in'); });
  }
  // whatsapp icon
  // ===== TRACK WHATSAPP CLICKS (Google Analytics) =====
function trackWhatsAppClick() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'WhatsApp',
            'event_label': 'Floating Button',
            'value': 1
        });
    }
    // Also track with Facebook Pixel if you have it
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            'content_name': 'WhatsApp Click'
        });
    }
}
//countdown
