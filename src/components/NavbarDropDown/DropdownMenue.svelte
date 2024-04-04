<script>
 export let label;
</script>

<div class="xl:hidden dropdown dropdown-end">
 <div tabindex="-1" role="button" class="btn m-1">{label}</div>
 <div
  tabindex="-1"
  class=" dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
 >
  <div class="join join-vertical">
   <slot />
  </div>
 </div>
</div>

<div class="hidden join xl:flex">
 <slot />
</div>
