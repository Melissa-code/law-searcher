<nav class="navbar navbar-expand-lg px-md-5" id="menu">
    <div class="container-fluid">
        <div class="row">
            <div class="navbar-content w-100 d-flex flex-column flex-lg-row justify-content-center align-items-center">
                <!-- Logo -->
                <a class="navbar-brand text-light d-flex align-items-center" href="/">
                    <img src="logo-law-searcher.svg" alt="site" width="50" style="color:white;">
                    <span class="brand px-2">LAW SEARCHER</span>
                </a>

                <!-- Menu links (collapsable) -->
                <div class="collapse navbar-collapse" id="burger-menu">
                    <div class="navbar-nav d-flex justify-content-center mb-md-2">
                        <a class="nav-link" href="/">Accueil</a>
                        <a class="nav-link" href="/apropos">A Propos</a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Menu burger -->
        <button id="burger" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#burger-menu" aria-controls="burger-menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>

<style>
    #menu {
        background-color: var(--color-darkblue) !important;
    }

    .container-fluid {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .navbar-content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .navbar-brand {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
    }

    .brand {
        font-family: var(--font-brand);
        font-weight: 700;
        font-size: 24px;
    }

    .navbar-nav {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .navbar-toggler {
        border: none;
        position: absolute;
        right: 20px;
        top: 20px;
    }

    .navbar-toggler-icon {
        background-image: url('data:image/svg+xml;charset=UTF8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="white"><path stroke="white" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/></svg>');
    }

    .nav-link {
        color: var(--color-white);
    }

    .nav-link:hover {
        color: var(--color-green);
    }

    @media (max-width: 992px) {
        .navbar-content {
            flex-direction: column; 
            align-items: center;
        }

        .navbar-nav {
            flex-direction: column;
            gap: 10px;
            text-align: center;
        }
    }

    @media (min-width: 992px) {
        .navbar-content {
            flex-direction: row; 
        }
    }
</style>
