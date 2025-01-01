<script>
  import ArticleCard from "$lib/article-card.svelte";
  import { onMount } from "svelte";

  onMount(async function data() {
    let res = await fetch("http://localhost:3000/articles");
    let result = await res.json(); // Ensure the response body is parsed
    console.log(result);
  });
</script>
