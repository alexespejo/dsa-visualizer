<script lang="ts">
 import { afterUpdate, beforeUpdate } from "svelte";
 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";

 import FormControl from "../../components/custom/FormControl.svelte";
 import SpecialButtons from "../../components/HashTableControls/SpecialButtons.svelte";
 import Label from "../../components/custom/Inputs/Label.svelte";
 import { generateRandomArray } from "../../lib/hashTableFunctions/hashTable";
 import {
  insertLinear,
  removeLinear,
 } from "../../lib/hashTableFunctions/linearProbing";
 import LabelInput from "../../components/custom/Inputs/Label.svelte";
 import ArrayDisplay from "../../components/Array/ArrayDisplay.svelte";
 import ArrayElementIndexed from "../../components/Array/ArrayElementIndexed.svelte";
 let hashingArray: number[][] = [[], [], [], [], [], [], [], [], [], []];
 let stepSize: number = 0;
 let numToInsert: number;
 let capacity: number = 5;

 function insert() {
  //   hashingArray = insertLinear(hashingArray, numToInsert, stepSize, capacity);
 }
 function remove() {
  //   hashingArray = removeLinear(hashingArray, numToInsert);
 }
</script>

<Layout dataStructure="HT">
 <Controls title="Separate Chaining">
  <!-- Insert Button -->
  <FormControl>
   <Label>Insert Element</Label>
   <div class="join">
    <input
     type="number"
     class="font-bold input input-bordered input-primary w-max-w-xs w-40 join-item"
     bind:value={numToInsert}
    />
    <button
     class="btn btn-outline btn-primary w-16 join-item w-max-w-xs"
     on:click={() => {
      insert();
     }}>Insert</button
    >
   </div>
  </FormControl>

  <!-- Delete Button -->
  <FormControl>
   <Label>Delete ELement</Label>
   <div class="join">
    <input
     type="number"
     class="font-bold input input-secondary input-bordered w-max-w-xs w-40 join-item"
    />
    <button
     class="btn btn-outline btn-secondary w-16 join-item w-max-w-xs"
     on:click={() => remove()}>Delete</button
    >
   </div>
  </FormControl>

  <FormControl>
   <LabelInput>Misc</LabelInput>
   <div class="join">
    <SpecialButtons clear={() => {}} randomize={() => {}} rehash={() => {}} />
   </div>
  </FormControl>
 </Controls>
 <Visualize>
  <div class="lg:w-1/2">
   <div class="space-y-1 p-5 self-start">
    {#each hashingArray as item, i}
     <div
      class="font-bold text-xl border-2 border-neutral-content w-10 h-10 flex items-center justify-center"
     >
      {i}
     </div>
    {/each}
   </div>
  </div>
 </Visualize>
</Layout>
