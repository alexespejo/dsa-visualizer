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
 import Label from "../../components/custom/Inputs/Label.svelte";
 import NumberInput from "../../components/custom/Inputs/NumberInput.svelte";
 import InsertionOrderDisplay from "../../components/HashTableControls/InsertionOrderDisplay.svelte";
 import ArrayDisplay from "../../components/Array/ArrayDisplay.svelte";
 import ArrayElementIndexed from "../../components/Array/ArrayElementIndexed.svelte";
 import Button from "../../components/custom/Button.svelte";

 let hashingArray: number[] = [null, null, null, null, null];
 let insertionOrder: number[] = [];
 let numToInsert: number;
 let numToDelete: number;
 let capacity: number = 5;
 let hashFuncA: number;
 let hashFuncB: number;
 function insert() {
  insertionOrder = [...insertionOrder, numToInsert];
  hashingArray = insertQuadratic(hashingArray, numToInsert, capacity);
 }

 function remove() {
  hashingArray = removeQuadratic(hashingArray, numToDelete);
 }

 function randomizeArray() {
  capacity = 10;
  let result = [];
  result.length = capacity;
  result.fill(null);
  insertionOrder = generateRandomArray(capacity);

  for (let i = 0; i < insertionOrder.length; i += 1) {
   result = insertQuadratic(result, insertionOrder[i], capacity);
  }
  hashingArray = result;
  capacity = hashingArray.length;
 }

 function changeCap() {
  if (capacity < 1) {
   capacity = 1;
  } else if (capacity > 50) {
   capacity = 50;
  }
  hashingArray.length = capacity;
  hashingArray.fill(null);
 }
</script>

<Layout dataStructure="HT">
 <Controls title="Quadratic Hashing">
  <FormControl>
   <Label>Capacity</Label>
   <form on:submit|preventDefault={changeCap} class="join">
    <NumberInput
     placeholder="Choose a Capacity"
     bind:value={capacity}
     color="info"
     styles="join-item input-info"
     min={1}
     max={50}
    />
    <Button color="info" styles="btn btn-info btn-outline join-item"
     >Change</Button
    >
   </form>
  </FormControl>

  <FormControl>
   <Label
    >f&#40;k&#41; =
    {hashFuncA !== undefined && hashFuncB !== undefined
     ? `${hashFuncA}k + ${hashFuncB}`
     : "k"}
   </Label>
   <form class="join">
    <div class="w-36 input-warning input flex items-center">
     <input
      type="text"
      placeholder="a"
      class="w-3"
      bind:value={hashFuncA}
     /><span>k +</span>
     <input
      type="text"
      placeholder="b"
      class="w-5 ml-1"
      bind:value={hashFuncB}
     />
    </div>
   </form>
  </FormControl>

  <!-- Insert Button -->
  <FormControl>
   <Label>Insert Element</Label>
   <div class="join">
    <input
     type="number"
     class="font-bold input input-bordered input-primary w-max-w-xs w-28 join-item"
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
   <Label>Delete Element</Label>
   <div class="join">
    <input
     type="number"
     class="font-bold input input-secondary input-bordered w-max-w-xs w-28 join-item"
     bind:value={numToDelete}
    />
    <button
     class="btn btn-outline btn-secondary w-16 join-item w-max-w-xs"
     on:click={() => remove()}>Delete</button
    >
   </div>
  </FormControl>

  <FormControl>
   <Label>Misc</Label>
   <div class="join space-x-0.5">
    <SpecialButtons
     clear={() => {}}
     randomize={() => {
      randomizeArray();
     }}
     rehash={() => {}}
    />
   </div>
  </FormControl>
 </Controls>

 <Visualize>
  <div class="text-base-content font-bold mt-5">
   h&#40;k&#41; = &#40{!numToInsert ? "k" : numToInsert} + j * j&#41; % {capacity}
  </div>
  <InsertionOrderDisplay {insertionOrder} />
  <ArrayDisplay>
   {#each hashingArray as item, i}
    <ArrayElementIndexed index={i}>
     {#if item === null}
      X
     {:else}
      {item}
     {/if}
    </ArrayElementIndexed>
   {/each}
  </ArrayDisplay>
 </Visualize>
</Layout>
