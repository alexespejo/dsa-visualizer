<script>
 export let func;
 export let mark;
</script>

<button
 class={`font-bold p-3 w-20 text-center border-2 flex items-center justify-center my-0.5 ${mark ? "border-success text-success" : "border-base-content"}`}
 on:click={() => func()}><slot /></button
>
