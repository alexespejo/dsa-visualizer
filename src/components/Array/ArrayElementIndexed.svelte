<script lang="ts">
 export let element: number | null;
 export let index: number;
 export let rehash: boolean;
 export let classList: string = "";
</script>

<div
 class={`hash-table-item ${rehash && "animate__animated animate__headShake text-red-300 border-red-300"} ${classList}`}
>
 <div class="px-3 text-base border-b-2 border-inherit text-center">
  {index}
 </div>
 {#if element === null}
  <div class="p-3 text-center">X</div>
 {:else}
  <div class="p-3 text-center">
   {element}
  </div>
 {/if}
</div>
