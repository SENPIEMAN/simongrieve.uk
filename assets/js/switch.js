const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme === "dark";

  document.documentElement.dataset.theme = isDark ? "light" : "dark";

  document.querySelector(".theme-icon-sun").style.display =
    isDark ? "block" : "none";

  document.querySelector(".theme-icon-moon").style.display =
    isDark ? "none" : "block";

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to dark mode" : "Switch to light mode"
  );
});