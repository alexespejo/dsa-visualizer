<script lang="ts">
 import { onMount } from "svelte";
 //layouts
 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";

 //components
 import FormControl from "../../components/custom/FormControl.svelte";
 import HiddenLabel from "../../components/custom/Inputs/HiddenLabel.svelte";
 import Label from "../../components/custom/Inputs/Label.svelte";
 import Join from "../../components/custom/layout/Join.svelte";
 import Button from "../../components/custom/Button.svelte";
 import Range from "../../components/custom/Update/Range.svelte";
 import Toggle from "../../components/custom/Update/Toggle.svelte";
 import ArrayDisplay from "../../components/Array/ArrayDisplay.svelte";
 import ArrayElementIndexed from "../../components/Array/ArrayElementIndexed.svelte";

 //lib functions
 import { generateRandomArray } from "../../lib/hashTableFunctions/hashTable";

 //state
 let isArrayStyle: boolean = false;
 let animationMode: boolean = false;
 let size: number = 10;
 let unsortedArr = [];
 let historyStack = [];
 let store = {
  unsorted: [],
 };
 let i = 0; //external index
 let j = 0;
 /*
  Startup function that initializes the unsorted array and the history stack for generating the passes
 */
 function onStartUp() {
  unsortedArr = generateRandomArray(size);
  historyStack = [];
  store = {
   unsorted: [...unsortedArr],
  };
  i = 0;
  let pass = [...unsortedArr];
  let i_pass = 0;
  let j_pass = 0;

  while (i_pass < size) {
   j_pass = 0;
   while (j_pass < size - 1 - i_pass) {
    // Exclude already sorted elements
    if (pass[j_pass] > pass[j_pass + 1]) {
     // Compare adjacent elements
     let temp = pass[j_pass];
     pass[j_pass] = pass[j_pass + 1];
     pass[j_pass + 1] = temp;
    }
    ++j_pass;
   }
   historyStack = [...historyStack, [...pass]];
   ++i_pass;
  }
 }

 //controls
 // moves i forward and generates the next pass
 function pass() {
  if (i < size) {
   unsortedArr = historyStack[i];
   i += 1;
   if (i == size) {
    i -= 1;
   }
  }
 }

 // moves i back and generates the previous pass
 function undo() {
  if (i > 0) {
   unsortedArr = historyStack[i];
   i -= 1;
  }
 }

 // resize up or down
 function resize(x: string) {
  if (x === "+") {
   size += 1;
  } else {
   size -= 1;
  }
  onStartUp();
 }
 //animation loop
 let key: number | null; // value to compare
 let animationSpeed: number = 200;
 function animatePass() {
  key = unsortedArr[i];
  j = i;
  function timedLoopWithLimit() {
   if (j < size - 1 - i) {
    // Exclude already sorted elements
    if (unsortedArr[j] > unsortedArr[j + 1]) {
     // Compare adjacent elements
     let temp = unsortedArr[j];
     unsortedArr[j] = unsortedArr[j + 1];
     unsortedArr[j + 1] = temp;
    }
    j += 1;
   } else {
    clearInterval(intervalIdWithLimit);
    i += 1;
    j = 0; // Reset j for the next pass
    if (i >= size - 1) {
     i = size - 1;
    }
   }
  }

  const intervalIdWithLimit = setInterval(timedLoopWithLimit, animationSpeed);
 }

 /*
  on animation start we need to set the i to zero despite whatever pass we're at
  */
 // animates full insertion sort
 function animate() {
  i = 0;
  j = 1;
  let swapped = false; // To track if any elements were swapped in the last iteration
  key = unsortedArr[i];

  function timedLoop() {
   if (i < size - 1) {
    if (j < size - 1 - i) {
     // Exclude already sorted elements
     if (unsortedArr[j] > unsortedArr[j + 1]) {
      // Compare adjacent elements
      let temp = unsortedArr[j];
      unsortedArr[j] = unsortedArr[j + 1];
      unsortedArr[j + 1] = temp;
      swapped = true; // Mark that a swap has occurred
     }
     j += 1;
    } else {
     if (!swapped) {
      // If no elements were swapped, the array is sorted
      clearInterval(intervalId);
      return;
     }
     j = 0; // Reset j to start the next pass
     i += 1;
     swapped = false; // Reset swapped flag for the next pass
    }
   } else {
    clearInterval(intervalId); // End the animation when sorting is complete
   }
  }

  const intervalId = setInterval(timedLoop, animationSpeed);
 }

 onMount(onStartUp);
</script>

