<script>
import Navbar from "./components/HashTableControls/Navbar.svelte";
import {Router, Link, Route } from "svelte-routing"
  import Linear from "./routes/HashTables/Linear.svelte"
  import DoubleHashing from "./routes/HashTables/DoubleHashing.svelte";
  import Quadratic from "./routes/HashTables/Quadratic.svelte";
  export let url = "";
</script>

<main>
<Navbar/>
<Router {url}>
  <div class="">
    <Route path="/hash_tables/linear" component={Linear} />
    <Route path="/hash_tables/quadratic" component={Quadratic} />
    <Route path="/hash_tables/double_hashing" component={DoubleHashing} /> 
  </div>
</Router>
 
</main>

