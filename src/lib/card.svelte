<script>
    export let title;
    export let description;
    export let buttonText;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
</script>
  
<div class="card">
    <div class="card-content">
        <h2 class="card-title">{title}</h2>
        <p class="card-description">{description}</p>
        <button class="btn-custom card-btn" on:click={() => dispatch('click')} data-bs-toggle="modal" data-bs-target="#loiModal" >
           {buttonText}
        </button>
    </div>
</div>
  
<style>
    .card {
        width: 300px;
        border-radius: 8px;  
        overflow: hidden;        
        box-shadow: 0 4px 10px rgba(2, 43, 58, 1);
        background-color: white;  
        margin: 20px;
        transition: transform 0.3s ease; 
    }

    .card:hover {
        transform: translateY(-5px);  
    }
    .card-content {
        padding: 16px;
    }

    .card-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
        display: -webkit-box; 
        -webkit-box-orient: vertical; 
        overflow: hidden; 
        text-overflow: ellipsis; /* ... */
        line-clamp: 3;
        -webkit-line-clamp: 3;
        line-height: 1.5; 
        min-height: calc(1.5em * 3); 
    }

    .card-description {
        font-size: 16px;
        margin-bottom: 20px;
        display: -webkit-box; 
        -webkit-box-orient: vertical; 
        overflow: hidden; 
        text-overflow: ellipsis; 
        line-clamp: 2;
        -webkit-line-clamp: 2;
    }

    .card-btn {
        display: flex;
        justify-content: center; 
        align-items: center; 
        width: 100%;
        font-size: 17px;
        text-align: center; 
        padding: 10px; 
        border: none;
        margin-top: auto;
    }
</style>
  