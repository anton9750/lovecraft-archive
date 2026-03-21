// modules/popularCulture.js
import { renderPage } from "../components/layout.js";

export function renderPopularCulture() {
  return `
    <div 
      class="min-h-screen w-full bg-cover bg-center" 
      style="background-image: url('assets/images/popularCulture-background.jpg');"
    >
      <div class="bg-transparent">
        ${renderPage(
          "Popular Culture",
          `
          <p class="text-gray-100">
            Lovecraft’s influence across films, games, and modern fiction.
          </p>
          `
        )}
      </div>
    </div>
  `;
}