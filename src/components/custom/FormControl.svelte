<script lang="ts">
 export let classList: string = "";
</script>

<div class={`form-control flex  font-bold ${classList}`}>
 <slot />
</div>
