<script lang="ts">
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
 let store = {
  unsorted: unsortedArr,
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
  const intervalIdWithLimit = setInterval(timedLoopWithLimit, 400);
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
  <FormControl classList="absolute top-0 right-0 md:right-40">
   <Label>Animation Mode: {animationMode ? "On" : "Off"}</Label>
   <Toggle bind:checked={animationMode} color="toggle-info" />
  </FormControl>

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
       size -= 1;
       unsortedArr = generateRandomArray(size);
       store.unsorted = unsortedArr;
      }}
     >
      &uarr;
     </Button>
     <Button
      color="btn-accent"
      on:click={() => {
       size += 1;
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
     <Button color="btn-warning">Randomize</Button>
     <Button color="btn-info">Shuffle</Button>
     <Button color="btn-error">Reset</Button>
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
     <div class="tooltip tooltip-top" data-tip="Animates the pass">
      <Button color="btn-sky-outline" on:click={animatePass}>Pass Next</Button>
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
    <Label>Style</Label>
    <Join classList="space-x-0.5">
     <Button color={isArrayStyle ? "btn-indigo-outline" : "btn-indigo"}
      >Bars</Button
     >
     <Button color={!isArrayStyle ? "btn-indigo-outline" : "btn-indigo"}
      >Arrays</Button
     >
    </Join>
   </FormControl>
  {/if}
 </Controls>

 <Visualize>
  <div class="my-3 font-bold text-primary">
   Original: <span class="tracking-wider">{`[ ${store.unsorted} ]`}</span>
  </div>
  <ArrayDisplay>
   {#each unsortedArr as x, index}
    <div class="">
     <div class="text-center font-bold">
      {#if index === i}
       i
      {:else}
       &nbsp;
      {/if}
     </div>
     <ArrayElementIndexed
      {index}
      classList={index === j + 1 && key ? "border-primary text-primary" : ""}
     >
      {x}
     </ArrayElementIndexed>
    </div>
   {/each}
  </ArrayDisplay>
 </Visualize>
</Layout>
