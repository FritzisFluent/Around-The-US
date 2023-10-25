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

//!Project 4 Stage 3. The DOM
//?The modal box must be opened once the user clicks on the "Edit" button, and be closed upon clicking on the close button in the upper right corner:

//! Select the profile edit button using its id.
const profileEditButton = document.querySelector("#profile-edit-button");

//! select the modal using the its id.
const profileEditModal = document.querySelector("#profile-edit-modal");

//! select the modal__close button using its id.
const modalCloseButton = document.querySelector("#modal-close-button");

//! Add an event listener to the profile edit button
profileEditButton.addEventListener("click", () => {
  //! set the modal button to open upon clicking
  profileEditModal.classList.add("modal__opened");
  //! Set the value of the form inputs to the profile elements text contents.
  modalFormInputTitle.value = profileTitle.textContent;
  modalFormInputDescription.value = profileDescription.textContent;
});

//! Add an eventListener to the moda__close button
modalCloseButton.addEventListener("click", () => {
  //! set the modal_close button to close upon clicking
  closePopup();
});

//!Project 4. Final Stage:
//!  Form fields, once the form has been opened, the "Name" and "About me" fields must be filled in with the values displayed on the page.

//? Select the HTML profile elements displaying current values
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//? Select the HTML form elements displaying current values
const modalFormInputTitle = document.querySelector("#form-input-title");
const modalFormInputDescription = document.querySelector(
  "#form-input-description"
);

//?Editing your name and about me.
//!Just opening and closing the modal box isn't enough. This is the "Edit profile" modal, so it must edit the corresponding fields of the page. Once the user enters new information and clicks on the "Save" button, the page has to update to reflect the changes made, with the modal closing simultaneously:

const profileEditForm = profileEditModal.querySelector(".modal__form");

profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileTitle.textContent = modalFormInputTitle.value;
  profileDescription.textContent = modalFormInputDescription.value;
  closePopup();
});

//Callback function to close the modal
function closePopup() {
  profileEditModal.classList.remove("modal__opened");
}
