<script lang="ts">
 export let insertionOrder: number[] | null = [];
</script>

<div class="flex font-bold space-x-1">
 <span>Insertion Order: </span>
 <ol class="flex space-x-1">
  {"["}
  {#each insertionOrder as item, index}
   {#if item !== null}
    <li class="">
     {item}{index === insertionOrder.length - 1 ? " " : ", "}
    </li>
   {/if}
  {/each}
  {"]"}
 </ol>
</div>
