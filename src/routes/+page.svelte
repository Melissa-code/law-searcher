<script>
// @ts-nocheck
  import Card from '$lib/card.svelte';
  import Modal from '$lib/modal.svelte';
  import Searchbar from '$lib/searchbar.svelte';
  import Title from '$lib/title.svelte';

  export let data; 
  const lois = data.dataApi;
  //console.log(lois)

  let filteredLaws = lois;
  /**
   * @type {{ title: any; description: any; } | null}
   */
   let selectedLoi = null; 

  /**
   * filter the laws by title 
   * @param searchTerm
   */
  function handleSearch(searchTerm) {
    const term = searchTerm.toLowerCase();
    filteredLaws = lois.filter((loi) => loi.title.toLowerCase().includes(term));
  }
</script>


<div>
  <Title title="Accueil" showTitle={false}/>
</div>

<!--  Searchbar -->
<Searchbar onSearch={handleSearch} />

<!-- Laws cards -->
<div class="cards-container">
  {#each filteredLaws as loi}
    <Card
      title={loi.title}
      description={loi.description}
      buttonText="Voir la description"
      on:click={() => (selectedLoi = loi)}
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
    margin: 5rem auto;  
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
      margin: 3rem auto;  
    }
  }
</style>






