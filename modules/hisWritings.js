// modules/hisWritings.js
import { renderPage } from "../components/layout.js";
import { renderWritingsIndex } from "./writingsIndex.js";

export function renderHisWritings() {
  return `
    <div 
      class="min-h-screen bg-black bg-cover bg-center" 
      style="background-image: url('assets/images/bookshelf.jpg');"
    >
      ${renderPage(
        "His Writings",
        renderWritingsIndex()
      )}
    </div>
  `;
}