<!-- src/routes/loi/[id].svelte -->
<script>
  import { loisStore } from '$lib/store';
  import { get } from 'svelte/store';

  export let id;  // Récupérer l'ID passé dans l'URL

  // Récupérer toutes les lois depuis le store
  const lois = $loisStore;

  // Trouver la loi correspondante à l'ID
  const loiDetails = lois.find(loi => loi.id === id);
</script>

<h1>Détails de la loi</h1>

{#if loiDetails}
  <p><strong>Titre:</strong> {loiDetails.title}</p>
  <p><strong>Description:</strong> {loiDetails.description}</p>
  <a href={loiDetails.uri} target="_blank">Voir la loi complète</a>
{:else}
  <p>Lois non trouvée</p>
{/if}
