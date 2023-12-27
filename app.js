const modal = document.getElementById("modal");
const closeModal = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  const fullName = consentFormData.get("name");

  modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`;

  setTimeout(function () {
    document.getElementById("upload-text").textContent = `Making the sale...`;
  }, 1500);

  setTimeout(function () {
    document.getElementById("modal-inner").innerHTML = `
  <h2>Thanks <span class="modal-display-name">${fullName}</span> sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
  `;
  }, 3000);
});
