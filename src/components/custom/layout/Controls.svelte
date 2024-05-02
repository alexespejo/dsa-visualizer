<script lang="ts">
 export let title: string = "";
</script>

<div class="hash-table-controller">
 <h1 class="title-heading w-fit">{title}</h1>
 <div
  class="flex flex-col justify-center md:flex-row md:space-x-2 w-fit flex-wrap"
 >
  <slot />
 </div>
</div>
