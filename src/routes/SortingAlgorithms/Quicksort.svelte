<script lang="ts">
 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";
 import ArrayDisplay from "../../components/Array/ArrayDisplay.svelte";
 import ArrayElementIndexed from "../../components/Array/ArrayElementIndexed.svelte";

 let unsortedList: number[] = [1, 23, 5, 6, 24];
 let i: number = 0;
 let j: number = 2;
</script>

<Layout dataStructure="SA">
 <Controls></Controls>

 <Visualize>
  <ArrayDisplay>
   {#each unsortedList as number, index}
    <div class="">
     <div class="text-center font-bold">
      {#if index === i}
       i
      {:else if index === j}
       j
      {:else}
       &nbsp;
      {/if}
     </div>
     <ArrayElementIndexed {index}>
      {number}
     </ArrayElementIndexed>
    </div>
   {/each}
  </ArrayDisplay>
 </Visualize>
</Layout>
