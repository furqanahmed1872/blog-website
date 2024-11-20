<script>
    export let title = "Explore the World with Wanderlust";
    export let subtitle = "Discover breathtaking destinations, tips, and travel stories.";
    export let buttonText = "Get Started";

    let isMenuOpen = false;
  </script>
  
  <div class="relative h-screen overflow-hidden">
    <!-- Fixed Background -->
    <div
      class="absolute inset-0 bg-fixed bg-cover bg-center z-0"
      style="background-image: url('/mountain.jpeg');"
    ></div>
  
    <!-- Overlay Content -->
    <div class="relative h-full flex flex-col justify-center items-center text-center z-10 text-white px-4">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{title}</h1>
      <p class="text-base sm:text-lg md:text-xl mb-6">{subtitle}</p>
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg">
        {buttonText}
      </button>
    </div>
  
    <!-- Optional Overlay -->
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
  
  <style>
    :global(html) {
      scroll-behavior: smooth;
    }
  </style>
  