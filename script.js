/* Asset Trainer support site — interactions (no dependencies). */
(function () {
  "use strict";

  /* ---- Theme toggle (persisted) ------------------------------------------ */
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem("at-theme"); } catch (e) {}
  if (stored) {
    root.setAttribute("data-theme", stored);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.setAttribute("data-theme", "dark");
  }

  var toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("at-theme", next); } catch (e) {}
    });
  }

  /* ---- Current year ------------------------------------------------------- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- FAQ accordion: animate <details> and keep one open ----------------- */
  var items = Array.prototype.slice.call(document.querySelectorAll(".faq-item"));

  function setHeight(item, open) {
    var a = item.querySelector(".faq-a");
    if (!a) return;
    a.style.maxHeight = open ? a.scrollHeight + "px" : "0px";
  }

  items.forEach(function (item) {
    var summary = item.querySelector(".faq-q");
    if (!summary) return;
    summary.addEventListener("click", function (ev) {
      ev.preventDefault();
      var willOpen = !item.open;
      if (willOpen) {
        items.forEach(function (other) {
          if (other !== item && other.open) {
            other.open = false;
            setHeight(other, false);
          }
        });
      }
      item.open = willOpen;
      setHeight(item, willOpen);
    });
  });

  // Recompute open panel height on resize (wrapping changes content height).
  window.addEventListener("resize", function () {
    items.forEach(function (item) { if (item.open) setHeight(item, true); });
  });

  /* ---- Reveal on scroll --------------------------------------------------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }
})();
