// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 

class Purchases{
    constructor(fruitPrice){
        this.fruitPrice = fruitPrice
        this. calculateFruitCost = function(fruitName, quantity){
            return `${quantity } ${fruitName} for KES ${quantity*fruitPrice}`
        }
   
    }
    
}
var oranges = new Purchases(30)
console.log(oranges.calculateFruitCost("Orange", 3));
var bananas = new Purchases(10)
console.log(bananas.calculateFruitCost("Banana", 4));


// Write a class KioskCalc that has the following fruitsPriceList object.
//this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
//and takes two parameters (fruit, quantity) when initialized i.e. 
//var kioskCalc = new KioskCalc(“orange”, 2);
//Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
//getTotalCost( ) method. 
// kioskCalc.getTotalCost( )  // returns “2 orange for KES 60” 

class KioskCalc{
    constructor(fruit, quantity){
        this.fruit = fruit;
        this.quantity = quantity;
        this.fruitsPriceList = {
        "orange": 30, 
        "mango": 15, 
        "avocado": 40  
        };
        this.getTotalCost =  function()  {
            return `${quantity} ${fruit} for KES ${this.price *quantity}`
        }
    }
}
KioskCalc.prototype.price = 30;
var buy = new KioskCalc(`kiwi`, 4);
console.log(buy.getTotalCost());
