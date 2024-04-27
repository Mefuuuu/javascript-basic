console.log('hello from mefu')

//key: value
let obj = {
    name: 'Mefu',
    address: 'SaiGon',
    email: '',
    gender:'',
    a: function(){
        console.log('Hello world inside function')
        return ''
    } 
};


let b = 'Mefu';
console.log(`type of a:`, typeof (a))
console.log(`What is your name?`, `My name's: `, obj.name)
console.log(`what is your address?`, `My address's: `, obj['address'])
console.log(`call function: `,obj.a())