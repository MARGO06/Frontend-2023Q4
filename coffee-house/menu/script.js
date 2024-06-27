import { showNavigation, closeNavigation } from "./burger_menu.js";
import {
  fillArrays,
  clickButtonTea,
  clickButtonDesert,
  clickButtonCoffee,
  openCardsMedia,
} from "./load_goods.js";
import {
  showModalCoffee,
  openModalDessert,
  openModalTea,
  openModalCoffee,
  clickButtonClose,
  clickBackModal,
} from "./modal.js";
showNavigation();
closeNavigation();
fillArrays();
clickButtonTea();
clickButtonDesert();
clickButtonCoffee();
openCardsMedia();
showModalCoffee();
openModalCoffee();
openModalDessert();
openModalTea();
clickButtonClose();
clickBackModal();