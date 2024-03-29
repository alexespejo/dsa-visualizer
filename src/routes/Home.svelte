<script>
import {Link} from "svelte-routing"
</script>

<div class="flex flex-col lg:flex-row items-center justify-center flex-wrap space-x-2 space-y-2 p-3 lg:p-5">

<div class="card w-72 h-96 bg-base-100 shadow-xl">
  <figure><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table w-36 h-36" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z"/>
</svg></figure>
  <div class="card-body">
    <h2 class="card-title">Hash Tables</h2>
    <p>Separate Chaining, Linear, Quadratic, and Double Probing</p>
    <div class="card-actions justify-end">
      <Link to="/hash_tables/linear" class="btn btn-primary">Explore</Link>
    </div>
  </div>
</div>
<div class="card w-72 h-96 bg-base-100 shadow-xl">
  <figure><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart w-36 h-36" viewBox="0 0 16 16">
  <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
</svg></figure>
  <div class="card-body">
    <h2 class="card-title">Sorting Algorithms</h2>
    <p>Bubble, Selection, Insertion, Bucket, Radix, Merge, Quick sorts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-warning">Coming Soon<span class="loading loading-dots loading-xs"></span></button>
    </div>
  </div>
</div>
<div class="card w-72 h-96 bg-base-100 shadow-xl">
  <figure><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-3x3 w-36 h-36" viewBox="0 0 16 16">
  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5V5h4V1zM5 6H1v4h4zm1 4h4V6H6zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5zm1 0v4h4v-4zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11zm0-1h4V6h-4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11zm-1 0V1H6v4z"/>
</svg>
</figure>
  <div class="card-body">
    <h2 class="card-title">Graphs</h2>
    <p>Best-First search, Depth-First search, and Dijsktra's shortest path</p>
    <div class="card-actions justify-end">
      <button class="btn btn-warning">Coming Soon<span class="loading loading-dots loading-xs"></span></button>
    </div>
  </div>
</div>
<div class="card w-72 h-96 bg-base-100 shadow-xl">
  <figure><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-3 w-36 h-36" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
</svg>
</figure>
  <div class="card-body">
    <h2 class="card-title">Trees</h2>
    <p>Binary-Search Trees, B-Trees, AVL Trees, Red-Black Trees</p>
    <div class="card-actions justify-end">
      <button class="btn btn-warning">Coming Soon<span class="loading loading-dots loading-xs"></span></button>
    </div>
  </div>
</div>

</div>