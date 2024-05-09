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
 import TextInput from "../../components/custom/Inputs/TextInput.svelte";

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
 let capacity: number = 10;
 let insertionOrder: number[] = [];
 let stepSize: number = 1;
 let valueInsert: number;
 let numToInsert: number;
 let numToDelete: number;

 let functionType: string = "+";

 let hashFuncA: any;
 let hashFuncB: any;
 let funcValue: number;

 let tempTable: number[] = [];
 let needRehash: boolean = false;

 function insert() {
  insertionOrder = [...insertionOrder, numToInsert];
  valueInsert = numToInsert;
  tempTable = [...hashingArray];
  hashingArray = insertLinear(
   hashingArray,
   numToInsert,
   stepSize === null ? 1 : stepSize,
   capacity
  );
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
  if (capacity < 1) {
   capacity = 1;
  } else if (capacity > 50) {
   capacity = 50;
  }
  hashingArray.length = capacity;
  hashingArray.fill(null);
 }

 function clearTable() {
  hashingArray = hashingArray.map(() => null);
  insertionOrder = [];
 }

 afterUpdate(() => {
  needRehash = arraysAreEqual(hashingArray, tempTable);
  if (
   !(
    hashFuncA === "" ||
    hashFuncB === "" ||
    isNaN(hashFuncA) ||
    isNaN(hashFuncB) ||
    numToInsert === 0 ||
    numToInsert === null
   )
  ) {
   funcValue = parseInt(hashFuncA) * numToInsert + parseInt(hashFuncB);
  } else if (numToInsert !== null && numToInsert !== undefined) {
   funcValue = numToInsert;
  } else {
   funcValue = undefined;
  }
 });
</script>

<Layout dataStructure="HT">
 <Controls title="Linear Probing">
  <FormControl>
   <Label>Capacity</Label>
   <form on:submit|preventDefault={changeCap} class="join">
    <NumberInput
     placeholder="Choose a Capacity"
     bind:value={capacity}
     on:change={changeCap}
     color="info"
     styles="join-item input-info"
     min={1}
     max={50}
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
     placeholder="Stepsize"
     color="accent"
     styles="input-accent"
     bind:value={stepSize}
    />
   </form>
  </FormControl>

  <!-- f(k) hash function -->
  <FormControl>
   <Label>f&#40;k&#41;</Label>
   <div class="join">
    <div class="w-28 input-warning input flex items-center join-item">
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
       bind:value={hashFuncB}
      />
     {/if}
    </div>
    <div class="dropdown dropdown-end btn btn-warning btn-outline join-item">
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
   <div class="join space-x-0.5">
    <SpecialButtons
     clear={clearTable}
     randomize={randomizeArray}
     rehash={() => {}}
    />
   </div>
  </FormControl>
 </Controls>

 <Visualize>
  <div class="text-base-content font-bold mt-5 flex flex-col">
   <span class="text-pink-300">
    f&#40;{numToInsert ? numToInsert : "k"}&#41; =
    {#if !isNaN(hashFuncA) && !isNaN(hashFuncB) && functionType === "+" && hashFuncB !== "" && hashFuncA !== ""}
     {`${hashFuncA}${numToInsert ? numToInsert : "k"} + ${hashFuncB}`}
    {:else if !isNaN(hashFuncB) && functionType === "%"}
     {`${numToInsert ? numToInsert : "k"} % ${hashFuncB}`}
    {:else}
     k
    {/if}
    {funcValue !== undefined && !isNaN(funcValue) ? `= ${funcValue}` : ""}
   </span>

   <span class="text-sky-300">
    h&#40;{numToInsert ? numToInsert : "k"}&#41; = &#40;
    {!funcValue ? "f(k)" : funcValue} + j
    {stepSize < 2 || !stepSize ? "" : `* ${stepSize}`}
    &#41; % {capacity}
   </span>
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
      X
     {:else}
      {item}
     {/if}
    </ArrayElementIndexed>
   {/each}
  </ArrayDisplay>
 </Visualize>
</Layout>
