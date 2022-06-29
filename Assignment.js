// Write a JavaScript program which iterates the integers from 1 to 100. But for
//multiples of three print "Fizz" instead of the number and for the multiples of five print
//"Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
var num = [1 , 100];
for(let i = 0; i< 100 ; i++){
    if (i %3 ==0);
    console.log ("fizz");
    if (i %5 ==0);
    console.log("Buzz")
     if (i %3 ==0 && i %5 ==0);
    console.log("FizzBuzz")  
}

// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
function addition(){
    var sum = 0;
    for(var a = 0; a < 1000 ; a++){
        if (a %3 ==0  || a %5 ==0){
            sum += a;
        }   
    console.log(sum)
}
}
addition()

// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
//check if the current number is odd or even, and display a message to the screen.
//Sample Output :
//"0 is even"
//"1 is odd"
//"2 is even"
function isEven(){
    for(let x = 0; x < 20; x++){
        if(x%2 ==0){
            console.log(x + "is even");
        }
        else if(x%2!==0){
            console.log(x + "is odd");
        }
    }
}
isEven()

//Write a JavaScript conditional statement to find the largest of five numbers in the given array.
//Let num = [-2, 4,-5, 6,0]
 let numb = [-2, 4,-5, 6,0]
 let largest = number = [0];
 for(c=0; c<numb.length; c++){
    if(largest<numb[c]){
        largest = numb[c]
    }
 }
 console.log(largest)

// Using conditional statements, write a JavaScript program to find the largest of the following two numbers: 10 & 40
const num1 = 10;
const num2 = 40;
function large(){
    if (num1 < num2) console.log(num2 + "is the largest")
    else console.log(num1 + "is the largest")
}
large()
// Write a JavaScript program to find leap years from 2000 to 2022
function leap_year(){
    for(let i = 2000; i <= 2022; i++){
        if(i %4==0 && i%100 !==0 || i%400==0){
        console.log(i ,"is a leap year")
    }
}
}
leap_year()