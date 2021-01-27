console.log('mon second fichier node')

const dateformat = require('dateformat')

const date = Date.now()
console.log(date);

const coucou = dateformat(date, 'ddd dd mm yyyy')
console.log(coucou);