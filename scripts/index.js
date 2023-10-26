/* ---------------------Card Objects----------------------------- */
const initialCards = [
  //!Object1
  {
    name: "Dumbo",
    link: "https://images.unsplash.com/photo-1559782035-4d0ba89c0540?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  //!Object2
  {
    name: "Subway",
    link: "https://images.unsplash.com/photo-1517871096864-bf03ad78489d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  //!Object3
  {
    name: "Street Art",
    link: "https://images.unsplash.com/photo-1577641756973-934ad53fe8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
  },
  //!Object4
  {
    name: "Washington Heights",
    link: "https://images.unsplash.com/photo-1677698584665-afd7d20c6ca2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  //!Object5
  {
    name: "The Bronx",
    link: "https://images.unsplash.com/photo-1571191008066-0c00b02c4857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  //!Object6
  {
    name: "BronwStone",
    link: "https://images.unsplash.com/photo-1515112569565-1e4aef316db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

/* ------------Elements----------- */
//!Select the modal, profile edit & modal__close button using their id.
//!Select the HTML profile elements and form elements displaying current values.
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const modalCloseButton = document.querySelector("#modal-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const modalFormInputTitle = document.querySelector("#form-input-title");
const modalFormInputDescription = document.querySelector(
  "#form-input-description"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");

/* ------------Functions----------- */
//! Reuseable Callback function to close the modal.
function closePopup() {
  profileEditModal.classList.remove("modal__opened");
}

/* ------------Event Handlers----------- */
//!Prevent the page to reload after form submission.
profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileTitle.textContent = modalFormInputTitle.value;
  profileDescription.textContent = modalFormInputDescription.value;
  closePopup();
});

/* ------------EventListeners----------- */
//! Add an event listener to the profile edit button.
//! Add an eventListener to the moda__close button.
//!Set the modal button to open upon clicking.
//!Set the value of the form inputs to the profile elements text contents.
//!set the modal_close button to close upon clicking.
profileEditButton.addEventListener("click", () => {
  profileEditModal.classList.add("modal__opened");
  modalFormInputTitle.value = profileTitle.textContent;
  modalFormInputDescription.value = profileDescription.textContent;
});
modalCloseButton.addEventListener("click", () => {
  closePopup();
});
