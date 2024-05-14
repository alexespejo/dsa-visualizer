<script>
 import Input from "../../components/custom/Update/Input.svelte";
 import Button from "../../components/custom/Update/Button.svelte";
 import FormTrigger from "../../components/custom/layout/FormTrigger.svelte";
 import Join from "../../components/custom/layout/Join.svelte";
 import FormControl from "../../components/custom/FormControl.svelte";
 import Label from "../../components/custom/Inputs/Label.svelte";
 import HiddenLabel from "../../components/custom/Inputs/HiddenLabel.svelte";
 let value = "";
</script>

<div class="w-screen h-screen flex flex-col space-y-5">
 <FormControl>
  <Label>New Colors</Label>
  <Join classList="space-x-0.5">
   <Button color="btn-amber" label="amber" />
   <Button color="btn-sky" label="sky" />
   <Button color="btn-purple" label="purple" />
   <Button color="btn-teal" label="teal" />
   <Button color="btn-indigo" label="indigo" />
   <Button color="btn-emerald" label="emerald" />
  </Join>
 </FormControl>

 <div class="flex space-x-2">
  <FormControl>
   <Label>Amber Input</Label>
   <Join>
    <Input placeholder="type..." bind:value color="input-amber" />
    <Button label="Amber" color="btn-amber-outline" />
   </Join>
  </FormControl>

  <FormControl>
   <HiddenLabel />
   <Join>
    <Input placeholder="hidden label..." bind:value color="input-sky" />
    <Button label="Sky" color="btn-sky-outline" />
   </Join>
  </FormControl>
 </div>

 <FormControl>
  <Label>Form Trigger {"press ENTER to trigger the function"}</Label>
  <FormTrigger
   onTrigger={() => alert("when you press Enter something happens")}
  >
   <Input placeholder="type..." bind:value color="input-emerald" />
   <Button label="Emerald" color="btn-emerald-outline" />
  </FormTrigger>
 </FormControl>

 <Join classList="space-x-0.5">
  <Button label="Indigo" color="btn-indigo-outline" />
  <Button label="Purple" color="btn-purple-outline" />
  <Button label="Teal" color="btn-teal-outline" />
 </Join>
</div>
