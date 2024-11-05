document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "theme-light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "theme-light" ? "theme-dark" : "theme-light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  document.getElementById("darkModeToggle").addEventListener("click", toggleTheme);
});
