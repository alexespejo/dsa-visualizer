<script lang="ts">
 export let index: number;
 export let rehash: boolean = false;
 export let classList: string = "";
 export let flat: boolean = false;
</script>

{#if !flat}
 <div
  class={`hash-table-item ${rehash && "animate__animated animate__headShake text-red-300 border-red-300"} border-neutral-content ${classList}`}
 >
  <div
   class="md:px-3 px-2 md:text-base text-sm border-b-2 border-inherit text-center"
  >
   {index}
  </div>
  <div class="text-center md:p-3 p-2">
   <slot />
  </div>
 </div>
{:else}
 <div
  class="border-[1px] font-bold text-base w-16 md:text-lg md:w-20 text-center"
 >
  <slot />
 </div>
{/if}
