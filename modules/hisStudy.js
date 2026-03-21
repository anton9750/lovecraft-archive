import { renderPage } from "../components/layout.js";

export function renderHisStudy() {
  return renderPage(
    "His Study",
    `
    <p>
      Insights into Lovecraft’s influences, reading habits, and research.
    </p>
    `
  );
}