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
    name: "Bronwstone",
    link: "https://images.unsplash.com/photo-1515112569565-1e4aef316db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];
/* ------------------------------------ */
/* ------------Elements---------------- */
/* ------------------------------------ */
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
const cardList = document.querySelector(".cards__list");
const carTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/* ------------------------------------- */
/* ------------Functions--------------- */
/* ------------------------------------ */
//! Reuseable Callback functions to close the modal.
function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}
//! Callback functions to update the form field upon opening the Modal.
function updateFormField() {
  profileEditModal.classList.add("modal_opened");
  modalFormInputTitle.value = profileTitle.textContent;
  modalFormInputDescription.value = profileDescription.textContent;
}
//! This ECMAScript 6 (ES6) Function works too.

function getCardElement(cardData) {
  // Declare a getCardElement() function with one parameter named data. You’ll be passing objects of the array to it. The function should:
  //clone the template element with all its content and store it in a cardElement variable.
  const cardElement = carTemplate.cloneNode(true);
  //access the card title and image and store them in variables.
  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");
  // Set the path to the image to the link field of the object
  cardImageElement.src = cardData.link; // Set the image source
  // Set the image alt text to the name field of the object
  cardImageElement.alt = cardData.name; // Set the image alt attribute
  //set the card title to the name field of the object, too
  cardTitleElement.textContent = cardData.name;
  //return the ready HTML element with the filled-in data.
  return cardElement;
}

/* ------------------------------------- */
/* ------------Event Handlers----------- */
/* ------------------------------------- */

//! Function/Event Handler to prevent the page to reload upon submiting
//! Update the profile elements with the form fiels value upon submitting
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = modalFormInputTitle.value;
  profileDescription.textContent = modalFormInputDescription.value;
  closePopup();
}

/* ------------------------------------- */
/* ------------EventListeners----------- */
/* ------------------------------------- */

//! Add an event listener to the profile edit button.
//!Set the modal button to open upon clicking.
//!Set the value of the form inputs to the profile elements text contents.

profileEditButton.addEventListener("click", updateFormField);
modalCloseButton.addEventListener("click", closePopup);

//!Prevent the page to reload after form submission.
profileEditForm.addEventListener("submit", handleFormSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardList.prepend(cardElement);
});
