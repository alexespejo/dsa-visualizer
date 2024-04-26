<script>
 export let label;
</script>

<div class="form-control flex max-w-xs font-bold">
 <div class="label">
  <span class="label-text">{label}</span>
 </div>
 <div class="join">
  <slot />
 </div>
</div>
