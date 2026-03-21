export function renderPage(title, content) {
  return `
    <div class="max-w-6xl mx-auto px-6 py-8">
      ${title ? `<h1 class="text-3xl font-serif text-yellow-300 mb-4">${title}</h1>
      <div class="border-t border-gray-700 my-4"></div>` : ""}
      <div class="text-gray-200 text-lg leading-relaxed">${content}</div>
    </div>
  `;
}