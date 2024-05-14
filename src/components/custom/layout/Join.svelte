<script lang="ts">
 export let classList: string = "";
</script>

<div class={`${classList} join`}>
 <slot />
</div>
