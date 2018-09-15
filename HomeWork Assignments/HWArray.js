//Musketeers Array
const musketeers = ["Athos", "Porthos", "Aramis"]

const elements = ["Mishka", 7, {message: "Hazit man"}, true];
console.log(musketeers.length);
console.log(musketeers[1,2]);
console.log();

for (n = 0; n < musketeers.length; n++){
    console.log(musketeers[n]);
}
//Add D'Artagnan to end of array
musketeers.push("D'Artagnan");

//For Each()

musketeers.forEach(myElement => {
    console.log(`For Loop ${myElement}`);
})

//POP
musketeers.pop();
let theEndElment = musketeers.pop();

//For-Of 
let ofMusketeers;
for (ofMusketeers of musketeers){
    console.log(ofMusketeers);
}

console.log(musketeers)


// Sum of values
const values = [3, 11, 7, 2, 9, 10]; 


//Array maximum
console.log([5])

var sum = 0;
for(var i = 0; i < values.length; i++){
    sum += values[i]
}
console.log("The sum of values is: " +sum);