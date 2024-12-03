<script>
// @ts-nocheck
    /**
     * @type {(arg0: string) => void}
     */
    export let onSearch; 
    let searchTerm = "";
  
    /**
     * Value of the input to the parent
     * @param {{ target: { value: string; }; }} event
     */
    function handleInput(event) {
      searchTerm = event.target.value;
      if (onSearch) onSearch(searchTerm);
    }
</script>


<div class="input-container my-2">
    <label for="search-input" class="input-label">Rechercher une loi :</label>
    <div class="input-wrapper">
        <input 
            type="text" 
            id="search-input" 
            class="styled-input" 
            placeholder="Tapez le titre de la loi ici..." 
            bind:value={searchTerm}
            on:input={handleInput}
        />
    </div>
</div>

<style>
    .input-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 30rem;
        margin: 0 auto 2rem auto;
        width: 100%;
    }

    .input-label {
        font-weight: bold;
        margin-bottom: 8px;
    }

    .input-wrapper {
        display: flex;
        width: 100%;
        position: relative;
        z-index: 1; 
    }

    .styled-input {
        flex: 1;
        padding: 0.8rem 1rem;
        font-size: 1rem;
        border: 2px solid rgba(2, 43, 58, 0.4); 
        border-radius: 8px;
        outline: none;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 2px 5px rgba(2, 43, 58, 0.2); 
    }

    .styled-input::placeholder {
        color: #aaa;
        font-style: italic;
    }

    .styled-input:focus {
        border-color: var(--color-darkblue);
        box-shadow: 0 4px 10px rgba(2, 43, 58, 0.4); 
    }

    @media (max-width: 768px) {
        .input-container {
            max-width: 100%;
        }

        .styled-input {
            font-size: 0.9rem;
            padding: 0.6rem 0.8rem;
        }
    }
</style>
