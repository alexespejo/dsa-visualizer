<script lang="ts">
 interface RecursiveNode {
  head: number;
  left: RecursiveNode | null;
  right: RecursiveNode | null;
 }

 import RecursiveNode2 from "./RecursiveNode2.svelte";
 export let value1: number[] | null = null;
 export let index: number;
</script>

<div>
 {#if index < value1.length && value1[index] !== null}
  <span class={`${value1[index] === -1 ? "opacity-0" : ""}`}>
   {value1[index]}
  </span>
  <RecursiveNode2 value2={value1} index={2 * index + 1} />
  <RecursiveNode2 value2={value1} index={2 * index + 2} />
 {:else}
  <span>x</span>
 {/if}
</div>
