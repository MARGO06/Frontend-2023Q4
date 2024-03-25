import { wrap, paginationContainer } from './components/wrapper/wrapper';
import { allHeader } from './components/header/header';
import { createView } from './components/view/view';
import { garagePage } from './components/one-page/one-page';
import { btnPrev, btnNext } from './components/button/button';
import { pageWinner } from './components/second-page/second-page';

import './style.css';

/*const card = document.createElement('div');
card.className = 'cars';
document.body.append(card);
fetchMovies().then((name) => {
  for (let i = 0; i < name.length; i += 1) {
    const cars = document.createElement('div');
    cars.className = `car{i}`;
    cars.textContent = `${name[i].name}`;
    card.append(cars);
  }
  console.log(name[0]);
});

const button = document.createElement('button');
button.className = 'click';
button.textContent = 'click';
card.append(button);

 getCar().then((car) => {
  const newCar = document.createElement('div');
  newCar.className = 'newCar';
  newCar.textContent = `${car.name}`;
  card.append(newCar);
});

console.log();
/* button.addEventListener('click', () => {
  getCar().then((car) => {
    const newCar = document.createElement('div');
    newCar.className = 'newCar';
    newCar.textContent = `${car.name}`;
    card.append(newCar);
  });
}); */

class Page {
  createPage() {
    const wrapper = wrap.createElement();
    document.body.append(wrapper);
    const header = allHeader.collectElements();
    wrapper.append(header);
    const view = createView.createElement();
    wrapper.append(view);
    const garage = garagePage.createPartPage();
    wrapper.append(garage);
    const winners = pageWinner.createPartPage();
    wrapper.append(winners);
    const pagination = paginationContainer.createElement();
    const buttonPrev = btnPrev.createElement();
    const buttonNext = btnNext.createElement();
    pagination.append(buttonPrev);
    pagination.append(buttonNext);
    wrapper.append(pagination);
  }
}
const page = new Page();
page.createPage();
