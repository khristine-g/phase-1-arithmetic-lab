// Create a variable called multiply set to an equation that will multiply the variables 
// num1 and num2; the result of the multiplication should be 62.

let num1=31;
let num2 = 2;

let multiply = num1*num2;

console.log(multiply);


// Create a variable called random that will generate a random integer greater than 0.


let random = Math.floor(Math.random()*100) +1;
console.log(random);



let num3 = 14;
let num4 = 5;

let mod = num3 % num4;

if(mod===4){
    console.log("The remainder of dividing num3 and num4 is 4")
}
else{
    console.log("The remainder of dividing num3 and num4 is not 4")
}



// Create a variable called max that finds the highest number in a set; the value returned should be 20



let max = Math.max(2,8,20,5,9,13)
console.log(max);