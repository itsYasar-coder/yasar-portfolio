// mobile menu
var menuBtn = document.getElementById("menuBtn");
var navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});

// year
document.getElementById("year").textContent = new Date().getFullYear();

// navbar shadow + active link
var nav = document.getElementById("navbar");
var sections = document.querySelectorAll("section[id]");
var links = document.querySelectorAll(".nav-links a[href^='#']");

window.addEventListener("scroll", function () {
  if (window.scrollY > 8) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");

  var cur = "";
  sections.forEach(function (s) {
    if (window.scrollY >= s.offsetTop - 140) cur = s.id;
  });
  links.forEach(function (a) {
    a.classList.toggle("active", a.getAttribute("href") === "#" + cur);
  });
});

// subtle reveal on scroll
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

// contact form
var form = document.getElementById("contactForm");
var note = document.getElementById("formNote");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var n = document.getElementById("name").value.trim();
  var em = document.getElementById("email").value.trim();
  var m = document.getElementById("message").value.trim();
  if (!n || !em || !m) {
    note.textContent = "Please fill all fields.";
    note.className = "form-note err";
    return;
  }
  if (em.indexOf("@") === -1) {
    note.textContent = "Enter a valid email.";
    note.className = "form-note err";
    return;
  }
  note.textContent = "Thanks " + n + "! Opening your mail app...";
  note.className = "form-note ok";
  form.reset();
  window.location.href = "mailto:yasar.memon@email.com?subject=" +
    encodeURIComponent("Portfolio contact from " + n) +
    "&body=" + encodeURIComponent(m);
});
