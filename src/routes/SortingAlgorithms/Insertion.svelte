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
 import ArrayDisplay from "../../components/Array/ArrayDisplay.svelte";
 import ArrayElementIndexed from "../../components/Array/ArrayElementIndexed.svelte";

 //lib functions
 import { generateRandomArray } from "../../lib/hashTableFunctions/hashTable";
 //state
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
</script>

<Layout dataStructure="SA">
 <Controls title="Insertion Sort">
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
   <Label>Size: {size}</Label>
   <Range
    min={1}
    max={50}
    bind:value={size}
    step={1}
    color="range-purple"
    on:change={() => {
     unsortedArr = generateRandomArray(size);
    }}
   />
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

  <!-- Animation Controls -->
  <FormControl>
   <HiddenLabel />
   <Join classList="space-x-0.5">
    <Button color="btn-sky-outline">Animate</Button>
   </Join>
  </FormControl>
 </Controls>

 <Visualize>
  <div class="my-3 font-bold text-primary">
   Original: <span class="tracking-wider">{`[ ${store.unsorted} ]`}</span>
  </div>
  <ArrayDisplay>
   {#each unsortedArr as x, i}
    <ArrayElementIndexed index={i}>
     {x}
    </ArrayElementIndexed>
   {/each}
  </ArrayDisplay>
 </Visualize>
</Layout>
