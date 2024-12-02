<script>
    
</script>

<div class="input-container">
    <label for="search-input" class="input-label">Rechercher une loi :</label>
    <div class="input-wrapper">
        <input type="text" id="search-input" class="styled-input" placeholder="Tapez le titre de la loi ici...">
        <button class="btn-custom btn-search" aria-label="Rechercher">
            <img src="loupe-white.svg" alt="Rechercher" class="btn-icon">
        </button>
    </div>
</div>


<style>

.input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 30rem;
    margin: 0 auto 2rem auto;
}

.input-label {
    font-weight: bold;
    margin-bottom: 8px;
}

.input-wrapper {
    display: flex;
    width: 100%;
    position: relative;
}

.styled-input {
    flex: 1;
    padding: 12px 16px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 8px 0 0 8px;
    outline: none;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(2, 43, 58, 1);
}

.styled-input::placeholder {
    color: #aaa;
    font-style: italic;
}

.styled-input:focus {
    border-color: var(--color-darkblue); 
    box-shadow: 0 4px 10px rgba(2, 43, 58, 1); 
}

.btn-search {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.3rem;
    background-color: var(--color-green); 
    border: none;
    border-radius: 0 8px 8px 0;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 5px rgba(2, 43, 58, 1); 
}

.btn-custom:hover {
    background-color: var(--color-lightblue); 
}

.btn-icon {
    width: 3rem;
    height: 3rem;
    filter: none; 
    margin-top: 10px;
}

@media (max-width: 768px) {
    .input-container {
        max-width: 100%;
    }
}

</style>