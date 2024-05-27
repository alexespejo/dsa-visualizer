<script>
 import { onMount } from "svelte";
 import Toggle from "../../components/custom/Update/Toggle.svelte";
 import FormControl from "../../components/custom/FormControl.svelte";
 import Label from "../../components/custom/Inputs/Label.svelte";

 let graph = Array(15).fill(Array(24).fill(0));

 let columnMaker = false;
 let rowMaker = false;

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
</div>
<div
 class="flex flex-col last:border-r-2 last:border-b-2"
 style="height: 75vh; width: 75vw"
>
 {#each graph as row, i}
  <div class="flex" style="height: 24% ">
   {#each row as _, j}
    <button
     class={`text-center border-t-2 border-l-2 text-xs ${graph[i][j] === 1 ? "bg-primary" : "bg-neutral"}`}
     style="width: 24%"
     on:click={() => markPoint(i, j)}
    >
    </button>
   {/each}
  </div>
 {/each}
</div>
<!-- <script>

 import Input from "../../components/custom/Update/Input.svelte";
 import Button from "../../components/custom/Update/Button.svelte";
 import FormTrigger from "../../components/custom/layout/FormTrigger.svelte";
 import Join from "../../components/custom/layout/Join.svelte";
 import FormControl from "../../components/custom/FormControl.svelte";
 import Label from "../../components/custom/Inputs/Label.svelte";
 import HiddenLabel from "../../components/custom/Inputs/HiddenLabel.svelte";
 import Range from "../../components/custom/Update/Range.svelte";
 import Toggle from "../../components/custom/Update/Toggle.svelte";

 let value = "";
 let rangeValue = 25;
 let toggleValue = true;
</script>

<FormControl>
 <Label>New Colors</Label>
 <Join classList="space-x-0.5">
  <Button color="btn-amber" label="amber" />
  <Button color="btn-sky" label="sky" />
  <Button color="btn-purple" label="purple" />
  <Button color="btn-teal" label="teal" />
  <Button color="btn-indigo" label="indigo" />
  <Button color="btn-emerald" label="emerald" />
 </Join>
</FormControl>

<div class="flex space-x-2">
 <FormControl>
  <Label>Amber Input</Label>
  <Join>
   <Input placeholder="type..." bind:value color="input-amber" />
   <Button label="Amber" color="btn-amber-outline" />
  </Join>
 </FormControl>

 <FormControl>
  <HiddenLabel />
  <Join>
   <Input placeholder="hidden label..." bind:value color="input-sky" />
   <Button label="Sky" color="btn-sky-outline" />
  </Join>
 </FormControl>
</div>

<FormControl>
 <Label>Form Trigger {"press ENTER to trigger the function"}</Label>
 <FormTrigger onTrigger={() => alert("when you press Enter something happens")}>
  <Input placeholder="type..." bind:value color="input-emerald" />
  <Button label="Emerald" color="btn-emerald-outline" />
 </FormTrigger>
</FormControl>

<FormControl>
 <HiddenLabel />
 <Join classList="space-x-0.5">
  <Button label="Indigo" color="btn-indigo-outline" />
  <Button label="Purple" color="btn-purple-outline" />
  <Button label="Teal" color="btn-teal-outline" />
 </Join>
</FormControl>

<FormControl>
 <Label>Range Input {rangeValue}</Label>
 <div class="space-y-2 join join-vertical">
  <Range
   bind:value={rangeValue}
   step={10}
   min={10}
   max={90}
   color="range-sky"
  />
  <Range
   bind:value={rangeValue}
   step={10}
   min={10}
   max={90}
   color="range-emerald"
  />
  <Range
   bind:value={rangeValue}
   step={10}
   min={10}
   max={90}
   color="range-amber"
  />
 </div>
</FormControl>

<FormControl>
 <Label>Range With Tick Marks</Label>
 <Range step={10} color="range-purple" markings={true} />
</FormControl>

<FormControl>
 <Label>Toggle</Label>
 <div>
  <Toggle bind:checked={toggleValue} color="toggle-amber" />
  <Toggle bind:checked={toggleValue} color="toggle-sky" />
  <Toggle bind:checked={toggleValue} color="toggle-emerald" />
  <Toggle bind:checked={toggleValue} color="toggle-purple" />
  <Toggle bind:checked={toggleValue} color="toggle-indigo" />
  <Toggle bind:checked={toggleValue} color="toggle-teal" />
 </div>
</FormControl> -->
