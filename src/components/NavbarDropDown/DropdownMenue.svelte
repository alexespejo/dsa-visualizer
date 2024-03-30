

<div class="sm:hidden dropdown dropdown-end">
  <div tabindex="-1" role="button" class="btn m-1"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></div>
  <div tabindex="-1" class=" dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
     <div class="join join-vertical">
      <slot/>
    </div>
  </div>
</div>

<div class="hidden join sm:flex">
    <slot/> 
</div>