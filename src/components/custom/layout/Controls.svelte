<script lang="ts">
 export let title: string = "";
</script>

<div class="hash-table-controller">
 <h1 class="title-heading w-full text-center">{title}</h1>
 <div class="flex space-x-2 justify-center sm:flex-row w-fit flex-wrap">
  <slot />
 </div>
</div>
