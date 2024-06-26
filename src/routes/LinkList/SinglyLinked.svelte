<script lang="ts">
 import { insertMarker } from "../../lib/stores/singlyLLMarker";
 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";

 import FormControl from "../../components/custom/FormControl.svelte";
 import HiddenLabel from "../../components/custom/Inputs/HiddenLabel.svelte";
 import Label from "../../components/custom/Inputs/Label.svelte";
 import Button from "../../components/custom/Button.svelte";
 import NumberInput from "../../components/custom/Inputs/NumberInput.svelte";
 import FormTrigger from "../../components/custom/layout/FormTrigger.svelte";
 import Join from "../../components/custom/layout/Join.svelte";
 import Toggle from "../../components/custom/Update/Toggle.svelte";

 let list = [1, 2, 3, 4, 5];
 let prevList = [...list];

 let numberToInsert: number;
 let marker: number;
 let insertionType: string;
 let indexToInsert: number;
 let numberToDelete: number;
 let pointerPlayGround: boolean = false;

 function animateInsert() {
  if (!numberToInsert) return;
  // insert at a position in the linked list
  function insertPos() {
   if (marker === indexToInsert) {
    let temp = [...list];
    insertMarker.set(indexToInsert);
    temp.splice(indexToInsert, 0, numberToInsert);
    list = temp;
    clearInterval(interval);
    marker = null;
    numberToInsert = null;
    return;
   }

   if (marker !== null) {
    marker++;
   } else {
    marker = 0;
   }
  }
  //insert to the back of the linkedlist
  function insertBack() {
   if (marker === list.length) {
    list = [...list, numberToInsert];
    insertMarker.set(list.length - 1);
    clearInterval(interval);
    numberToInsert = null;
    marker = null;
    return;
   }
   4;
   if (marker !== null) {
    marker++;
   } else {
    marker = 0;
   }
  }
  // insert to the front of the linkedlist
  function insertFront() {
   insertMarker.set(0);
   list = [numberToInsert, ...list];
   numberToInsert = null;
  }

  let interval: any;
  prevList = [...list];
  if (insertionType === "Insert Front") {
   insertFront();
  } else if (insertionType === "Insert Back") {
   interval = setInterval(insertBack, 250);
  } else if (insertionType === "Insert Position") {
   interval = setInterval(insertPos, 250);
  }
  marker = 0;
 }

 function animateDelete() {
  if (!numberToDelete) return;

  function remove() {
   if (list[marker] === numberToDelete) {
    prevList = [...list];
    let temp = [...list];
    temp.splice(marker, 1);
    list = temp;
    clearInterval(interval);
    numberToDelete = null;
    marker = null;
    return;
   } else if (marker > list.length) {
    clearInterval(interval);
    numberToDelete = null;
    marker = null;
    return;
   }
   if (marker !== null) {
    marker++;
   } else {
    marker = 0;
   }
  }

  const interval = setInterval(remove, 250);
 }

 function undo() {
  let temp = [...list];
  list = [...prevList];
  prevList = temp;
 }

 let nodeMarker: number;
 const unsubscribe = insertMarker.subscribe((value: number) => {
  nodeMarker = value;
 });
</script>

<Layout dataStructure="LL">
 <Controls title="Singly Linked Lists">
  <!-- Place a pointer -->
  <!-- <FormControl>
   <Label>Place Pointer</Label>
   <Button color="info">Place Pointer</Button>
  </FormControl> -->
  <div class="flex flex-col items-center justify-center">
   <!-- <FormControl>
    <label class="cursor-pointer label space-x-1">
     <span class="label-text"
      >Animation Mode:
      <span class="font-bold">
       {pointerPlayGround ? "On" : "Off"}
      </span>
     </span>
     <Toggle bind:checked={pointerPlayGround} color="toggle-info" />
    </label>
   </FormControl> -->
   <div class="flex space-x-2 flex-wrap justify-center">
    <!-- Insert an Item -->
    <FormControl>
     <Label>Animated Insert</Label>
     <FormTrigger onTrigger={animateInsert}>
      <NumberInput bind:value={numberToInsert} color="primary" />
      {#if insertionType === "Insert Position"}
       <NumberInput
        color="primary"
        placeholder="Index"
        bind:value={indexToInsert}
       />
      {/if}
      <Button
       color="primary"
       disabled={insertionType === "Insert Position" && !indexToInsert}
       >Insert</Button
      >
      <select
       class="select select-bordered select-sm max-w-xs w-fit join-item select-primary"
       bind:value={insertionType}
      >
       <option selected>Insert Front</option>
       <option>Insert Back</option>
       <option>Insert Position</option>
      </select>
     </FormTrigger>
    </FormControl>

    <!-- Delete an Item -->
    <FormControl>
     <Label>Animated Delete</Label>
     <FormTrigger onTrigger={animateDelete}>
      <NumberInput bind:value={numberToDelete} color="secondary" />
      <Button color="secondary">Delete</Button>
     </FormTrigger>
    </FormControl>

    <!-- Misc -->
    <FormControl>
     <HiddenLabel />
     <Join classList="space-x-0.5">
      <Button color="warning" on:click={undo}>Undo</Button>
      <Button color="error">Clear</Button>
     </Join>
    </FormControl>
   </div>
  </div>
 </Controls>

 <Visualize>
  <div
   class="flex flex-wrap justify-center font-bold text-lg items-center mt-10 h-fit"
  >
   {#each list as item, index}
    <div class={`flex flex-col items-center justify-center`}>
     {#if index === marker}
      <span class="text-primary"> &darr; </span>
     {:else}
      &nbsp;
     {/if}
     <div class="flex items-center">
      {#if index === 0}
       head:
      {/if}
      <div
       class={`border-2 w-16 h-10 flex items-center justify-center ml-1 ${index === nodeMarker ? "border-primary text-primary" : ""}`}
      >
       <div class={`flex items-center`}>
        {item}
       </div>
      </div>
      {#if index < list.length - 1}
       <span class="tooltip tooltip-bottom cursor-pointer" data-tip="getNext()">
        &rarr;
       </span>
      {/if}
     </div>
    </div>
   {/each}
  </div>
 </Visualize>
</Layout>
