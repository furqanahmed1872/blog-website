<script>
  import ArticleCard from "$lib/article-card.svelte";

  export let title = "Explore the World with Wanderlust";
  export let subtitle =
    "Discover breathtaking destinations, tips, and travel stories.";
  export let buttonText = "Get Started";

  let isMenuOpen = false;

  const articles = [
    {
      id:1,
      imgUrl:'https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg',
      title:"African Wildlife",
      path:"Africa / Leave a Comment",
      description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
          non mauris vitae erat consequat auctor`
    },
    {
      id:1,
      imgUrl:'https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg',
      title:"African Wildlife",
      path:"Africa / Leave a Comment",
      description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
          non mauris vitae erat consequat auctor`
    },
    {
      id:1,
      imgUrl:'https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg',
      title:"African Wildlife",
      path:"Africa / Leave a Comment",
      description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
          non mauris vitae erat consequat auctor`
    },
    {
      id:1,
      imgUrl:'https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg',
      title:"African Wildlife",
      path:"Africa / Leave a Comment",
      description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
          non mauris vitae erat consequat auctor`
    },
    {
      id:1,
      imgUrl:'https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg',
      title:"African Wildlife",
      path:"Africa / Leave a Comment",
      description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
          non mauris vitae erat consequat auctor`
    },
    {
      id:1,
      imgUrl:'https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg',
      title:"African Wildlife",
      path:"Africa / Leave a Comment",
      description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
          non mauris vitae erat consequat auctor`
    },
  ]

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