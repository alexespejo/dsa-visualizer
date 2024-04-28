<script lang="ts">
 import FunctionVisualizerLayout from "../../layouts/FunctionVisualizerLayout.svelte";
 import SpecialButtons from "../../components/HashTableControls/SpecialButtons.svelte";
 import FormControl from "../../components/HashTableControls/FormControl.svelte";
 import { generateRandomArray } from "../../lib/hashTableFunctions/hashTable";
 import {
  insertQuadratic,
  removeQuadratic,
 } from "../../lib/hashTableFunctions/quardaticProbing";

 let hashingArray: number[] = [null, null, null, null, null];
 let insertionOrder: number[] = [];
 let numToInsert: number;
 let numToDelete: number;
 let capacity: number = 5;

 function insert() {
  insertionOrder = [...insertionOrder, numToInsert];
  hashingArray = insertQuadratic(hashingArray, numToInsert, capacity);
 }

 function remove() {
  hashingArray = removeQuadratic(hashingArray, numToDelete, capacity);
 }

 function randomizeArray() {
  capacity = 10;
  let result = [];
  insertionOrder = generateRandomArray(capacity);

  for (let i = 0; i < insertionOrder.length; i += 1) {
   result = insertQuadratic(result, insertionOrder[i], capacity);
  }
  hashingArray = result;
  capacity = hashingArray.length;
 }

 function changeCap() {
  if (capacity < 0) {
   throw new Error("New size must be a non-negative integer");
  }

  if (capacity < hashingArray.length) {
   hashingArray.length = capacity; // Truncate the hashingArrayay if capacity is smaller
  } else {
   hashingArray.length = capacity; // Extend the hashingArrayay if capacity is larger
   for (let i = hashingArray.length; i < capacity; i++) {
    hashingArray[i] = 0; // You can initialize the new elements to any value you want
   }
  }
 }
</script>

<FunctionVisualizerLayout title="Quadratic Hashing" dataStructure="HT">
 <div class="hash-table-controller">
  <FormControl label="Capacity">
   <input
    type="number"
    placeholder="Choose a Capacity"
    class="font-bold input input-bordered input-info w-max-w-xs w-40 join-item"
    min="1"
    max="50"
    bind:value={capacity}
    on:change={() => changeCap()}
   /></FormControl
  >
  <!-- Insert Button -->
  <FormControl label="Insert Element">
   <input
    type="number"
    class="font-bold input input-bordered input-primary w-max-w-xs w-40 join-item"
    bind:value={numToInsert}
   />
   <button
    class="btn btn-outline btn-primary w-16 join-item w-max-w-xs"
    on:click={() => insert()}>Insert</button
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
   <SpecialButtons clear={() => {}} randomize={() => {}} rehash={() => {}} />
  </FormControl>
 </div>

 <div class="flex items-center flex-col w-full p-2">
  <div class="p-3 text-base-content font-bold">
   h&#40;k&#41; = &#40{!numToInsert ? "k" : numToInsert} + j * j&#41; % {capacity}
  </div>
  <div class="hash-table-container">
   {#each hashingArray as item, i}
    <div class="hash-table-item">
     <div class="px-3 text-base border-b-2 border-neutral-content text-center">
      {i}
     </div>
     {#if item === null}
      <div class="p-3 text-center">0</div>
     {:else}
      <div class="p-3 text-center">{item}</div>
     {/if}
    </div>
   {/each}
  </div>
 </div>
</FunctionVisualizerLayout>
