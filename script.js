```// Creative Cards — script.js

document.addEventListener('DOMContentLoaded', function () {

  // ---- Mobile menu toggle ----
  var burger   = document.getElementById('burger');
  var navMobile = document.getElementById('navMobile');

  burger.addEventListener('click', function () {
    navMobile.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  navMobile.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navMobile.classList.remove('open');
    });
  });


  // ---- Smooth scroll with offset for sticky nav ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 70;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });


  // ---- Form submit (fake — shows toast) ----
  // To make this actually send, plug in Formspree:
  // 1. Go to formspree.io, create a free account, make a form
  // 2. Replace the fetch URL below with your Formspree endpoint
  var form  = document.getElementById('orderForm');
  var toast = document.getElementById('toast');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var btn = form.querySelector('.btn-submit');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulating a small delay (replace this with real Formspree fetch if needed)
    setTimeout(function () {
      btn.textContent = 'Send it over →';
      btn.disabled = false;
      form.reset();
      showToast();
    }, 1000);
  });

  function showToast() {
    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
    }, 4000);
  }


  // ---- Simple fade-in on scroll ----
  var fadeEls = document.querySelectorAll(
    '.occ-item, .step-item, .review-card, .collage-card, .fact'
  );

  fadeEls.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(function (el) {
    observer.observe(el);
  });```

});