<script lang="ts">
 import Layout from "../../layouts/Layout.svelte";
 import FormControl from "../../components/custom/FormControl.svelte";
 import HiddenLabel from "../../components/custom/Inputs/HiddenLabel.svelte";
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
 let secondHashConstQ: number = 0;
 let numToInsert: number;
 let numToDelete: number;
 let capacity: number = 10;
 let hashFuncA: any;
 let hashFuncB: any;
 let hashFuncC: any;
 let funcValue: number;
 let functionType: string = "k";

 function insert() {
  insertionOrder = [...insertionOrder, numToInsert];
  hashingArray = insertDoubleHashing(
   hashingArray,
   numToInsert,
   secondHashConstQ,
   capacity,
   functionType,
   parseInt(hashFuncA),
   parseInt(hashFuncB),
   parseInt(hashFuncC)
  );
 }

 function remove() {
  hashingArray = removeDoubleHashing(hashingArray, numToDelete);
 }

 function randomize() {
  capacity = 10;
  let result = [];
  insertionOrder = generateRandomArray(capacity);

  for (let i = 0; i < insertionOrder.length; i += 1) {
   result = insertDoubleHashing(
    result,
    insertionOrder[i],
    secondHashConstQ,
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

 function clear() {
  hashingArray = hashingArray.map(() => null);
  insertionOrder = [];
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

  <FormControl>
   <Label>f&#40;k&#41;</Label>
   <div class="join">
    <div class="w-28 input-warning input input-sm flex items-center join-item">
     {#if functionType === "k"}
      k
     {:else if functionType === "+"}
      <input type="text" placeholder="a" class="w-3" bind:value={hashFuncA} />
      <span class="flex"> k + </span>
      <input
       type="text"
       placeholder="b"
       class="w-5 ml-1"
       bind:value={hashFuncB}
      />
     {:else if functionType === "%"}
      <span> k % </span>
      <input
       type="text"
       placeholder="b"
       class="w-5 ml-1"
       bind:value={hashFuncC}
      />
     {/if}
    </div>
    <div
     class="dropdown dropdown-end btn btn-sm btn-warning btn-outline join-item"
    >
     <div
      tabindex="0"
      role="button"
      class=" w-full h-full flex flex-col items-center justify-center"
     >
      <div class="flex">
       {"f(k)"}
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-caret-down-fill"
        viewBox="0 0 16 16"
       >
        <path
         d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
        />
       </svg>
      </div>
     </div>
     <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
     <ul
      tabindex="0"
      class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-28 text-warning border-[1px] border-warning join"
     >
      <button
       class={`${functionType !== "%" ? "btn-outline" : ""} btn-sm`}
       on:click={() => {
        functionType = "%";
       }}
      >
       {"k % c"}
      </button>
      <button
       class={`${functionType !== "+" ? "btn-outline" : ""} btn-sm`}
       on:click={() => {
        functionType = "+";
       }}
      >
       {"ak + b"}
      </button>

      <button
       class={`${functionType !== "k" ? "btn-outline" : ""} btn-sm`}
       on:click={() => {
        functionType = "k";
       }}
      >
       k
      </button>
     </ul>
    </div>
   </div>
  </FormControl>

  <!-- Second hash function -->
  <FormControl>
   <Label>
    {`h'(k) = ${secondHashConstQ && secondHashConstQ !== 0 ? secondHashConstQ : "q"} - (k % ${secondHashConstQ && secondHashConstQ !== 0 ? secondHashConstQ : "q"})`}</Label
   >
   <NumberInput
    color="accent"
    placeholder="Enter Value for q"
    styles=" w-36 join-item input-accent"
    bind:value={secondHashConstQ}
   /></FormControl
  >
  <!-- Insert Button -->
  <FormControl>
   <HiddenLabel />
   <!-- <Label>Insert Element</Label> -->
   <div class="join">
    <NumberInput
     color="primary"
     styles=" w-28 join-item"
     bind:value={numToInsert}
    />
    <Button
     color="primary"
     styles="btn btn-outline btn-primary w-16 join-item w-max-w-xs"
     on:click={insert}
    >
     Insert
    </Button>
   </div>
  </FormControl>

  <!-- Delete Button -->
  <FormControl>
   <HiddenLabel />
   <!-- <Label>Delete Element</Label> -->
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
   <HiddenLabel />
   <!-- <Label>Misc</Label> -->
   <div class="join space-x-0.5">
    <SpecialButtons
     {clear}
     {randomize}
     randomDisable={secondHashConstQ === 0}
    />
   </div>
  </FormControl>
 </Controls>

 <Visualize>
  <div class="text-base-content font-bold mt-5 flex flex-col">
   <span class="text-accent">
    {`h'(k) = ${secondHashConstQ && secondHashConstQ !== 0 ? secondHashConstQ : "q"} - (k % ${secondHashConstQ && secondHashConstQ !== 0 ? secondHashConstQ : "q"})`}
   </span>
   <span class="text-warning">
    f&#40;{numToInsert ? numToInsert : "k"}&#41; =
    {#if !isNaN(hashFuncA) && !isNaN(hashFuncB) && functionType === "+" && hashFuncB !== "" && hashFuncA !== ""}
     {`${hashFuncA}${numToInsert ? numToInsert : "k"} + ${hashFuncB}`}
    {:else if !isNaN(hashFuncC) && functionType === "%"}
     {`${numToInsert ? numToInsert : "k"} % ${hashFuncC}`}
    {:else}
     k
    {/if}
    {funcValue !== undefined && !isNaN(funcValue) ? `= ${funcValue}` : ""}
   </span>
   <span class="text-sky-300">
    h&#40;k&#41; = &#40{!numToInsert ? "f(k)" : numToInsert} + j * h'&#40;k&#41;&#41;
    % {capacity}
   </span>
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
