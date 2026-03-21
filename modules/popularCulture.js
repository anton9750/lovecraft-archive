import { renderPage } from "../components/layout.js";

export function renderPopularCulture() {
  return renderPage(
    "Popular Culture",
    `
    <p>
      Lovecraft’s influence across films, games, and modern fiction.
    </p>
    `
  );
}