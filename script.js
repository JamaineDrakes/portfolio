const toggleBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

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



tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;

        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        tabContents.forEach(content => {
            content.classList.toggle("active", content.id === tab);
        });
    });
});

