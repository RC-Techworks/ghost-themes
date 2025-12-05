(function() {
  const nav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.nav-toggle');
  const body = document.body;

  if (toggle) {
    toggle.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    });
  }

  // Reduce motion respect
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.documentElement.classList.add('reduce-motion');
  }
})();
