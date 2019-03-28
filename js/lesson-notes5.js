/* 28.MAR.2019 ************************************************************** */

/* SET */

/* In math:
Integers: I = {... -2, -1, 0, 1, 2...}
Natural numbers: N = {0, 1, 2..}
Prime numbers: P = {1, 3, 5, 7 ...} */

/* A set is a collection of UNIQUE elements */

/* create a new set */
const companiesSet = new Set();
console.log(companiesSet);



/* add items */
companiesSet.add('Integrify');
console.log(companiesSet);
console.log(companiesSet.size);

companiesSet.add('Google');
companiesSet.add('Facebook');
companiesSet.add('Apple');
companiesSet.add('Microsoft', 'Oracle'); // doesn't add the second one
console.log(companiesSet);
console.log(companiesSet.size);

companiesSet.add('Integrify'); // doesn't add Integrify a second time
console.log(companiesSet);
console.log(companiesSet.size);



/* delete items */
companiesSet.delete('Integrify');
console.log(companiesSet);
console.log(companiesSet.size);



/* check if it has items */
hasIntegrify = companiesSet.has('Integrify');
console.log(hasIntegrify);

hasFacebook = companiesSet.has('Facebook');
console.log(hasFacebook);



/* clear items */
companiesSet.clear();
console.log(companiesSet);
console.log(companiesSet.size);



/* sets don't have indexes */
companiesSet.add('Integrify');
companiesSet.add('Google');
companiesSet.add('Facebook');
companiesSet.add('Apple');
companiesSet.add('Microsoft');
companiesSet.add('Oracle');
console.log(companiesSet);

console.log(companiesSet[0]); 



/* loop through with a method that doesn't use indexes */
for (let company of companiesSet) {
    console.log(company);
};

const numbersArray = [1, 2, 3, 4, 5, 4, 3, 2, 1]



/* you can create a set from an array at once */
const numbersSet1 = new Set(numbersArray);
console.log(numbersSet1);
console.log(numbersSet1.size);



/* or add items one by one with a loop */
const numbersSet2 = new Set();
for (number of numbersArray) {
    numbersSet2.add(number);
};

console.log(numbersSet2);
console.log(numbersSet2.size)



/* MAP */

/* like sets, maps contains only unique values; like objects, they associate one thing with another*/

const map = new Map();

map.set('Helsinki', 'Finland');
map.set('Tallin', 'Estonia');
map.set('Tallin', 'Estonia');

console.log(map);

console.log(map.get('Helsinki'));
console.log(map.get('Finland'));

console.log(map.size);

console.log(map.has('Helsinki'));
console.log(map.has('Finland'));

map.delete('Helsinki');
console.log(map);
map.clear();




map.set('Helsinki', 'Finland');
map.set('Tallin', 'Estonia');
map.set('Madrid', 'Spain');

for (let item of map) {
    console.log(item);
}

for (let [capital, country] of map) {
    console.log(`${capital} is the capital of ${country}.`);
}

console.log(map.keys());
for (const capital of map.keys()) {
    console.log(capital);
}

console.log(map.values());
for (const country of map.values()) {
    console.log(country);
}

console.log(map.entries());

