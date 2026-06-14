const toggleBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.body.setAttribute("data-theme", currentTheme);
    toggleBtn.textContent = currentTheme === "light" ? "🌙" : "☀️";
}

toggleBtn.addEventListener("click", () => {
    const theme = document.body.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    toggleBtn.textContent = theme === "light" ? "🌙" : "☀️";
});
