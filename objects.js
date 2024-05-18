const cup = {
    color: 'red',
    size: 'small',
    texture:'smooth',
    shape:'round',
    functionality:{
        drinkType:'tea',
        temperature:'hot'

    },
    drink:function(){
        console.log('Use me to dink')
        console.log(`My main purpose is to drink ${this.functionality.temperature} ${this.functionality}`)
    }
};
console.log({color: cup.color});
console.log({size: cup.size});
console.log("temperature", cup.functionality.temperature);


cup.model = 'glass';
console.log({cup});
cup.color = 'green';
console.log({cup});
cup.drink();

const keys = Object.keys(cup)
console.log({keys});
const values = Object.values(cup);
console.log({values});

const loop = Object.keys(cup).map(item=>{
    return({keys:item,value:cup[item]});

})
console.log({loop});

Object.keys(cup).forEach()


