import * as faker from 'faker';

var randomName = faker.name.findName(); // Caitlyn Kerluke
var randomEmail = faker.internet.email(); // Rusty@arne.info
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
console.log(randomName);
console.log(randomEmail);
console.log(randomCard);

export class App {
  constructor() {
    this.message = 'Hello World!';
  }
}
