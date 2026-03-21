// modules/hisLife.js
import { renderPage } from "../components/layout.js";

export function renderHisLife() {
  return renderPage(
    "His Life",
    `
    <div class="space-y-6">
      <p class="text-gray-200 text-lg leading-relaxed">
        Howard Phillips Lovecraft (1890–1937) was an American writer of weird and 
        horror fiction. Born in Providence, Rhode Island, he spent most of his life 
        there, producing a vast array of stories, essays, and correspondence that 
        shaped the genre of cosmic horror.
      </p>

      <p class="text-gray-200 text-lg leading-relaxed">
        Lovecraft’s works often explore forbidden knowledge, cosmic insignificance, 
        and the fragility of sanity. Though not widely recognized during his lifetime, 
        his stories influenced generations of writers, artists, and filmmakers.
      </p>

      <p class="text-gray-200 text-lg leading-relaxed">
        This section covers his early life, personal struggles, literary career, and 
        the enduring legacy of his writings. Explore his biography to understand the 
        man behind the mythos.
      </p>
    </div>
    `
  );
}