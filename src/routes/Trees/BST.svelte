<script lang="ts">
 import Layout from "../../layouts/Layout.svelte";
 import Controls from "../../components/custom/layout/Controls.svelte";
 import Visualize from "../../components/custom/layout/Visualize.svelte";
 import RecursiveNode1 from "../../components/Trees/RecursiveNode1.svelte";

 import markerDisplay from "../../lib/treeFunctions/markerDisplay";
 import { marker } from "../../lib/stores/treeMarker";

 let aTree: number[] = [
  4, 44, 85, 84, 56, 25, 69, 69, 69, 38, 69, 69, 69, 27, 56, 69, 69, 69, 69, 69,
  69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69,
 ];

 let nodeMarker: number;
 const unsubscribe = marker.subscribe((value: number) => {
  nodeMarker = value;
 });
</script>

<Layout dataStructure="TR">
 <Controls></Controls>

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
