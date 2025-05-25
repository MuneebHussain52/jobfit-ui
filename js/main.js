// ===== main.js =====

// Highlight the active sidebar link based on current URL
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".sidebar ul li a");
  
    links.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
  