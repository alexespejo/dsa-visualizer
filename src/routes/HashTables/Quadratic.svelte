<script lang="ts">
 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";
 import SpecialButtons from "../../components/HashTableControls/SpecialButtons.svelte";
 import FormControl from "../../components/custom/FormControl.svelte";
 import { generateRandomArray } from "../../lib/hashTableFunctions/hashTable";
 import {
  insertQuadratic,
  removeQuadratic,
 } from "../../lib/hashTableFunctions/quardaticProbing";
 import LabelInput from "../../components/custom/Inputs/Label.svelte";
 import InsertionOrderDisplay from "../../components/HashTableControls/InsertionOrderDisplay.svelte";
 import ArrayDisplay from "../../components/Array/ArrayDisplay.svelte";
 import ArrayElementIndexed from "../../components/Array/ArrayElementIndexed.svelte";

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
</script>

<Layout dataStructure="HT">
 <Controls title="Quadratic Hashing">
  <FormControl>
   <LabelInput>Capacity</LabelInput>
   <div class="join">
    <input
     type="number"
     placeholder="Choose a Capacity"
     class="font-bold input input-bordered input-info w-max-w-xs w-40 join-item"
     min="1"
     max="50"
     bind:value={capacity}
     on:change={() => changeCap()}
    />
   </div>
  </FormControl>
  <!-- Insert Button -->
  <FormControl>
   <LabelInput>Insert Element</LabelInput>
   <div class="join">
    <input
     type="number"
     class="font-bold input input-bordered input-primary w-max-w-xs w-40 join-item"
     bind:value={numToInsert}
    />
    <button
     class="btn btn-outline btn-primary w-16 join-item w-max-w-xs"
     on:click={() => insert()}>Insert</button
    >
   </div>
  </FormControl>

  <!-- Delete Button -->
  <FormControl>
   <LabelInput>Delete Element</LabelInput>
   <div class="join">
    <input
     type="number"
     class="font-bold input input-secondary input-bordered w-max-w-xs w-40 join-item"
     bind:value={numToDelete}
    />
    <button
     class="btn btn-outline btn-secondary w-16 join-item w-max-w-xs"
     on:click={() => remove()}>Delete</button
    >
   </div>
  </FormControl>

  <FormControl>
   <LabelInput>Misc</LabelInput>
   <div class="join">
    <SpecialButtons clear={() => {}} randomize={() => {}} rehash={() => {}} />
   </div>
  </FormControl>
 </Controls>

 <Visualize>
  <div class="p-3 text-base-content font-bold">
   h&#40;k&#41; = &#40{!numToInsert ? "k" : numToInsert} + j * j&#41; % {capacity}
  </div>
  <InsertionOrderDisplay {insertionOrder} />
  <ArrayDisplay>
   {#each hashingArray as item, i}
    <ArrayElementIndexed index={i}>
     {#if item === null}
      <div class="p-3 text-center">X</div>
     {:else}
      <div class="p-3 text-center">
       {item}
      </div>
     {/if}
    </ArrayElementIndexed>
   {/each}
  </ArrayDisplay>
 </Visualize>
</Layout>
