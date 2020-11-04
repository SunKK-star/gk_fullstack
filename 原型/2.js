Car.prototype.name = 'BMW'
Car.prototype.lang = 4900
Car.prototype.lengtn = 1400
function Car(color, owner) {
  this.color = color
  this.owner = owner
  // this.name = 'BMW'
  // this.lang = 4900
  // this.length = 1400
}
var car = new Car('red', 'tt')
var car1 = new Car('blue', 'ss')

console.log(car.name);
console.log(car1.lang);