<script lang="ts">
 export let label: string;
 export let color: string = "badge-neutral";
 export let classList: string = "";
</script>

<div class={`badge font-bold ${color} ${classList}`}>
 {label}
</div>

<style>
 .badge-amber {
  @apply bg-amber-300 text-base-100;
 }
 .badge-teal {
  @apply bg-teal-300 text-base-100;
 }
 .badge-purple {
  @apply bg-purple-300 text-base-100;
 }
 .badge-indigo {
  @apply bg-indigo-300 text-base-100;
 }
 .badge-emerald {
  @apply bg-emerald-300 text-base-100;
 }
 .badge-sky {
  @apply bg-sky-300 text-base-100;
 }
</style>
