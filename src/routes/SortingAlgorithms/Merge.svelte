<script lang="ts">
 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";

 let unSortNums = generateRandomArray(40);
 function generateRandomArray(capacity: number) {
  let array = [];
  for (let i = 0; i < capacity; i++) {
   array.push(Math.floor(Math.random() * 10));
  }
  return array;
 }

 let marker: number = -1;
 let i = 0;
 function animate() {
  function loopFunctionWithLimit() {
   for (let j = 0; j < unSortNums.length; j++) {
    if (unSortNums[i] < unSortNums[j]) {
     marker = j;
     let temp = unSortNums[j];
     unSortNums[j] = unSortNums[i];
     unSortNums[i] = temp;
    }
   }
   i++;
   if (i >= unSortNums.length) {
    clearInterval(intervalIdWithLimit);
   }
  }

  // Start the loop
  const intervalIdWithLimit = setInterval(loopFunctionWithLimit, 100);
 }
</script>

<Layout dataStructure="SA">
 <Controls>
  <button class="btn" on:click={animate}>Animate</button>
 </Controls>

 <Visualize>
  <div class="flex space-x-0.5 w-full h-screen justify-center">
   {#each unSortNums as num, index}
    <div
     class={`w-10  ${index === marker ? "bg-red-300" : "bg-blue-300"} ${index === i ? "bg-green-300" : "bg-blue-300"}`}
     style="height: {num + 20}rem"
    ></div>
   {/each}
  </div>
 </Visualize>
</Layout>
