console.log("JS is connected! 🚀");
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  const current = document.body.getAttribute("data-theme");
  document.body.setAttribute("data-theme", current === "dark" ? "light" : "dark");
});