<script lang="ts">
 import { onMount } from "svelte";

 import { marker } from "../../lib/stores/treeMarker";
 import markerDisplay from "../../lib/treeFunctions/markerDisplay";
 interface RecursiveNode {
  head: number;
  left: RecursiveNode | null;
  right: RecursiveNode | null;
 }

 import RecursiveNode1 from "./RecursiveNode1.svelte";
 export let value2: number[] | null = null;
 export let index: number;

 let nodeMarker: number;

 onMount(() => {
  marker.subscribe((value: number) => {
   nodeMarker = value;
  });
 });
</script>

<div>
 {#if index < value2.length && value2[index] !== null}
  <span
   class={`${value2[index] === -1 ? "text-red-300" : ""}${markerDisplay(nodeMarker, index)}`}
  >
   {value2[index]}
  </span>
  <RecursiveNode1 value1={value2} index={2 * index + 1} />
  <RecursiveNode1 value1={value2} index={2 * index + 2} />
 {/if}
</div>
