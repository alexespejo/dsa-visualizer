<script>
 import { Router, Route } from "svelte-routing";
 import SeparateChaining from "./routes/HashTables/SeparateChaining.svelte";
 import Linear from "./routes/HashTables/Linear.svelte";
 import DoubleHashing from "./routes/HashTables/DoubleHashing.svelte";
 import Quadratic from "./routes/HashTables/Quadratic.svelte";
 import BucketSort from "./routes/SortingAlgorithms/BucketSort.svelte";
 import RadixSort from "./routes/SortingAlgorithms/RadixSort.svelte";
 import BubbleSort from "./routes/SortingAlgorithms/Bubble.svelte";
 import InsertionSort from "./routes/SortingAlgorithms/Insertion.svelte";
 import Selection from "./routes/SortingAlgorithms/Selection.svelte";
 import MergeSort from "./routes/SortingAlgorithms/Merge.svelte";
 import Quicksort from "./routes/SortingAlgorithms/Quicksort.svelte";
 //  import Playground from "./routes/Playground.svelte";
 import Home from "./routes/Home.svelte";
 export let url = "";
</script>

<main>
 <Router {url}>
  <div class="">
   <Route path="/" component={Home} />
   <!-- <Route path="/playground" component={Playground} /> -->
   <Route path="/hash_tables/separate_chaining" component={SeparateChaining} />
   <Route path="/hash_tables/linear" component={Linear} />
   <Route path="/hash_tables/quadratic" component={Quadratic} />
   <Route path="/hash_tables/double_hashing" component={DoubleHashing} />
   <Route path="/sorting_algo/bucket_sort" component={BucketSort} />
   <Route path="/sorting_algo/radix_sort" component={RadixSort} />
   <Route path="/sorting_algo/bubble_sort" component={BubbleSort} />
   <Route path="/sorting_algo/insertion_sort" component={InsertionSort} />
   <Route path="/sorting_algo/selection_sort" component={Selection} />
   <Route path="/sorting_algo/merge_sort" component={MergeSort} />
   <Route path="/sorting_algo/quick_sort" component={Quicksort} />
  </div>
 </Router>
</main>
