<script lang="ts">
 interface RecursiveNode {
  head: number;
  left: RecursiveNode | null;
  right: RecursiveNode | null;
 }

 import RecursiveNode1 from "./RecursiveNode1.svelte";
 export let value2: number[] | null = null;
 export let index: number;
</script>

<div>
 {#if index < value2.length && value2[index] !== null}
  <span class={`${value2[index] === -1 ? "opacity-0" : ""}`}
   >{value2[index]}</span
  >
  <RecursiveNode1 value1={value2} index={2 * index + 1} />
  <RecursiveNode1 value1={value2} index={2 * index + 2} />
 {/if}
</div>
