import { createCars } from '../../api-requests/create-car';
import { Cars, getCars } from '../../api-requests/get-cars';
import { containerImages, containerCar } from '../elements/wrapper/wrapper';
import { carHeader, carFooter } from '../elements/car-header/car_parts';
import { nameCar } from '../elements/name/name';
import { carImage, flagImage } from '../elements/svg/svg';
import { btnBack, btnReset, btnSelect, btnStart } from '../elements/button/button';

class NewCar {
  getValues() {
    const inputCrete = document.querySelector('.input_create');
    const newColor = document.querySelector('.color_create');
    const buttonCreate = document.querySelector('.btn_create');

    buttonCreate?.addEventListener('click', (e: Event) => {
      e.preventDefault();
      if (inputCrete instanceof HTMLInputElement && newColor instanceof HTMLInputElement) {
        createCars('http://127.0.0.1:3000/garage', { name: inputCrete.value, color: newColor.value }).then((data) =>
          console.log(data)
        );
        inputCrete.value = '';
        newColor.value = '#FFFFFF';
      }
      return this.createCar();
    });
  }

  createCar() {
    const garage = document.getElementById('garage');
    getCars().then((cars: Cars) => {
      cars.forEach((car) => {
        const number = cars.length;
        if (number === car.id) {
          const container = containerCar.createElement();
          const containerImg = containerImages.createElement();
          const header = carHeader.createElement();
          const select = btnSelect.createElement();
          select.id = `${car.id}`;
          const reset = btnReset.createElement();
          reset.id = `${car.id}`;
          const name = nameCar.createElement();
          name.className = `name ${car.name}`;
          name.textContent = `${car.name}`;
          name.style.color = car.color;
          const footer = carFooter.createElement();
          const carColor = carImage.createElement();
          carColor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 42.591"  fill=${car.color} xml:space="preserve"><path d="M19.525,24.44c-5,0-9.069,4.075-9.069,9.089c0,4.986,4.069,9.062,9.069,9.062c5.013,0,9.088-4.076,9.088-9.062  C28.613,28.515,24.538,24.44,19.525,24.44z M19.525,38.412c-2.676,0-4.876-2.201-4.876-4.883c0-2.695,2.201-4.896,4.876-4.896  c2.695,0,4.889,2.201,4.889,4.896C24.414,36.21,22.22,38.412,19.525,38.412z"></path><path d="M80.632,24.44c-5.007,0-9.076,4.075-9.076,9.089c0,4.986,4.069,9.062,9.076,9.062c5.006,0,9.068-4.076,9.068-9.062  C89.7,28.515,85.638,24.44,80.632,24.44z M80.632,38.412c-2.695,0-4.89-2.201-4.89-4.883c0-2.695,2.194-4.896,4.89-4.896  s4.889,2.201,4.889,4.896C85.521,36.21,83.327,38.412,80.632,38.412z"></path><path d="M98.249,26.732c0-8.815-5.495-9.87-5.495-9.87c-8.079-1.133-21.999-1.719-21.999-1.719C69.479,12.93,63.581,0,60.149,0  c-1.158,0-25.781,0-30.143,0c-4.368,0-11.523,12.604-13.092,15.456c0,0-5.482,0.938-8.066,1.537c-1.432,0.325-5.41,0.403-5.41,11.51  H0v5.026h8.366c0-6.172,5.007-11.172,11.159-11.172c6.178,0,11.172,5,11.172,11.172H69.46c0-6.172,4.986-11.172,11.172-11.172  c6.165,0,11.165,5,11.165,11.172H100v-6.797H98.249z M44.746,14.284H27.344c2.35-7.331,6.712-12.565,8.555-12.565  c2.311,0,8.848,0,8.848,0V14.284z M47.988,14.284V1.719c0,0,8.978,0,11.289,0c2.324,0,7.422,10.638,8.854,13.359L47.988,14.284z"></path></svg>`;
          const flags = flagImage.createElement();
          const back = btnBack.createElement();
          back.id = `${car.id}`;
          const start = btnStart.createElement();
          start.id = `${car.id}`;
          container.append(header);
          header.append(select, reset, name);
          footer.append(start, back);
          containerImg.append(carColor, flags);
          container.append(footer, containerImg);
          if (garage != null) {
            garage.append(container);
          }
        }
      });
    });
    return garage;
  }
}

export const car = new NewCar();
