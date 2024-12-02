<script>
    import Titre from '$lib/titre.svelte';
    import Menu from '$lib/menu.svelte';
    import Searchbar from '$lib/searchbar.svelte';
    import './styles/global.css';

    const now = new Date();
    const currentYear = now.getFullYear();
</script>

<header>
    <Menu/>
    <Titre titre="titre défini"/>
</header>

<main>
    <Searchbar/>
    <slot />
</main>

<footer>
    <p>Copyright &copy; {currentYear}</p>
</footer>

<style>
    main {
        flex: 1;  
        max-width: 80rem;
        margin: 2rem auto;
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-lightgrey);
        height: 7vh; 
    }
</style>