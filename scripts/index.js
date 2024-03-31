/* ------------------------------------ */
/* ------Initial Cards Array----------- */
/* ------------------------------------ */
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
    name: "BrownStone",
    link: "https://images.unsplash.com/photo-1515112569565-1e4aef316db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];
/* ------------------------------------ */
/* --------Selecting DOM Elements------ */
/* ------------------------------------ */

//Selecting the profile edit button
const profileEditButton = document.querySelector("#profile-edit-button");
//Selecting the profile edit modal
const profileEditModal = document.querySelector("#profile-edit-modal");
//Selecting the close button for the profile edit modal
const closeEditModalButton = document.querySelector("#modal-close-button");
//Selecting the profile title
const profileTitle = document.querySelector(".profile__title");
//Selecting the profile description
const profileDescription = document.querySelector(".profile__description");
//Selecting the input field for the title
const modalFormInputTitle = document.querySelector("#form-input-title");
//Selecting the input field for the description
const modalFormInputDescription = document.querySelector(
  "#form-input-description"
);
//Selecting the form for the profile edit modal
const profileEditForm = profileEditModal.querySelector(".modal__form");
//Selecting the add card button
const addCardButton = document.querySelector(".profile__add-button");
//Selecting the add card modal
const addCardModal = document.querySelector("#add-card-modal");
//Selecting the close button for the add card modal
const closeAddCardModalButton = addCardModal.querySelector(
  "#add-modal-close-button"
);
//Selecting the card list
const cardList = document.querySelector(".cards__list");
//Selecting the form for the add card modal
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
//Selecting the form for the add card modal
const addCardForm = addCardModal.querySelector("#add-card-form");

/* --------------------------------------------------- */
/* -----------Functions for Modal Operations---------- */
/* -------------------------------------------------- */

// Function to open the modal is called "openPopup"
function openPopup(modal) {
  modal.classList.add("modal_opened");
}

// Function to close the modal is called.
function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

/* --------------------------------------------------- */
/* -----------Function to Create a Card Element---------- */
/* -------------------------------------------------- */

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  //setting the card title and image source to the card data values
  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  /* ---------------------------------------- */
  /* ---------------------------------------- */
  //selecting the all the card-like-buttons
  const likeButton = cardElement.querySelector(".card__like-button");
  //adding an event listener to each like button
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
    console.log("clik");
  });
  /* ---------------------------------------- */
  /* ---------------------------------------- */
  //selecting the delete button
  const deleteButton = cardElement.querySelector(".card__delete-button");
  //adding an event listener to each delete button in order to remove the card when clicked
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  /* ---------------------------------------- */
  /* ---------------------------------------- */
  // Selecting the image preview modal and its image element
  const imageModal = document.querySelector(".modal__preview");
  const modalImage = imageModal.querySelector(".modal__image-preview");
  // Selecting the modal container

  // Setting up the click event listener for the card image
  cardImage.addEventListener("click", () => {
    modalImage.src = cardData.link; // Assign the correct image source
    modalImage.alt = cardData.name; // Assign the appropriate alt text
    openPopup(imageModal); // Open the image preview modal
  });

  // Selection the button that closes the image preview modal
  const closeImageModalButton = document.querySelector(
    "#image-modal-close-button"
  );

  // Function to close the image preview modal
  function closeImageModal() {
    const imageModal = document.querySelector(".modal__preview"); // The class for the image modal
    closePopup(imageModal); // Call the general closePopup function with the specific modal as argument
  }

  // Event listener for the close button of the image preview modal
  closeImageModalButton.addEventListener("click", closeImageModal);

  return cardElement;
}

/* -------------------------------------------------- */
/* ------Event Handlers for Form Submissions---------- */
/* --------------------------------------------------- */

// Function to handle the form submission for editing the profile
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = modalFormInputTitle.value;
  profileDescription.textContent = modalFormInputDescription.value;
  closePopup(profileEditModal);
}

// Function to handle the form submission for adding a new card
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const cardName = addCardForm.querySelector("#card-name-input").value;
  const cardLink = addCardForm.querySelector("#card-link-input").value;
  const newCard = getCardElement({ name: cardName, link: cardLink });
  cardList.prepend(newCard);
  closePopup(addCardModal);
  addCardForm.reset();
}

/* ---------------------------------------------------- */
/* ---------------Event Listeners--------------------- */
/* -------------------------------------------------- */

// Event listeners for the profile edit modal
profileEditButton.addEventListener("click", () => openPopup(profileEditModal));
closeEditModalButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);

//Event listener for the edit form submission
profileEditForm.addEventListener("submit", handleProfileFormSubmit);

// Event listeners for the add card modal
addCardButton.addEventListener("click", () => openPopup(addCardModal));
closeAddCardModalButton.addEventListener("click", () =>
  closePopup(addCardModal)
);

//Event listener for the card form submission
addCardForm.addEventListener("submit", handleAddCardFormSubmit);

/* -------------------------------------------------------- */
/* -----------Rendering Initial Cards--------------------- */
/* ------------------------------------------------------- */
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardList.prepend(cardElement);
});
