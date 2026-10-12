/* ============================================================
   HERITAGE TRAVELS — SHARED JAVASCRIPT
   ============================================================ */

/* ── Navigation: shrink on scroll ── */
(function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled');
      nav.classList.remove('nav--transparent');
    } else {
      nav.classList.remove('nav--scrolled');
      nav.classList.add('nav--transparent');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  // Hamburger / mobile menu
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    document.querySelectorAll('.nav__mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Active link highlight
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === path || (path === 'index.html' && href === '#')) {
      link.classList.add('active');
    }
  });
})();

/* ── Scroll Reveal ── */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();

/* ── Accordion (FAQ & Itinerary) ── */
(function initAccordions() {
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const isOpen = item.classList.contains('open');

      // Close all in same group
      const group = item.closest('.accordion-group');
      if (group) {
        group.querySelectorAll('.accordion-item.open').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('open');
            openItem.querySelector('.accordion-body').style.maxHeight = null;
          }
        });
      }

      if (isOpen) {
        item.classList.remove('open');
        body.style.maxHeight = null;
      } else {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Itinerary days
  document.querySelectorAll('.itinerary-day__header').forEach(header => {
    header.addEventListener('click', () => {
      const day = header.closest('.itinerary-day');
      const body = day.querySelector('.itinerary-day__body');
      const isOpen = day.classList.contains('open');
      if (isOpen) {
        day.classList.remove('open');
        body.style.maxHeight = null;
      } else {
        day.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
})();

/* ── Testimonials Slider ── */
(function initTestimonials() {
  const track = document.querySelector('.testimonials-track');
  if (!track) return;

  const slides = track.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.testimonials-dot');
  let current = 0;
  let timer;

  const goTo = (i) => {
    current = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, idx) => d.classList.toggle('active', idx === current));
  };

  document.querySelector('.testimonials-btn--prev')?.addEventListener('click', () => { clearInterval(timer); goTo(current - 1); startTimer(); });
  document.querySelector('.testimonials-btn--next')?.addEventListener('click', () => { clearInterval(timer); goTo(current + 1); startTimer(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(timer); goTo(i); startTimer(); }));

  const startTimer = () => { timer = setInterval(() => goTo(current + 1), 5500); };
  startTimer();
  goTo(0);
})();

/* ── Gallery Lightbox ── */
(function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const lbImg = lightbox.querySelector('.lightbox__img');
  const closeBtn = lightbox.querySelector('.lightbox__close');

  document.querySelectorAll('[data-lightbox]').forEach(item => {
    item.addEventListener('click', () => {
      lbImg.src = item.dataset.lightbox || item.querySelector('img')?.src || '';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
})();

/* ── Filter Tabs ── */
(function initFilterTabs() {
  document.querySelectorAll('.filter-tabs').forEach(tabContainer => {
    tabContainer.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        tabContainer.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;
        const gridId = tabContainer.dataset.gridTarget;
        const grid = gridId ? document.getElementById(gridId) : tabContainer.nextElementSibling;
        if (!grid) return;
        grid.querySelectorAll('[data-category]').forEach(card => {
          const match = filter === 'all' || card.dataset.category === filter;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  });
})();

/* ── Animated Counters ── */
(function initCounters() {
  const counters = document.querySelectorAll('.counter__num[data-target]');
  if (!counters.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      let start = 0;
      const startTime = performance.now();

      const animate = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        start = Math.floor(eased * target);
        el.textContent = start.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => io.observe(c));
})();

/* ── Back to Top ── */
(function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ── Currency Selector ── */
(function initCurrency() {
  const sel = document.querySelectorAll('.currency-selector');
  const prices = document.querySelectorAll('[data-price-usd]');

  const rates = { USD: 1, EUR: 0.93, LKR: 305 };
  const symbols = { USD: '$', EUR: '€', LKR: 'LKR ' };
  let current = 'USD';

  const updatePrices = (currency) => {
    const rate = rates[currency];
    const symbol = symbols[currency];
    prices.forEach(el => {
      const usd = parseFloat(el.dataset.priceUsd);
      const val = Math.round(usd * rate);
      el.textContent = symbol + val.toLocaleString();
    });
  };

  sel.forEach(s => {
    s.value = current;
    s.addEventListener('change', (e) => {
      current = e.target.value;
      sel.forEach(s2 => s2.value = current);
      updatePrices(current);
    });
  });
})();

/* ── Smooth hero scroll ── */
(function initHeroScroll() {
  const scrollCue = document.querySelector('.hero__scroll');
  if (!scrollCue) return;
  scrollCue.addEventListener('click', () => {
    const next = document.querySelector('.hero + *') || document.querySelector('section:nth-of-type(2)');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  });
})();

/* ── Nav search toggle ── */
(function initNavSearch() {
  const btn = document.querySelector('.nav__search-btn');
  const input = document.querySelector('.nav__search-input');
  if (!btn || !input) return;

  btn.addEventListener('click', () => {
    if (input.style.width === '220px') {
      input.style.width = '0';
      input.style.opacity = '0';
      input.style.paddingLeft = '0';
    } else {
      input.style.width = '220px';
      input.style.opacity = '1';
      input.style.paddingLeft = '2.2rem';
      input.focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      window.location.href = `places.html?q=${encodeURIComponent(input.value.trim())}`;
    }
    if (e.key === 'Escape') {
      input.style.width = '0';
      input.style.opacity = '0';
    }
  });
})();
