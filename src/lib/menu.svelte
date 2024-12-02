<nav class="menu">
    <!-- button linked to ul -->
    <button class="nav-toggler" aria-controls="main-navlist" aria-expanded="false">
        <img src="/hamburger.svg" alt="ouvrir ou fermer le menu">
    </button>

    <ul class="menu-links">
        <li><a href="/"><img src="logo-law-searcher.svg" alt="site" width="75" style="color:white;"></a></li>
        <li><a href="/">Accueil</a></li>
        <li><a href="/apropos">A Propos</a></li>
    </ul>
</nav>

<style>
    .menu {
        background-color: var(--color-darkblue);
        width: 100%;
        height: 10vh;
        display: flex;
        align-items: center;
    }

    .menu-links {
        display: flex;
        flex-grow: 1; 
    }

    .menu a {
       color: white;
       text-decoration: none;
       font-size: 20px;
       margin: 0 1rem;
    }

    .menu a:hover {
       color: #bfdbf7;
    } 

    .nav-toggler {
        order: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        align-self: baseline; 
        background: none; /* transparent */
        cursor: pointer;
        border: none;
    }

    .nav-toggler img {
        width: 20px;
    }
</style> 