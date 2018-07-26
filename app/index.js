import {Person, SuperPerson} from './person'

const bob = new Person('bob');

console.log(bob.speak('my name is bob'))

const superSarah = new SuperPerson('sarah', 'transparent');

superSarah.speak('Hi I\'m super Sarah');

superSarah.saySuperPower();