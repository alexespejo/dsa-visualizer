<script lang="ts">
 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";

 import FormControl from "../../components/custom/FormControl.svelte";
 import SpecialButtons from "../../components/HashTableControls/SpecialButtons.svelte";
 import Label from "../../components/custom/Inputs/Label.svelte";
 import {
  insertSeparateChaining,
  removeSeparateChaining,
 } from "../../lib/hashTableFunctions/separateChaining";
 import LabelInput from "../../components/custom/Inputs/Label.svelte";
 let hashingArray: number[][] = [[], [], [], [], [], [], [], [], [], []];
 let numToInsert: number;
 let numToRemove: number;

 function insert() {
  hashingArray = insertSeparateChaining(hashingArray, numToInsert);
 }
 function remove() {
  hashingArray = removeSeparateChaining(hashingArray, numToRemove);
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
     bind:value={numToRemove}
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
  {hashingArray}
  <div class="lg:w-1/2">
   <div class="space-y-1 p-5 self-start">
    {#each hashingArray as item, i}
     <div class="flex items-center">
      <div
       class="font-bold text-xl border-2 border-neutral-content w-10 h-10 flex items-center justify-center"
      >
       {i}
      </div>
      <div class="flex items-center">
       {#each item as j}
        <span class="font-bold text-xs lg:text-xl px-2">&rarr;</span>
        <div class="border-2 border-neutral-content px-2 font-bold py-0.5">
         {j}
        </div>
       {/each}
      </div>
     </div>
    {/each}
   </div>
  </div>
 </Visualize>
</Layout>
