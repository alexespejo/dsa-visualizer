<script lang="ts">
 import { marker } from "../../lib/stores/treeMarker";
 import buildTree from "../../lib/treeFunctions/treeHelpers";
 import markerDisplay from "../../lib/treeFunctions/markerDisplay";

 import Button from "../../components/custom/Button.svelte";
 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";

 import RecursiveNode1 from "../../components/Trees/RecursiveNode1.svelte";

 function generateRandomList(capacity: number): number[] {
  const list: number[] = [];
  for (let i = 0; i < capacity; i++) {
   const randomNumber = Math.floor(Math.random() * (capacity - 1)) + 2;
   list.push(randomNumber);
  }
  return list;
 }

 let aTree: number[] = [
  4, 44, 85, 84, 56, 25, 69, -1, -1, 38, -1, -1, -1, 27, 56, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
 ];
 function createTree() {
  aTree = buildTree(aTree, 3);
 }
 let traversal: number[] = [];
 //  let aTree: number[] = [7, 11, 2, 7, 1, 11, 9, 7, -1, -1, -1, -1, -1, -1, 9];
 function preorder() {
  let list: number[] = [];
  function preorderHelper(index: number) {
   if (index >= aTree.length || aTree[index] === -1) {
    return;
   }
   list.push(index);
   preorderHelper(2 * index + 1);
   preorderHelper(2 * index + 2);
  }
  preorderHelper(0);
  traversal = list;
 }

 function animatPreorder() {
  preorder();
  // To stop the loop after a certain number of iterations, you can use a counter
  let counter = 0;
  const maxIterations = traversal.length; // for example, to stop after 5 iterations

  function loopFunctionWithLimit() {
   marker.set(traversal[counter]);
   counter++;
   if (counter >= maxIterations) {
    clearInterval(intervalIdWithLimit); // Stop the loop
    // console.log("Loop stopped after " + maxIterations + " iterations.");
   }
  }

  // Start the loop
  const intervalIdWithLimit = setInterval(loopFunctionWithLimit, 500);
 }
 function next() {
  marker.update((value: number) => {
   return value + 1;
  });
 }
 function previous() {
  marker.update((value: number) => {
   return value - 1;
  });
 }

 let nodeMarker: number;
 const unsubscribe = marker.subscribe((value: number) => {
  nodeMarker = value;
 });
</script>

<Layout dataStructure="TR">
 <Controls>
  {traversal}
  <div class="join space-x-0.5">
   <Button on:click={previous} color="secondary" styles="join-item"
    >Previous</Button
   >
   <Button on:click={createTree} color="accent" styles="join-item"
    >Random</Button
   >
   <Button on:click={next} color="primary" styles="join-item">Next</Button>
  </div>
 </Controls>

 <Visualize>
  <article class="binary-tree">
   <div>
    <span class={`${markerDisplay(nodeMarker, 0)}`}>{aTree[0]}</span>
    <RecursiveNode1 value1={aTree} index={1} />
    <RecursiveNode1 value1={aTree} index={2} />
   </div>
  </article>
 </Visualize>
</Layout>
