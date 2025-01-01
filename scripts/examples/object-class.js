// let batmobil = {
//   manufacturer: 'Batman',
//   model: 'bat-bat',
//   startCar: function() {
//     console.log('car has started')
//   }
// }
//
// let skipper = {
//   manufacturer: 'Mercedes',
//   model: 'SkipMe 2000',
//   startCar: function() {
//     console.log('car has started')
//   }
// }
//
// let JabaDabaCar = {
//   manufacturer: 'Flinstone Family',
//   model: 'Jaba Daba Car',
//   startCar: function() {
//     console.log('car has started')
//   },
//   prototype: {}
// }

class Car {
  constructor(pastedManufacturer, pastedModel) {
    this.manufacturer = pastedManufacturer
    this.model = pastedModel
  }

  startCar() {
    console.log('car has started')
  }
}

let batmobil = new Car('Batman', 'bat-bat')

console.log(batmobil.model)
console.log(batmobil.startCar())
