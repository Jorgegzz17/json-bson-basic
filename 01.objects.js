//variables datos primitivos
let usern = 'Jorge';
let age = '16';
let isActive = true;
let hobbies = ['reading', 'proframming', 'soccer'];

console.log(usern);
console.log(typeof (usern));
console.log(age);
console.log(typeof (age));
console.log(isActive);
console.log(typeof (isActive));
console.log(hobbies[2]);
console.log(typeof (hobbies));

//variable de referencia
let person = {
    name: 'Jorge',
    age: 16,
    isActive: true,
    hobbies: ['reading', 'programming', 'soccer']
};

console.log(person);

console.log('mi nombre es ' + person.name);

console.log('tengo ' + person.age + 'años ');

console.log('estoy activo: ' + person.isActive);

console.log('mis hobbies son ' + person.hobbies);

//el siguiente codigo es para que te de los datos en una tabla
console.table(person);


//act4

//act4
let jugador = {
    name : 'Gignac',
    age: 39,
    isActive: true,
    habilidades: ['Jugar futbol', 'Meter goles',]
}


console.log(jugador);

console.log('mi nombre es ' + jugador.name);

console.log('tengo ' + jugador.age + 'años ');

console.log('estoy activo: ' + jugador.isActive);

console.log('mis habilidades son ' + jugador.habilidades);

//el siguiente codigo es para que te de los datos en una tabla
console.table(jugador);
