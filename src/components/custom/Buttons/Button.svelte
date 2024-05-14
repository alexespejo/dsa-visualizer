<script lang="ts">
 export let label: string;
 export let color: string = "";
</script>

<button on:click class={`btn bg-${color}`}>
 {label}
</button>
