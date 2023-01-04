/*
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
nome e cognome e l’indicazione se può guidare, in base all’età
*/

// CREO ARRAY
const persons = [

    { firstname:'Leone',      lastname: 'Felidi',    age: 75 },
    { firstname:'Giacomo',    lastname: 'Andreotti', age: 54 },
    { firstname:'Vincenzo',   lastname: 'Torre',     age: 7 },
    { firstname:'Antonio',    lastname: 'Italiano',  age: 22 },
    { firstname:'Roberto',    lastname: 'Lipari',    age: 32 },
    { firstname:'Vincenzino', lastname: 'Guidi',     age: 8 },
    { firstname:'Melanie',    lastname: 'Ferrari',   age: 14 },
    { firstname:'Giuseppe',   lastname: 'Russo',     age: 19 },
    
];

// AGGIUNGO ALL'ARRAY UNA NUOVA KEY CON L'INDICAZIONE SE LA PERSONA PUO' GUIDARE IN BASE ALL'ETA'
persons.forEach((person, i) => {
    
    const fullName = `${persons[i].firstname}` + ' ' + `${persons[i].lastname}`;

    if(person.age >= 18) {
        // SE MAGGIORENNE
        persons[i].permit = fullName + ' Ha il permesso di guidare';
    } else {
        // SE MINORENNE
        persons[i].permit = fullName + ' Non ha il permesso di guidare';
    }
});
// STAMPO IN CONSOLE IL RISULTATO
console.log(persons);
