class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name =  name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const Baby = new Child("Arnold");
const Baby2 =  new Child("Tom");
console.log(Baby.getFullName());
console.log(Baby2);