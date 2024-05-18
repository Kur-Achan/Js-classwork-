function person (name, age){
  this.name = name;
  this.age = age;
  this.greet = function(){
    console.log(`Hello, my name is ${this.name}' and am ${this.age} years old`);
  }
  

}
const adam = new person('Adam',30);
console.log({adam});

adam.language ='English';
console.log({adam});
const eve = new person('Eve',20);
console.log({eve});
person.prototype.nationality = 'Kenyan';
console.log({adam});
console.log('adam-nationality', adam.nationality);
console.log('eve-nationality', eve.nationality);
eve.nationality = 'Ugandan';
console.log({eve});
console.log({adam});
