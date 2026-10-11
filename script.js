const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const copyButton = document.querySelector(".copy-email");
const copyStatus = document.querySelector(".copy-status");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = "Email copied.";
    } catch {
      copyStatus.textContent = "Copy unavailable here. Email: " + email;
    }
  });
}
