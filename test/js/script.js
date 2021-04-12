const listButtons = document.querySelectorAll(".button");
const listCards = document.querySelectorAll(".room-card__reserve");
const listReserve = document.querySelectorAll(".room-card__reserve");

for (let i = 0; i < listButtons.length; i++) {
   console.log(listButtons[i]);
   listButtons[i].onclick = () => {
      console.log('1');
   }
}

// button.onclick = () => {
//    console.log("Hello");
// }