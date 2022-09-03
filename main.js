const modalButton = document.querySelector(".modal-btn");
const modalBox = document.querySelector(".modal-container");

// open modal box when click on modal button
modalButton.addEventListener("click", (e) => {
  modalBox.classList.add("show");
});

// close modal box when click out of modal box
modalBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-container")) {
    modalBox.classList.remove("show");
  }
});
