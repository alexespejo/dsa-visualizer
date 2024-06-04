<script>
 import Input from "../../components/custom/Update/Input.svelte";
 import Button from "../../components/custom/Update/Button.svelte";
 import FormTrigger from "../../components/custom/layout/FormTrigger.svelte";
 import Join from "../../components/custom/layout/Join.svelte";
 import FormControl from "../../components/custom/FormControl.svelte";
 import Label from "../../components/custom/Inputs/Label.svelte";
 import HiddenLabel from "../../components/custom/Inputs/HiddenLabel.svelte";
 import Range from "../../components/custom/Update/Range.svelte";
 import Toggle from "../../components/custom/Update/Toggle.svelte";
 import ArrayDisplay from "../../components/Array/ArrayDisplay.svelte";
 import ArrayElementIndexed from "../../components/Array/ArrayElementIndexed.svelte";
 import Badge from "../../components/custom/Update/Badge.svelte";

 let value = "";
 let rangeValue = 25;
 let toggleValue = true;
 let elements = [1, 2, 3, 4, 5];
</script>

<h1 class="text-3xl p-4 font-bold">New Colors/Components</h1>
<ArrayDisplay>
 {#each elements as x, i}
  <ArrayElementIndexed index={i} flat>{x}</ArrayElementIndexed>
 {/each}
</ArrayDisplay>

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
 <FormTrigger onTrigger={() => alert("when you press Enter something happens")}>
  <Input placeholder="type..." bind:value color="input-emerald" />
  <Button label="Emerald" color="btn-emerald-outline" />
 </FormTrigger>
</FormControl>

<FormControl>
 <HiddenLabel />
 <Join classList="space-x-0.5">
  <Button label="Indigo" color="btn-indigo-outline" />
  <Button label="Purple" color="btn-purple-outline" />
  <Button label="Teal" color="btn-teal-outline" />
 </Join>
</FormControl>

<FormControl>
 <Label>Range Input {rangeValue}</Label>
 <div class="space-y-2 join join-vertical">
  <Range
   bind:value={rangeValue}
   step={10}
   min={10}
   max={90}
   color="range-sky"
  />
  <Range
   bind:value={rangeValue}
   step={10}
   min={10}
   max={90}
   color="range-emerald"
  />
  <Range
   bind:value={rangeValue}
   step={10}
   min={10}
   max={90}
   color="range-amber"
  />
 </div>
</FormControl>

<FormControl>
 <Label>Range With Tick Marks</Label>
 <Range step={10} color="range-purple" markings={true} />
</FormControl>

<FormControl>
 <Label>Toggle</Label>
 <div>
  <Toggle bind:checked={toggleValue} color="toggle-amber" />
  <Toggle bind:checked={toggleValue} color="toggle-sky" />
  <Toggle bind:checked={toggleValue} color="toggle-emerald" />
  <Toggle bind:checked={toggleValue} color="toggle-purple" />
  <Toggle bind:checked={toggleValue} color="toggle-indigo" />
  <Toggle bind:checked={toggleValue} color="toggle-teal" />
 </div>
</FormControl>
<FormControl>
 <Label>Badges</Label>
 <div class="flex space-x-1">
  <Badge label="Amber" color="badge-amber" />
  <Badge label="Teal" color="badge-teal" />
  <Badge label="Indigo" color="badge-indigo" />
  <Badge label="Purple" color="badge-purple" />
  <Badge label="Emerald" color="badge-emerald" />
  <Badge label="Sky" color="badge-sky" />
 </div>
</FormControl>
