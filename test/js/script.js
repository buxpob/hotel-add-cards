const listRooms = document.querySelector(".rooms__list");
const listButtons = listRooms.querySelectorAll(".room-card__button");
const listReserveRooms = listRooms.querySelectorAll(".room-card__reserve");
const listReserveRoomLinks = listRooms.querySelectorAll(".room-card__payment-link");
const listTitleRoomLinks = listRooms.querySelectorAll(".room-card__title-link");
const listOfferRooms = listRooms.querySelectorAll(".room-card__offer");

const roomReserve = (el) => {
   listReserveRooms[el].classList.remove("room-card__reserve--current");
   listOfferRooms[el].classList.add("room-card__offer--opasity");
   listButtons[el].tabIndex = -1;
   listReserveRooms[el].tabIndex = 0;
   listReserveRoomLinks[el].tabIndex = 0;
   listTitleRoomLinks[el].tabIndex = -1;
}

const roomCancelReservation = (el) => {
   listReserveRooms[el].classList.add("room-card__reserve--current");
   listOfferRooms[el].classList.remove("room-card__offer--opasity");
   listButtons[el].tabIndex = 0;
   listReserveRooms[el].tabIndex = -1;
   listReserveRoomLinks[el].tabIndex = -1;
   listTitleRoomLinks[el].tabIndex = 0;
}

for (let i = 0; i < listButtons.length; i++) {
   listButtons[i].onclick = () => {
      roomReserve(i);
   };

   listReserveRooms[i].onclick = () => {
      roomCancelReservation(i);
   };

   listReserveRooms[i].focus = () => {
      roomCancelReservation(i);
   };

   listReserveRooms[i].onkeydown = (evt) => {
      if (evt.key === ("Escape" || "Esc")) {
         roomCancelReservation(i);
      }
   }
}