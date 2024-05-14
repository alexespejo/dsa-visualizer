<script lang="ts">
 import "./Button.styles.css";
 export let label: string;
 export let color: string = "";
</script>

<button on:click class={`btn ${color} ${color}-outline`}>
 {label}
</button>
