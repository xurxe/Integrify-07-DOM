/* 28.MAR.2019 ************************************************************** */

/* SET */

/* In math:
Integers: I = {... -2, -1, 0, 1, 2...}
Natural numbers: N = {0, 1, 2..}
Prime numbers: P = {1, 3, 5, 7 ...} */

/* A set is a collection of UNIQUE elements */

/* create an empty set */
const companiesSet = new Set();
console.log(companiesSet);



/* add items */
companiesSet.add('Integrify');
console.log(companiesSet);

/* count the items in the set */
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



/* check if it has an item */
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

/* like sets, maps contains only unique values, and they don't have indexes; like objects, they associate one thing (key) with another (value) */

/* create an empty map */
const map = new Map();



/* add items to the map */
map.set('Helsinki', 'Finland');
map.set('Tallin', 'Estonia');
map.set('Tallin', 'Estonia');
console.log(map);



/* maps don't have indexes */
console.log(map[0]);



/* you can get the value associtated with a key */
console.log(map.get('Helsinki'));

/* but not the key associated with a value */
console.log(map.get('Finland'));



/* count the items in the map */
console.log(map.size);



/* you can check if the map has a certain key */
console.log(map.has('Helsinki'));

/* but not if it has a certain value */
console.log(map.has('Finland'));



/* delete items by key */
map.delete('Helsinki');
console.log(map);



/* clear the map */
map.clear();




map.set('Helsinki', 'Finland');
map.set('Tallin', 'Estonia');
map.set('Madrid', 'Spain');

/* loop with a method that doesn't use indexes */
for (let item of map) {
    console.log(item);
}

/* or just use the entries() method instead*/
console.log(map.entries());



for (let [capital, country] of map) {
    console.log(`${capital} is the capital of ${country}.`);
}



/* these two do the same (going through the keys) */
for (const capital of map.keys()) {
    console.log(capital);
}

console.log(map.keys());


/* these two do the same as well (going through the values)*/
for (const country of map.values()) {
    console.log(country);
}
console.log(map.values());