<script lang="ts">
 export let classList: string = "";
</script>

<div class={`form-control flex max-w-xs font-bold ${classList}`}>
 <slot />
</div>
