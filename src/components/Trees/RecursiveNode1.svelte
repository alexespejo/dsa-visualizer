<script lang="ts">
 import { onMount } from "svelte";
 import { marker } from "../../lib/stores/treeMarker";
 import markerDisplay from "../../lib/treeFunctions/markerDisplay";

 interface RecursiveNode {
  head: number;
  left: RecursiveNode | null;
  right: RecursiveNode | null;
 }

 import RecursiveNode2 from "./RecursiveNode2.svelte";
 export let value1: number[] | null = null;
 export let index: number;

 let nodeMarker: number;

 onMount(() => {
  marker.subscribe((value: number) => {
   nodeMarker = value;
  });
 });
</script>

<div>
 {#if index < value1.length && value1[index] !== null}
  <span
   class={`${value1[index] === -1 ? "opacity-0" : ""} ${markerDisplay(nodeMarker, index)}`}
  >
   {value1[index]}
  </span>
  <RecursiveNode2 value2={value1} index={2 * index + 1} />
  <RecursiveNode2 value2={value1} index={2 * index + 2} />
 {:else}
  <span>x</span>
 {/if}
</div>
