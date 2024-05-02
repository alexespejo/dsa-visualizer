<script lang="ts">
 import { Link } from "svelte-routing";
 export let title: string;
 export let icon: string;
 export let description: string;
 export let route: string = "";
</script>

<div class="card w-full sm:w-72 h-96 bg-base-100 shadow-xl">
 <figure>
  <img src={icon} class="h-36 w-36" alt="icon" />
 </figure>
 <div class="card-body">
  <h2 class="card-title">{title}</h2>
  <p>{description}</p>
  <div class="card-actions justify-end">
   {#if route !== ""}
    <Link to={route} class="btn btn-primary">Explore</Link>
   {:else}
    <button class="btn btn-primary"
     ><span class="loading loading-dots loading-xs"></span></button
    >
   {/if}
  </div>
 </div>
</div>
