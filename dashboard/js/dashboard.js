(function () {
  "use strict";

  var ICONS = {
    grid: '<rect x="3.2" y="3.2" width="7.2" height="7.2" rx="1.6"/><rect x="13.6" y="3.2" width="7.2" height="7.2" rx="1.6"/><rect x="3.2" y="13.6" width="7.2" height="7.2" rx="1.6"/><rect x="13.6" y="13.6" width="7.2" height="7.2" rx="1.6"/>',
    bag: '<path d="M6 8.5h12l.9 10.4a1.2 1.2 0 0 1-1.2 1.3H6.3a1.2 1.2 0 0 1-1.2-1.3L6 8.5Z"/><path d="M9 8.5V6a3 3 0 0 1 6 0v2.5"/>',
    heart: '<path d="M20.4 8.8c0 5.1-8.4 10.1-8.4 10.1S3.6 13.9 3.6 8.8a4.1 4.1 0 0 1 7.3-2.5 4.1 4.1 0 0 1 7.3 2.5Z"/>',
    pin: '<path d="M12 21.4S5 15.3 5 10a7 7 0 0 1 14 0c0 5.3-7 11.4-7 11.4Z"/><circle cx="12" cy="10" r="2.6"/>',
    gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7"/>',
    box: '<path d="M3.5 7.6 12 3l8.5 4.6v8.8L12 21l-8.5-4.6V7.6Z"/><path d="M3.5 7.6 12 12l8.5-4.4M12 12v9"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3.6 20a5.4 5.4 0 0 1 10.8 0"/><path d="M16 5.2a3.2 3.2 0 0 1 0 6.4M17.6 20a5.4 5.4 0 0 0-2-4.2"/>',
    chart: '<path d="M4 4v16h16"/><path d="M8 16v-5M12.5 16V8M17 16v-3"/>',
    star: '<path d="M12 2.8l2.8 5.66 6.25.91-4.52 4.4 1.07 6.23L12 17.06l-5.6 2.94 1.07-6.23-4.52-4.4 6.25-.91z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20.4 20.4-4-4"/>',
    bell: '<path d="M5.5 17.4a6.5 6.5 0 0 1 13 0"/><path d="M3.6 20h16.8"/><path d="M12 10.8V9.6"/><circle cx="12" cy="8.3" r="1.3"/>',
    menu: '<path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    edit: '<path d="M4 20h4L18.5 9.5l-4-4L4 16v4Z"/><path d="M13.5 6.5l4 4"/>',
    trash: '<path d="M5 7h14M9.5 7V4.8h5V7M7 7l1 13h8l1-13"/>',
    logout: '<path d="M15 4h3.2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H15"/><path d="M10 12h9.5M16 8.8 19.2 12 16 15.2"/>',
    download: '<path d="M12 4v10m0 0 4-4m-4 4-4-4M5 19.5h14"/>',
    check: '<path d="m5 13 4 4L19 7"/>',
    truck: '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.7"/><circle cx="17.5" cy="18" r="1.7"/>',
    arrowUp: '<path d="M12 20V5"/><path d="m6.5 10.5 5.5-5.5 5.5 5.5"/>',
    arrowDown: '<path d="M12 4v15"/><path d="m6.5 13.5 5.5 5.5 5.5-5.5"/>',
    filter: '<path d="M4 5h16l-6 7v6l-4-2v-4Z"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M3.5 10h17M8 3.5v3M16 3.5v3"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4.2 7 7.8 5.4L19.8 7"/>',
    card: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3 10h18"/>',
    shield: '<path d="M12 3.5 5 6v6c0 4.2 3 7.2 7 8.5 4-1.3 7-4.3 7-8.5V6Z"/>'
  };

  function icon(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (ICONS[name] || "") + "</svg>";
  }

  var NAV_CONFIG = {
    user: [
      { label: "Menu", links: [
        { page: "overview", href: "overview.html", label: "Dashboard", icon: "grid" },
        { page: "orders", href: "orders.html", label: "My Orders", icon: "bag", badge: "3" },
        { page: "wishlist", href: "wishlist.html", label: "Wishlist", icon: "heart", badge: "6" },
        { page: "addresses", href: "addresses.html", label: "Addresses", icon: "pin" },
        { page: "settings", href: "settings.html", label: "Settings", icon: "gear" }
      ] }
    ],
    admin: [
      { label: "Manage", links: [
        { page: "overview", href: "overview.html", label: "Dashboard", icon: "grid" },
        { page: "products", href: "products.html", label: "Products", icon: "box" },
        { page: "orders", href: "orders.html", label: "Orders", icon: "bag", badge: "18" },
        { page: "customers", href: "customers.html", label: "Customers", icon: "users" },
        { page: "analytics", href: "analytics.html", label: "Analytics", icon: "chart" }
      ] }
    ]
  };

  var PROFILE = {
    user: { role: "Gold member · 1,280 pts", email: "member@gmail.com" },
    admin: { role: "Store administrator", email: "admin@gmail.com" }
  };

  function getSessionEmail() {
    try { return (localStorage.getItem("stackly-email") || "").trim(); } catch (error) { return ""; }
  }

  function nameFromEmail(email) {
    var local = String(email || "").split("@")[0];
    var words = local.replace(/[._\-]+/g, " ").replace(/[0-9]+/g, " ").trim().split(/\s+/).filter(Boolean);
    if (!words.length) return "Guest";
    return words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
  }

  function initialsFromName(name) {
    var parts = name.split(/\s+/).filter(Boolean);
    if (!parts.length) return "G";
    var first = parts[0].charAt(0);
    var second = parts[1] ? parts[1].charAt(0) : parts[0].charAt(1) || "";
    return (first + second).toUpperCase();
  }

  var toastTimer;

  function showToast(message) {
    var toast = document.querySelector(".toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2600);
  }

  function buildShell() {
    var body = document.body;
    var dashKey = body.dataset.dash || "user";
    var pageKey = body.dataset.page || "overview";
    var title = body.dataset.title || "Dashboard";
    var sidebar = document.querySelector(".dash-sidebar");
    var topbar = document.querySelector(".dash-topbar");
    if (!sidebar || !topbar) return;

    var profile = PROFILE[dashKey] || PROFILE.user;
    var email = getSessionEmail() || profile.email;
    var name = nameFromEmail(email);
    var initials = initialsFromName(name);
    var dashName = dashKey === "admin" ? "Admin Console" : "User Dashboard";
    var sections = NAV_CONFIG[dashKey] || NAV_CONFIG.user;

    var navHtml = sections.map(function (section) {
      return '<p class="sidebar-label">' + section.label + "</p>" +
        section.links.map(function (link) {
          var active = link.page === pageKey;
          return '<a class="nav-link' + (active ? " is-active" : "") + '" href="' + link.href + '"' +
            (active ? ' aria-current="page"' : "") + ">" + icon(link.icon) +
            "<span>" + link.label + "</span>" +
            (link.badge ? '<span class="nav-count">' + link.badge + "</span>" : "") + "</a>";
        }).join("");
    }).join("");

    sidebar.innerHTML =
      '<a class="sidebar-logo" href="overview.html"><img class="sidebar-logo-img" src="../../Assets/logo.webp" alt="STACKLY">' +
        '<span class="sidebar-brand-text"><small>' + dashName + "</small></span></a>" +
      '<nav aria-label="Dashboard navigation">' + navHtml + "</nav>" +
      '<div class="sidebar-foot">' +
        '<div class="sidebar-user"><span class="avatar">' + initials + "</span>" +
          '<span class="sidebar-user-text"><b>' + name + "</b><small>" + profile.role +
            '</small><small class="sidebar-user-mail">' + email + "</small></span></div>" +
        '<a class="sidebar-signout" href="../../signin.html">' + icon("logout") + "<span>Sign out</span></a>" +
      "</div>";

    topbar.innerHTML =
      '<button class="icon-btn topbar-menu" data-sidebar-toggle aria-label="Open navigation" aria-expanded="false">' + icon("menu") + "</button>" +
      '<div class="topbar-heading"><p class="topbar-eyebrow">' + dashName + " · " + title + "</p>" +
        '<h1 class="topbar-title">' + title + "</h1></div>" +
      '<label class="topbar-search"><span class="sr-only">Search dashboard</span>' + icon("search") +
        '<input type="search" placeholder="Search ' + (dashKey === "admin" ? "products, orders, customers" : "orders, wishlist, addresses") + '"></label>' +
      '<div class="topbar-actions">' +
        '<button class="icon-btn" data-toast="You are all caught up." aria-label="Notifications">' + icon("bell") + '<span class="bell-dot"></span></button>' +
        '<a class="btn btn-line btn-sm btn-store" href="../../index.html">' + icon("star") + "Storefront</a>" +
        '<button class="topbar-avatar avatar" data-toast="Signed in as ' + email + '" aria-label="Account menu">' + initials + "</button>" +
      "</div>";

    document.title = title + " — STACKLY " + (dashKey === "admin" ? "Admin" : "Account");
  }

  function areaChart(values) {
    var w = 820, h = 260, padX = 26, padTop = 22, padBottom = 28;
    var max = Math.max.apply(null, values);
    var min = Math.min.apply(null, values);
    var span = (max - min) || 1;
    var step = (w - padX * 2) / (values.length - 1);
    var pts = values.map(function (v, i) {
      return [padX + i * step, padTop + (1 - (v - min) / span) * (h - padTop - padBottom)];
    });
    var line = pts.map(function (p, i) {
      return (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1);
    }).join(" ");
    var area = line + " L " + pts[pts.length - 1][0].toFixed(1) + " " + (h - padBottom) +
      " L " + pts[0][0].toFixed(1) + " " + (h - padBottom) + " Z";
    var grid = [0, 1, 2, 3].map(function (i) {
      var y = padTop + i * ((h - padTop - padBottom) / 3);
      return '<line x1="' + padX + '" y1="' + y.toFixed(1) + '" x2="' + (w - padX) + '" y2="' + y.toFixed(1) + '" stroke="rgba(55,42,32,.09)" stroke-width="1"/>';
    }).join("");
    var dots = pts.map(function (p) {
      return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="4" fill="#fff" stroke="#c9a05b" stroke-width="2.4"/>';
    }).join("");
    return '<svg viewBox="0 0 ' + w + " " + h + '" role="img" aria-label="Trend chart">' +
      '<defs><linearGradient id="fillGold" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#c9a05b" stop-opacity=".34"/>' +
      '<stop offset="100%" stop-color="#c9a05b" stop-opacity="0"/></linearGradient></defs>' +
      grid + '<path d="' + area + '" fill="url(#fillGold)"/>' +
      '<path d="' + line + '" fill="none" stroke="#c9a05b" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      dots + "</svg>";
  }

  function barsChart(values, labels) {
    return '<div class="bars">' + values.map(function (v, i) {
      return '<div class="bar-col"><div class="bar" style="height:' + v + '%" title="' + labels[i] + ': ' + v + '"></div><small>' + labels[i] + "</small></div>";
    }).join("") + "</div>";
  }

  function renderArea(el, values, labels) {
    el.innerHTML = areaChart(values);
    var x = el.parentElement.querySelector("[data-chart-x]");
    if (x && labels) {
      x.innerHTML = labels.map(function (l) { return "<span>" + l + "</span>"; }).join("");
    }
  }

  function initCharts() {
    document.querySelectorAll("[data-chart]").forEach(function (el) {
      var type = el.dataset.chart;
      if (type === "area") {
        var values = (el.dataset.values || "").split(",").map(Number);
        var labels = (el.dataset.labels || "").split(",");
        renderArea(el, values, labels);
      } else if (type === "bars") {
        var bvalues = (el.dataset.values || "").split(",").map(Number);
        var blabels = (el.dataset.labels || "").split(",");
        el.innerHTML = barsChart(bvalues, blabels);
      }
    });
  }

  var RANGES = {
    "7d": { values: [38, 52, 44, 61, 58, 72, 66], labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], total: "$24,180", delta: "+8.2%" },
    "30d": { values: [42, 48, 40, 55, 52, 63, 58, 66, 61, 72, 69, 80], labels: ["1", "", "4", "", "8", "", "12", "", "16", "", "22", "30"], total: "$148,920", delta: "+12.4%" },
    "12m": { values: [64, 58, 72, 68, 80, 76, 88, 84, 92, 96, 90, 104], labels: ["Jan", "", "Mar", "", "May", "", "Jul", "", "Sep", "", "Nov", "Dec"], total: "$1.62M", delta: "+21.7%" }
  };

  function wireInteractions() {
    var dash = document.querySelector(".dash");

    function setScrollLock(lock) {
      document.documentElement.classList.toggle("no-scroll", lock);
      document.body.classList.toggle("no-scroll", lock);
    }

    function setNavOpen(open) {
      if (!dash) return;
      dash.classList.toggle("is-nav-open", open);
      document.querySelectorAll("[data-sidebar-toggle]").forEach(function (btn) {
        btn.setAttribute("aria-expanded", String(open));
      });
      setScrollLock(open);
    }

    document.querySelectorAll("[data-sidebar-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setNavOpen(!dash.classList.contains("is-nav-open"));
      });
    });
    document.querySelectorAll("[data-sidebar-close]").forEach(function (el) {
      el.addEventListener("click", function () { setNavOpen(false); });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && dash && dash.classList.contains("is-nav-open")) setNavOpen(false);
    });
    window.addEventListener("resize", function () {
      if (!window.matchMedia("(max-width: 1080px)").matches) setNavOpen(false);
    });

    document.body.addEventListener("click", function (event) {
      var toastTarget = event.target.closest("[data-toast]");
      if (toastTarget) showToast(toastTarget.dataset.toast);

      var del = event.target.closest("[data-row-delete]");
      if (del) {
        var row = del.closest("tr") || del.closest("[data-wishlist-item]") || del.closest("[data-remove]");
        if (row) { row.remove(); showToast(del.dataset.rowDelete || "Item removed"); }
      }
    });

    document.querySelectorAll("[data-tabs]").forEach(function (root) {
      var tabs = Array.prototype.slice.call(root.querySelectorAll("[data-tab]"));
      var panels = Array.prototype.slice.call(root.querySelectorAll(".tab-panel"));
      tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
          tabs.forEach(function (t) { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
          tab.classList.add("is-active");
          tab.setAttribute("aria-selected", "true");
          panels.forEach(function (p) { p.hidden = p.dataset.panel !== tab.dataset.tab; });
        });
      });
    });

    var tableFilters = {};

    document.querySelectorAll("[data-table]").forEach(function (table) {
      var key = table.dataset.table;
      var search = document.querySelector('[data-filter-search="' + key + '"]');
      var status = document.querySelector('[data-filter-status="' + key + '"]');
      var count = document.querySelector('[data-filter-count="' + key + '"]');
      function apply() {
        var q = (search ? search.value : "").trim().toLowerCase();
        var s = table.dataset.filterStatus || (status ? status.value : "all");
        var rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));
        var visible = 0;
        rows.forEach(function (r) {
          var okQ = !q || r.textContent.toLowerCase().indexOf(q) !== -1;
          var okS = s === "all" || r.dataset.status === s;
          var show = okQ && okS;
          r.hidden = !show;
          if (show) visible++;
        });
        if (count) count.textContent = visible;
      }
      tableFilters[key] = apply;
      table.dataset.filterStatus = status ? status.value : "all";
      if (search) search.addEventListener("input", apply);
      if (status) status.addEventListener("change", function () {
        table.dataset.filterStatus = status.value;
        apply();
      });
      apply();
    });

    document.querySelectorAll("[data-filter-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.dataset.tableKey;
        var value = btn.dataset.filterTab;
        btn.parentElement.querySelectorAll("[data-filter-tab]").forEach(function (t) { t.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var select = document.querySelector('[data-filter-status="' + key + '"]');
        if (select) select.value = value;
        var table = document.querySelector('[data-table="' + key + '"]');
        if (table) table.dataset.filterStatus = value;
        if (tableFilters[key]) tableFilters[key]();
      });
    });

    document.querySelectorAll("[data-cat-filter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var group = btn.closest("[data-cat-tabs]");
        if (group) group.querySelectorAll("[data-cat-filter]").forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var value = btn.dataset.catFilter;
        document.querySelectorAll("[data-cat-item]").forEach(function (card) {
          card.hidden = !(value === "all" || card.dataset.cat === value);
        });
      });
    });

    document.querySelectorAll("[data-fav]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var on = btn.classList.toggle("is-active");
        btn.textContent = on ? "\u2665" : "\u2661";
        showToast(on ? "Saved to your wishlist" : "Removed from your wishlist");
      });
    });

    document.querySelectorAll("[data-add-bag]").forEach(function (btn) {
      btn.addEventListener("click", function () { showToast(btn.dataset.addBag + " added to your bag"); });
    });

    document.querySelectorAll("[data-modal-open]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var modal = document.getElementById(btn.dataset.modalOpen);
        if (modal) modal.classList.add("is-open");
      });
    });
    document.querySelectorAll("[data-modal-close]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var modal = btn.closest(".modal");
        if (modal) modal.classList.remove("is-open");
      });
    });
    document.querySelectorAll(".modal").forEach(function (modal) {
      modal.addEventListener("click", function (event) {
        if (event.target === modal) modal.classList.remove("is-open");
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        document.querySelectorAll(".modal.is-open").forEach(function (m) { m.classList.remove("is-open"); });
      }
    });

    document.querySelectorAll("[data-simple-form]").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!form.reportValidity()) {
          showToast("Please fill in all required fields correctly.");
          return;
        }
        var emailField = form.querySelector('input[type="email"]');
        if (emailField && emailField.value.trim()) {
          try { localStorage.setItem("stackly-email", emailField.value.trim()); } catch (error) {}
        }
        window.location.href = "../../404.html";
      });
    });

    document.querySelectorAll(".switch input").forEach(function (input) {
      input.addEventListener("change", function () {
        showToast((input.dataset.label || "Setting") + (input.checked ? " enabled" : " disabled"));
      });
    });

    document.querySelectorAll("[data-order-status]").forEach(function (select) {
      select.addEventListener("change", function () {
        var row = select.closest("tr");
        var badge = row ? row.querySelector("[data-status-badge]") : null;
        var map = {
          processing: ["Processing", "badge-amber"],
          packed: ["Packed", "badge-violet"],
          shipped: ["In transit", "badge-blue"],
          delivered: ["Delivered", "badge-green"],
          cancelled: ["Cancelled", "badge-red"]
        };
        var entry = map[select.value] || ["Pending", "badge-muted"];
        if (badge) { badge.className = "badge " + entry[1]; badge.textContent = entry[0]; }
        showToast("Order marked " + entry[0].toLowerCase());
      });
    });

    document.querySelectorAll("[data-range]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var range = RANGES[btn.dataset.range];
        if (!range) return;
        document.querySelectorAll("[data-range]").forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var chart = document.querySelector('[data-chart="area"]');
        if (chart) renderArea(chart, range.values, range.labels);
        var total = document.querySelector("[data-range-total]");
        if (total) total.textContent = range.total;
        var delta = document.querySelector("[data-range-delta]");
        if (delta) delta.textContent = range.delta;
      });
    });

    document.querySelectorAll(".topbar-search input").forEach(function (input) {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          showToast('Searching for "' + (input.value.trim() || "everything") + '"');
        }
      });
    });
  }

  function renderInlineIcons() {
    document.querySelectorAll("[data-icon]").forEach(function (el) {
      el.insertAdjacentHTML("afterbegin", icon(el.dataset.icon));
    });
  }

  function applySession() {
    var dashKey = document.body.dataset.dash || "user";
    var profile = PROFILE[dashKey] || PROFILE.user;
    var email = getSessionEmail() || profile.email;
    var name = nameFromEmail(email);
    var initials = initialsFromName(name);
    var parts = name.split(/\s+/).filter(Boolean);

    document.querySelectorAll("[data-account-name]").forEach(function (el) { el.textContent = name; });
    document.querySelectorAll("[data-account-email]").forEach(function (el) { el.textContent = email; });
    document.querySelectorAll("[data-account-avatar]").forEach(function (el) { el.textContent = initials; });
    document.querySelectorAll("[data-account-surname]").forEach(function (el) { el.textContent = parts.slice(1).join(" ") || parts[0] || name; });

    var firstName = document.querySelector("[data-account-first]");
    if (firstName) firstName.value = parts[0] || "";
    var lastName = document.querySelector("[data-account-last]");
    if (lastName) lastName.value = parts.slice(1).join(" ");

    var greeting = document.querySelector("[data-greeting]");
    if (greeting) greeting.textContent = "Good evening, " + (parts[0] || name) + ".";

    var profileEmail = document.getElementById("pf-email");
    if (profileEmail) profileEmail.value = email;
    document.querySelectorAll('input[type="email"]').forEach(function (input) {
      if (!input.value.trim()) input.value = email;
    });
  }

  function init() {
    renderInlineIcons();
    buildShell();
    applySession();
    wireInteractions();
    initCharts();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
