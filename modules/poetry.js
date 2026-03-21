// modules/poetry.js
import { writingsData } from "../data/writingsData.js";

export function renderPoetry() {
  const items = writingsData.poetry || [];

  return `
    <div class="writings-category my-6 space-y-2">
      <h2 class="text-yellow-300 font-serif text-2xl mb-4">Poetry</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        ${items
          .map(
            (title) => `
          <a 
            href="/works/${encodeURIComponent(title)}" 
            class="block p-3 rounded-lg bg-gray-900 text-gray-200 hover:bg-yellow-800 hover:text-black transition-all duration-300 shadow-lg"
          >
            ${title}
          </a>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}