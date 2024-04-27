const person = {
    name: 'Yuriy', 
    age: 25, 
    career: 'FullStack Developer'
}

console.log(person.name);

person.age = 41;
person.workPosition = 'remote';
delete person.career;

console.log(person.hasOwnProperty('career'));

const friend = {
    name: 'Eugene',
    age: '35',
    career: 'FullStack Developer',
    driver: 'yes'
}

const combinedObjects = Object.assign(person, friend);

console.log(combinedObjects);

for (const key in person) {
    console.log(key + ': ' + person[key]);
}

person.greeting = function(name) {
    console.log('Hello, ' + person.name);
}

person.greeting('Yuriy');

console.log(Object.keys(person));