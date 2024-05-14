<script lang="ts">
 import "./Button.styles.css";
 export let label: string;
 export let color: string = "";
 export let classList: string = "";
</script>

<button
 on:click
 class={`btn btn-sm max-w-sm min-w-sm join-item ${color} ${classList}`}
>
 {label}
</button>
