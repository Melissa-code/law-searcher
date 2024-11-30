
<script>
  export let data; 
  console.log("Les données reçues sont", data);
  const lois = data.dataApi;
  console.log(lois)
</script>

<div class="cards-container">
  {#each lois as loi}
      <!-- <div>
          <p>{loi.title}</p>
          <p>{loi.description}</p>
          <p>{loi.uri}</p>
      </div> -->
      <div class="card">
        <div class="card-content">
          <h2 class="card-title">{loi.title}</h2>
          <p class="card-description">Exemple de card. Contenu ici: texte, images ou boutons.</p>
          <button class="card-button">Voir la loi</button>
        </div>
      </div>
  {/each}
</div>

<style>

.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);  
  gap: 20px;
  margin: 0 auto;  
  max-width: 1200px;  
  justify-content: center;  
  align-content: center;  
}

@media (max-width: 1200px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
  }
}

.card {
  width: 300px;
  border-radius: 8px;  
  overflow: hidden;        
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
}

.card-description {
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
}

/* Style du bouton */
.card-button {
  background-color: #4CAF50; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.card-button:hover {
  background-color: #45a049; 
}

</style>






