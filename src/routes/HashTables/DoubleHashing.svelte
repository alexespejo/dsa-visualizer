<script lang="ts">
 import Layout from "../../layouts/Layout.svelte";
 import FormControl from "../../components/custom/FormControl.svelte";
 import Label from "../../components/custom/Inputs/Label.svelte";
 import NumberInput from "../../components/custom/Inputs/NumberInput.svelte";
 import Button from "../../components/custom/Button.svelte";
 import SpecialButtons from "../../components/HashTableControls/SpecialButtons.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";
 import InsertionOrderDisplay from "../../components/HashTableControls/InsertionOrderDisplay.svelte";
 import ArrayDisplay from "../../components/Array/ArrayDisplay.svelte";
 import ArrayElementIndexed from "../../components/Array/ArrayElementIndexed.svelte";

 import { generateRandomArray } from "../../lib/hashTableFunctions/hashTable";
 import {
  insertDoubleHashing,
  removeDoubleHashing,
 } from "../../lib/hashTableFunctions/doubleHashing";

 let hashingArray: number[] = [null, null, null, null, null];
 let insertionOrder: number[] = [];
 let secondHashFunctionK: number = 0;
 let numToInsert: number;
 let numToDelete: number;
 let capacity: number = 5;

 function insert() {
  insertionOrder = [...insertionOrder, numToInsert];
  hashingArray = insertDoubleHashing(
   hashingArray,
   numToInsert,
   secondHashFunctionK,
   capacity
  );
 }

 function remove() {
  hashingArray = removeDoubleHashing(
   hashingArray,
   numToDelete,
   secondHashFunctionK,
   capacity
  );
 }

 function randomizeArray() {
  capacity = 10;
  let result = [];
  insertionOrder = generateRandomArray(capacity);

  for (let i = 0; i < insertionOrder.length; i += 1) {
   result = insertDoubleHashing(
    result,
    insertionOrder[i],
    secondHashFunctionK,
    capacity
   );
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
    hashingArray = [...hashingArray, null]; // You can initialize the new elements to any value you want
   }
  }
 }
</script>

<Layout dataStructure="HT">
 <Controls title="Double Hashing">
  <!-- Capacity input -->
  <FormControl>
   <Label>Capacity</Label>
   <NumberInput
    color="info"
    placeholder="Choose a Capacity"
    styles="w-40 join-item"
    bind:value={capacity}
    on:change={() => changeCap()}
   />
  </FormControl>

  <!-- Second hash function -->
  <FormControl>
   <Label>
    {`h'(k) = ${secondHashFunctionK && secondHashFunctionK !== 0 ? secondHashFunctionK : "q"} - (k % ${secondHashFunctionK && secondHashFunctionK !== 0 ? secondHashFunctionK : "q"})`}</Label
   >
   <NumberInput
    color="accent"
    placeholder="Enter Value for q"
    styles=" w-40 join-item"
    bind:value={secondHashFunctionK}
   /></FormControl
  >
  <!-- Insert Button -->
  <FormControl>
   <Label>Insert Element</Label>
   <div class="join">
    <NumberInput
     color="primary"
     styles=" w-40 join-item"
     bind:value={numToInsert}
    />
    <Button
     color="primary"
     styles="btn btn-outline btn-primary w-16 join-item w-max-w-xs"
     on:click={() => insert()}
    >
     Insert
    </Button>
   </div>
  </FormControl>

  <!-- Delete Button -->
  <FormControl>
   <Label>Delete Element</Label>
   <div class="join">
    <NumberInput
     color="secondary"
     styles=" w-max-w-xs w-40 join-item"
     bind:value={numToDelete}
    />
    <Button
     color="secondary"
     styles="btn btn-outline btn-secondary w-16 join-item w-max-w-xs"
     on:click={() => remove()}>Delete</Button
    >
   </div>
  </FormControl>

  <FormControl>
   <Label>Misc</Label>
   <div class="join">
    <SpecialButtons clear={() => {}} randomize={() => {}} rehash={() => {}} />
   </div>
  </FormControl>
 </Controls>

 <Visualize>
  <div class="p-3 text-base-content font-bold">
   h&#40;k&#41; = &#40{!numToInsert ? "k" : numToInsert} + j * h'&#40;k&#41;&#41;
   % {capacity}
  </div>
  <InsertionOrderDisplay {insertionOrder} />
  <ArrayDisplay>
   {#each hashingArray as item, i}
    <ArrayElementIndexed index={i}>
     {#if item === null}
      <div class="p-3 text-center">X</div>
     {:else}
      <div class="p-3 text-center">{item}</div>
     {/if}
    </ArrayElementIndexed>
   {/each}
  </ArrayDisplay>
 </Visualize>
</Layout>
