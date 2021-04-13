const roomsList = document.querySelector(".rooms__list");
const listButtons = roomsList.querySelectorAll(".room-card__button");
const listReserve = roomsList.querySelectorAll(".room-card__reserve");
const listReserveLink = roomsList.querySelectorAll(".room-card__payment-link");
const listRoomLink = roomsList.querySelectorAll(".room-card__title-link");

const list = roomsList.querySelectorAll(".room-card");

const roomReserve = (el) => {
   listReserve[el].classList.remove("room-card__reserve--current");
   listButtons[el].tabIndex = -1;
   listReserve[el].tabIndex = 0;
   listReserveLink[el].tabIndex = 0;
   listRoomLink[el].tabIndex = -1;
}

const roomCancelReservation = (el) => {
   listReserve[el].classList.add("room-card__reserve--current");
   listButtons[el].tabIndex = 0;
   listReserve[el].tabIndex = -1;
   listReserveLink[el].tabIndex = -1;
   listRoomLink[el].tabIndex = 0;
}

for (let i = 0; i < listButtons.length; i++) {
   listButtons[i].onclick = () => {
      roomReserve(i);
   };

   listReserve[i].onclick = () => {
      roomCancelReservation(i);
   };

   listReserve[i].focus = () => {
      roomCancelReservation(i);
   };

   listReserve[i].onkeydown = (evt) => {
      if (evt.key === ("Escape" || "Esc")) {
         roomCancelReservation(i);
      }
   }
}