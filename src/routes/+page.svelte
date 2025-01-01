<script>
  import ArticleCard from "$lib/article-card.svelte";
  import { onMount } from "svelte";

  export let title = "Explore the World with Wanderlust";
  export let subtitle =
    "Discover breathtaking destinations, tips, and travel stories.";
  export let buttonText = "Get Started";

  let isMenuOpen = false;

  // const articles = [
  //   {
  //     id: 1,
  //     imgUrl:
  //       "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
  //     title: "African Wildlife",
  //     path: "Africa / Leave a Comment",
  //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
  //         tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
  //         non mauris vitae erat consequat auctor`,
  //   },
  //   {
  //     id: 1,
  //     imgUrl:
  //       "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
  //     title: "African Wildlife",
  //     path: "Africa / Leave a Comment",
  //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
  //         tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
  //         non mauris vitae erat consequat auctor`,
  //   },
  //   {
  //     id: 1,
  //     imgUrl:
  //       "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
  //     title: "African Wildlife",
  //     path: "Africa / Leave a Comment",
  //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
  //         tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
  //         non mauris vitae erat consequat auctor`,
  //   },
  //   {
  //     id: 1,
  //     imgUrl:
  //       "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
  //     title: "African Wildlife",
  //     path: "Africa / Leave a Comment",
  //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
  //         tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
  //         non mauris vitae erat consequat auctor`,
  //   },
  //   {
  //     id: 1,
  //     imgUrl:
  //       "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
  //     title: "African Wildlife",
  //     path: "Africa / Leave a Comment",
  //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
  //         tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
  //         non mauris vitae erat consequat auctor`,
  //   },
  //   {
  //     id: 1,
  //     imgUrl:
  //       "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
  //     title: "African Wildlife",
  //     path: "Africa / Leave a Comment",
  //     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
  //         tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed
  //         non mauris vitae erat consequat auctor`,
  //   },
  // ];
 let articles = [];

  // Fetch data when the component mounts
  onMount(async function data() {
    try {
      let res = await fetch("http://localhost:3000/articles");
      if (res.ok) {
        let result = await res.json();
        articles = result; // Store the fetched articles in the `articles` variable
      } else {
        console.error("Failed to fetch articles:", res.statusText);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  });
</script>

<!-- Hero Section -->
<div
  class="h-screen flex flex-col justify-center items-center text-center z-10 text-white px-4 bg-hero-header bg-no-repeat bg-center bg-cover"
>
  <!-- Navigation Bar -->
  <nav class="w-full bg-inherit z-10">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
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
  <button
    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg"
  >
    {buttonText}
  </button>
</div>

<!-- Wrapper -->
<div class="container">
  <!-- Featured Destinations Section -->
  <div class="relative w-full">
    <div class="absolute -top-20 z-50 w-full shadow-2xl">
      <div class="py-5 bg-white text-center">
        <p class="text-2xl font-bold text-black">
          We travel the world, and tell you how it looks!
        </p>
        <p class="text-md font-normal text-black text-center">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat <br /> ipsum, nec
          sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
          cursus a sit amet mauris. Morbi accumsan ipsum velit. <br /> Duis sed
          odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
          ipsum velit. <br /> Nam nec tellus a odio tincidunt auctor a ornare odio.
        </p>
      </div>
    </div>
  </div>

  <div class="mt-40 grid grid-cols-6 gap-6">
    <div class="col-span-4 flex flex-col gap-5 w-full">
      <ArticleCard {...articles[0]} />
      <div class="grid grid-cols-2 gap-5">
        {#each articles as article}
          <ArticleCard {...article} />
        {/each}
      </div>
    </div>
    <div class="flex flex-col col-span-2 gap-6 w-full">
      <div class="p-6 bg-white">
        <input
          type="search"
          id="gsearch"
          name="gsearch"
          placeholder="search"
          class="p-2 w-full border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-blue-300 hover:bg-orange-200"
        />
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
