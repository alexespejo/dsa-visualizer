<script lang="ts">
 import TextInput from "../components/custom/Inputs/TextInput.svelte";
 import FormControl from "../components/HashTableControls/FormControl.svelte";
 import LabelInput from "../components/custom/Inputs/Label.svelte";

 let value = "";
</script>

<div class="">
 playground
 <main class="">
  <h1 class="">
   {value}
  </h1>
  <FormControl>
   <LabelInput>Type Here</LabelInput>
   <TextInput bind:value color="primary" placeholder="Enter your name" />
  </FormControl>
 </main>
</div>
