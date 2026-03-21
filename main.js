import './tailwind/input.css';

console.log("main.js loaded");

import { renderNavbar } from "./components/navbar.js";
import { renderHome } from "./modules/home.js";
import { renderHisLife } from "./modules/hisLife.js";
import { renderHisWritings } from "./modules/hiswritings.js";
import { renderHisCreations } from "./modules/hisCreations.js";
import { renderHisStudy } from "./modules/hisStudy.js";
import { renderPopularCulture } from "./modules/popularCulture.js";
import { renderAbout } from "./modules/aboutThisSite.js";
import { handleCategoryClick } from "./modules/writingsIndex.js";

const app = document.getElementById("app");

document.body.classList.add("bg-black", "text-gray-100");

// 🔁 Main page renderer
function render(page) {
  let content = "";

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

// 🖱️ Global click handler (navigation + categories)
document.addEventListener("click", (e) => {
  // Page navigation
  if (e.target.dataset.page) {
    e.preventDefault();
    render(e.target.dataset.page);
  }

  // Writings category selection
  if (e.target.dataset.category) {
    e.preventDefault();

    const content = handleCategoryClick(e.target.dataset.category);

    const container = document.getElementById("categoryContent");
    if (container) {
      container.innerHTML = content;
    }
  }
});

// 🚀 Initial load
render("home");