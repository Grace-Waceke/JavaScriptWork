
// // function children(){

// //     var name = "Grace"
// //     let name2 = "Waceke"
// //     const name3 = "Herself"

// //     console.log(name);
// //     console.log(name2);
// //     console.log(name3);

// // }
// // children();
// // // console.log(name);

// // function num(){    // parent scope
// //     var a = 2;
// //     function add(){    //child scope
// //         var b = 3;
// //         var c = a+b;
// //         console.log(c);
// //     }
// //     add();
// // }
// // num();

// // var num = [1,2,3,4,5,6,7,8,9,10]
// // for(let i = 0; i< num.length; i++){
// //     console.log(num[i])
// // }
// // // add(20)
// //  function plus(c){
// //     var a = 10;
// //     console.log(a+c);
// //  }

// // // Use strict
// // let myName;
// // myName = "Myself"

// // console.log(myName);

// // function numb(){
// //     var  a = 30;
// //     let c = (a<10)? true: false;
// //     console.log(c)
// // }
// // numb()

// let a = function(){
//     console.log("hello")
// }
// a()

// let nums = [1,2,3,4,5];
// let b = nums.map(a=> a*2)
// let c = nums.map(function(a){
//     return a*2
// })
//   console.log(b)

//   console.log(c)

let b = ["mango", "apple"]
b.push("orange")
b.pop()
b.unshift("kiwi")
b.shift()

let c = new Array("orange", "grape")
// console.log(b);

let d = c.map(item=> 'I love ${item}');
let e = c.map(function(item){
    return 'i love ${item}'
})
console.log(d);
console.log(e);


