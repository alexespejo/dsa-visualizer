<script>
 export let label;
</script>

<div class="lg:hidden dropdown dropdown-end">
 <div class="tooltip tooltip-left" data-tip={`More ${label}`}>
  <div tabindex="-1" role="button" class="btn m-1">
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    class="bi bi-list"
    viewBox="0 0 16 16"
   >
    <path
     fill-rule="evenodd"
     d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
    />
   </svg>
  </div>
 </div>

 <div
  tabindex="-1"
  class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
 >
  <div class=" join join-vertical">
   <slot />
  </div>
 </div>
</div>

<div class="hidden join lg:flex">
 <slot />
</div>
