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
  
  <div class=" w-full relative h-full">
    <div class="h-full absolute -top-20 flex flex-col items-center gap-10 w-full">
      <div class="p-5 px-4 bg-white shadow-2xl flex flex-col items-center w-4/5">
        <p class="text-2xl font-bold text-black ">We travel the world, and tell you how it looks!</p>
      <p class="text-md font-normal text-black text-center">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat <br> ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. <br> Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. <br> Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
      </div>
      
    <div class="bg-inherit grid grid-cols-3 gap-5 w-4/5">
      <div class=" col-span-2 flex flex-col gap-5 w-full h-40">
      <div class="bg-slate-200">
        <img src="https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg" class="w-full" alt="wanderlast">
        <p class="text-2xl text-black font-semibold">African Wildlife</p>
        <p class="text-red-500 text-xl font-bold hover:text-blue-500 cursor-pointer focus:text-yellow-50 visited:text-green-400 ">Africa / Leave a Comment</p>
        <p class="text-start ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor </p>
            
      </div>
      <div class="grid grid-cols-2 gap-5 ">
        <div class="bg-slate-200">
          <img src="https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww" class="w-full" alt="wanderlast">
         <div class="p-5">
          <p class="text-2xl text-black font-semibold">A day on the mountains</p>  
          <p class="text-red-500 text-xl font-bold hover:text-blue-500 cursor-pointer focus:text-yellow-50 visited:text-green-400">Asia / Leave a Comment</p>
          <p  class="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor A day on the mountainsRead More »</p>                                                                                                                                                                                                           
  
         </div>
          
        </div>
  
        <div class="bg-slate-200">
          <img src="https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww" class="w-full" alt="wanderlast">
         <div class="p-5">
          <p class="text-2xl text-black font-semibold">A day on the mountains</p>  
          <p class="text-red-500 text-xl font-bold hover:text-blue-500 cursor-pointer focus:text-yellow-50 visited:text-green-400">Asia / Leave a Comment</p>
          <p  class="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor A day on the mountainsRead More »</p>                                                                                                                                                                                                           
  
         </div>
          
        </div>
  
        <div class="bg-slate-200">
          <img src="https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww" class="w-full" alt="wanderlast">
         <div class="p-5">
          <p class="text-2xl text-black font-semibold">A day on the mountains</p>  
          <p class="text-red-500 text-xl font-bold hover:text-blue-500 cursor-pointer focus:text-yellow-50 visited:text-green-400">Asia / Leave a Comment</p>
          <p  class="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor A day on the mountainsRead More »</p>                                                                                                                                                                                                           
  
         </div>
          
        </div>
  
        <div class="bg-slate-200">
          <img src="https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww" class="w-full" alt="wanderlast">
         <div class="p-5">
          <p class="text-2xl text-black font-semibold">A day on the mountains</p>  
          <p class="text-red-500 text-xl font-bold hover:text-blue-500 cursor-pointer focus:text-yellow-50 visited:text-green-400">Asia / Leave a Comment</p>
          <p  class="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor A day on the mountainsRead More »</p>                                                                                                                                                                                                           
  
         </div>
          
        </div>
  
        <div class="bg-slate-200">
          <img src="https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww" class="w-full" alt="wanderlast">
         <div class="p-5">
          <p class="text-2xl text-black font-semibold">A day on the mountains</p>  
          <p class="text-red-500 text-xl font-bold hover:text-blue-500 cursor-pointer focus:text-yellow-50 visited:text-green-400">Asia / Leave a Comment</p>
          <p  class="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor A day on the mountainsRead More »</p>                                                                                                                                                                                                           
  
         </div>
          
        </div>
        
      </div>
  
     </div>
      <div class= "flex flex-col col-span-1 gap-6 w-full h-full ">
        <div class="p-6 bg-white">
          
            
            <input type="search" id="gsearch" name="gsearch" placeholder="search" class="p-2 w-full border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-blue-300 hover:bg-orange-200" >
            
        </div>
        <div class="p-6 bg-white">
          <p>Recent Photos</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div class="p-6 bg-white">
          <p>Categories</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div class="p-6 bg-white">
          <p>Archives</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
  
      </div>
  
  
    </div>
  
    </div>
  </div>
  <!-- About Section
   <!-- Blog Section -->

  


  <!-- Footer -->
</div>




