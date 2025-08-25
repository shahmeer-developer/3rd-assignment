// Question #01

var age = prompt("Enter your age");
if (age < 13) {
    alert("child");
    console.log("child");
} else if (age < 19) {
    alert("teenager");
    console.log("teenager");
} else {
    alert("adult");
    console.log("adult");
}


// Question #02

var num = prompt("Enter any number");
num = Number(num);

if (num % 2 === 0 && num % 3 === 0) {
    alert("Divisible by both");
    console.log("Divisible by both");
} else {
    alert("Not divisible by both");
    console.log("Not divisible by both");
}


// Question #03

var pass = prompt("Enter password");

if (pass === "saylani123") {
    alert("Access Granted");
    console.log("Access Granted");
} else {
    alert("Access Denied");
    console.log("Access Denied");
}

// Question #04

var num1 = Number(prompt("Enter 1st number"));
var num2 = Number(prompt("Enter 2nd number"));

if (num1 > num2) {
    alert("big number is: " + num1);
} else if (num2 > num1) {
    alert("big number is: " + num2);
} else {
    alert("number is equal");
}

//Question #05

var colors = ['white', 'black', 'red','green','blue'];
alert(colors[0] + " " + colors[4]);
console.log(colors[0] + " " + colors[4]);

//Question #06

var fruits = ['apple', 'banana', 'cherry'];
console.log(fruits);
fruits.push('orange');
console.log(fruits);

//Question #07

var city = ['lahore', 'karachi', 'islamabad'];
console.log(city);
city.shift();
console.log(city);

//Question #08

var con = [10, 20, 30, 40, 50];
con.splice(2, 1);
console.log(con);

//Question #09

var any = [100, 200, 300, 400, 500];
console.log(any.slice(1, 4));

//Question #10



//Question #11

var mon = Number(prompt("enter month number 1 to 12"));
if (mon === 12 || mon === 1 || mon === 2) {
    alert("Winter");
    console.log("Winter");
} else if (mon === 3 || mon === 4 || mon === 5) {
    alert("Spring");
    console.log("Spring");
} else if (mon === 6 || mon === 7 || mon === 8) {
    alert("Summer");
    console.log("Summer");
} else if (mon === 9 || mon === 10 || mon === 11) {
    alert("Autumn");
    console.log("Autumn");
} else {
    alert("Invalid month");
    console.log("Invalid month");
}


// Question #12

for (var i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Question #13

var _nam = ['Ali', 'Sara', 'Ahmad', 'Ayesha'];
for (var i = 0; i < _nam.length; i++) {
    console.log(_nam[i]);
}

// Question #14

var $num = Number(prompt("enter any number i convert in table"));
for (var i = 1; i <= 10; i++) {
    console.log($num + "   x  " + i + "  =  " + ($num * i))
}

// Question #15

var _sum = [2, 4, 6, 8, 10];
var $sum = 0;
for (var i = 0; i < _sum.length; i++) {
    $sum += _sum[i];
}
console.log($sum);

// Question #16

var a = prompt('Enter your name').toLowerCase();

if (a === "alice" || a === "bob") {
    alert('Welcome');
    console.log('Welcome');
} else {
    alert('You are not authorized.');
    console.log('You are not authorized.');
}

// Question #17

var num3 = Number(prompt("ask a number"));

if (num3 > 0 && num3 % 2 === 0) {
    alert("Positive Even");
    console.log("Positive Even");
} else if (num3 > 0 && num3 % 2 !== 0) {
    alert("Positive Odd");
    console.log("Positive Odd");
} else if (num3 < 0) {
    alert("Negative number");
    console.log("Negative number");
} else {
    alert("Zero or invalid input");
    console.log("Zero or invalid input");
}

// Question #18 

var d = ['Apple','Banana','Cherry','Date','Elderberry'];

d.splice(2, 0, 'Mango');

console.log(d);