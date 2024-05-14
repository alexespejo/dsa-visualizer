<script lang="ts">
 export let value: number;
 export let min: number = 0;
 export let max: number = 100;
 export let step: number = 25;

 let intervals: string[] = Array(Math.floor((max - min) / step)).fill("");
</script>

<input
 type="range"
 bind:value
 {min}
 {max}
 class="range range-xs range-primary w-36"
 {step}
/>
<div class="w-36 flex justify-between text-xs px-2">
 {#each intervals as _}
  <span class="text-right" style={`width: ${(max - min) / step}%`}>|</span>
 {/each}
</div>
