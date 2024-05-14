<script>
 import Input from "../../components/custom/Update/Input.svelte";
 import Button from "../../components/custom/Update/Button.svelte";
 let value = "";
</script>

<div
 class="w-screen h-screen flex justify-center items-center flex-col space-y-5"
>
 <div class="join">
  <Input placeholder="type..." bind:value color="input-amber" />
  <Button label="Amber Button" color="btn-amber-outline" />
 </div>

 <div class="join">
  <Input placeholder="type..." bind:value color="input-sky" />
  <Button label="Sky Button" color="btn-sky-outline" />
 </div>

 <Input placeholder="type..." bind:value color="input-emerald" />
 <Input placeholder="type..." bind:value color="input-purple" />
 <Input placeholder="type..." bind:value color="input-indigo" />
 <Input placeholder="type..." bind:value color="input-teal" />
</div>
