// writingsIndex.js
import { stories } from "../data/stories.js";

// List of categories you want to show in the index
const categories = Object.keys(stories);

/**
 * Render the main writings index with clickable categories
 */
export function renderWritingsIndex() {
  return `
    <div class="writings">
      <ul class="mb-4">
        ${categories
          .map(
            (category) =>
              `<li>
                 <a href="#" data-category="${category}" 
                    class="text-yellow-300 hover:underline capitalize">
                   ${category}
                 </a>
               </li>`
          )
          .join("")}
      </ul>

      <!-- Container for category items -->
      <div id="categoryContent"></div>
    </div>
  `;
}

/**
 * Handle clicks on categories in the index
 * Returns HTML for the list of items in that category
 */
export function handleCategoryClick(category) {
  if (!stories[category]) return "<p>No stories found for this category.</p>";

  const items = Object.keys(stories[category]);

  return `
    <ul>
      ${items
        .map(
          (title) => `
            <li>
              <a href="story.html?category=${category}&title=${encodeURIComponent(
            title
          )}"
                 class="hover:text-yellow-300 transition">
                ${title}
              </a>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}