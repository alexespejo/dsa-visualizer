<script lang="ts">
 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";

 let list = [1, 2, 3, 4, 5];
</script>

<Layout dataStructure="LL">
 <Controls></Controls>

 <Visualize>
  <div class="flex font-bold text-lg items-center">
   {#each list as item, index}
    <div class="flex items-center">
     <div class="border-2 w-10 h-10 flex items-center justify-center ml-1">
      {item}
     </div>
     {#if index < list.length - 1}
      &rarr;
     {/if}
    </div>
   {/each}
  </div>
 </Visualize>
</Layout>
