<script lang="ts">
 import Navbar from "../components/HashTableControls/Navbar.svelte";
 export let title: string;
</script>

<Navbar />
<main class="px-2 py-4">
 <h1 class="title-heading lg:px-24">{title}</h1>
 <slot />
</main>
