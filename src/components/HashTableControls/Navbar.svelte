<script>
 import { Link } from "svelte-routing";
 import HashTableRouteLinks from "./HashTableRouteLinks.svelte";
 import DropdownMenue from "../NavbarDropDown/DropdownMenue.svelte";
</script>

<div class="navbar bg-base-100 shadow-sm border-b-2">
 <div class="navbar-start">
  <Link to="/" class="btn btn-ghost">
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="currentColor"
    class="bi bi-house"
    viewBox="0 0 16 16"
   >
    <path
     d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
    />
   </svg>
  </Link>
  <h1 class="text-xl sm:text-2xl lg:text-4xl font-bold lg:flex hidden">
   Hash Tables
  </h1>
 </div>
 <div class="navbar-center lg:hidden">
  <h1 class="text-xl sm:text-2xl lg:text-4xl font-bold">Hash Tables</h1>
 </div>
 <div class="navbar-end">
  <DropdownMenue label="Hash Tables"><HashTableRouteLinks /></DropdownMenue>
 </div>
 <!-- <div class="hidden sm:flex navbar-end">
    <a href="https://github.com/alexespejo/dsa-visualizer" class="btn  ">
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
    </a>
  </div> -->
</div>
