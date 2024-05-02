<script>
 import { Link } from "svelte-routing";
 import Card from "../components/custom/Card.svelte";
 import HT from "../assets/icons/HT.svg";
 import GA from "../assets/icons/GA.svg";
 import LL from "../assets/icons/LL.svg";
 import QU from "../assets/icons/QU.svg";
 import SA from "../assets/icons/SA.svg";
 import ST from "../assets/icons/ST.svg";
 import TR from "../assets/icons/TR.svg";
</script>

<div
 class="flex flex-col lg:flex-row items-center justify-center flex-wrap space-x-2 space-y-2 p-3 lg:p-5"
>
 <Card
  title="Hash Tables"
  description="Separate Chaining, Linear, Quadratic, and Double Probing"
  icon={HT}
  route="/hash_tables/linear"
 />
 <Card
  title="Sorting Algorithms"
  description="Bubble, Selection, Insertion, Bucket, Radix, Merge, Quick sorts"
  route="/sorting_algo/bucket_sort"
  icon={SA}
 />
 <Card
  title="Graph"
  description="Best-First search, Depth-First search, and Dijsktra's shortest path"
  icon={GA}
 />
 <Card
  title="Trees"
  description="Binary-Search Trees, B-Trees, AVL Trees, Red-Black Trees"
  icon={TR}
  route="/trees/bst"
 />

 <Card title="Stacks" description="Stacks, Postfix, Prefix" icon={ST} />

 <Card
  title="Queues"
  icon={QU}
  description="Circular Queues, Priority Queues/Heaps"
 />

 <Card
  title="Linked Lists"
  description="Singly Linked List, Doubly Linked List"
  icon={LL}
 />
</div>
