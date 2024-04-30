<script lang="ts">
 import HashTableNavbar from "../components/HashTableControls/Navbar.svelte";
 import SortingAlgoNavbar from "../components/SortingAlgoControls/Navbar.svelte";
 export let title: string;
 export let dataStructure: string;
</script>

{#if dataStructure === "HT"}
 <HashTableNavbar />
{:else if dataStructure === "SA"}
 <SortingAlgoNavbar />
{/if}
<main class="px-2 py-4 2xl:px-64 relative">
 <!-- Your content here -->
 <h1 class="title-heading xl:px-9 3xl:px-24">{title}</h1>
 <slot />
</main>
