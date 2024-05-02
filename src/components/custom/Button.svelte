<script lang="ts">
 export let color: string;
 export let size: string = "";
 export let styles: string = "";
 export let onClick: () => void = () => {};
</script>

<button class={`btn btn-${color} btn-${size} ${styles}`} on:click={onClick}>
 <slot />
</button>
