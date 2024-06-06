<script>
 export let classList = "";
</script>

<div
 class={`flex flex-wrap space-x-0.5 justify-center lg:justify-start ${classList}`}
>
 <slot />
</div>
