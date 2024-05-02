<script lang="ts">
 export let value: number = -1;
</script>

<div class={`${value === -1 ? "opacity-0" : ""}`}>
 <span>{value}</span>
 <slot />
</div>
