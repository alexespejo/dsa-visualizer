<script>
 import Input from "../../components/custom/Update/Input.svelte";
 import Button from "../../components/custom/Update/Button.svelte";
 import FormTrigger from "../../components/custom/layout/FormTrigger.svelte";
 import Join from "../../components/custom/layout/Join.svelte";
 let value = "";
</script>

<div
 class="w-screen h-screen flex justify-center items-center flex-col space-y-5"
>
 <div class="join">
  <Input placeholder="type..." bind:value color="input-amber" />
  <Button label="Amber" color="btn-amber-outline" />
 </div>

 <div class="join">
  <Input placeholder="type..." bind:value color="input-sky" />
  <Button label="Sky" color="btn-sky-outline" />
 </div>

 <FormTrigger onTrigger={() => alert("when you press Enter something happens")}>
  <Input placeholder="type..." bind:value color="input-emerald" />
  <Button label="Emerald" color="btn-emerald-outline" />
 </FormTrigger>

 <Join classList="space-x-0.5">
  <Button label="Indigo" color="btn-indigo-outline" />
  <Button label="Purple" color="btn-purple-outline" />
  <Button label="Teal" color="btn-teal-outline" />
 </Join>
</div>
