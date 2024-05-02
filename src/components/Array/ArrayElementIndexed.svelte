<script lang="ts">
 export let index: number;
 export let rehash: boolean = false;
 export let classList: string = "";
</script>

<div
 class={`hash-table-item ${rehash && "animate__animated animate__headShake text-red-300 border-red-300"} ${classList}`}
>
 <div class="px-3 text-base border-b-2 border-inherit text-center">
  {index}
 </div>
 <div class="text-center p-3">
  <slot />
 </div>
</div>
