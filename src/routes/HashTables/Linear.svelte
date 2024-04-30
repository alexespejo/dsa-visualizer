<script lang="ts">
 import { afterUpdate } from "svelte";

 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";

 import InsertionOrderDisplay from "../../components/HashTableControls/InsertionOrderDisplay.svelte";
 import ArrayDisplay from "../../components/Array/ArrayDisplay.svelte";
 import ArrayElementIndexed from "../../components/Array/ArrayElementIndexed.svelte";

 import Label from "../../components/custom/Inputs/Label.svelte";
 import NumberInput from "../../components/custom/Inputs/NumberInput.svelte";
 import FormControl from "../../components/custom/FormControl.svelte";
 import SpecialButtons from "../../components/HashTableControls/SpecialButtons.svelte";
 import Button from "../../components/custom/Button.svelte";

 import {
  generateRandomArray,
  arraysAreEqual,
 } from "../../lib/hashTableFunctions/hashTable";

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

 let tempTable: number[] = [];
 let needRehash: boolean = false;

 function insert() {
  insertionOrder = [...insertionOrder, numToInsert];
  valueInsert = numToInsert;
  tempTable = [...hashingArray];
  hashingArray = insertLinear(hashingArray, numToInsert, stepSize, capacity);
  numToInsert = undefined;
 }

 function remove() {
  hashingArray = removeLinear(hashingArray, numToDelete);
  numToDelete = undefined;
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

 afterUpdate(() => {
  needRehash = arraysAreEqual(hashingArray, tempTable);
 });
</script>

<Layout dataStructure="HT">
 <Controls title="Linear Probing">
  <FormControl>
   <Label>Capacity</Label>
   <form on:submit|preventDefault={changeCap}>
    <NumberInput
     placeholder="Choose a Capacity"
     bind:value={capacity}
     on:change={changeCap}
     color="info"
    />
   </form>
  </FormControl>

  <FormControl>
   <Label
    >Stepsize
    <div class="tooltip" data-tip="Step size of 1 indicates no stepsize">
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
   </Label>
   <form on:submit|preventDefault={changeCap}>
    <NumberInput
     placeholder="Choose a Stepsize"
     color="accent"
     bind:value={stepSize}
    />
   </form>
  </FormControl>

  <!-- Insert Button -->
  <FormControl>
   <Label>Insert Element</Label>
   <form on:submit|preventDefault={insert} class="join">
    <NumberInput color="primary" styles="join-item" bind:value={numToInsert} />
    <Button
     color="primary"
     styles="btn btn-outline btn-primary w-16 join-item w-max-w-xs"
    >
     Insert
    </Button>
   </form>
  </FormControl>

  <!-- Delete Button -->
  <FormControl>
   <Label>Delete Element</Label>
   <form on:submit|preventDefault={remove} class="join">
    <NumberInput
     color="secondary"
     styles="join-item"
     bind:value={numToDelete}
    />
    <Button
     color="secondary"
     styles="btn btn-outline  w-16 join-item w-max-w-xs"
    >
     Delete
    </Button>
   </form>
  </FormControl>

  <FormControl>
   <Label>Misc</Label>
   <div class="join">
    <SpecialButtons
     clear={clearTable}
     randomize={randomizeArray}
     rehash={() => {}}
    />
   </div>
  </FormControl>
 </Controls>

 <Visualize>
  <div class="text-base-content font-bold mt-5">
   h&#40;k&#41; = &#40{!numToInsert ? "k" : numToInsert} + j {stepSize === 0 ||
   !stepSize
    ? ""
    : `* ${stepSize}`}&#41; % {capacity}
  </div>

  <InsertionOrderDisplay {insertionOrder} />
  <ArrayDisplay>
   {#each hashingArray as item, i}
    <ArrayElementIndexed
     index={i}
     rehash={needRehash}
     classList={item === valueInsert && !needRehash
      ? "border-success text-success "
      : "border-neutral-content"}
    >
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
