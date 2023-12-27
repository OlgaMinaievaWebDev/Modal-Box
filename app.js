const modal = document.getElementById("modal");
const closeModal = document.getElementById("modal-close-btn");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});
