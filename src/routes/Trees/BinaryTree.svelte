<script lang="ts">
 import { onMount } from "svelte";
 import { marker } from "../../lib/stores/treeMarker";
 import {
  buildTree,
  preorder,
  postorder,
  inorder,
  levelorder,
 } from "../../lib/treeFunctions/treeHelpers";
 import markerDisplay from "../../lib/treeFunctions/markerDisplay";

 import Button from "../../components/custom/Button.svelte";
 import Layout from "../../layouts/Layout.svelte";
 import Range from "../../components/custom/Update/Range.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";

 import Join from "../../components/custom/layout/Join.svelte";
 import Label from "../../components/custom/Inputs/Label.svelte";
 import HiddenLabel from "../../components/custom/Inputs/HiddenLabel.svelte";
 import FormControl from "../../components/custom/FormControl.svelte";

 import RecursiveNode1 from "../../components/Trees/RecursiveNode1.svelte";

 function generateRandomList(capacity: number): number[] {
  const list: number[] = [];
  for (let i = 0; i < capacity; i++) {
   const randomNumber = Math.floor(Math.random() * (capacity - 1)) + 2;
   list.push(randomNumber);
  }
  return list;
 }

 let animationSpeed: number = 500;
 /*
  * The tree is represented as an array where the index of the array represents the node
  * and the value at that index represents the value of the node.
  * The left child of a node at index i is at index 2i + 1
  * The right child of a node at index i is at index 2i + 2
  * The parent of a node at index i is at index (i - 1) / 2
  
 */
 let aTree: number[] = [
  4, 44, 85, 84, 56, 25, 69, 69, 69, 38, 69, 69, 69, 27, 56, 69, 69, 69, 69, 69,
  69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69,
 ];

 function createTree() {
  aTree = buildTree(aTree, 4);
 }

 // array storing the traversal order
 let traversal: number[] = [];
 let emptyTraversal: number[] = [];
 let label: string;

 function animate(type: number) {
  switch (type) {
   case 1:
    label = "Pre-order:";
    traversal = preorder(aTree);
    break;
   case 2:
    label = "Post-order:";
    traversal = postorder(aTree);
    break;
   case 3:
    label = "In-order:";
    traversal = inorder(aTree);
    break;
   case 4:
    label = "Level-order:";
    traversal = levelorder(aTree);
    break;
  }
  emptyTraversal = Array(traversal.length).fill(null);
  // To stop the loop after a certain number of iterations, you can use a counter
  let counter = 0;
  const maxIterations = traversal.length; // for example, to stop after 5 iterations

  function loopFunctionWithLimit() {
   marker.set(traversal[counter]);
   emptyTraversal[counter] = aTree[traversal[counter]];
   counter++;
   if (counter >= maxIterations) {
    setTimeout(() => {
     marker.set(-1);
    }, animationSpeed);
    clearInterval(intervalIdWithLimit); // Stop the loop
    // console.log("Loop stopped after " + maxIterations + " iterations.");
   }
  }

  // Start the loop
  const intervalIdWithLimit = setInterval(
   loopFunctionWithLimit,
   animationSpeed
  );
 }
 function next() {
  marker.update((value: number) => {
   for (let i = value + 1; i < aTree.length; i++) {
    if (aTree[i] !== -1) {
     return i;
    }
   }
  });
 }
 function previous() {
  marker.update((value: number) => {
   for (let i = value - 1; i > 0; i -= 1) {
    if (aTree[i] !== -1 || aTree[i] === aTree[value]) {
     return i;
    }
   }
  });
 }

 let nodeMarker: number;
 const unsubscribe = marker.subscribe((value: number) => {
  nodeMarker = value;
 });

 onMount(() => {
  createTree();
 });
</script>

<Layout dataStructure="TR">
 <Controls title="Tree Traversals">
  <div class="flex flex-col items-center">
   <!-- Open the modal using ID.showModal() method -->
   <!-- svelte-ignore missing-declaration -->

   <div class="flex space-x-2 flex-wrap justify-center">
    <!-- Tree Traversal Buttons -->
    <FormControl>
     <Label>Traversals</Label>
     <Join classList="space-x-0.5">
      <Button color="btn-amber-outline" on:click={() => animate(1)}
       >Pre-order</Button
      >
      <Button color="btn-teal-outline" on:click={() => animate(2)}
       >Post-order</Button
      >
      <Button color="btn-purple-outline" on:click={() => animate(3)}
       >Inorder</Button
      >
      <Button color="btn-info" on:click={() => animate(4)}>Level Order</Button>
     </Join>
    </FormControl>

    <!-- Animation Speed Slider -->
    <FormControl>
     <Label>Animation Speed: {(100 / animationSpeed).toFixed(2)}s</Label>
     <Range
      min={100}
      max={1000}
      bind:value={animationSpeed}
      step={100}
      markings
      color="range-purple"
     />
    </FormControl>

    <!-- Misc Buttons -->
    <FormControl>
     <HiddenLabel />
     <Join classList="space-x-0.5">
      <Button on:click={createTree} color="primary">Randomize</Button>
      <Button color="secondary">Reorder</Button>
     </Join>
    </FormControl>
   </div>
  </div>
 </Controls>

 <Visualize>
  <div
   class={`text-base-content font-bold mt-5 space-x-1 flex w-1/2 items-center justify-center  ${!label ? "opacity-0" : "opacity-1"} text-primary`}
  >
   <h6 class="">{label}</h6>
   <div class="space-x-0.5">
    &#91;
    {#each emptyTraversal as node, i}
     <span class={`${node ? "opacity-1" : "opacity-0"}`}>
      {node}
      {#if i !== emptyTraversal.length - 1}
       ,
      {/if}
     </span>
    {/each}
    &#93;
   </div>
  </div>

  <article class="binary-tree">
   <div>
    <span class={`${markerDisplay(nodeMarker, 0)}`}>{aTree[0]}</span>
    <RecursiveNode1 value1={aTree} index={1} />
    <RecursiveNode1 value1={aTree} index={2} />
   </div>
  </article>
 </Visualize>
</Layout>
