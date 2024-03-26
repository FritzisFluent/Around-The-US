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
    name: "Brownstone",
    link: "https://images.unsplash.com/photo-1515112569565-1e4aef316db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];
/* ------------------------------------ */
/* ------------Elements---------------- */
/* ------------------------------------ */

// Elements related to profile editing
const editProfileButton = document.querySelector("#profile-edit-button");
const editProfileModal = document.querySelector("#profile-edit-modal");
const closeEditModalButton = document.querySelector("#modal-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editFormInputTitle = document.querySelector("#form-input-title");
const editFormInputDescription = document.querySelector(
  "#form-input-description"
);
const editProfileForm = editProfileModal.querySelector(".modal__form");

// Elements related to adding a new card
const addCardButton = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector("#add-card-modal");
const closeAddModalButton = addCardModal.querySelector(
  "#add-modal-close-button"
);

// Template and list for cards
const cardList = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// Function to open the profile edit modal
function openEditProfileModal() {
  editProfileModal.classList.add("modal_opened");
  editFormInputTitle.value = profileTitle.textContent;
  editFormInputDescription.value = profileDescription.textContent;
}

// Function to close any modal
function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

// Function to open the add card modal
function openAddCardModal() {
  addCardModal.classList.add("modal_opened");
}

// Function to create and return a new card element
function createCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");
  cardImageElement.src = cardData.link;
  cardImageElement.alt = cardData.name;
  cardTitleElement.textContent = cardData.name;
  return cardElement;
}

// Event listener for the edit profile button
editProfileButton.addEventListener("click", openEditProfileModal);

// Event listener for the close edit modal button
closeEditModalButton.addEventListener("click", () =>
  closePopup(editProfileModal)
);

// Event listener for the add card button
addCardButton.addEventListener("click", openAddCardModal);

// Event listener for the close add card modal button
closeAddModalButton.addEventListener("click", () => closePopup(addCardModal));

// Event listener for the profile edit form submission
editProfileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileTitle.textContent = editFormInputTitle.value;
  profileDescription.textContent = editFormInputDescription.value;
  closePopup(editProfileModal);
});

// Populate the page with initial cards
initialCards.forEach((cardData) => {
  const cardElement = createCardElement(cardData);
  cardList.prepend(cardElement);
});
