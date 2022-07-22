class Mkulima {
    constructor(farms, products, orders){
        this.farms = [];
        this.products =[];
        this.orders = [];
}
addFarm(farmid, name, farmer, phoneNumber, address){
        let farm={
            farmid:farmid,
            name:name,
            farmer:farmer,
            phoneNumber:phoneNumber,
            address:address,
        }
        this.farms.push(farm);
        return this.farms
    }
    getFarm(farmid){
        for(var x=0; x<this.farms.length;x++){
            let farm = this.farms[x];
            if(farm.farmid==farmid){
                return farm;
            }
        }
    }
    removeFarm(farmid){
        let farm = this.farm.indexOf(farm);
        this.farm.splice(index, 1);
    }
    updateFarm(farmid, name, farmer, phoneNumber, address){
        let newFarm = this.farm.find(newFarm=>newFarm.farmer=="Mango")
        newFarm={
            name: name,
            farmer: farmer,
            phoneNumber: phoneNumber,
            address: address,
        }
        this.farms.push(newFarm)
        return this.farms.push(farm)

    }
    addProduct(productid, name, price){
        let product ={
            productid:productid,
            name:name,
            price:price,
        }
        this.products.push(product)
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
        console.log([items.name+" "+ items.price])
    }
}
calculateOrderCost(productid,quantity){ 
    let cost=this.products.find(cost=>cost.productid==productid)
    return cost*quantity;
}
}

let order=new Mkulima();


 console.log(order.addFarm("xyzsweddwjt756","Kilimo Farm","Tomatoes","89071236","Taveta"));
 console.log(order.addFarm("Nyumbani","One way farm","Lopez Carlos","1234567","Nakuru"));
 console.log(order.getFarm("0812625326336gsg"));
 console.log(order.addProduct("Yeko","Oranges", 250 ));
 console.log(order.addProduct("Dee","Pineaples",600));
 console.log(order.calculateOrderCost("Tam tam",7));



