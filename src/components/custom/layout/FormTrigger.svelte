<script lang="ts">
 export let onTrigger: () => void;
</script>

<form on:submit|preventDefault={onTrigger} class="join">
 <slot />
</form>
