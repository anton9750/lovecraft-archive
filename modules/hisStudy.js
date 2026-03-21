// modules/hisStudy.js
import { renderPage } from "../components/layout.js";

export function renderHisStudy() {
  return `
    <div 
      class="min-h-screen w-full bg-cover bg-center" 
      style="background-image: url('assets/images/hisstudy-background.jpg');"
    >
      <div class="bg-transparent">
        ${renderPage(
          "His Study",
          `
          <p class="text-gray-100">
            Insights into Lovecraft’s influences, reading habits, and research.
          </p>
          `
        )}
      </div>
    </div>
  `;
}