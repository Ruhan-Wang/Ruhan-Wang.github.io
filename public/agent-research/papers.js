/* Keep the research navigation in sync with each blog's own language controls. */
(function () {
  'use strict';
  var root = document.documentElement;
  var nav = document.querySelector('.paper-nav');
  if (!nav) return;
  // A VS Code preview may rewrite local links into resource or command URLs.
  // Keep those addresses instead of rebuilding them from data-paper-link.
  var links = Array.from(nav.querySelectorAll('[data-paper-link]')).map(function (link) {
    return { element: link, href: link.getAttribute('href') };
  });

  function sync() {
    var language = root.lang.indexOf('zh') === 0 ? 'zh' : 'en';
    var theme = root.dataset.theme;
    if (document.body.dataset.paper === 'handbook') {
      theme = root.classList.contains('dark') ? 'dark' : 'light';
      root.classList.toggle('paper-light', theme === 'light');
    }
    nav.setAttribute('aria-label', language === 'zh' ? '三篇论文的研究博客' : 'Research blogs');
    links.forEach(function (entry) {
      // Only add preferences to ordinary, same-origin browser navigation.
      // Embedded previews own navigation for their special resource URLs.
      try {
        if (!['http:', 'https:', 'file:'].includes(window.location.protocol)) return;
        var url = new URL(entry.href, document.baseURI);
        if (!['http:', 'https:', 'file:'].includes(url.protocol) || url.origin !== window.location.origin) return;
        url.searchParams.set('lang', language);
        if (theme === 'light' || theme === 'dark') url.searchParams.set('theme', theme);
        entry.element.href = url.href;
      } catch (e) { /* Keep the preview's original link when it cannot be resolved. */ }
    });
  }

  function measure() {
    root.style.setProperty('--paper-nav-height', nav.getBoundingClientRect().height + 'px');
    var header = document.querySelector('nav.top, header.topbar');
    if (header) root.style.setProperty('--paper-header-height', header.getBoundingClientRect().height + 'px');
  }

  // Handbook uses its original translation runtime; reflect its user choices
  // in the URL just as the other two blogs do.
  document.querySelectorAll('#lang-switch [data-lang]').forEach(function (button) {
    button.addEventListener('click', function () {
      try {
        var url = new URL(location.href);
        url.searchParams.set('lang', button.dataset.lang);
        history.replaceState(history.state, '', url.href);
      } catch (e) {}
    });
  });

  document.querySelectorAll('#themeBtn, #theme-toggle').forEach(function (button) {
    button.addEventListener('click', function () {
      try {
        var theme = document.body.dataset.paper === 'handbook'
          ? (root.classList.contains('dark') ? 'dark' : 'light') : root.dataset.theme;
        var url = new URL(location.href);
        url.searchParams.set('theme', theme);
        history.replaceState(history.state, '', url.href);
      } catch (e) {}
    });
  });

  new MutationObserver(function (changes) {
    if (changes.some(function (change) {
      return change.attributeName === 'lang' || change.attributeName === 'data-theme' ||
        (change.attributeName === 'class' && (change.oldValue || '').split(/\s+/).includes('dark') !== root.classList.contains('dark'));
    })) {
      sync();
      measure();
    }
  }).observe(root, { attributes: true, attributeOldValue: true, attributeFilter: ['lang', 'class', 'data-theme'] });
  if (typeof ResizeObserver !== 'undefined') {
    var observer = new ResizeObserver(measure);
    observer.observe(nav);
    var header = document.querySelector('nav.top, header.topbar');
    if (header) observer.observe(header);
  } else { window.addEventListener('resize', measure); }
  sync();
  measure();
})();
