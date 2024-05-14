<script lang="ts">
 import "./Input.styles.css";
 export let placeholder: string = "";
 export let value: string = "";
 export let classList: string = "";
 export let color: string = "";
</script>

<input
 type="text"
 {placeholder}
 class={`input join-item w-36 input-sm ${color} ${classList}`}
 bind:value
 on:change
/>
