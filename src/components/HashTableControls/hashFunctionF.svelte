<script lang="ts">
 import FormControl from "../custom/FormControl.svelte";
 import Label from "../custom/Inputs/Label.svelte";
 import Button from "../custom/Button.svelte";
 export let hashFuncA: any;
 export let hashFuncB: any;
 export let funcValue: number;
 export let functionType: string = "k";
</script>

<!-- f(k) hash function -->
<FormControl>
 <Label>
  f&#40;k&#41; = {!isNaN(hashFuncA) &&
  !isNaN(hashFuncB) &&
  hashFuncB !== "" &&
  hashFuncA !== ""
   ? `${hashFuncA}k + ${hashFuncB}`
   : "k"}
 </Label>
 <div class="join">
  <div class="w-28 input-warning input flex items-center join-item">
   {#if functionType === "k"}
    k
   {:else if functionType === "+"}
    <input type="text" placeholder="a" class="w-3" bind:value={hashFuncA} />
    <span> k + </span>
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
  <Button
   styles="join-item btn-outline"
   color="warning"
   on:click={() => {
    functionType = "+";
   }}>+</Button
  >
  <Button
   styles="join-item btn-outline"
   color="warning"
   on:click={() => {
    functionType = "%";
   }}>%</Button
  >
  <Button
   styles="join-item btn-outline"
   color="warning"
   on:click={() => {
    functionType = "k";
   }}>k</Button
  >
 </div>
</FormControl>
