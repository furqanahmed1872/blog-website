<script>
  export let title = "Explore the World with Wanderlust";
  export let subtitle = "Discover breathtaking destinations, tips, and travel stories.";
  export let buttonText = "Get Started";

  let isMenuOpen = false;
</script>

<!-- Wrapper -->
<div class="relative h-screenoverflow-scroll">
  <!-- Fixed Background -->
  <div
    class="absolute inset-0 bg-fixed bg-cover bg-center z-0"
    style="background-image: url('/mountain.jpeg');"
  ></div>

  <!-- Hero Section -->
  <div class="relative h-full flex flex-col justify-center items-center text-center z-10 text-white px-4">
    <!-- Navigation Bar -->
    <nav class="w-full bg-inherit z-10">
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
    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{title}</h1>
    <p class="text-base sm:text-lg md:text-xl mb-6">{subtitle}</p>
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg">
      {buttonText}
    </button>
  </div>

  <!-- Featured Destinations Section -->
  <div class="absolute -bottom-20 mx-36 flex flex-col items-center gap-3 p-5 px-4 bg-white shadow-2xl w-4/5  z-50">
    <p class="text-2xl font-bold text-black">We travel the world, and tell you how it looks!</p>
    <p class="text-md font-normal text-black text-center">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat <br> ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. <br> Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. <br> Nam nec tellus a odio tincidunt auctor a ornare odio.</p>

  </div>
  <div class="bg-white w-full h-40">

  </div>
  <!-- About Section
  
  
  <!-- Blog Section -->


  <!-- Footer -->
  <!-- <footer class="bg-blue-500 text-white py-4">
    <div class="container mx-auto text-center">
      <p>&copy; 2024 Wanderlust. All rights reserved.</p>
    </div>
  </footer> -->
</div>



