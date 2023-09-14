<script lang="ts">
  let addedClasses = "";
  export { addedClasses as class };
  export let style = "";
</script>

<div
  class={`bg-dark p-3 rounded-lg shadow-md shadow-black border-2 border-purple ${addedClasses}`}
  {style}
>
  <slot />
</div>
