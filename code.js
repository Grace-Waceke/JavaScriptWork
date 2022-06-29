
function children(){

    var name = "Grace"
    let name2 = "Waceke"
    const name3 = "Herself"

    console.log(name);
    console.log(name2);
    console.log(name3);

}
children();
// console.log(name);

function num(){    // parent scope
    var a = 2;
    function add(){    //child scope
        var b = 3;
        var c = a+b;
        console.log(c);
    }
    add();
}
num();

var num = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0; i< num.length; i++){
    console.log(num[i])
}
// add(20)
 function plus(c){
    var a = 10;
    console.log(a+c);
 }

// Use strict
let myName;
myName = "Myself"

console.log(myName);

function numb(){
    var  a = 30;
    let c = (a<10)? true: false;
    console.log(c)
}
numb()
