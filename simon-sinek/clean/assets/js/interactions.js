document.addEventListener("DOMContentLoaded", function () {
  // Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 1. Desktop Dropdown Logic (About Simon / Sobre o Simon)
  const aboutSimonTrigger = document.getElementById("about-simon-trigger");
  const aboutSimonDropdown = document.getElementById("about-simon-dropdown");

  if (aboutSimonTrigger && aboutSimonDropdown) {
    let isOpen = false;

    function openDropdown() {
      isOpen = true;
      aboutSimonTrigger.setAttribute("aria-expanded", "true");
      aboutSimonTrigger.setAttribute("data-state", "open");
      aboutSimonDropdown.classList.remove("opacity-0", "invisible", "scale-95");
      aboutSimonDropdown.classList.add("opacity-100", "visible", "scale-100");
    }

    function closeDropdown() {
      isOpen = false;
      aboutSimonTrigger.setAttribute("aria-expanded", "false");
      aboutSimonTrigger.setAttribute("data-state", "closed");
      aboutSimonDropdown.classList.remove("opacity-100", "visible", "scale-100");
      aboutSimonDropdown.classList.add("opacity-0", "invisible", "scale-95");
    }

    aboutSimonTrigger.addEventListener("click", function (e) {
      e.stopPropagation();
      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    document.addEventListener("click", function (e) {
      if (isOpen && !aboutSimonTrigger.contains(e.target) && !aboutSimonDropdown.contains(e.target)) {
        closeDropdown();
      }
    });
  }

  // 2. Mobile Menu Drawer Logic
  const mobileMenuTrigger = document.getElementById("mobile-menu-trigger");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuContainer = mobileMenu ? mobileMenu.querySelector(".max-w-xs") : null;

  if (mobileMenuTrigger && mobileMenu && mobileMenuContainer) {
    function openMobileMenu() {
      mobileMenuTrigger.setAttribute("aria-expanded", "true");
      mobileMenuTrigger.setAttribute("data-state", "open");
      mobileMenu.classList.remove("opacity-0", "invisible");
      mobileMenu.classList.add("opacity-100", "visible");
      mobileMenuContainer.classList.remove("translate-x-full");
      mobileMenuContainer.classList.add("translate-x-0");
      document.body.style.overflow = "hidden";
    }

    function closeMobileMenu() {
      mobileMenuTrigger.setAttribute("aria-expanded", "false");
      mobileMenuTrigger.setAttribute("data-state", "closed");
      mobileMenu.classList.remove("opacity-100", "visible");
      mobileMenu.classList.add("opacity-0", "invisible");
      mobileMenuContainer.classList.remove("translate-x-0");
      mobileMenuContainer.classList.add("translate-x-full");
      document.body.style.overflow = "";
    }

    mobileMenuTrigger.addEventListener("click", openMobileMenu);
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", closeMobileMenu);
    }
    mobileMenu.addEventListener("click", function (e) {
      if (!mobileMenuContainer.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  // 3. Mobile About Simon Submenu Toggle
  const mobileAboutSimonTrigger = document.getElementById("mobile-about-simon-trigger");
  const mobileAboutSimonSubmenu = document.getElementById("mobile-about-simon-submenu");

  if (mobileAboutSimonTrigger && mobileAboutSimonSubmenu) {
    let isSubmenuOpen = false;
    mobileAboutSimonTrigger.addEventListener("click", function () {
      isSubmenuOpen = !isSubmenuOpen;
      const chevron = mobileAboutSimonTrigger.querySelector(".lucide-chevron-down");
      if (isSubmenuOpen) {
        mobileAboutSimonSubmenu.classList.remove("hidden");
        mobileAboutSimonSubmenu.classList.add("flex");
        if (chevron) chevron.style.transform = "rotate(180deg)";
      } else {
        mobileAboutSimonSubmenu.classList.remove("flex");
        mobileAboutSimonSubmenu.classList.add("hidden");
        if (chevron) chevron.style.transform = "";
      }
    });
  }

  // 4. Tab Switching Logic for Developer Portal / Landing Page Toggle
  const tabButtons = document.querySelectorAll("[data-tab-target]");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      const targetId = btn.getAttribute("data-tab-target");

      // Update button state styles
      tabButtons.forEach(b => {
        b.classList.remove("bg-optimism", "text-light", "shadow-sm");
        b.classList.add("text-shadow/60", "hover:text-shadow");
      });
      btn.classList.add("bg-optimism", "text-light", "shadow-sm");
      btn.classList.remove("text-shadow/60", "hover:text-shadow");

      // Toggle content section visibility
      tabContents.forEach(content => {
        if (content.id === targetId) {
          content.classList.remove("hidden");
          content.classList.add("block");
        } else {
          content.classList.remove("block");
          content.classList.add("hidden");
        }
      });

      // Recalculate icons if switching
      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
    });
  });

  // 5. Copy Token to Clipboard Helper
  const copyButtons = document.querySelectorAll("[data-copy-text]");
  copyButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      const textToCopy = btn.getAttribute("data-copy-text");
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<i data-lucide="check" class="size-4 text-emerald-500"></i> Copiado!`;
        if (typeof lucide !== "undefined") {
          lucide.createIcons();
        }
        setTimeout(() => {
          btn.innerHTML = originalHtml;
          if (typeof lucide !== "undefined") {
            lucide.createIcons();
          }
        }, 1500);
      });
    });
  });
});
