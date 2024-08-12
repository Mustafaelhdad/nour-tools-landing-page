document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: "smooth",
      });

      // Collapse the navbar after scrolling if the screen is medium or smaller
      if (window.innerWidth < 992) {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        setTimeout(() => {
          if (window.getComputedStyle(navbarCollapse).display !== "none") {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          }
        }, 100); // Adjust the delay if needed
      }
    }
  });
});
