export function modal() {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelector('.modal-btn');
  const closeBtn = document.querySelector('.close');

  modalBtn.onclick = function() {
    modal.style.display = 'block';
  }

  closeBtn.onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  }
}