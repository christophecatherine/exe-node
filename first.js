console.log('mon fichier node')
require('./second')

var number = 24518
require('./third').test(number)

const test = require('./third')
var third = require('./third')

third.test(number)

const user = [{
    name: "Bruno",
    age: 21,
    lastName: "nono",

}, {
    name: "Christophe",
    age: 25,
    lastName: "coco",
}]

user.forEach(el => {
    console.log('EACH: ', el.name, el.age, el.lastName, );
})

var obj = {
    name: 'juan',
    age: 28,
    lastname: "juju",
}


user.push(obj);
//console.log('USER: ', user);


console.log('USER', user[0].name, user[2].name);


/*
console.log(user);
third.cricri(user.name, user.age)
*/