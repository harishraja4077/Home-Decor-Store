/* ==========================================================================
   Preloader behaviour
   Runs a fixed 3 second intro, drives the percentage counter, then lifts
   the overlay and releases the scroll lock. If the markup is missing it is
   injected so the intro still appears on pages that only load the script.
   ========================================================================== */
(function () {
  "use strict";

  var DURATION = 3000;

  function buildMarkup() {
    var wrap = document.createElement("div");
    wrap.className = "preloader";
    wrap.id = "preloader";
    wrap.setAttribute("role", "status");
    wrap.setAttribute("aria-live", "polite");
    wrap.setAttribute("aria-label", "Loading Stackly");
    wrap.innerHTML =
      '<div class="preloader-inner">' +
        '<div class="preloader-emblem" aria-hidden="true">' +
          '<span class="preloader-ring preloader-ring--outer"></span>' +
          '<span class="preloader-ring preloader-ring--inner"></span>' +
          '<span class="preloader-monogram">S</span>' +
        '</div>' +
        '<div class="preloader-brand" aria-hidden="true">' +
          '<span>S</span><span>T</span><span>A</span><span>C</span><span>K</span><span>L</span><span>Y</span>' +
        '</div>' +
        '<p class="preloader-tagline">Elevate the way you live</p>' +
        '<div class="preloader-progress"><span class="preloader-progress-bar"></span></div>' +
        '<p class="preloader-count" data-preloader-count>00</p>' +
      '</div>';
    return wrap;
  }

  function init() {
    var el = document.getElementById("preloader");
    if (!el) {
      el = buildMarkup();
      document.body.insertBefore(el, document.body.firstChild);
    }
    if (el.classList.contains("is-done")) return;

    var count = el.querySelector("[data-preloader-count]");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var finished = false;

    document.documentElement.classList.add("no-scroll");
    document.body.classList.add("no-scroll");

    function finish() {
      if (finished) return;
      finished = true;
      el.classList.add("is-done");
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
      window.setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, reduce ? 120 : 1000);
    }

    if (count) {
      var start = null;
      var frame = function (time) {
        if (finished) return;
        if (start === null) start = time;
        var progress = Math.min((time - start) / DURATION, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = Math.round(eased * 100);
        count.textContent = (value < 10 ? "0" : "") + value;
        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          finish();
        }
      };
      requestAnimationFrame(frame);
    }

    window.setTimeout(finish, DURATION + 40);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
