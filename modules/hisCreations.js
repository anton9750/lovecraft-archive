// modules/hisCreations.js
import { renderPage } from "../components/layout.js";

export function renderHisCreations() {
  return `
    <div 
      class="min-h-screen w-full bg-cover bg-center" 
      style="background-image: url('assets/images/creationsbackground.png');"
    >
      <div class="bg-transparent">
        ${renderPage(
          "His Creations",
          `
          <p class="text-gray-100">
            A gallery of Lovecraft’s monsters, gods, and cosmic entities.
          </p>
          `
        )}
      </div>
    </div>
  `;
}