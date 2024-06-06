<script lang="ts">
 import { beforeUpdate } from "svelte";
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
 let isArrayStyle: boolean = true;
 let animationMode: boolean = true;
 let size: number = 10;
 let unsortedArr = generateRandomArray(size);
 let historyStack = [[...unsortedArr]];
 let store = {
  unsorted: [...unsortedArr],
 };

 //helpers
 let i = 1; //external index
 let j = 1;
 function insertionPass() {
  if (i < size) {
   let key = unsortedArr[i];
   j = i - 1;
   while (j >= 0 && unsortedArr[j] > key) {
    unsortedArr[j + 1] = unsortedArr[j];
    j -= 1;
   }
   unsortedArr[j + 1] = key;
   i += 1;
   historyStack.push([...unsortedArr]);
  }
 }

 //animation loop
 let key: number | null; // value to compare
 let animationSpeed: number = 200;
 function animatePass() {
  key = unsortedArr[i];
  j = i - 1;
  function timedLoopWithLimit() {
   if (i < size) {
    if (j >= 0 && unsortedArr[j] >= key) {
     unsortedArr[j + 1] = unsortedArr[j];
     unsortedArr[j] = key;
     j -= 1;
    } else {
     unsortedArr[j + 1] = key;
     i += 1;
     //  key = -1;
     clearInterval(intervalIdWithLimit);
    }
   }
  }
  const intervalIdWithLimit = setInterval(timedLoopWithLimit, animationSpeed);
 }
 function animate() {
  i = 1;
  key = unsortedArr[i];
  j = i - 1;
  function timedLoop() {
   if (i < size) {
    if (j >= 0 && unsortedArr[j] >= key) {
     unsortedArr[j + 1] = unsortedArr[j];
     unsortedArr[j] = key;
     j -= 1;
    } else {
     unsortedArr[j + 1] = key;
     i += 1;
     key = unsortedArr[i];
     j = i - 1;
    }
   } else {
    clearInterval(intervalId);
   }
  }
  const intervalId = setInterval(timedLoop, animationSpeed);
 }
</script>

<Layout dataStructure="SA">
 <Controls title="Insertion Sort">
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
       <Button color="btn-secondary">Undo Pass</Button>
       <Button color="btn-primary" on:click={insertionPass}>Next Pass</Button>
      </Join>
     </FormControl>

     <!-- Resize -->
     <FormControl>
      <Label>Resize {size}</Label>
      <Join classList="space-x-0.5">
       <Button
        color="btn-accent"
        on:click={() => {
         size += 1;
         unsortedArr = generateRandomArray(size);
         store.unsorted = unsortedArr;
        }}
       >
        &uarr;
       </Button>
       <Button
        color="btn-accent"
        on:click={() => {
         size -= 1;
         unsortedArr = generateRandomArray(size);
         store.unsorted = unsortedArr;
        }}>&darr;</Button
       >
      </Join>
     </FormControl>

     <!-- Shuffle Buttons -->
     <FormControl>
      <HiddenLabel />
      <Join classList="space-x-0.5">
       <Button
        color="btn-warning"
        on:click={() => {
         unsortedArr = generateRandomArray(size);
         store.unsorted = unsortedArr;
         i = 1;
        }}>Randomize</Button
       >
       <Button
        color="btn-info"
        on:click={() => {
         unsortedArr = unsortedArr.sort(() => Math.random() - 0.5);
         store.unsorted = unsortedArr;
         i = 1;
        }}>Shuffle</Button
       >
       <Button
        color="btn-error"
        on:click={() => {
         unsortedArr = [...store.unsorted];
         i = 1;
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
        <Button color="btn-primary" on:click={animate}>Insertion Sort</Button>
       </div>
      </div>
     </FormControl>

     <!-- Animated Passes -->
     <FormControl>
      <HiddenLabel />
      <Join classList="space-x-0.5">
       <div class="tooltip tooltip-top" data-tip="Doesn't animate undo">
        <Button color="btn-amber-outline">Undo</Button>
       </div>
       <Button
        color="btn-secondary"
        on:click={() => {
         unsortedArr = [...store.unsorted];
         i = 1;
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
       >Animation Speed: {animationSpeed / 1000}{animationSpeed / 1000 === 1
        ? ".0"
        : ""}s</Label
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
      {:else}
       &nbsp;
      {/if}
     </div>
     {#if isArrayStyle}
      <ArrayElementIndexed
       {index}
       classList={index === j + 1 && key ? "border-primary text-primary" : ""}
      >
       {x}
      </ArrayElementIndexed>
     {:else}
      <div
       class={`${index === j + 1 && key ? "bg-primary" : "bg-neutral-content"} text-base-100 text-xs md:p-3 p-2 text-center font-bold `}
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
