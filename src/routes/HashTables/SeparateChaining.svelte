<script lang="ts">
 import { onMount } from "svelte";
 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";

 import FormControl from "../../components/custom/FormControl.svelte";
 import SpecialButtons from "../../components/HashTableControls/SpecialButtons.svelte";

 import Label from "../../components/custom/Inputs/Label.svelte";
 import { generateRandomArray } from "../../lib/hashTableFunctions/hashTable";
 import {
  insertSeparateChaining,
  removeSeparateChaining,
 } from "../../lib/hashTableFunctions/separateChaining";
 import LabelInput from "../../components/custom/Inputs/Label.svelte";
 import InsertionOrderDisplay from "../../components/HashTableControls/InsertionOrderDisplay.svelte";
 let hashingArray: number[][] = [[], [], [], [], [], [], [], [], [], []];
 let insertionOrder: number[] = [];
 let numToInsert: number;
 let numToRemove: number;

 function insert() {
  insertionOrder = [...insertionOrder, numToInsert];
  hashingArray = insertSeparateChaining(hashingArray, numToInsert);
  numToInsert = null;
 }
 function remove() {
  hashingArray = removeSeparateChaining(hashingArray, numToRemove);
  numToRemove = null;
 }
 function clear() {
  insertionOrder = [];
  hashingArray = [[], [], [], [], [], [], [], [], [], []];
 }
 function randomize() {
  clear();
  insertionOrder = generateRandomArray(15);
  for (let i = 0; i < insertionOrder.length; i++) {
   hashingArray = insertSeparateChaining(hashingArray, insertionOrder[i]);
  }
 }
 onMount(() => {
  randomize();
 });
</script>

<Layout dataStructure="HT">
 <Controls title="Separate Chaining">
  <!-- Insert Button -->
  <FormControl>
   <Label>Insert Element</Label>
   <form class="join" on:submit|preventDefault={insert}>
    <input
     type="number"
     class="font-bold input input-sm input-bordered input-primary w-max-w-xs w-28 join-item"
     bind:value={numToInsert}
    />
    <button
     class="btn btn-outline btn-sm btn-primary w-16 join-item w-max-w-xs"
    >
     Insert
    </button>
   </form>
  </FormControl>

  <!-- Delete Button -->
  <FormControl>
   <Label>Delete Element</Label>
   <form class="join" on:submit|preventDefault={remove}>
    <input
     type="number"
     class="font-bold input input-sm input-secondary input-bordered w-max-w-xs w-28 join-item"
     bind:value={numToRemove}
    />
    <button
     class="btn btn-outline btn-sm btn-secondary w-16 join-item w-max-w-xs"
     >Delete</button
    >
   </form>
  </FormControl>

  <FormControl>
   <LabelInput>Misc</LabelInput>
   <div class="join space-x-0.5">
    <SpecialButtons {clear} {randomize} rehash={() => {}} />
   </div>
  </FormControl>
 </Controls>

 <Visualize>
  <!-- <span class="font-bold mt-3 text-sky-300">
   f&#40;{numToInsert ? numToInsert : "k"}&#41; = {numToInsert
    ? numToInsert
    : "k"} % 10
  </span> -->
  <div class="mt-2">
   <InsertionOrderDisplay {insertionOrder} />
  </div>
  <div class="lg:w-1/2 overflow-x-auto">
   <div class="self-start space-y-0.5">
    {#each hashingArray as item, i}
     <div class="flex items-center">
      <div
       class="font-bold text-xl border-2 border-neutral-content w-10 h-10 flex items-center justify-center min-w-10 min-h-10"
      >
       {i}
      </div>
      <div class="flex items-center">
       {#each item as j}
        <span class="font-bold text-xs lg:text-xl px-2">&rarr;</span>
        <div
         class="border-2 border-neutral-content px-2 font-bold py-0.5 w-10 text-center max-w-12 overflow-hidden"
        >
         {j}
        </div>
       {/each}
      </div>
     </div>
    {/each}
   </div>
  </div>
 </Visualize>
</Layout>
