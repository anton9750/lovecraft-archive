import { renderPage } from "../components/layout.js";

export function renderHisCreations() {
  return renderPage(
    "His Creations",
    `
    <p>
      A gallery of Lovecraft’s monsters, gods, and cosmic entities.
    </p>
    `
  );
}