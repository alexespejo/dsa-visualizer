<script>
 import { onMount } from "svelte";
 import { alexGraph_1 } from "../../lib/graphs/pGraphs";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";
 import Toggle from "../../components/custom/Update/Toggle.svelte";
 import FormControl from "../../components/custom/FormControl.svelte";
 import Label from "../../components/custom/Inputs/Label.svelte";

 //  let graph = Array(15).fill(Array(30).fill(0));
 let graph = alexGraph_1;

 let columnMaker = false;
 let rowMaker = false;
 let destMarker = false;
 let startMaker = false;
 let startPos = {
  x: -1,
  y: -1,
 };

 let markerValues = new Set();
 function getValue() {
  function getRandomIntBetween1And99() {
   return Math.floor(Math.random() * 99) + 1;
  }
  let value = getRandomIntBetween1And99();
  while (markerValues.has(value)) {
   value = getRandomIntBetween1And99();
  }
  markerValues.add(value);
  return value;
 }

 function markPoint(i, j) {
  graph[i] = [...graph[i]]; // create a shallow copy of the row
  if (columnMaker) {
   for (let k = 0; k < graph.length; ++k) {
    graph[k][j] = -1;
   }
  } else if (rowMaker) {
   for (let k = 0; k < graph[i].length; ++k) {
    graph[i][k] = -1;
   }
  } else if (destMarker) {
   graph[i][j] = graph[i][j] === getValue() ? 0 : getValue();
  } else if (startMaker) {
   if (startPos.x > -1) {
    graph[startPos.x][startPos.y] = 0;
   }
   startPos.x = i;
   startPos.y = j;
   graph[startPos.x][startPos.y] =
    graph[startPos.x][startPos.y] === -2 ? 0 : -2;
  } else {
   graph[i][j] = graph[i][j] === -1 ? 0 : -1;
  }
 }

 function clipboard() {
  navigator.clipboard.writeText(JSON.stringify(graph));
 }

 onMount(() => {
  graph[0] = [...graph[0]];
  graph[0].fill(-1);
  graph[graph.length - 1] = [...graph[graph.length - 1]];
  graph[graph.length - 1].fill(-1);
  for (let i = 0; i < graph.length; ++i) {
   graph[i] = [...graph[i]];
   graph[i][0] = -1;
   graph[i][graph[i].length - 1] = -1;
  }
 });
</script>

<Controls title="Graph Maker">
 <FormControl>
  <Label>Row Maker</Label>
  <Toggle
   color="toggle-amber"
   bind:checked={rowMaker}
   on:change={() => {
    destMarker = false;
    columnMaker = false;
    startMaker = false;
   }}
  />
 </FormControl>

 <FormControl>
  <Label>Column Maker</Label>
  <Toggle
   color="toggle-purple"
   bind:checked={columnMaker}
   on:change={() => {
    rowMaker = false;
    destMarker = false;
    startMaker = false;
   }}
  />
 </FormControl>

 <FormControl>
  <Label>Place Marker</Label>
  <Toggle
   color="toggle-teal"
   bind:checked={destMarker}
   on:change={() => {
    rowMaker = false;
    columnMaker = false;
    startMaker = false;
   }}
  />
 </FormControl>

 <FormControl>
  <Label>Place Start</Label>
  <Toggle
   color="toggle-emerald"
   bind:checked={startMaker}
   on:change={() => {
    rowMaker = false;
    columnMaker = false;
    destMarker = false;
   }}
  />
 </FormControl>
</Controls>

<Visualize>
 <div
  class="flex flex-col border-[1px] last:border-r-[1px] last:border-b-[1px] border-blue-800"
  style="height: 75vh; width: 75vw"
 >
  {#each graph as row, i}
   <div class="flex border-inherit" style="height: 30% ">
    {#each row as x, j}
     <button
      class={`text-center border-t-[1px] border-l-[1px] border-inherit text-xs flex items-center justify-center ${x === -1 ? "bg-blue-950" : "bg-blue-100"}`}
      style="width: 30%"
      on:click={() => markPoint(i, j)}
     >
      {#if x > 0}
       <div class="font-bold text-secondary text-xl">
        {x}
       </div>
      {:else if x === -2}
       <div class="bg-primary rounded-full border-2 w-5 h-5"></div>
      {/if}
     </button>
    {/each}
   </div>
  {/each}
 </div>

 <div class="mockup-code">
  <button
   on:click={clipboard}
   class="badge badge-primary absolute top-5 right-5">clipboard</button
  >
  <pre data-prefix="1">
    <code> 
     <span class="text-purple-400">let </span><span class="text-red-400"
     >graph</span
    > =<span class="text-orange-300"> {"["}
    {#each graph as row}
      <span class="text-slate-300 p-0 m-0">
        {`[${row}],`}
      </span>
     {/each} {"]"}
    </span>
   </code>
</pre>
 </div>
</Visualize>
