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
 .btn-purple {
  @apply btn text-neutral bg-purple-300 hover:bg-purple-300/90 hover:border-purple-300;
 }
 .btn-purple-outline {
  @apply btn bg-base-100 btn-outline border-purple-300 text-purple-300 hover:bg-purple-300/90 hover:border-purple-300;
 }
 .btn-emerald {
  @apply btn text-neutral bg-emerald-300 hover:bg-emerald-300/90 hover:border-emerald-300;
 }
 .btn-emerald-outline {
  @apply btn bg-base-100 btn-outline border-emerald-300 text-emerald-300 hover:bg-emerald-300/90 hover:border-emerald-300;
 }
 .btn-teal {
  @apply btn text-neutral bg-teal-300 hover:bg-teal-300/90 hover:border-teal-300;
 }
 .btn-teal-outline {
  @apply btn bg-base-100 btn-outline border-teal-300 text-teal-300 hover:bg-teal-300/90 hover:border-teal-300;
 }
 .btn-indigo {
  @apply btn text-neutral bg-indigo-300 hover:bg-indigo-300/90 hover:border-indigo-300;
 }
 .btn-indigo-outline {
  @apply btn bg-base-100 btn-outline border-indigo-200 text-indigo-200 hover:bg-indigo-200/90 hover:border-indigo-200;
 }
</style>
