const ages = [12, 15, 13, 16, 18];
const ages2= [22, 24, 21, 66, 43];
const allAges = ages.concat(ages2).concat([5])
const allAges2 = [...ages, ...ages2, 5];
// console.log(allAges2);

const business = 450;
const minister = 350;
const sochib = 250;
const takaPoisa = [650, 300, 200, 1050];
const max = Math.max(...takaPoisa);
console.log(max);