const  numbers = [10, 2, 13, 4, 15];
console.log(numbers);

const compare1 = function(a, b) {
    return a - b;
}
console.log(numbers.sort(compare1));

const compare2 = function(a, b) {
    return b - a;
}
console.log(numbers.sort(compare2));

const sortedNumbers1 = numbers.sort(function(a, b) {
    if (a < b) {
        return -1;
    }
});
console.log(sortedNumbers1);

const sortedNumbers2 = numbers.sort(function(a, b) {
    if (a > b) {
        return -1;
    }
});
console.log(sortedNumbers2);



const names = ['David', 'Brook', 'Asabeneh', 'Harry'];
console.log(names);

console.log(names.sort(compare1)); // doesn't work, because you can't subtract strings!

const sortedNames1 = names.sort(function(a, b) {
    if (a < b) {
        return -1;
    }
});
console.log(sortedNames1);

const sortedNames2 = names.sort(function(a, b) {
    if (a > b) {
        return -1;
    }
});
console.log(sortedNames2);



  



console.log(countriesObject.reverse());

const sortedByCity = countriesObject.sort(function(a, b) {
    if (a.capital < b.capital) {
        return -1;
    }
});
console.log(sortedByCity);

/* const sortedByPopulation = countriesObject.sort(function(a, b) {
    if (a.population > b.population) {
        return -1;
    }
});

console.log(sortedByPopulation); */

const copyNumbers1 = numbers.slice(0);
console.log(copyNumbers1);
const copyNumbers2 = [].concat(numbers);
console.log(copyNumbers2);