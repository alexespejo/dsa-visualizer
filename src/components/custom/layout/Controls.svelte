<script lang="ts">
 export let title: string = "";
</script>

<div class="hash-table-controller">
 <h1 class="title-heading w-fit">{title}</h1>
 <div class="flex flex-col lg:flex-row lg:space-x-2 w-fit">
  <slot />
 </div>
</div>
