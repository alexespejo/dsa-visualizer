<script lang="ts">
 import { marker } from "../../lib/stores/treeMarker";
 import markerDisplay from "../../lib/treeFunctions/markerDisplay";

 import Button from "../../components/custom/Button.svelte";
 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";

 import RecursiveNode1 from "../../components/Trees/RecursiveNode1.svelte";

 let aTree: number[] = [7, 11, 2, 7, 1, 11, 9, 7, -1, -1, -1, -1, -1, -1, 9];

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
  <div class="join space-x-0.5">
   <Button on:click={previous} color="secondary" styles="join-item"
    >Previous</Button
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
