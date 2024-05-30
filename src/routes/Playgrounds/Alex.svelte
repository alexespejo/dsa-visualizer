<script>
 import { onMount } from "svelte";
 import { alexGraph_1 } from "../../lib/graphs/pGraphs";
 import Toggle from "../../components/custom/Update/Toggle.svelte";
 import FormControl from "../../components/custom/FormControl.svelte";
 import Label from "../../components/custom/Inputs/Label.svelte";

 //  let graph = Array(15).fill(Array(30).fill(0));
 let graph = alexGraph_1;

 let columnMaker = false;
 let rowMaker = false;
 let destMarker = false;

 function markPoint(i, j) {
  if (columnMaker) {
   graph[i] = [...graph[i]]; // create a shallow copy of the row
   for (let k = 0; k < graph.length; ++k) {
    graph[k][j] = 1;
   }
  } else if (rowMaker) {
   graph[i] = [...graph[i]]; // create a shallow copy of the row
   for (let k = 0; k < graph[i].length; ++k) {
    graph[i][k] = 1;
   }
  } else {
   graph[i] = [...graph[i]]; // create a shallow copy of the row
   graph[i][j] = graph[i][j] === 1 ? 0 : 1;
  }
 }
 onMount(() => {
  graph[0] = [...graph[0]];
  graph[0].fill(1);
  graph[graph.length - 1] = [...graph[graph.length - 1]];
  graph[graph.length - 1].fill(1);
  for (let i = 0; i < graph.length; ++i) {
   graph[i] = [...graph[i]];
   graph[i][0] = 1;
   graph[i][graph[i].length - 1] = 1;
  }
 });
</script>

<div class="flex flex-col p-2">
 <FormControl>
  <Label>Row Maker</Label>
 </FormControl>
 <Toggle color="toggle-amber" bind:checked={rowMaker} />

 <FormControl>
  <Label>Column Maker</Label>
  <Toggle color="toggle-purple" bind:checked={columnMaker} />
 </FormControl>

 <FormControl>
  <Label>Place Marker</Label>
  <Toggle color="toggle-teal" bind:checked={destMarker} />
 </FormControl>
</div>
<div
 class="flex flex-col border-[1px] last:border-r-[1px] last:border-b-[1px]"
 style="height: 75vh; width: 75vw"
>
 {#each graph as row, i}
  <div class="flex" style="height: 30% ">
   {#each row as _, j}
    <button
     class={`text-center border-t-[1px] border-l-[1px] text-xs ${graph[i][j] === 1 ? "bg-blue-300" : "bg-neutral"}`}
     style="width: 30%"
     on:click={() => markPoint(i, j)}
    >
    </button>
   {/each}
  </div>
 {/each}
</div>

{"["}
{#each graph as row}
 <div>
  {"["}
  {row}
  {"],"}
 </div>
{/each}
{"]"}
