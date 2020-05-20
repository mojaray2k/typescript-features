class Vehicle {
  constructor(public color: string) {}

  protected drive(): void {
    console.log('vroom vroom');
  }
  public honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('choo choo');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, 'yellow');
car.startDrivingProcess();