<Layout dataStructure="SA">
 <Controls title="Bubble Sort">
  <!-- Animation Mode -->
  <div class="flex flex-col items-center">
   <div class="form-control w-52">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="cursor-pointer label">
     <span class="label-text"
      >Animation Mode:
      <span class="font-bold">
       {animationMode ? "On" : "Off"}
      </span>
     </span>
     <Toggle bind:checked={animationMode} color="toggle-info" />
    </label>
   </div>

   <div class="flex space-x-2 flex-wrap justify-center">
    {#if !animationMode}
     <!-- Passess -->
     <FormControl>
      <HiddenLabel />
      <Join classList="space-x-0.5">
       <Button color="btn-secondary" on:click={undo}>Undo Pass</Button>
       <Button color="btn-primary" on:click={pass}>Next Pass</Button>
      </Join>
     </FormControl>

     <!-- Resize -->
     <FormControl>
      <Label>Resize {size}</Label>
      <Join classList="space-x-0.5">
       <Button
        color="btn-accent"
        on:click={() => {
         resize("+");
        }}
       >
        &uarr;
       </Button>
       <Button
        color="btn-accent"
        on:click={() => {
         resize("-");
        }}>&darr;</Button
       >
      </Join>
     </FormControl>

     <!-- Shuffle Buttons -->
     <FormControl>
      <HiddenLabel />
      <Join classList="space-x-0.5">
       <Button color="btn-warning" on:click={onStartUp}>Randomize</Button>
       <Button
        color="btn-info"
        on:click={() => {
         unsortedArr = unsortedArr.sort(() => Math.random() - 0.5);
         store.unsorted = [...unsortedArr];
         i = 1;
        }}>Shuffle</Button
       >
       <Button
        color="btn-error"
        on:click={() => {
         unsortedArr = [...store.unsorted];
         i = 0;
        }}>Reset</Button
       >
      </Join>
     </FormControl>
    {:else}
     <!-- Animation Controls -->
     <FormControl>
      <Label>Animate</Label>
      <div class="space-x-0.5">
       <div
        class="tooltip tooltip-bottom"
        data-tip="Animates the complete sorting algorithm"
       >
        <Button color="btn-primary" on:click={animate}>Bubble Sort</Button>
       </div>
      </div>
     </FormControl>

     <!-- Animated Passes -->
     <FormControl>
      <HiddenLabel />
      <Join classList="space-x-0.5">
       <div class="tooltip tooltip-top" data-tip="Doesn't animate undo">
        <Button color="btn-amber-outline" on:click={undo}>Undo</Button>
       </div>
       <Button
        color="btn-secondary"
        on:click={() => {
         unsortedArr = [...store.unsorted];
         i = 0;
        }}>Reset</Button
       >
       <div class="tooltip tooltip-top" data-tip="Animates the pass">
        <Button color="btn-sky-outline" on:click={animatePass}>Pass Next</Button
        >
       </div>
      </Join>
     </FormControl>

     <!-- Resize -->
     <FormControl>
      <Label
       >Animation Speed: {animationSpeed / 1000}
       {animationSpeed / 1000 === 1 ? ".0" : ""}s</Label
      >
      <Range
       min={100}
       max={1000}
       bind:value={animationSpeed}
       step={100}
       markings
       color="range-purple"
      />
     </FormControl>

     <!-- Bar/Array Style -->
     <FormControl>
      <HiddenLabel />
      <Join classList="space-x-0.5">
       <Button
        color={isArrayStyle ? "btn-indigo-outline" : "btn-indigo"}
        on:click={() => (isArrayStyle = false)}>Bars</Button
       >
       <Button
        color={!isArrayStyle ? "btn-indigo-outline" : "btn-indigo"}
        on:click={() => (isArrayStyle = true)}>Arrays</Button
       >
      </Join>
     </FormControl>
    {/if}
   </div>
  </div>
 </Controls>

 <Visualize>
  <div class="my-3 font-bold text-primary">
   Original: <span class="tracking-wider">{`[ ${store.unsorted} ]`}</span>
  </div>
  <ArrayDisplay>
   {#each unsortedArr as x, index}
    <div>
     <div class="text-center font-bold">
      {#if index === i}
       i
      {:else if index === j}
       j
      {:else}
       &nbsp;
      {/if}
     </div>
     {#if isArrayStyle}
      <ArrayElementIndexed
       {index}
       classList={index === j && key ? "border-primary text-primary" : ""}
      >
       {x}
      </ArrayElementIndexed>
     {:else}
      <div
       class={`${index === j && key ? "bg-primary" : "bg-neutral-content"} text-base-100 text-xs md:px-3 px-2 text-center font-bold `}
       style={`height: ${(x + 10) * 2}px`}
      >
       {x}
      </div>
     {/if}
    </div>
   {/each}
  </ArrayDisplay>
 </Visualize>
</Layout>
