"use strict";

class Car {
  constructor(imgTag, make, model, year, milage, transmission, fuel, horsepower, price, shape) {
    this.imgTag = imgTag;
    this.make = make.toUpperCase();
    this.model = model;
    this.year = year;
    this.milage = milage;
    this.transmission = transmission.charAt(0).toUpperCase() + transmission.slice(1).toLowerCase();
    this.fuel = fuel.charAt(0).toUpperCase() + fuel.slice(1).toLowerCase();
    this.horsepower = horsepower;
    this.price = price;
    this.shape = shape;
  }
  displayList() {
    return `<div class="car-each" data-imgTag="${this.imgTag}">
          <img class="car-img" src="imgs/${this.imgTag}.jpg" />
          <div class="car-details-container">
           <h5 class="car-name">${this.make}</h5>
           <p class="car-edition">${this.model}</p>
           <p class="car-all-spec">${this.year} • ${this.milage}km • ${this.transmission} • ${this.fuel}</p>
           <div class="line"></div>
           <p class="car-price">${this.price}€</p>
         </div>
        </div>`;
  }
  displayCarDetails() {
    return `<div class="car-details">
              <button class="close-btn">↩</button>
              <div class="car-inner-details-left">
                <h5 class="car-name-inner">${this.make}</h5>
                <p class="car-edition-inner">${this.model}</p>
                <div class="line"></div>
                <p class="car-price-inner">${this.price}€</p>
                <div class="inner-grid-left">
                  <img src="icons/calendar.png" class="icon" />
                  <p class="car-inner-spec">${this.year}</p>
                  <img src="icons/milage.png" class="icon" />
                  <p class="car-inner-spec">${this.milage}km</p>
                  <img src="icons/fuel.png" class="icon" />
                  <p class="car-inner-spec">${this.fuel}</p>
                  <img src="icons/transmission.png" class="icon" />
                  <p class="car-inner-spec">${this.transmission}</p>
                  <img src="icons/model.png" class="icon" />
                  <p class="car-inner-spec">4</p>
                  <img src="icons/horsepower.png" class="icon" />
                  <p class="car-inner-spec">${this.horsepower}hp</p>
                </div>
              </div>
              <div class="car-inner-details-right">
                <img src="imgs/${this.imgTag}.jpg" class="inner-img" />
              </div>
            <div class="line-bottom">
            </div>`;
  }
  displayCalculator() {
    return `<div class="calculator">
              <div class="left-part-calculator">
                <h1 class="calculator-heading">Car Finance calculator</h1>
                <h2 class="calculator-question">What is the price of a car?</h2>
                <input id="calculator-price-input" class="calculator-input" type="number" required />
                <h2 class="calculator-question">Do you have a deposit?</h2>
                <input id="calculator-deposit-input" class="calculator-input" type="number" required />
                <h2 class="calculator-question">How months do you want to borrow for?</h2>
                <div class="months-options">
                  <input class="months-options-btn" type="button" value="24" />
                  <input class="months-options-btn" type="button" value="36" />
                  <input class="months-options-btn" type="button" value="48" />
                  <input class="months-options-btn" type="button" value="60" />
                </div>
                <button class="calculate" type="submit">Calculate</button>
              </div>
              <div class="right-part-calculator">
               <p class="calculator-varibales">Vehicle price:</p>
               <p class="calculator-varibales right-part-calculator-right-elements" id="vehicle-price">100.000$</p>
               <p class="calculator-varibales">Deposit:</p>
               <p class="calculator-varibales right-part-calculator-right-elements" id="deposit">0$</p>
               <p class="calculator-varibales">Rate:</p>
                <p class="calculator-varibales right-part-calculator-right-elements" id="rate">8.6%</p>
               <p class="calculator-varibales">Optional final payment:</p>
               <p class="calculator-varibales right-part-calculator-right-elements" id="optional-final-paymant">10.000$</p>
               <p class="calculator-varibales">Total cost of credit:</p>
               <p class="calculator-varibales right-part-calculator-right-elements" id="vehicle price">100.000$</p>
               <p class="calculator-varibales">Total amount repayable:</p>
               <p class="calculator-varibales right-part-calculator-right-elements" id="total-amount-repayable">120.000$</p>
                <p class="calculator-varibales bold">48 monthly payments of:</p>
               <p class="calculator-varibales right-part-calculator-right-elements bold bigger-text" id="total-amount-repayable">4.000$</p>
              </div>
            </div>
            <div class="line-bottom"></div>
    `;
  }
}

const cars = [
  new Car("bmw-1", "BMW 1 Series", "120d M Sport", 2018, "85.000", "Automatic", "Petrol", 184, "18.000", "Hatchback"),
  new Car("mercedes-a45", "Mercedes-Benz A45", "A45 AMG", 2024, "55.000", "Automatic", "Petrol", 431, "70.000", "Hatchback"),
  new Car("tesla-cybertruck", "Tesla cybertruck", "Cybertruck Dual Motor AWD", 2024, "11.000", "Automatic", "Electricity", 600, "110.000", "SUV"),
  new Car("bmw-3", "BMW 3 Series", "330d Sport", 2022, "56.000", "Manual", "Diesel", 286, "47.000", "Sedan"),
  new Car("audi-a5", "Audi a5", "A5 Sportback", 2021, "49.000", "Manual", "Petrol", 150, "58.000", "Sedan"),
  new Car("mercedes-c", "Mercedes-Benz C43", "C43 BITURBO 4.0 AMG", 2023, "35.000", "Automatic", "Petrol", 421, "80.000", "Sedan"),
  new Car("audi-a7", "Audi a7", "A7 Sedan", 2024, "29.000", "Automatic", "Diesel", 190, "78.000", "Sedan"),
];

//Car list
const carsAll = document.getElementById("cars-all");
cars.forEach((car) => {
  carsAll.innerHTML += car.displayList();
});

//Each car Details
const carAllDetails = document.getElementById("car-all-details");

/*
cars.forEach((car) => {
  carAllDetails.innerHTML += car.displayCarDetails();
});
*/
//Changing windows + Selected car displaying
const carEach = document.querySelectorAll(".car-each");
const carEachDetails = document.querySelectorAll(".car-details");
carEach.forEach((car) => {
  car.addEventListener("click", function () {
    const imgTagE = car.getAttribute("data-imgTag");
    const selectedCar = cars.find((carFind) => carFind.imgTag === imgTagE);
    if (selectedCar) {
      //Adding seceond screen
      carAllDetails.innerHTML = selectedCar.displayCarDetails() + selectedCar.displayCalculator();

      const closeBtn = document.querySelector(".close-btn");
      closeBtn.addEventListener("click", function () {
        carAllDetails.innerHTML = "";
        carEach.forEach((el) => {
          el.classList.remove("hidden");
        });
      });
    }
    carEach.forEach((el) => {
      el.classList.add("hidden");
    });
  });
});

//Adding functionality to calculator
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("months-options-btn")) {
    document.querySelectorAll(".months-options-btn").forEach((btn) => {
      btn.classList.remove("months-options-btn-clicked");
    });
    e.target.classList.add("months-options-btn-clicked");
  }
});
