<script lang="ts">
 import { afterUpdate } from "svelte";
 import FunctionVisualizerLayout from "../../layouts/FunctionVisualizerLayout.svelte";
 import FormControl from "../../components/HashTableControls/FormControl.svelte";
 import SpecialButtons from "../../components/HashTableControls/SpecialButtons.svelte";
 import { generateRandomArray } from "../../lib/hashTableFunctions/hashTable";
 import {
  insertLinear,
  removeLinear,
 } from "../../lib/hashTableFunctions/linearProbing";

 let hashingArray: number[] = [null, null, null, null, null];
 let insertionOrder: number[] = [];
 let stepSize: number = 1;
 let valueInsert: number;
 let numToInsert: number;
 let numToDelete: number;
 let capacity: number = 5;
 let needRehash: boolean = false;

 function insert() {
  let tempTable = hashingArray;
  insertionOrder = [...insertionOrder, numToInsert];
  valueInsert = numToInsert;
  hashingArray = insertLinear(hashingArray, numToInsert, stepSize, capacity);
  needRehash = tempTable === hashingArray;
 }

 function remove() {
  hashingArray = removeLinear(hashingArray, numToDelete);
 }

 function randomizeArray() {
  capacity = 10;
  let result = [];
  result.length = capacity;
  result.fill(null);
  insertionOrder = generateRandomArray(capacity);

  for (let i = 0; i < insertionOrder.length; i += 1) {
   result = insertLinear(result, insertionOrder[i], stepSize, capacity);
  }
  hashingArray = result;
  capacity = hashingArray.length;
 }

 function changeCap() {
  if (capacity < 0) {
   throw new Error("New size must be a non-negative integer");
  } else if (capacity > 50) {
   throw new Error("New size must be less than 50");
  }

  if (capacity < hashingArray.length) {
   hashingArray.length = capacity; // Truncate the hashingArrayay if capacity is smaller
  } else {
   // Extend the hashingArrayay if capacity is larger
   hashingArray = [...hashingArray, null];
  }
 }

 function clearTable() {
  hashingArray = hashingArray.map(() => null);
  insertionOrder = [];
 }
 afterUpdate(() => {});
</script>

<FunctionVisualizerLayout title="Linear Hashing">
 {needRehash}
 <div class="hash-table-controller">
  <FormControl label="Capacity">
   <form on:submit|preventDefault={changeCap}>
    <input
     type="number"
     placeholder="Choose a Capacity"
     class="font-bold input input-bordered input-info w-max-w-xs w-40 join-item"
     min="1"
     max="50"
     bind:value={capacity}
     on:change={changeCap}
    />
   </form>
  </FormControl>

  <label class="form-control flex max-w-xs font-bold">
   <div class="label">
    <span class="label-text flex items-center justify-center"
     >Stepsize
     <div class="tooltip" data-tip="Step size of 0 indicates no stepsize">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       class="ml-1 stroke-neutral-content shrink-0 w-5 h-5"
       ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
       ></path></svg
      >
     </div>
     <div></div></span
    >
   </div>
   <form on:submit|preventDefault={changeCap}>
    <input
     type="number"
     placeholder="Choose a Stepsize"
     class="font-bold input input-bordered input-accent w-max-w-xs w-40 join-item"
     bind:value={stepSize}
    />
   </form>
  </label>

  <!-- Insert Button -->
  <FormControl label="Insert Element">
   <input
    type="number"
    class="font-bold input input-bordered input-primary w-max-w-xs w-40 join-item"
    bind:value={numToInsert}
   />
   <button
    class="btn btn-outline btn-primary w-16 join-item w-max-w-xs"
    on:click={() => {
     insert();
    }}>Insert</button
   >
  </FormControl>
  <!-- Delete Button -->
  <FormControl label="Delete Element">
   <input
    type="number"
    class="font-bold input input-secondary input-bordered w-max-w-xs w-40 join-item"
    bind:value={numToDelete}
   />
   <button
    class="btn btn-outline btn-secondary w-16 join-item w-max-w-xs"
    on:click={() => remove()}>Delete</button
   >
  </FormControl>

  <FormControl label="Misc">
   <SpecialButtons
    clear={clearTable}
    randomize={randomizeArray}
    rehash={() => {}}
   />
  </FormControl>
 </div>

 <div class="flex items-center justify-center flex-col w-full">
  <div class="p-3 text-base-content font-bold">
   h&#40;k&#41; = &#40{!numToInsert ? "k" : numToInsert} + j {stepSize === 0 ||
   !stepSize
    ? ""
    : `* ${stepSize}`}&#41; % {capacity}
  </div>

  <div class="flex font-bold space-x-2 my-2">
   <span>Insertion Order:</span>
   {#each insertionOrder as item}
    <div class="">{item},</div>
   {/each}
  </div>
  <div class="hash-table-container">
   {#each hashingArray as item, i}
    <div
     class={`hash-table-item ${item === valueInsert && numToInsert !== undefined ? "border-success text-success" : "border-neutral-content"}`}
    >
     <div class="px-3 text-base border-b-2 border-inherit text-center">
      {i}
     </div>
     {#if item === null}
      <div class="p-3 text-center">0</div>
     {:else}
      <div class="p-3 text-center">
       {item}
      </div>
     {/if}
    </div>
   {/each}
  </div>
 </div>
</FunctionVisualizerLayout>
