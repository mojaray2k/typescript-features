const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['150'], ['corolla'], ['thunderbird']];

// help with inference when extracting values
const carBrand = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(100);

// help with array methods like 'map'
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// flexible types

const importantDates: (Date | string)[] = [];
importantDates.push['2030-10-10'];
importantDates.push(new Date());
