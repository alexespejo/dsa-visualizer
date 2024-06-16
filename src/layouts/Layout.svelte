<script lang="ts">
 import HashTableNavbar from "../components/HashTableControls/Navbar.svelte";
 import SortingAlgoNavbar from "../components/SortingAlgoControls/Navbar.svelte";
 import TreeNavbar from "../components/Trees/Navbar.svelte";
 import LinkListNavbar from "../components/LinkList/Navbar.svelte";
 export let dataStructure: string;
</script>

{#if dataStructure === "HT"}
 <HashTableNavbar />
{:else if dataStructure === "SA"}
 <SortingAlgoNavbar />
{:else if dataStructure === "TR"}
 <TreeNavbar />
{:else if dataStructure === "LL"}
 <LinkListNavbar />
{/if}
<main class="px-2 2xl:px-64 relative flex-col flex items-center">
 <slot />
 {#if dataStructure === "TR"}
  <button
   class="badge badge-warning font-bold animate-pulse absolute top-1 right-1"
   on:click={() => my_modal_1.showModal()}
  >
   limtations
  </button>
  <dialog id="my_modal_1" class="modal">
   <div class="modal-box">
    <h3 class="font-bold text-lg">Tree Visualizer Limitations</h3>
    <p class="py-4">
     Do to the implecations of the design implementation, all trees are limited
     to <span class="font-bold text-warning">a height of 5</span>
     or <span class="font-bold text-warning">31 nodes</span>.
     <br />
     As a result features such as
     <span class="font-bold italic">
      B-Trees, 2-3 Trees, and Red-Black Trees.
     </span>
     are not featured.
     <br />
     Additionally, you may run into some issues with
     <span class="font-bold italic">AVL trees</span>
     when they grow too tall
     <span class="text-sm italic block">
      We are current working on an alternative solution to this issue
     </span>
    </p>
    <div class="modal-action">
     <form method="dialog">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn">Close</button>
     </form>
    </div>
   </div>
  </dialog>
 {/if}
</main>
