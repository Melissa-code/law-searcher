<script>
    export let title = 'Titre de la page'; 
    export let showTitle = true; 
</script>


{#if showTitle}
  <div>
    <h1 class="title">{title}</h1>
  </div>
{/if}

<style>
 
</style>
