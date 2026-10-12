// ---------------- mobile menu ----------------
var menuBtn = document.getElementById("menuBtn");
var navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // close menu after clicking any link
  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // close on Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.focus();
    }
  });
}

// ---------------- footer year ----------------
var yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------------- navbar shadow + active link ----------------
var nav = document.getElementById("navbar");
var sections = document.querySelectorAll("section[id]");
var links = document.querySelectorAll(".nav-links a[href^='#']");

function onScroll() {
  if (nav) {
    if (window.scrollY > 8) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }

  var cur = "";
  sections.forEach(function (s) {
    if (window.scrollY >= s.offsetTop - 160) cur = s.id;
  });
  links.forEach(function (a) {
    a.classList.toggle("active", a.getAttribute("href") === "#" + cur);
  });

  // back to top visibility
  if (toTopBtn) {
    if (window.scrollY > 600) toTopBtn.classList.add("show");
    else toTopBtn.classList.remove("show");
  }
}

// ---------------- back to top ----------------
var toTopBtn = document.getElementById("toTop");
if (toTopBtn) {
  toTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------------- reveal on scroll ----------------
var revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });
  revealEls.forEach(function (el) { io.observe(el); });
} else {
  // fallback: show everything if observer not supported
  revealEls.forEach(function (el) { el.classList.add("visible"); });
}

// ---------------- project filter ----------------
var filterBtns = document.querySelectorAll(".filter-btn");
var projectCards = document.querySelectorAll("#projectsGrid .card");

if (filterBtns.length) {
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");

      var f = btn.getAttribute("data-filter");
      projectCards.forEach(function (c) {
        var show = f === "all" || c.getAttribute("data-cat") === f;
        c.classList.toggle("hide", !show);
      });
    });
  });
}

// ---------------- contact form ----------------
var form = document.getElementById("contactForm");
var note = document.getElementById("formNote");

if (form && note) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var n = document.getElementById("name").value.trim();
    var em = document.getElementById("email").value.trim();
    var m = document.getElementById("message").value.trim();

    function fail(msg) {
      note.textContent = msg;
      note.className = "form-note err";
    }

    if (!n || !em || !m) return fail("Please fill in all fields.");

    // basic email check
    var emailOk = em.indexOf("@") > 0 &&
      em.lastIndexOf(".") > em.indexOf("@") + 1 &&
      em.lastIndexOf(".") < em.length - 1;
    if (!emailOk) return fail("Please enter a valid email address.");

    note.textContent = "Thanks " + n + "! Opening your email app...";
    note.className = "form-note ok";
    form.reset();

    window.location.href =
      "mailto:yasar.memon@email.com" +
      "?subject=" + encodeURIComponent("Portfolio contact from " + n) +
      "&body=" + encodeURIComponent(m + "\n\nEmail: " + em);
  });
}