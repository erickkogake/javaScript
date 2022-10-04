const book = require("./listBooks");

let bestPrice = 0;

for (let at = 0; at < book.length; at++){
    if(book[at].price < book[bestPrice].price){
       bestPrice = at;
    }
}

console.log(`The best price is ${book[bestPrice].price}, of the book ${book[bestPrice].title}`)
// console.log(`The price book more cheap is ${booksPrice[bestPrice]}`)
// console.log(`${booksPrice[bestPrice]}`)

const listPriceCars = [1000,4500,6000,770]

let bestPrice1 = 0;

for (let at = 0; at < listPriceCars.length; at++) {
    if(listPriceCars[at] < listPriceCars[bestPrice1]){
        bestPrice1 = at;
    }
}

console.log(`The car Palio, have the value of the ${listPriceCars[bestPrice1]} dolars`)