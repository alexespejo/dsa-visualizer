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

<div class="text-center p-4">
    <h1 class="mt-24 text-3xl font-bold mb-4">Explore Our Interactive Data Structures Visualizer!</h1>

    <div
      class="flex flex-col sm:flex-row items-center justify-center flex-wrap space-x-2 space-y-2 p-3 lg:p-5"
    >
      <Card
       title="Hash Tables"
       description="Separate Chaining, Linear, Quadratic, and Double Probing"
       icon={HT}
       route="/hash_tables/linear"
      />
      <Card
       title="Sorting Algorithms"
       description="Bubble, Selection, Insertion, Bucket, Radix"
       route="/sorting_algo/bucket_sort"
       icon={SA}
      />
      <Card
       title="Trees"
       description="Tree Traversals"
       icon={TR}
       route="/trees/binary_tree"
      />
      <Card
       title="Linked Lists"
       description="Singly Linked List"
       route="/linklist/singly"
       icon={LL}
      />
      <!-- <Card
       title="Graph"
       description="Best-First search, Depth-First search, and Dijsktra's shortest path"
       icon={GA}
      /> -->

      <!-- <Card title="Stacks" description="Stacks, Postfix, Prefix" icon={ST} /> -->
      <!-- <Card
       title="Queues"
       icon={QU}
       description="Circular Queues, Priority Queues/Heaps"
      /> -->
    </div>

    <footer class="mt-8 text-center">
        <p class="mt-2">
            <a target="_blank">Created by: </a>
            <a href="https://github.com/alexespejo" class="font-bold hover:text-gray-600" target="_blank">Alexander Espejo</a>,
            <a href="https://github.com/developersbm" class="font-bold hover:text-gray-600" target="_blank">Sebastian Bastida Marin</a>,
            <a href="https://github.com/Kevin06x" class="font-bold hover:text-gray-600" target="_blank">Kevin Zhang</a>,
            <a href="https://github.com/aypuri" class="font-bold hover:text-gray-600" target="_blank">Ayushmaan Puri</a>,
            <a href="https://github.com/Panteaforoutan" class="font-bold hover:text-gray-600" target="_blank">Pantea Foroutan</a>,
            <a href="https://github.com/huynhkatrina" class="font-bold hover:text-gray-600" target="_blank">Katrina Huynh</a>
        </p>
    </footer>
</div>
