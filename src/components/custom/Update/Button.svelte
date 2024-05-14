<script lang="ts">
 import "./Button.styles.css";
 export let label: string;
 export let color: string = "";
 export let classList: string = "";
</script>

<button
 on:click
 class={`btn btn-sm max-w-28 min-w-20 join-item ${color} ${classList}`}
>
 {label}
</button>
