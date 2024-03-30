<script>
  import {Router, Route } from "svelte-routing"
  import SeparateChaining from "./routes/HashTables/SeparateChaining.svelte"
  import Linear from "./routes/HashTables/Linear.svelte"
  import DoubleHashing from "./routes/HashTables/DoubleHashing.svelte";
  import Quadratic from "./routes/HashTables/Quadratic.svelte";
  import BucketSort from "./routes/SortingAlgorithms/BucketSort.svelte";
  import Home from "./routes/Home.svelte";
  export let url = "";
</script>

<main>
<Router {url}>
  <div class="">
    <Route path="/" component={Home}/>
    <Route path="/hash_tables/separate_chaining" component={SeparateChaining} />
    <Route path="/hash_tables/linear" component={Linear} />
    <Route path="/hash_tables/quadratic" component={Quadratic} />
    <Route path="/hash_tables/double_hashing" component={DoubleHashing} /> 
    <Route path="/sorting_algorithms/bucket_sort" component={BucketSort} /> 
  </div>
</Router>
</main>

