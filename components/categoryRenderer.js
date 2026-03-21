// components/categoryRenderer.js
import { writingsData } from "../data/writingsData.js";

export function renderCategory(title, key) {
  const items = writingsData[key] || [];

  return `
    <div class="category mb-6">
      <h2 class="text-yellow-300 font-serif text-xl mb-2">${title}</h2>
      <ul class="ml-4 list-disc text-gray-200">
        ${items.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;
}