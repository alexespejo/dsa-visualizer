<script lang="ts">
 import Navbar from "../components/HashTableControls/Navbar.svelte";
 export let title: string;
</script>

<Navbar />
<main class="p-4 sm:px-32 lg:px-40">
 <h1 class="title-heading">{title}</h1>
 <slot />
</main>
