<script lang="ts">
 export let value: number;
 export let color: string;
 export let size: string = "";
 export let styles: string = "";
 export let placeholder: string = "";
 //  export let change: () => void = () => {};
</script>

<input
 bind:value
 on:change
 type="number"
 {placeholder}
 class={`input input-${color} input-${size} ${styles} input-bordered w-max-w-xs font-bold w-40`}
 min="1"
 max="50"
/>
