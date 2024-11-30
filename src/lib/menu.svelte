<div class="menu">
    <div class="menu-logo">
        <img src="favicon.png" alt="site" width="75">
    </div>
    <div class="menu-links">
        <a href="/">Accueil</a>
        <a href="/apropos">A Propos</a>
    </div>
</div>

<style>
    
    .menu {
        background-color: var(--color-darkblue);
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    .menu-logo {
        margin: 0 2rem;
    }

    .menu-links {
        display: flex;
        justify-content: center;
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

</style>