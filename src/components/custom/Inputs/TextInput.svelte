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
 placeholder={placeholder}
 class={`input input-${color} input-${sz} ${styles} input-bordered w-max-w-xs font-bold`}
/>
