let a = 2;
a-=1;
a++;
let b =8;
b+=2;
const c= a+b*b;
const d= a*b+b;
const e= a*(b+b);
const f= a*b/a;
const g= b/a*a;
console.log(a,b,c,d,e,f,g);

// From Celsius to Fahrenheit degrees

ctemp1 = 20;
ctemp2 = 40;
ctemp3 = 50;
ctemp4 = 60;
/*
//[°F] = [°C] x 9/5 + 32
console.log(Ftemp1 = ctemp1 * 9/5 + 32);
console.log(Ftemp1 = ctemp2 * 9/5+32);
*/
x = 0;
for ( x = 1; x <= 100; x++){

    if (x % 3 ===0){

        console.log("Fizz");
    }
    else if (x % 5 === 0 && x % 3 !== 0){
        console.log("Buzz");
    }
    else{ console.log(x)}

}

// console.log( Math.ceil( Math.random()*3));

ran =  (Math.ceil(Math.random()*10));
console.log(ran );
for (p = 1; p <= 10; p++){
    console.log( p + '  X ' ,  ran , '=' , ran * p );
}