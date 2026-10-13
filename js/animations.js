(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("anim");

  var BLOCKS = ".section-heading, .home-edit-heading, .curated-copy, .intro-copy, .styling-copy, " +
    ".curation-copy, .shopping-copy, .trends-copy, .enquiry-intro, .consultation-copy, " +
    ".values > .eyebrow, .values h2, .team > .eyebrow, .team h2, " +
    ".materials > .eyebrow, .materials h2, .journey > .eyebrow, .journey h2, " +
    ".before-after > .eyebrow, .before-after h2, .makeovers > .eyebrow, .makeovers h2, " +
    ".steps > .eyebrow, .steps h2, .room-edit > .eyebrow, .room-edit h2, " +
    ".find-us .eyebrow, .find-us h2, .footer-brand, .footer-newsletter, " +
    ".hero-copy > *, .about-hero-copy > *, .contact-hero-copy > *, " +
    ".journal-hero-copy > *, .spaces-hero-content > *";

  var CARDS = ".room-card, .product-card, .standard-card, .value-card, .team-card, .material-card, " +
    ".makeover-card, .space-card, .comparison-card, .philosophy-points article, " +
    ".journey-steps li, .steps-grid li, .contact-details article, .number-grid > div";

  var MEDIA = ".curated-image, .intro-visual, .featured-edit, .trends-photo, .styling-photo, " +
    ".consultation-photo, .shopping-photo, .window-view, .map-frame, .curation-gallery, " +
    ".space-review, .testimonial-inner, .dream-inner, .about-cta-inner, " +
    ".contact-cta-inner, .journal-cta-inner, .atmosphere-grid";

  function prefersReduced() {
    return Boolean(window.matchMedia) && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function reveal(selector, step, cap) {
    var nodes = Array.prototype.slice.call(document.querySelectorAll(selector));
    if (!nodes.length) return;

    if (!("IntersectionObserver" in window) || prefersReduced()) {
      nodes.forEach(function (node) {
        node.classList.add("is-visible");
      });
      return;
    }

    var groups = new Map();
    nodes.forEach(function (node) {
      var parent = node.parentElement;
      if (!groups.has(parent)) groups.set(parent, []);
      groups.get(parent).push(node);
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });

    groups.forEach(function (list) {
      list.forEach(function (node, index) {
        var delay = step > 0 ? Math.min(index, cap) * step : 0;
        if (delay) node.style.setProperty("--rd", delay + "ms");
        observer.observe(node);
      });
    });
  }

  function runCounters(grid) {
    var strongs = grid.querySelectorAll("strong");
    Array.prototype.forEach.call(strongs, function (strong) {
      var textNode = null;
      for (var i = 0; i < strong.childNodes.length; i++) {
        var node = strong.childNodes[i];
        if (node.nodeType === 3 && node.nodeValue.trim()) {
          textNode = node;
          break;
        }
      }
      if (!textNode) return;

      var match = textNode.nodeValue.trim().match(/^(\d+(?:\.\d+)?)(k?)/i);
      if (!match) return;

      var target = parseFloat(match[1]);
      var suffix = match[2] || "";
      var decimals = (match[1].split(".")[1] || "").length;
      var start = null;
      var duration = 1400;

      function frame(time) {
        if (start === null) start = time;
        var progress = Math.min((time - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        textNode.nodeValue = (target * eased).toFixed(decimals);
        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          textNode.nodeValue = target.toFixed(decimals) + suffix;
        }
      }

      requestAnimationFrame(frame);
    });
  }

  function counters() {
    var grids = document.querySelectorAll(".number-grid");
    if (!grids.length || prefersReduced() || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCounters(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    Array.prototype.forEach.call(grids, function (grid) {
      observer.observe(grid);
    });
  }

  function progressBar() {
    if (document.querySelector(".scroll-progress")) return;

    var bar = document.createElement("div");
    bar.className = "scroll-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);

    var ticking = false;

    function update() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = "scaleX(" + Math.min(Math.max(ratio, 0), 1) + ")";
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  function init() {
    try {
      reveal(BLOCKS, 90, 6);
      reveal(CARDS, 70, 6);
      reveal(MEDIA, 0, 0);
      counters();
      progressBar();
    } catch (error) {
      root.classList.remove("anim");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
