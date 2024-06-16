<script lang="ts">
 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";

 import FormControl from "../../components/custom/FormControl.svelte";
 import HiddenLabel from "../../components/custom/Inputs/HiddenLabel.svelte";
 import Label from "../../components/custom/Inputs/Label.svelte";
 import Button from "../../components/custom/Button.svelte";
 import NumberInput from "../../components/custom/Inputs/NumberInput.svelte";
 import Join from "../../components/custom/layout/Join.svelte";

 let list = [1, 2, 3, 4, 5];

 let numberToInsert: number;
</script>

<Layout dataStructure="LL">
 <Controls title="Singly Linked Lists">
  <!-- Place a pointer -->
  <FormControl>
   <Label>Place Pointer</Label>
   <Button color="info">Place Pointer</Button>
  </FormControl>

  <!-- Insert an Item -->
  <FormControl>
   <Label>Insert an Item</Label>
   <Join>
    <NumberInput bind:value={numberToInsert} color="primary" />
    <Button color="primary">Insert</Button>
   </Join>
  </FormControl>
 </Controls>

 <Visualize>
  <div class="flex font-bold text-lg items-center mt-10">
   {#each list as item, index}
    <div class={`${index === 0 ? "tooltip tooltip-open" : ""}`} data-tip="head">
     <div class="border-2 w-10 h-10 flex items-center justify-center ml-1">
      <div class={`flex items-center`}>
       {item}
      </div>
     </div>
    </div>
    {#if index < list.length - 1}
     &rarr;
    {/if}
   {/each}
  </div>
 </Visualize>
</Layout>
