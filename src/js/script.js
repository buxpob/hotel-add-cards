const buttonsList = document.querySelectorAll('.room-card__button');

const createListElementsCard = (evt) => {
  const card = evt.target.closest('.room-card');
  const cardReserve = card.querySelector('.room-card__reserve');
  const cardButton = card.querySelector('.room-card__button');
  const cardPaymentLink = card.querySelector('.room-card__payment-link');

  return [card, cardReserve, cardButton, cardPaymentLink];
}

const reserveMouseLeaveHandler = (evt) => {
  const card = evt.target.closest('.room-card');
  card.classList.add('room-card--reserved');
}

const reserveClickHandler = (evt) => {
  const [card, cardReserve, cardButton] = createListElementsCard(evt);

  card.addEventListener('mouseleave', reserveMouseLeaveHandler);
  cardReserve.addEventListener('click', cancelReserveClickHandler);
  cardButton.removeEventListener('click', reserveClickHandler);
}

const cancelReserveClickHandler = (evt) => {
  const [card, cardReserve, cardButton, cardPaymentLink] = createListElementsCard(evt);

  if (evt.target !== cardPaymentLink) {
    card.classList.remove('room-card--reserved');
    cardButton.addEventListener('click', reserveClickHandler);
    cardReserve.removeEventListener('click', cancelReserveClickHandler);
    card.removeEventListener('mouseleave', reserveMouseLeaveHandler);
  }
}

for (const button of buttonsList) {
  button.addEventListener('click', reserveClickHandler);
};

