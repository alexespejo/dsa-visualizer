<script lang="ts">
 export let value: number = null;
 export let color: string;
 export let size: string = "";
 export let styles: string = "";
 export let placeholder: string = "";
 export let require: boolean = false;
 export let min: number = null;
 export let max: number = null;
</script>

<input
 bind:value
 required={require}
 on:input
 on:change
 type="number"
 {placeholder}
 class={`input input-${color} input-${size} ${styles} input-bordered w-max-w-xs font-bold w-28 input-sm`}
 {min}
 {max}
/>
