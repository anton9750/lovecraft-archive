import { renderPage } from "../components/layout.js";
import { renderWritingsIndex } from "./writingsIndex.js";

export function renderHisWritings() {
  return renderPage(
    "His Writings",
    renderWritingsIndex()
  );
}