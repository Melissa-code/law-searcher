<script>
    import Titre from '$lib/titre.svelte';
    import Menu from '$lib/menu.svelte';
    import './styles/global.css';
</script>

<header>
    <Menu/>
    <Titre titre="titre défini"/>
</header>

<main>
    <slot />
</main>

<footer>
    <p>Copyright &copy; 2024</p>
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
        height: 10vh; 
    }

</style>