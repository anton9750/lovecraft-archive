// main.js
import './tailwind/input.css';

console.log("main.js loaded");

import { renderNavbar } from "./components/navbar.js";
import { renderHome } from "./modules/home.js";
import { renderHisLife } from "./modules/hisLife.js";
import { renderHisWritings } from "./modules/hisWritings.js";
import { renderHisCreations } from "./modules/hisCreations.js";
import { renderHisStudy } from "./modules/hisStudy.js";
import { renderPopularCulture } from "./modules/popularCulture.js";
import { renderAbout } from "./modules/aboutThisSite.js";
import { handleCategoryClick } from "./modules/writingsIndex.js";

const app = document.getElementById("app");

// Base body styling
document.body.classList.add("bg-black", "text-gray-100", "min-h-screen");

// 🔁 Main page renderer
function render(page) {
  let content = "";

  // Background handling
  if (page === "home") {
    document.body.style.backgroundImage = "url('assets/images/Miskatonic homepage.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  } else {
    document.body.style.backgroundImage = "none";
  }

  switch (page) {
    case "hisLife":
      content = renderHisLife();
      break;
    case "hisWritings":
      content = renderHisWritings();
      break;
    case "hisCreations":
      content = renderHisCreations();
      break;
    case "hisStudy":
      content = renderHisStudy();
      break;
    case "popularCulture":
      content = renderPopularCulture();
      break;
    case "aboutThisSite":
      content = renderAbout();
      break;
    default:
      content = renderHome();
  }

  app.innerHTML = renderNavbar() + content;
}

// 🧠 Smart click handler
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");

  // 🚪 Allow normal navigation for all story.html links (fiction, poetry, essays, letters)
  if (link && link.getAttribute("href")?.includes("story.html")) {
    return; // Let browser navigate normally
  }

  // SPA navigation (navbar etc.)
  if (e.target.dataset.page) {
    e.preventDefault();
    render(e.target.dataset.page);
  }

  // Category clicks (fiction, poetry, essays, letters, etc.)
  if (e.target.dataset.category) {
    e.preventDefault();
    const content = handleCategoryClick(e.target.dataset.category);
    const container = document.getElementById("categoryContent");
    if (container) container.innerHTML = content;
  }
});

// 🚀 Initial load
render("home");