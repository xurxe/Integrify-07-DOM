/* FRIDAY 15.MAR.2019 ****************************************************** */


/* HOISTING *************************************************************** */

console.log(name);

var name = 'Xurxe';

/* Arrow functions don't allow hoisting */

/* add code */




/* No hoisting */

/* console.log(calcSquare1(2));
const calcSquare1 = function(x) {
    return x ** 2;
};
console.log(calcSquare1(2)); */



/* Yes hoisting */

console.log(calcSquare2(2));
function calcSquare2(x) {
    return x ** 2;
};
console.log(calcSquare2(2));


/*  */
function sum1() {
    let total = 0;
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        total = total + arguments[i];
    }
    return total;
}
console.log(sum1(1, 2, 3));




const sum2 = (...arguments) => {
    let total = 0;
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        total = total + arguments[i];
    }
    return total;
}
console.log(sum2(1, 2, 3));




const person = {
    name: 'Xurxe',
    age: 29,
    getInfo1: function() {
        return `My name is ${this.name} and I am ${this.age}.`
    },

    getInfo2() {
        return `My name is ${this.name} and I am ${this.age}.`
    }

    /* but "this" doesn't work with arrow functions */

}

console.log(person.getInfo1());
console.log(person.getInfo2());




/* DE-STRUCTURING ********************************************************** */

const names = ['Kunjan', 'Garland', 'Masood'];
console.log(names);

let [name1, name2, name3] = names;
console.log(name1);



const numbers = [1, 2, 3];
let [number1, number2, number3] = numbers;
console.log(numbers);
console.log(number1);



const countries1 = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland', 'Russia', 'China', 'USA'];
let [fin, , swe, nor, ice, ...rest] = countries1;
console.log(countries1); 
console.log(fin); 
console.log(swe); 
console.log(nor); 
console.log(ice); 
console.log(rest);

const countries2 = ['Russia', 'China', 'USA', 'Estonia', 'Finland', 'Sweden', 'Norway', 'Denmark'];

let [rus, chi, usa, est, ...nordic] = countries2;
console.log(rus, chi, usa, est, nordic);



const rectangle1 = {
    width: 20,
    height: 10,
    area: 200
};

console.log(rectangle1.width);
console.log(rectangle1['width']);

let {width, height, area} = rectangle1;
console.log(width, height, area);

function perimeter(obj) {
    return 2 * (obj.width + obj.height);
}
console.log(perimeter(rectangle1));



function perimeter({width, height}) {
    return 2 * (width + height);
}
console.log(perimeter(rectangle1));



let {width: w, height: h, area: a} = rectangle1;
console.log(rectangle1);
console.log(width, height, area);
console.log(w, h, a);