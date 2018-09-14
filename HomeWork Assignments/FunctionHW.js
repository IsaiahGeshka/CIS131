//Square the given number x
function square1(x){
    return Math.pow(x ,2 );
}
// Square the given number x
const square2 = x =>{ // TODO: complete the function code
    return Math.pow(x,2)
}
console.log(square1(0));
console.log(square1(2));
console.log(square1(5));

console.log(square2(0));
console.log(square2(2));
console.log(square2(5));

for (x = 0; x <= 9; x++){
    console.log(Math.pow(x, 2));
    //console.log(x *x);
}

function yourChoice(num1, num2){
    if (num1 > num2){
       // console.log(num2);
        return num2
    } 
    else if (num1 < num2){
       // console.log(num1);
        return num1
    }
    else{
      //  console.log(num1)
        return num1
    }
}
console.log(yourChoice(4.5,5));
console.log(yourChoice(19,9));
console.log(yourChoice(1,1))