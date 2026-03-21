import { writingsData } from "../data/writingsData.js";
import { renderFiction } from "./fiction.js";
import { renderPoetry } from "./poetry.js";
import { renderLetters } from "./letters.js";
import { renderAmateur } from "./amateur.js";
import { renderCriticism } from "./criticism.js";
import { renderScience } from "./science.js";
import { renderTravel } from "./travel.js";
import { renderPhilosophy } from "./philosophy.js";
import { renderAutobiographical } from "./autobiographical.js";
import { renderQuotations } from "./quotations.js";
import { renderDrawings } from "./drawings.js";
import { renderReadings } from "./readings.js";
import { renderCollaborations } from "./collaborations.js";
import { renderFavorites } from "./favorites.js";

export function renderWritingsIndex() {
  return `
    <div class="writings">
      <ul>
        ${Object.keys(writingsData)
          .map(
            (category) =>
              `<li><a href="#" data-category="${category}">${category}</a></li>`
          )
          .join("")}
      </ul>

      <div id="categoryContent"></div>
    </div>
  `;
}

export function handleCategoryClick(category) {
  switch (category) {
    case "fiction":
      return renderFiction();
    case "poetry":
      return renderPoetry();
    case "letters":
      return renderLetters();
    case "amateur":
      return renderAmateur();
    case "criticism":
      return renderCriticism();
    case "science":
      return renderScience();
    case "travel":
      return renderTravel();
    case "philosophy":
      return renderPhilosophy();
    case "autobiographical":
      return renderAutobiographical();
    case "quotations":
      return renderQuotations();
    case "drawings":
      return renderDrawings();
    case "readings":
      return renderReadings();
    case "collaborations":
      return renderCollaborations();
    case "favorites":
      return renderFavorites();
    default:
      return "<p>Select a category</p>";
  }
}