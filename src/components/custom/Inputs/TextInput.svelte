<script lang="ts">
 export let value: string;
 export let color: string;
 export let sz: string = "";
 export let styles: string = "";
 export let placeholder: string = "";
</script>

<input
 bind:value
 type="text"
 {placeholder}
 class={`input input-${color} input-${sz} w-36 ${styles} input-bordered w-max-w-xs font-bold`}
/>
