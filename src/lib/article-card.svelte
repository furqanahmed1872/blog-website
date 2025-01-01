<script>
  let { cover_image, title, published_at, description } = $props();
</script>

<div class="bg-slate-200">
  <img src={cover_image} class="w-full" alt="wanderlast" />
  <div class="p-5">
    <p class="text-2xl text-black font-semibold">
      {title}
    </p>
    <p
      class="text-red-500 text-xl font-bold hover:text-blue-500 cursor-pointer focus:text-yellow-50 visited:text-green-400"
    >
      {published_at}
    </p>
    <p class="text-start">
      {description}
    </p>
  </div>
</div>
