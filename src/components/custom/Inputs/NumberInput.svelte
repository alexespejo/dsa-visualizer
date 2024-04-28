<script lang="ts">
 export let value: number;
 export let color: string;
 export let size: string = "";
 export let styles: string = "";
 export let placeholder: string = "";
</script>

<input
 bind:value
 type="number"
 {placeholder}
 class={`input input-${color} input-${size} ${styles} input-bordered w-max-w-xs font-bold`}
 min="1"
 max="50"
/>
