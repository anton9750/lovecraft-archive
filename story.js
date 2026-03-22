// story.js
import { stories } from "./data/stories.js";

// Grab URL parameters
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const title = params.get("title");

// Grab DOM elements
const storyTitle = document.getElementById("story-title");
const storyContent = document.getElementById("story-content");

// Safety check: make sure the category and story exist
if (stories[category] && stories[category][title]) {
  storyTitle.textContent = title;
  storyContent.innerHTML = stories[category][title];
} else {
  storyTitle.textContent = "Story not found";
  storyContent.innerHTML = `
    <p>Sorry, we couldn't find that story.</p>
    <p><a href="index.html" class="text-yellow-400 hover:underline">Back to Archive</a></p>
  `;
}