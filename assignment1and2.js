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






class Mkulima {

    constructor(farms,products,orders) {
      this.farms = [];
      this.products = [];
      this.orders = [];
        
 }    
      
addFarm(farmid,name,farmer,phoneNumber,address){
        let farm={
            farmid:farmid,
            name :name,
            farmer:farmer,
            phoneNumber:phoneNumber,
        }
        this.farms.push(farm);
        return this.farms
 }         
          
getFarm(farmid){
    for(var a=0;a<this.farms.length;a++){
        let farm = this.farms[a];
        if(farm.farmid===farmid){
            return farm;
        }
    }
}

removeFarm(farmid){ 
    let farm=this.getFarm(farmid);
    let index=this.farm.indexOf(farm);
    this.farm.splice(index,1);

}
updateFarm(farmid,name,farmer,phoneNumber,address){
    let newFarm=this.farm.find(newFarm=>newFarm.farmer=="Quava")
    newFarm={
            name :name,
            farmer:farmer,
            phoneNumber:phoneNumber,
            address:address,

    }
    this.farms.push(newFarm)
    return this.farms.push(farm)
}

addProduct(productid,name,price){ 
    let product={
        productid:productid,
        name:name,
        price:price,
    }

 this.products.push(product);
 return this.products;
}
getProduct(productid){
        let product=this.products[i];
        if(this.products,productid===productid){
            return  this.products;
        }
    }

removeProduct(productid){
    let product=this,getProducts;(productid);
    let index=this.product.indexOf(product);
    this.products.splice(index,1)
    return this.products;
}

updateProduct(productid,name,price){
    let newProduct=this.product.find(newProduct=>newProduct,name=="watermelon")
    newProduct={
        productid:productid,
        name:name,
        price,price,

    }
    return newProduct;
}
printProduct(){
    for(itemS of this.products){
        console.log([items.name+" , "+ items.price])
    }
}
calculateOrderCost(productid,quality){ 
    let cost=this.products.find(cost=>cost.productid==productid)
    return cost.price*quality;
}
}

let order=new Mkulima();


 console.log(order.addFarm("2138721364yruew","PLanet farm","Nanasi","43759821","kitui"));
 console.log(order.addFarm("Gishagi","That one-shop farm","Lee Muirir","2039498735","makueni"));
 console.log(order.getFarm("2138721364yruew"));
 console.log(order.addProduct("maah","avocados",500 ));
 console.log(order.addProduct("yumm","totmatoes",1600));
 console.log(order.calculateOrderCost("yumm",9));