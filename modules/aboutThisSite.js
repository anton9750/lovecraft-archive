// modules/aboutThisSite.js
import { renderPage } from "../components/layout.js";

export function renderAbout() {
  return renderPage(
    "About This Site",
    `
    <div class="space-y-6 text-gray-100">
      <p>
        This site is a journey through the writings and legacy of H.P. Lovecraft,
        offering an immersive view of his works, from fiction and poetry to letters
        and essays.
      </p>

      <p>
        Explore the archives and uncover the strange, the cosmic, and the mysterious 
        threads that weave through his literary universe.
      </p>

      <!-- Smaller image under the text -->
      <img src="assets/images/book-reading.jpg" 
           alt="Person reading a book" 
           class="w-full max-w-xl mx-auto rounded-lg shadow-lg">
    </div>
    `
  );
}