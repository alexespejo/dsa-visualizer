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

 let hashingArray: number[] = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
 ];
 let insertionOrder: number[] = [];
 let secondHashFunctionK: number = 0;
 let numToInsert: number;
 let numToDelete: number;
 let capacity: number = 10;
 let hashFuncA: number;
 let hashFuncB: number;

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
 <Controls title="Double Hashing">
  <!-- Capacity input -->
  <FormControl>
   <Label>Capacity</Label>
   <NumberInput
    placeholder="Choose a Capacity"
    bind:value={capacity}
    color="info"
    styles="join-item"
    on:change={changeCap}
    min={1}
    max={50}
   />
  </FormControl>

  <!-- First hash function -->
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

  <!-- Second hash function -->
  <FormControl>
   <Label>
    {`h'(k) = ${secondHashFunctionK && secondHashFunctionK !== 0 ? secondHashFunctionK : "q"} - (k % ${secondHashFunctionK && secondHashFunctionK !== 0 ? secondHashFunctionK : "q"})`}</Label
   >
   <NumberInput
    color="accent"
    placeholder="Enter Value for q"
    styles=" w-36 join-item input-accent"
    bind:value={secondHashFunctionK}
   /></FormControl
  >
  <!-- Insert Button -->
  <FormControl>
   <Label>Insert Element</Label>
   <div class="join">
    <NumberInput
     color="primary"
     styles=" w-28 join-item"
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
     styles=" w-max-w-xs w-28 join-item"
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
   <div class="join space-x-0.5">
    <SpecialButtons clear={() => {}} randomize={() => {}} rehash={() => {}} />
   </div>
  </FormControl>
 </Controls>

 <Visualize>
  <div class="text-base-content font-bold mt-5">
   h&#40;k&#41; = &#40{!numToInsert ? "k" : numToInsert} + j * h'&#40;k&#41;&#41;
   % {capacity}
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
