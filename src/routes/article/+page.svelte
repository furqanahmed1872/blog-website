<script>
    export let title = "Explore the World with Wanderlust";
    export let subtitle = "Discover breathtaking destinations, tips, and travel stories.";
    export let buttonText = "Get Started";
  
    let isMenuOpen = false;
  </script>
  
  <!-- Wrapper -->
  <div class="relative bg-slate-100 h-full">
    <!-- Fixed Background -->
    <div
      class="absolute inset-0 bg-cover bg-center z-0"
      style="background-image: url('/mountain.jpeg');"
    ></div>
  
    <!-- Hero Section -->
    <div class=" h-full flex flex-col w-full items-center text-white px-4">
      
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
  
    <div class="bg-white flex flex-col gap-5 w-full items-center p-5 ">
        <!-- First Section -->
        <div class="bg-slate-100 p-4 rounded shadow-lg flex flex-col gap-2">
          <h2 class="text-xl font-bold text-gray-800">Section 1</h2>
          <img src= "/pic1.jpg" alt="" class="relative">
          <p class="text-sm text-gray-600"> <span class="hover:cursor-pointer">Leave a Comment / Africa / By harshadd </span> <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit.Class aptent taciti sociosqu ad litora torquent per conubia nostra. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
            
            Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue.
            
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      
        <!-- Second Section -->
        <div class="bg-white p-4 rounded shadow-md">
          <h2 class="text-xl font-bold text-gray-800">Section 2</h2>
          <p class="text-sm text-gray-600">This is the second section. Include your details here.</p>
        </div>
      
        <!-- Third Section -->
        <div class="bg-white p-4 rounded shadow-md">
          <h2 class="text-xl font-bold text-gray-800">Section 3</h2>
          <p class="text-sm text-gray-600">This is the third section. Add additional info or links here.</p>
        </div>
      
      
  </div>
    
    
   
  
    
  
  
</div>
  
 