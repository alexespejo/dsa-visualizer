<script lang="ts">
 export let value: number = null;
 export let min: number = 0;
 export let max: number = 100;
 export let step: number = 25;
 export let color: string = "";
 export let markings: boolean = false;
 let intervals: string[] = Array(Math.floor((max - min) / step)).fill("");
</script>

<input
 type="range"
 bind:value
 {min}
 {max}
 class={`range range-xs w-36 ${color}`}
 {step}
/>
{#if markings}
 <div class="w-36 flex justify-between text-xs px-2">
  {#each intervals as _}
   <span class="text-right" style={`width: ${(max - min) / step}%`}>|</span>
  {/each}
 </div>
{/if}

<style>
 .range-sky {
  --range-shdw: #7fd4fc;
 }
 .range-emerald {
  --range-shdw: #6ee7b7;
 }
 .range-teal {
  --range-shdw: #5eead4;
 }
 .range-purple {
  --range-shdw: #d8b4fe;
 }
 .range-indigo {
  --range-shdw: #a5b4fc;
 }
 .range-amber {
  --range-shdw: #fcd34d;
 }
</style>
