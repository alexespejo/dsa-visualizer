<script lang="ts">
 export let label: string;
 export let color: string = "";
</script>

<button on:click class={`btn ${color} ${color}-outline`}>
 {label}
</button>

<style>
 .btn-amber {
  @apply btn text-neutral bg-amber-300 hover:bg-amber-300/90 hover:border-amber-300;
 }
 .btn-amber {
  @apply text-amber-300 border-amber-300 bg-base-100 hover:bg-amber-300/90 hover:text-neutral;
 }
 .btn-sky {
  @apply btn text-neutral bg-sky-300 hover:bg-sky-300/90 hover:border-sky-300;
 }
 .btn-sky-outline {
  @apply btn bg-base-100 btn-outline border-sky-300 text-sky-300 hover:bg-sky-300/90 hover:border-sky-300;
 }
</style>
