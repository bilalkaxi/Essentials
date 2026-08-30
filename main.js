  // ================= TESTIMONIALS CAROUSEL =================
(function () {
  // Edit this array with real student feedback whenever it's available.
  var testimonials = [
    {
      quote: "Bilal bohat dil sy parhata hai. Effort krta hai k student seekh jy. I recommend. JazakAllah",
      name: "Muhammad Rafay Abdullah",
      meta: "NAHW · Batch #2 ",
      initials: "SN",
      rating: 5,
       googleLink: "[ https://g.page/r/YOUR_GOOGLE_PLACE_ID/review ]", 
    },
    {
      quote: "After spending months heedlessly studying Arabic, this single great course made everything click, Interactive classes focusing on learning via practice",
      name: "حيدر انجم",
      meta: "NAHW & SARF · Batch #0",
      initials: "SN",
      rating: 5,
       googleLink: "[ https://g.page/r/YOUR_GOOGLE_PLACE_ID/review ]", 
    },
    {
      quote: "[ A third example quote — rotate in real feedback as each batch finishes a course. ]",
      name: "[ Student Name ]",
      meta: "[ Course · Batch #1 ]",
      initials: "SN",
      rating: 5,
       googleLink: "[ https://g.page/r/YOUR_GOOGLE_PLACE_ID/review ]", 
    },
  ];

  var track = document.getElementById("tTrack");
  var dotsWrap = document.getElementById("tDots");
  var prevBtn = document.getElementById("tPrev");
  var nextBtn = document.getElementById("tNext");
  var carousel = document.getElementById("testimonialsCarousel");
  var current = 0;
  var timer;

  function starString(n) {
    return "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);
  }

  testimonials.forEach(function (t, i) {
    var slide = document.createElement("div");
    slide.className = "t-slide";
           slide.innerHTML =
      '<div class="t-card">' +
      '<div class="t-quote-mark">“</div>' +
      '<div class="t-stars">' + starString(t.rating) + "</div>" +
      '<p class="t-quote">' + t.quote + "</p>" +
      '<div class="t-person">' +
      '<div class="t-avatar">' + t.initials + "</div>" +
      "<div><div class=\"t-name\">" + t.name + '</div><div class="t-meta">' + t.meta + "</div></div>" +
      "</div>" +
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
})();
  // theme toggle (dark / light)
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
