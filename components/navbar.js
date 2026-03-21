export function renderNavbar() {
  return `
    <nav class="bg-gray-900 text-yellow-300 font-serif shadow-md w-full">
      <div class="mx-auto px-6 py-3 flex items-center justify-between max-w-7xl">
        <div class="text-xl font-bold hover:text-yellow-500 transition-colors duration-300">
          H.P. Lovecraft Archive
        </div>
        
        <ul class="hidden md:flex items-center gap-8">
          <li><a href="#" data-page="home" class="hover:text-yellow-500 transition-colors duration-300">Home</a></li>
          <li><a href="#" data-page="hisLife" class="hover:text-yellow-500 transition-colors duration-300">His Life</a></li>
          <li><a href="#" data-page="hisWritings" class="hover:text-yellow-500 transition-colors duration-300">His Writings</a></li>
          <li><a href="#" data-page="hisCreations" class="hover:text-yellow-500 transition-colors duration-300">His Creations</a></li>
          <li><a href="#" data-page="hisStudy" class="hover:text-yellow-500 transition-colors duration-300">His Study</a></li>
          <li><a href="#" data-page="popularCulture" class="hover:text-yellow-500 transition-colors duration-300">Popular Culture</a></li>
          <li><a href="#" data-page="aboutThisSite" class="hover:text-yellow-500 transition-colors duration-300">About</a></li>
        </ul>

        <!-- You can add mobile menu button here later -->
      </div>
    </nav>
  `;
}