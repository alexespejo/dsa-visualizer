<script>
 import FunctionVisualizerLayout from "../../layouts/Layout.svelte";
 import FormControl from "../../components/custom/FormControl.svelte";
 import MarkedElements from "../../components/SortingAlgoControls/BucketSortControls/MarkedElements.svelte";
 import {
  generateRandomThreeDigitArray,
  generateRandomStringArray,
 } from "../../lib/sortingAlgo";
 import { onMount } from "svelte";
 import LabelInput from "../../components/custom/Inputs/Label.svelte";

 let listOfBuckets = [];
 let intOrStringArray = false;
 let bucket = [];
 let subBuckets =[]
 let indexOfPass = 0;
 let itemMarked = "";
 

 function createBuckets() {
    indexOfPass = 0;
    bucket = [];
    subBuckets = [];
    if (intOrStringArray) {
    bucket = generateRandomThreeDigitArray();
    } 
    else {
    bucket = generateRandomStringArray();
    }
    subBuckets.push([...bucket]);
    listOfBuckets = subBuckets;
 }

 function updateBuckets() {
    subBuckets = [];
    subBuckets.push([...bucket]);
    if (intOrStringArray) {
        if(indexOfPass >= 1){
                subBuckets.push([...bucket.sort((a, b) => (a % 10) - (b % 10))]);
        }
        if(indexOfPass >= 2){
                subBuckets.push([...bucket.sort((a, b) => (a % 100) - (b % 100))]);
        }    
        if(indexOfPass >= 3){
                subBuckets.push([...bucket].sort());
        }
    } else {
        if(indexOfPass >= 1){
            subBuckets.push([
                ...bucket.sort((a, b) => a.slice(-1).localeCompare(b.slice(-1))),
            ]);
        }
        if(indexOfPass >= 2){
            subBuckets.push([
                ...bucket.sort((a, b) => a.charAt(1).localeCompare(b.charAt(1))),
            ]);
        }
        if(indexOfPass >= 3){
            subBuckets.push([...bucket].sort());
        }
    }
    listOfBuckets = subBuckets;
 }


 function markElement(key) {
  if (itemMarked === key) {
   itemMarked = "";
  } else {
   itemMarked = key;
  }
 }

 onMount(() => {
  createBuckets();
 });
</script>

<FunctionVisualizerLayout dataStructure="SA">
 <div
  class=" p-3 flex flex-col space-y-2 lg:flex-row sm:space-y-0 sm:space-x-2 relative justify-center w-full"
 >
  <div class="lg:absolute flex top-10">
    <FormControl>
        <LabelInput>Passes</LabelInput>
        <div class="join mr-2">
            <button class="btn join-item btn-secondary btn-outline" on:click={() => {
                if (indexOfPass > 0) {
                    indexOfPass--;
                    updateBuckets();
                }
            }}>
                Undo Pass
             </button>
             <button class="btn join-item btn-secondary btn-outline" on:click={() => {
                if (indexOfPass < 3) {
                    indexOfPass++;
                    updateBuckets();
                }
            }}>
                Next Pass
             </button>
        </div>
    </FormControl>
   <FormControl>
    <LabelInput>Randomize</LabelInput>
    <button class="btn btn-success btn-outline mr-2" on:click={() => createBuckets()}
     >Randomize <svg
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
     </svg></button
    >
   </FormControl>
   <FormControl>
    <LabelInput>Insert</LabelInput>
    <div class="join">
     <button
      class={`btn  join-item btn-primary ${!intOrStringArray ? "btn-outline" : ""}`}
      on:click={() => {
       intOrStringArray = true;
       createBuckets()
      }}>Integer</button
     >
     <button
      class={`btn  join-item btn-primary ${intOrStringArray ? "btn-outline" : ""}`}
      on:click={() => {
       intOrStringArray = false;
       createBuckets()
      }}>String</button
     >
    </div>
   </FormControl>
  </div>
  <div class=" flex space-x-5 text-base justify-center items-center h-screen">
   {#each listOfBuckets as subBucket, index}
    <div class="bucket">
     <div class="bucket-block border-base-100">
      {#if index === 0}
       Original
      {:else if index === 1}
       ab<span class=" text-info">c</span>
      {:else if index === 2}
       a<span class=" text-info">b</span>c
      {:else if index === 3}
       <span class=" text-info">a</span>bc
      {/if}
     </div>

     {#each subBucket as item}
      <MarkedElements mark={itemMarked === item} func={() => markElement(item)}>
       {item}
      </MarkedElements>
     {/each}
    </div>
   {/each}
  </div>
 </div>
</FunctionVisualizerLayout>

<style>
 .bucket {
  @apply flex flex-col;
 }
 .bucket-block {
  @apply font-bold p-3 w-20 text-center border-2 flex items-center justify-center;
 }
</style>
