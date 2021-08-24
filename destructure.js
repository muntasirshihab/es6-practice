const person = {name: "william", age:17, job:"facebooker", address:"katabon", gf: "ema", phone:"017212121"};

const {phone, gf, salary} = person;

const complexObject = {
    name: "abc",
    info:{
        address: "kolabagan",
        leader: "Tiger"
    }
}
const {leader} = complexObject.info;
console.log(leader);

const friends = ["sakib khan", "salman khan", "amir khan", "shahruk khan"];
const [chotofriend, ...next]= friends;
// console.log(next);