<script lang="ts">
 export let value: string;
 export let color: string;
 export let sz: string = "";
 export let styles: string = "";
 export let placeholder: string = "";
 export let maxLength: number = 1;
 export let minLength: number = 1;
</script>

<input
 bind:value
 type="text"
 {placeholder}
 maxlength = {maxLength}
 minlength = {minLength}
 class={`input input-${color} input-${sz} w-28 ${styles} input-bordered w-max-w-xs font-bold`}
/>
