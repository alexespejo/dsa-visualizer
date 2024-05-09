<script lang="ts">
 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";

 function generateRandomArray(capacity: number) {
  let array = [];
  for (let i = 0; i < capacity; i++) {
   array.push(Math.floor(Math.random() * 100));
  }
  return array;
 }

 let unSortNums = generateRandomArray(20);
</script>

<Layout dataStructure="SA">
 <Controls></Controls>

 <Visualize>
  <div class="flex space-x-0.5 w-full h-96 justify-center">
   {#each unSortNums as num, i}
    <div class={`w-10 bg-blue-300`} style="height: {num * 2}px"></div>
   {/each}
  </div>
 </Visualize>
</Layout>
