// 1. print a property of nested object
const bangladesh = {
    region: "asea",
    capital: "dhaka",
    capitalDetails: { name: "dhaka city", population: 20000000 },
    borderCountry: ["india", "myanmar"],
    details: function () {
        return this.capitalDetails.population;
    },
};
const population = bangladesh.details();
// console.log(population);

// 2. print 3 prop in template string
const bd = `capital: ${bangladesh.capitalDetails.name}, small border: ${bangladesh.borderCountry[1]}, bd population: ${bangladesh.details()}`;
// console.log(bd);

// 3.1 return 89 with arrow func
const number = () => 89;
// console.log(number());

// 3.2 divided the param with 17 and return result
const divided = numb => numb / 17;
// console.log(divided(34));

// 3.3 add and divided by 2
const addDivided = (n1, n2) => (n1 + n2) / 2;
// console.log(addDivided(10, 10));

// 3.4 addition and again addition two result
const calc = (n1, n2) => {
    const n1Result = n1 + 7;
    const n2Result = n2 + 7;
    const finalAdd = n1Result + n2Result;
    return finalAdd;
};
// console.log(calc(10, 10));

// 4. divided all element with map
const numbers = [44, 64, 74, 24, 34, 44, 54, 64, 74, 64, 14];
const dividedResults = numbers.map(number => parseFloat((number / 7).toFixed(2)));
// console.log(dividedResults);

// 5. summary of map, forEach, filter, find
/* 
1. map: calculation or do something each element of array and return in an array.
2. forEach: calculation or do something each element of array but return nothing.
3. filter: get all element of array and check with condition, if condition is true then, return an array of those element.
4. find: get all element of array and check with condition, if condition is true then, return only the first element whose condition is true.
*/

// 6. destructuring obj and arr
const manikganj = {
    isBeautiful: true,
    shortForm: "mj",
    population2: 1000000,
};

const { population2 } = manikganj;
// console.log(population2);

const friends = ["asraful", "shipon", "kabbo", "miran", "aynal", "juwel", "rakib"];
const [, , , balance] = friends; // ( , ) for skip
console.log(balance);