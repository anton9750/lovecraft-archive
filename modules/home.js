// modules/home.js
import { renderPage } from "../components/layout.js";

export function renderHome() {
  return renderPage(
    "", 
    `
    <div class="bg-black min-h-screen p-6 text-gray-100 flex flex-col justify-center items-center text-center space-y-8">

      <!-- Main heading centered inside content -->
      <h1 class="text-yellow-300 font-serif text-3xl md:text-4xl">
        Electronic Texts of H.P. Lovecraft’s Works
      </h1>

      <!-- Intro paragraph -->
      <p class="text-yellow-200 text-lg md:text-xl leading-relaxed max-w-3xl">
        Welcome to the electronic archive of H.P. Lovecraft’s works — a carefully categorized, 
        alphabetical collection of his writings. Explore his fiction, poetry, essays, letters, 
        and more, preserved here in a modular library format.
      </p>

      <!-- Category cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">

        <!-- Fiction Card -->
        <div class="bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 class="text-yellow-300 font-serif text-xl md:text-2xl mb-2">Fiction</h2>
          <p class="text-gray-300 text-sm md:text-base">The chilling and cosmic stories that made Lovecraft famous.</p>
        </div>

        <!-- Poetry Card -->
        <div class="bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 class="text-yellow-300 font-serif text-xl md:text-2xl mb-2">Poetry</h2>
          <p class="text-gray-300 text-sm md:text-base">Verse inspired by strange worlds and eldritch imagery.</p>
        </div>

        <!-- Letters Card -->
        <div class="bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 class="text-yellow-300 font-serif text-xl md:text-2xl mb-2">Letters</h2>
          <p class="text-gray-300 text-sm md:text-base">Correspondence revealing his thoughts, friendships, and literary network.</p>
        </div>

        <!-- Essays & Criticism Card -->
        <div class="bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 class="text-yellow-300 font-serif text-xl md:text-2xl mb-2">Essays & Criticism</h2>
          <p class="text-gray-300 text-sm md:text-base">Insights on literature, writing, and the philosophy of the weird.</p>
        </div>

        <!-- Miscellaneous Card -->
        <div class="bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 class="text-yellow-300 font-serif text-xl md:text-2xl mb-2">Miscellaneous</h2>
          <p class="text-gray-300 text-sm md:text-base">Amateur journalism, science notes, travel writings, and other rarities.</p>
        </div>

      </div>

      <!-- Footer note -->
      <p class="text-gray-400 text-sm md:text-base mt-6 max-w-3xl">
        Navigate through the archive using the top menu, or click on a category to see all available works.
      </p>
    </div>
    `
  );
}