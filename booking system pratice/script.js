"use strict";

const bookings = [];

//ES6
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //   ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 1;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH250");
