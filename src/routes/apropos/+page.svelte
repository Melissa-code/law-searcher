<script>
  import Title from '$lib/title.svelte';
</script>

<div class="container ms-3 mb-md-4">
    <Title title="A Propos" />
</div>

<!-- informations about Law Searcher -->
<div class="container mx-3 my-5">
    <div class="row">
        <div class="col-12 my-2">
            <h2 class="mb-3">Présentation</h2>
            <p>Law Search est une plateforme en ligne conçue pour faciliter l'accès à des informations légales en France. Grâce à une interface simple et intuitive, vous pouvez rechercher des lois, des décrets, des règlements et d'autres documents légaux à partir d'une base de données fiable.</p>
        </div>
        <hr>

        <div class="col-12 my-2">
            <h2 class="mb-3">Objectifs</h2>
            <ul>
                Notre objectif est de rendre la législation facilement accessible pour tous. Avec Law Search, vous pouvez :
                <li>Rechercher des lois par titre,</li>
                <li>Accéder directement au texte complet des lois,</li>
                <li>Filtrer les résultats par date, catégorie juridique ou type de texte.</li>
            </ul>
        </div>
        <hr>
        
        <div class="col-12 my-2">
            <h2 class="mb-3">Comment utiliser le site ?</h2>
            <p>Pour commencer à rechercher une loi, entrez simplement un mot-clé de loi dans la barre de recherche située en haut de la page d'accueil. Les résultats s'afficheront instantanément, et vous pourrez affiner vos recherches à l'aide de filtres spécifiques.</p>
        </div>
        <hr>

        <div class="col-12 my-2">
            <h2 class="mb-3">API utilisée pour l'accès aux lois</h2>
            <p>L'API publique data.gouv.fr permet de récupérer les données sur les lois et garantir l'actualisation des informations.</p>
        </div>
    </div>
</div>

<style>
  hr {
    border: 1px solid var(--color-green);
  }
</style>