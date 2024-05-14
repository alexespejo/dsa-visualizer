<script lang="ts">
 import { Link } from "svelte-routing";
 export let title: string;
 export let icon: string;
 export let description: string;
 export let route: string = "";
</script>

<div class="card w-full sm:w-72 h-80 bg-base-100 shadow-xl card-compact">
 <figure class="h-36">
  <img src={icon} class="h-28 w-28 fill-red-300" alt="icon" />
 </figure>
 <div class="card-body">
  <h2 class="card-title">{title}</h2>
  <p>{description}</p>
  <div class="card-actions justify-end">
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
