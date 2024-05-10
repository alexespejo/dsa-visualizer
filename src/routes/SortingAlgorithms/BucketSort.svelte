<script lang="ts">
    import { onMount } from "svelte";
    import Controls from "../../components/custom/layout/Controls.svelte";
    import Visualize from "../../components/custom/layout/Visualize.svelte";
    import FunctionVisualizerLayout from "../../layouts/Layout.svelte";
    import { generateRandomFractions } from "../../lib/sortingAlgo";
    import FormControl from "../../components/custom/FormControl.svelte";
    import LabelInput from "../../components/custom/Inputs/Label.svelte";
    import Label from "../../components/custom/Inputs/Label.svelte";
    import InsertionOrderDisplay from "../../components/HashTableControls/InsertionOrderDisplay.svelte";
   
    let arr: number[][] = [[], [], [], [], [], [], [], [], [], []];
    let insertionOrder: number[] = [];
    let insertValue: number = 0;
    let deleteValue: number = 0;
   
    function createBuckets() {
     let res: number[][] = [[], [], [], [], [], [], [], [], [], []];
     insertionOrder = generateRandomFractions(15);
     let index = 0;
     for (let i = 0; i < insertionOrder.length; i += 1) {
      index = Math.trunc(insertionOrder[i] * 10);
      res[index] = [...res[index], insertionOrder[i]];
      res[index].sort();
     }
     arr = res;
    }
   
    let arrCopy: number[][];
   
    function updateInsertionOrder() {
     insertionOrder = arr.flat().sort();
    }
   
    function insertValueIntoBuckets() {
     if (insertValue >= 0 && insertValue <= 1) {
      const bucketIndex = Math.trunc(insertValue * 10);
      arr[bucketIndex].push(insertValue);
      arr[bucketIndex].sort();
      updateInsertionOrder();
      arr = [...arr];
      insertValue = 0;
     }
    }
   
    function deleteValueFromBuckets() {
     if (deleteValue >= 0 && deleteValue <= 1) {
      const bucketIndex = Math.trunc(deleteValue * 10);
      const valueIndex = arr[bucketIndex].indexOf(deleteValue);
      if (valueIndex !== -1) {
       arr[bucketIndex].splice(valueIndex, 1);
       updateInsertionOrder();
       arr = [...arr];
      }
      deleteValue = 0;
     }
    }
   
    function resetArray() {
        arr = JSON.parse(JSON.stringify(arrCopy));
        updateInsertionOrder();
    }

    function clearArray() {
        arr = [[], [], [], [], [], [], [], [], [], []];
        updateInsertionOrder();
    }

    onMount(() => {
     createBuckets();
     arrCopy = JSON.parse(JSON.stringify(arr));
    });
    
   </script>

<FunctionVisualizerLayout dataStructure="SA">
 <Controls title="Bucket Sort">
  <FormControl>
   <Label>Insert</Label>
   <div class="join">
    <input
     type="number"
     bind:value={insertValue}
     class="font-bold input input-bordered input-primary w-max-w-xs w-28 join-item btn-sm"
     placeholder="Enter a number..."
    />
    <button
     class="btn btn-outline btn-primary w-16 join-item w-max-w-xs btn-sm"
     on:click={insertValueIntoBuckets}>Insert</button
    >
   </div>
  </FormControl>
  <FormControl>
   <Label>Delete</Label>
   <div class="join">
    <input
     type="number"
     bind:value={deleteValue}
     class="font-bold input input-bordered input-secondary w-max-w-xs w-28 join-item btn-sm"
     placeholder="Enter a number..."
    />
    <button
     class="btn btn-outline btn-secondary w-16 join-item w-max-w-xs btn-sm"
     on:click={deleteValueFromBuckets}>Delete</button
    >
   </div>
  </FormControl>
  <FormControl>
   <Label>Misc</Label>
   <div class="join space-x-0.5">
    <button
     class="btn btn-success btn-outline join-item btn-sm"
     on:click={createBuckets}
     >Randomize
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-shuffle"
      viewBox="0 0 16 16"
     >
      <path
       fill-rule="evenodd"
       d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"
      />
      <path
       d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192"
      />
     </svg>
    </button>
</FormControl>
    <FormControl>
        <LabelInput>Special</LabelInput>
        <div class="join">
        <button class="btn btn-outline btn-warning join-item btn-sm"
        on:click={resetArray}
        >
        Reset
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
          </svg>
        </button
        >
        <button class="btn btn-outline btn-error join-item btn-sm"
        on:click={clearArray}
        >
         Clear
         <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-eraser"
          viewBox="0 0 16 16"
         >
          <path
           d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"
          />
         </svg></button
        >
        </div>
    </FormControl>
 </Controls>

 <Visualize>
  <div class="mt-3">
   <InsertionOrderDisplay {insertionOrder} />
  </div>
  <div class="sm:w-1/2 space-y-0.5">
   {#each arr as i, index}
    <div class="flex flex-start">
     <div
      class="border-2 border-neutral-content font-bold text-base lg:text-xl flex items-center justify-center w-9 h-10 flex-start"
     >
      {index}
     </div>
     <div class="flex items-center">
      {#each i as j}
       <span class="font-bold text-xs lg:text-xl px-2">&rarr;</span>
       <div class="border-2 border-neutral-content px-2 font-bold py-0.5">
        {j}
       </div>
      {/each}
     </div>
    </div>
   {/each}
  </div>
 </Visualize>
</FunctionVisualizerLayout>

<style>
 input[type="number"]::-webkit-inner-spin-button,
 input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
 }

 input[type="number"] {
  -moz-appearance: textfield;
 }

 .ml-4 {
  margin-left: 1rem;
 }
 ::placeholder {
  font-size: 0.75rem;
 }
</style>
