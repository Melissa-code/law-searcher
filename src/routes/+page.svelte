<script>
// @ts-nocheck
  import Card from '$lib/card.svelte';
  import Modal from '$lib/modal.svelte';

  export let data; 
  const lois = data.dataApi;
  console.log(lois)

  /**
   * @type {{ title: any; description: any; } | null}
   */
  let selectedLoi = null; 
</script>

<!-- Laws cards -->
<div class="cards-container">
  {#each lois as loi}
    <Card
      title={loi.title}
      description={loi.description}
      buttonText="Voir la description" 
      on:click={()=> selectedLoi = loi}
    />
  {/each}
</div>

<!-- Modal -->
{#if selectedLoi}
  <Modal 
    title={selectedLoi.title} 
    description={selectedLoi.description} 
    page={selectedLoi.page}
    size="xl"
  />
{/if}


<style>
  .cards-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);  
    gap: 20px;
    margin: 4rem auto;  
    max-width: 1200px;  
    justify-content: center;  
    align-content: center;  
  }

  @media (max-width: 1200px) {
    .cards-container {
      grid-template-columns: repeat(2, 1fr); 
    }
  }

  @media (max-width: 768px) {
    .cards-container {
      grid-template-columns: 1fr;
    }
  }
</style>






