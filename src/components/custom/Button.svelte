<script lang="ts">
 import "../custom/Update/Button.styles.css";
 export let color: string = "";
 export let size: string = "";
 export let styles: string = "";
 export let classList: string = "";
 export let disabled: boolean = false;
</script>

<button
 class={`btn btn-${color} ${color} btn-${size} ${styles} btn-outline btn-sm join-item ${classList} min-w-fit max-w-fit`}
 on:click
 {disabled}
>
 <slot />
</button>
