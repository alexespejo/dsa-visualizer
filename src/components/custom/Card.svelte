<script lang="ts">
    import { Link } from "svelte-routing";
    export let title: string;
    export let icon: string;
    export let description: string;
    export let route: string = "";
   </script>
   
   <div class="card w-full sm:w-72 bg-base-100 shadow-xl card-compact flex">
     <figure class="flex-shrink-0 p-4 flex items-center">
       <img src={icon} class="h-24 w-24" alt="icon" />
     </figure>
     <div class="card-body flex-1 p-4 flex flex-col">
       <h2 class="card-title text-xl font-semibold">{title}</h2>
       <p class="text-sm mt-2 text-left">{description}</p>
       <div class="card-actions mt-4 flex justify-end">
         {#if route !== ""}
           <Link to={route} class="btn btn-primary">Explore</Link>
         {:else}
           <button class="btn btn-warning">
             <span class="loading loading-dots loading-xs"> </span>
           </button>
         {/if}
       </div>
     </div>
   </div>
   