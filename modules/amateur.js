// modules/amateur.js
import { renderCategory } from "../components/categoryRenderer.js";

export function renderAmateur() {
  return `
    <div class="my-6 p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 class="text-2xl font-serif text-yellow-700 mb-4">Amateur Journalism</h2>
      <div class="space-y-2">
        ${renderCategory("", "amateur")}
      </div>
    </div>
  `;
}