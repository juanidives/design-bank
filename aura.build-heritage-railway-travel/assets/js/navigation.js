document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".l-header__open-button");
  const closeBtn = document.querySelector(".l-header__close-button");
  const nav = document.querySelector(".l-header__nav");
  const navLinks = document.querySelectorAll(".l-header__nav-list a");

  if (!openBtn || !nav) return;

  function openMenu() {
    nav.classList.remove("is-close");
    nav.classList.add("is-open");
    openBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    nav.classList.remove("is-open");
    nav.classList.add("is-close");
    openBtn.setAttribute("aria-expanded", "false");
  }

  openBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991 && nav.classList.contains("is-open")) {
      closeMenu();
    }
  });
});
