<script>
  export let title = "Explore the World with Wanderlust";
  export let subtitle = "Discover breathtaking destinations, tips, and travel stories.";
  export let buttonText = "Get Started";

  let isMenuOpen = false;
</script>

<!-- Wrapper -->
<div class="relative h-screen overflow-hidden">
  <!-- Fixed Background -->
  <div
    class="absolute inset-0 bg-fixed bg-cover bg-center z-0"
    style="background-image: url('/mountain.jpeg');"
  ></div>

  <!-- Hero Section -->
  <div class="relative h-full flex flex-col justify-center items-center text-center z-10 text-white px-4">
    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{title}</h1>
    <p class="text-base sm:text-lg md:text-xl mb-6">{subtitle}</p>
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg">
      {buttonText}
    </button>
  </div>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black bg-opacity-50 z-5"></div>

  <!-- Navigation Bar -->
  <nav class="fixed top-0 w-full bg-white shadow z-50">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <a href="/" class="text-xl font-bold text-blue-500">Wanderlust</a>
      <ul class="hidden sm:flex space-x-6">
        <li><a href="#destinations" class="hover:text-blue-500">Destinations</a></li>
        <li><a href="#about" class="hover:text-blue-500">About</a></li>
        <li><a href="#blog" class="hover:text-blue-500">Blog</a></li>
      </ul>
      <button
        class="sm:hidden text-blue-500 focus:outline-none"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        on:click={() => (isMenuOpen = !isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  </nav>
</div>

<!-- Featured Destinations Section -->
<section id="destinations" class="bg-gray-100 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-8">Featured Destinations</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <img src="https://source.unsplash.com/400x300/?beach" alt="Beach" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-bold">Tropical Beach</h3>
          <p class="text-gray-600">Relax in paradise with crystal clear waters.</p>
        </div>
      </div>
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <img src="https://source.unsplash.com/400x300/?mountains" alt="Mountains" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-bold">Majestic Mountains</h3>
          <p class="text-gray-600">Explore breathtaking peaks and scenic trails.</p>
        </div>
      </div>
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <img src="https://source.unsplash.com/400x300/?city" alt="City" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-bold">Vibrant Cities</h3>
          <p class="text-gray-600">Experience culture and nightlife in the city.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- About Section -->
<section id="about" class="bg-white py-16">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-8">About Wanderlust</h2>
    <p class="text-gray-600 leading-relaxed">
      Wanderlust is your ultimate guide to discovering beautiful destinations around the globe. From travel tips to inspiring stories, we bring the world to your fingertips.
    </p>
  </div>
</section>

<!-- Blog Section -->
<section id="blog" class="bg-gray-100 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Example Blog Post -->
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <img src="https://source.unsplash.com/400x300/?travel" alt="Travel Blog" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-bold">The Joy of Traveling</h3>
          <p class="text-gray-600">Discover how travel enriches your life.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="bg-blue-500 text-white py-4">
  <div class="container mx-auto text-center">
    <p>&copy; 2024 Wanderlust. All rights reserved.</p>
  </div>
</footer>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
