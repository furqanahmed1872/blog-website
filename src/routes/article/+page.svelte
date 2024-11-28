<script>
  import ArticleCard from "$lib/article-card.svelte";

  export let title = "Explore the World with Wanderlust";
  export let subtitle =
    "Discover breathtaking destinations, tips, and travel stories.";
   let buttonText1 = "Previous page";
   let buttonText2 = "Next page";
   let buttonText = "POST COMMENT";

  let isMenuOpen = false;

 

</script>


  <!-- Hero Section -->
  <div
    class="h-screen flex flex-col justify-center items-center text-center z-10 text-white px-4 bg-hero-header bg-no-repeat bg-center bg-cover"
  >
    <!-- Navigation Bar -->
    <nav class="w-full bg-inherit z-10">
      <div
        class="container mx-auto px-4 py-2 flex justify-between items-center"
      >
        <a href="/" class="text-xl font-bold text-blue-500">Wanderlust</a>
        <ul class="hidden sm:flex space-x-6">
          <li>
            <a href="#destinations" class="hover:text-blue-500">Destinations</a>
          </li>
          <li><a href="#about" class="hover:text-blue-500">About</a></li>
          <li><a href="#blog" class="hover:text-blue-500">Blog</a></li>
        </ul>
        <button
          class="sm:hidden text-blue-500 focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          on:click={() => (isMenuOpen = !isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>

    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{title}</h1>
    <p class="text-base sm:text-lg md:text-xl mb-6">{subtitle}</p>
   
  </div>

<!-- Wrapper -->
<div class="container">
  <!-- Featured Destinations Section -->
  <div class=" flex flex-col gap-5 w-full items-center p-5 ">
    <!-- First Section -->
    <div class="bg-white p-4 rounded shadow-lg flex flex-col gap-2">
      <p class="text-sm text-gray-600"> <span class="hover:cursor-pointer">Leave a Comment / Africa / By harshadd </span> <br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit.Class aptent taciti sociosqu ad litora torquent per conubia nostra. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
        
        Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue.
        
        Proin gravida nibh vel velit auctor aliquet.
      </p>
      <img src= "/pic1.jpg" alt="" class="relative">
        
        <p>
        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>
  
    <!-- Second Section -->
    <div class="bg-white p-4 rounded shadow-md">
      <h2 class="text-xl font-bold text-gray-800">About The Author</h2>
      <h3 class= "font-bold text-gray-800 hover:cursor-pointer" >harshadd</h3>
      <p class="text-sm text-gray-600">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio..</p>
    </div>
    <section class="flex flex-row justify-between w-full">
      <button class="flex flex-row ">
        <img src="/arrow-left.svg" alt="">
        {buttonText1}

      </button>
      <button class="flex flex-row ">
        
        {buttonText2}
        <img src="/arrow-right.svg" alt="">
      </button>
    </section>
  
    <!-- Third Section -->
    <div class="bg-white p-8 flex flex-col gap-3 w-full rounded shadow-md">
      <h2 class="text-xl font-bold text-gray-800">Leave a Comment</h2>
      <p class="text-sm text-gray-600">Your email address will not be published. Required fields are marked *</p>
      <textarea
      placeholder="Type here"
      
      name="text area"
      
      class="p-2 w-full h-40 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-blue-300 hover:bg-orange-200"
    />
    <div class="flex flex-row gap-4">

      <input
      type="search"
      id="gsearch"
      name="gsearch"
      placeholder="Name*"
      class="p-2 w-full border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-blue-300 hover:bg-orange-200"
    />
    <input
    type="search"
    id="gsearch"
    name="gsearch"
    placeholder="Email*"
    class="p-2 w-full border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-blue-300 hover:bg-orange-200"
  />
  <input
  type="search"
  id="gsearch"
  name="gsearch"
  placeholder="Website"
  class="p-2 w-full border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-blue-300 hover:bg-orange-200"
  />
    </div>
    <button class="bg-slate-300 hover:bg-black text-white font-bold py-2 sm:py-3 px-4 sm:px-6  shadow-lg w-fit self-start">{buttonText}</button>
    </div>
  
  
</div>
  

</div>
