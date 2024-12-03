<script>
    import Menu from '$lib/menu.svelte';
    import './styles/global.css';

    const now = new Date();
    const currentYear = now.getFullYear();
</script>

<header>
    <Menu />
</header>

<main>
    <slot />
</main>

<footer class="text-center py-2">
    <div class="my-3">
        <p class="mb-0">Copyright &copy; Law Searcher {currentYear} Tous droits réservés</p>
    </div>
    <ul class="list-unstyled d-flex justify-content-center gap-3">
    <li><a href="#mentions-legales" class="text-decoration-none link-footer" target="_blank">Mentions légales</a></li>
    <li><a href="#cgu" class="text-decoration-none link-footer" target="_blank">CGU</a></li>
    </ul>
</footer>  

<style>
    main {
        flex: 1;  
        max-width: 80rem;
        margin: 2rem auto;
    }

    footer {
        background-color: var(--color-lightgrey);
        height: 8vh; 
        padding: 0 10px;
    }

    .link-footer {
        color: var(--color-black);
        font-size: 17px;
    }

    .link-footer:hover {
        color: var(--color-green);
    }

    @media (max-width: 768px) {
        footer {
            height: 20%;
        }
    }
</style>