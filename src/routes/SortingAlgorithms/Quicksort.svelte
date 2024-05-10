<script lang="ts">
 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";
 import ArrayDisplay from "../../components/Array/ArrayDisplay.svelte";
 import ArrayElementIndexed from "../../components/Array/ArrayElementIndexed.svelte";
 import Button from "../../components/custom/Button.svelte";

 let unsortedList: number[] = [-1, -3, 42, 101, 16, -17, 72, -31, 9];
 let i: number = 1;
 let j: number = unsortedList.length - 1;
 let pivot: number = unsortedList[0];

 //  function pass() {
 //   let list: number[] = unsortedList;
 //   let temp: number = unsortedList[(unsortedList.length - 1) / 2];
 //   list[(list.length - 1) / 2] = list[0];
 //   list[0] = temp;
 //   unsortedList = list;
 //
 //   let pivot = list[0];
 //   let k = list.length - 1;
 //   let h = 1;
 //
 //   while (h < k) {
 //    if (list[h] < pivot) {
 //     h++;
 //    } else if (list[h] > pivot && list[k] > pivot) {
 //     k--;
 //    } else if (list[h] > pivot) {
 //     temp = list[h];
 //     list[h] = list[k];
 //     list[k] = temp;
 //     h++;
 //     k--;
 //    }
 //   }
 //   unsortedList = list;
 //  }

 function next() {
  if (i < j) {
   if (unsortedList[i] < pivot) {
    i += 1;
   } else if (unsortedList[i] > pivot && unsortedList[j] > pivot) {
    j -= 1;
   } else {
    let temp = unsortedList[i];
    unsortedList[i] = unsortedList[j];
    unsortedList[j] = temp;
    i += 1;
    j -= 1;
   }
  }
 }
</script>

<Layout dataStructure="SA">
 <Controls title="Quicksort">
  <Button on:click={next} color="primary">Pass</Button>
 </Controls>

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
