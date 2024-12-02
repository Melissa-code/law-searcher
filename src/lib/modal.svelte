<script>
  export let title = ''; 
  export let description = '';
  export let page = '';
  export let size = ''; 
</script>

<div 
  class="modal fade" 
  id="loiModal" 
  tabindex="-1" 
  aria-labelledby="loiModalLabel" 
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-{size}">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title p-3 text-center" id="loiModalLabel">{title}</h3>
        <button 
          type="button" 
          class="btn-close" 
          data-bs-dismiss="modal" 
          aria-label="Close">
        </button>
      </div>
      <div class="modal-body p-4">
        <p>{description}</p>
      </div>
      <div class="modal-footer">
        <button 
          type="button" 
          class="btn btn-custom btn-modal my-2" 
          data-bs-dismiss="modal">
          <a href={page} target="_blank">Voir le site data.gouv.fr</a>
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .modal-dialog {
    margin: auto;
  }

  .modal-header {
    background-color: var(--color-darkblue);
    color: var(--color-white);
  }

  .modal-title {
    text-align: center; 
    margin: 0 auto; 
    width: 100%; 
  }

  .btn-close {
    filter: brightness(0) invert(1); 
  }

  .btn-close:hover {
    opacity: 0.8; 
  }

  .modal-footer {
    text-align: center;
  }

  .btn-modal {
      display: block;
      margin: auto;
      align-items: center; 
      width: 30%;
      text-align: center; 
      padding: 10px; 
      border: none;
      margin-top: auto;
  }

  .btn-modal:hover {
    color: var(--color-black);
  }

  .btn-modal a:hover {
    color: var(--color-black);
  }
</style>