//=======================================Array of objects==========================================
var student = [
    {name : 'ram' , age : 15},
    {name : 'karan' , age : 13},
    {name : 'rahul' , age : 14},
];
console.log(student); 

for (var i = 0; i < student.length; i++){
    document.write(student[i].name + ' ' + student[i].age +'<br>' );
}

let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
];

let car = {                   //To add an object at the first position
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 3
  }
  cars.unshift(car);

  let car2 = {                //Add a new object at the end
    "color": "red2",
    "type": "cabrio2",
    "registration": new Date('2016-05-02'),
    "capacity": 4
   }
   cars.push(car2);

   let car3 = {        //Add a new object in the middle
    "color": "red3",
    "type": "cabrio3",
    "registration": new Date('2016-05-02'),
    "capacity": 6
  }
  cars.splice(2, 0, car3); //(index where to start,how many items to remove,items to add)

  console.log(cars);

  for (var a = 0; a < 5; a++){
    document.write(cars[a].color + ' ' + cars[a].type +'<br>' );
}
//shift(),pop(),
//slice()-clone array
//concat()-merge arrays
//join()-joins all the elements of the array using a separator and returns a string
//fill()-fills an array with a static value
//reduce()-

//-------------------------Looping through an array of objects----------------------------------

//Find an object in an array by its values - Array.find--only return first matching

let car5 = cars.find(element => element.color === "red");
console.log(car5);
document.write(JSON.stringify(car5) + "<br>" ); //printing object

let car6 = cars.find(element2 => element2.color === "purple" && element2.type === "minivan");
console.log(car6);
document.write(JSON.stringify(car6) + "<br>" );

//--------------

const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];
let result= inventory.find(fruit =>fruit.name ==="bananas");
console.log(result);
// { name: 'bananas', quantity: 0 }

document.write(JSON.stringify(result)); //without using stringfy you get [object Object] in view

// using function------------------------
function isCherries(fruit) { 
  
  return fruit.name === 'cherries';
}
let result2 =inventory.find(isCherries)
console.log(result2);

//Get multiple items from an array that match a condition - Array.filter----------------------------------------------------------------
//The Array.find function returns only one object. If we want to get all red cars,we use Array.filter.

let redCars = cars.filter(element3 => element3.color === "red");
console.log(redCars); //remove all non-matching elements
 
//-----------Transform objects of an array - Array.map--------

let sizes = cars.map(carCap => {
  if (carCap.capacity <= 3){
    return "small";
  }
  if (carCap.capacity <= 5){
    return "medium";
  }
  return "large";
});
console.log(typeof(sizes));
console.log(sizes);//[small,large]

//It's also possible to create a new object if we need more values:
let carsProperties = cars.map(carcap2 => {
  let properties = {
    "capacity": carcap2.capacity,
    "size": "large"
  };
  if (carcap2.capacity <= 5){
    properties['size'] = "medium";
  }
  if (carcap2.capacity <= 3){
    properties['size'] = "small"; //properties.size="small";
  }
  return properties;
 });
 console.log(carsProperties);

 //Add a property to every object of an array - Array.forEach----------------------------------------------------------------
 cars.forEach(careach => {
  careach['size'] = "large";
  if (careach.capacity <= 5){
    careach['size'] = "medium";
  }
  if (careach.capacity <= 3){
    careach['size'] = "small";
  }
 });
 console.log(cars);

 //Sort an array by a property - Array.sort----------------------------

 let sortedCars = cars.sort((c1, c2) => (c1.capacity < c2.capacity) ? 1 : (c1.capacity > c2.capacity) ? -1 : 0);
console.log(sortedCars); //doubt 
 
//Checking if objects in array fulfill a condition - 'Array.every', Array.includes-------------- -----------------
 
let carsome= cars.some(carcon1 => carcon1.color === "red" && carcon1.type === "cabrio");
console.log(carsome);
// output: true ,test until one element matches 

let carevery=cars.every(carcon2 => carcon2.capacity >= 4);
console.log(carevery);
// output: false , test all elements

//======================================JavaScript Type Conversions=============================== 
//-------------------JavaScript Implicit Conversion---------------------------------------

// numeric string used with + gives string type
let resultt;

resultt = '3' + 2; //here 3 is a string because it is in quotes
console.log(resultt) // "32"
let typp=typeof(resultt);
console.log(typp);

resultt = '3' + true; 
console.log(resultt); // "3true"

resultt = '3' + undefined; 
console.log(resultt); // "3undefined"

resultt = '3' + null; 
console.log(resultt); // "3null"

// numeric string used with - , / , * results number type

let tyresult;

tyresult = '4' - '2'; 
console.log(tyresult); // 2

tyresult = '4' - 2;
console.log(tyresult); // 2

tyresult = '4' * 2;
console.log(tyresult); // 8

tyresult = '4' / 2;
console.log(tyresult); // 2

// non-numeric string used with - , / , * results to NaN

let nonresult;

nonresult = 'hello' - 'world';
console.log(nonresult); // NaN

nonresult = '4' - 'hello';
console.log(nonresult); // NaN

// if boolean is used, true is 1, false is 0

let booresult;

booresult = '4' - true;
console.log(booresult); // 3

booresult = 4 + true;
console.log(booresult); // 5

booresult = 4 + false;
console.log(booresult); // 4

// null is 0 when used with number
let nuresult;

nuresult = 4 + null;
console.log(nuresult);  // 4

nuresult = 4 - null;
console.log(nuresult);  // 4

// Arithmetic operation of undefined with number, boolean or null gives NaN

let unresult;

unresult = 4 + undefined;
console.log(unresult);  // NaN

unresult = 4 - undefined;
console.log(unresult);  // NaN

unresult = true + undefined;
console.log(unresult);  // NaN

unresult = null + undefined;
console.log(unresult);  // NaN

//--------------------------------------JavaScript Explicit Conversion-------------------- -->

//To convert numeric strings and boolean values to numbers, you can use Number()----

let numresult;

// string to number
numresult = Number('324');
console.log(numresult); // 324

numresult = Number('324e-1')  
console.log(numresult); // 32.4

// boolean to number
numresult = Number(true);
console.log(numresult); // 1

numresult = Number(false);
console.log(numresult); // 0


numresult = Number(null);  //empty strings and null values return 0
console.log(numresult);  // 0

numresult = Number(' ')
console.log(numresult);  // 0


numresult = Number('hello');  //If a string is an invalid number, the result will be NaN
console.log(numresult); // NaN

numresult = Number(undefined);
console.log(numresult); // NaN

numresult = Number(NaN);
console.log(numresult); // NaN

//You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor()
 
let paresult;
paresult = parseInt('20.01');
console.log(paresult); // 20

paresult = parseFloat('20.01');
console.log(paresult); // 20.01

paresult = +'20.01';
console.log(paresult); // 20.01

paresult = Math.floor('20.01');
console.log(paresult); // 20

//To convert other data types to strings, you can use either String() or toString()-------------   
  
//number to string
let stresult;
stresult = String(324);
console.log(stresult);  // "324"

stresult = String(2 + 4);
console.log(stresult); // "6"

//other data types to string
stresult = String(null);
console.log(stresult); // "null"

stresult = String(undefined);
console.log(stresult); // "undefined"

stresult = String(NaN);
console.log(stresult); // "NaN"

stresult = String(true);
console.log(stresult); // "true"

stresult = String(false);
console.log(stresult); // "false"

// using toString()
stresult = (324).toString();
console.log(stresult); // "324"

stresult = true.toString();
console.log(stresult); // "true"

stresult = false.toString();
console.log(stresult); // "false"

console.log(typeof(stresult));

//To convert other data types to a boolean, you can use Boolean().----- 

let boolresult;
boolresult = Boolean('');     //In JavaScript, undefined, null, 0, NaN, '' converts to false
console.log(boolresult); // false

boolresult = Boolean(0);
console.log(boolresult); // false

boolresult = Boolean(undefined);
console.log(boolresult); // false

boolresult = Boolean(null);
console.log(boolresult); // false

boolresult = Boolean(NaN);
console.log(boolresult); // false


boolresult = Boolean(324);   //All other values give true
console.log(boolresult); // true

boolresult = Boolean('hello');
console.log(boolresult); // true

boolresult = Boolean(' ');
console.log(boolresult); // true

//======================================strings=================================================
const c = 'hello';
const b = new String('hello'); //better to avoid string objects else its slow down program

console.log(a); // "hello"
console.log(b); // "hello"

console.log(typeof a); // "string"
console.log(typeof b); // "object"
c[1]='H';
b[1] ='H';
console.log(c); 
console.log(b); 

//JavaScript String Methods---------------------------------------------
const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const resultt2 = text1.toUpperCase();
console.log(resultt2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]
console.log(result4[0]);

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); // "el"

const name1 = 'My name is \"Peter\".';
console.log(name1);

//===========================JavaScript Number Methods===============================================          

//toExponential() converts a number into a string and returns it in an exponential format.
// Example 1
let x = 456.789
let num = x.toExponential()
console.log(num)                 // Output: 4.56789e+2
// Example 2

let num2 = x.toExponential(2) //The parameter with 2 digits, returns the value with two decimal digits
console.log(num2)                 // Output: 4.57e+2

//toFixed() method rounds up a number to the nearest highest or lowest fixed-point notation

console.log(x.toFixed()); //457
console.log(x.toFixed(2)); //456.79 formats the number with 2 number of digits after the decimal point

//toPrecision() returns the numeric value with a specific length,need to specify parameter
console.log(x.toPrecision()) ;//456.789
console.log(x.toPrecision(4)) ;//456.8

//valueOf()  return the primitive value of the Number
console.log(x.valueOf());//456.789

//toLocaleString() uses a local language format to convert a number and returns it as a string
console.log(x.toLocaleString('en-US'));

//isInteger() checks whether the given value is an integer and returns a boolean value.
console.log(Number.isInteger(x));//false

//isFinite() checks whether the given value is finite and returns a boolean value.
console.log(Number.isFinite(x));//true

//isSafeInteger()
//An integer is considered as safe integer when all integers are exactly between (2^53–1) to -(2^53–1))
Number.isSafeInteger(220)             //Output: true
Number.isSafeInteger(978678367894123469410320213);         //Output: false

//=====================================Javascript Objects====================================
//Create Objects in Different Ways---------------------------------------------------------

// program to create JavaScript object using object literal
const person = { 
  name: 'John',
  age: 20,
  hobbies: ['reading', 'games', 'coding'],
  greet: function() {
      console.log('Hello everyone.my name is'+' '+ this.name);
  },
  score: {
      maths: 90,
      science: 80
  }
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);


// program to create JavaScript object using instance of an object
const person2 = new Object ( { 
  name: 'John',
  age: 20,
  hobbies: ['reading', 'games', 'coding'],
  greet: function() {
      console.log('Hello everyone.');
  },
  score: {
      maths: 90,
      science: 80
  }
});

console.log(typeof person2); // object

// accessing the object value
console.log(person2.name);
console.log(person2.hobbies[0]);
person2.greet();
console.log(person2.score.maths);


// program to create JavaScript object using Constructor Function

function Person3() {
  this.name = 'John',
  this.age = 20,
  this.hobbies = ['reading', 'games', 'coding'],
  this.greet = function() {
      console.log('Hello everyone.');
  },
  this.score = {
      maths: 90,
      science: 80
  }

}

const person4 = new Person3(); //we can create multiple objects using single constructor function
const person6 = new Person3();

console.log(typeof person4); // object

// accessing the object value
console.log(person4.name);
console.log(person4.hobbies);
person4.greet();
console.log(person4.score.maths);

//Adding a Method to a JavaScript Object----------

let student1 = { };// creating an object

student1.name = 'John';// adding a property

student1.greet = function() {// adding a method
    console.log('hello');
}
                      // accessing a method
student1.greet(); // hello


//JavaScript this Keyword---------------------
const person5 = {//To access a property of an object from within a method of the same object, you need to use the this keyword
  name: 'John',
  age: 30,

  // accessing name property by using this.name
  greet: function() { console.log('The name is' + ' ' + this.name); }
};

person.greet();


//You can also create a constructor function with parameters.--------------- ----
// constructor function
function Person7 (person_name, person_age, person_gender) {

  
   this.name = person_name,// assigning  parameter values to the calling object
   this.age = person_age,
   this.gender = person_gender,

   this.greet = function () {
       return ('Hi' + ' ' + this.name);
   }
}
                               // creating objects
const personn1 = new Person7('John', 23, 'male');//This allows each object to have different properties
const personn2 = new Person7('Sam', 25, 'female');

                              // accessing properties
console.log(personn1.name); // "John"
console.log(personn2.name); // "Sam"


//---------------Adding Properties And Methods in an Object-----------------------------
// constructor function
function Person8 () {
  this.name = 'John',
  this.age = 23
}

// creating objects
let peerson1 = new Person8();
let peerson2 = new Person8();

// adding property to person1 object
peerson1.gender = 'male';

// adding method to person1 object
peerson1.greet = function () {
  console.log('hello');
}

peerson1.greet();   // hello


//peerson2.greet();// Error code
                   // person2 doesn't have greet() method
console.log(peerson1);

//-----------add properties and methods to a constructor function using a prototype.---------
// constructor function
function Person9 () {
  this.name = 'John',
  this.age = 23
}

// creating objects
let persoon1 = new Person9();
let persoon2 = new Person9();

// adding new property to constructor function
Person9.prototype.gender = 'Male';

// adding a method to the constructor function
Person9.prototype.greet = function() {
  console.log('hello' + ' ' +  this.name);
}

console.log(persoon1.gender); // Male
console.log(persoon2.gender); // Male

persoon1.greet(); // hello John
persoon2.greet(); // hello John

console.log(Person9.prototype);


//Changing Prototype-------------

// constructor function
function Person10() {
  this.name = 'John'
}

// add a property to constructor
Person10.prototype.age = 20;

// creating an object
const perrson1 = new Person10();

console.log(perrson1.age); // 20

// changing the property value of prototype
Person10.prototype = { age: 50 }

// creating new object
const perrson3 = new Person10();
                            //If a prototype value is changed
console.log(perrson3.age); // 50 ,then all the new objects will have the changed property value.
console.log(perrson1.age); // 20  All the previously created objects will have the previous value.

//=====================================JavaScript Date and Time=====================================
const timeNow = new Date();
console.log(timeNow); // shows current date and time

// ISO Date(International Standard)
const date = new Date("2020-08-01");

// the result date will be according to UTC
console.log(date); // Wed Jul 01 2020 05:45:00 GMT+0545

const date2 = new Date("2020-07");
console.log(date2); // Wed Jul 01 2020 05:45:00 GMT+0545

const date1 = new Date("2020");
console.log(date1); // Wed Jul 01 2020 05:45:00 GMT+0545

const date3 = new Date("2020-07-01T12:00:00Z");
console.log(date3); // Wed Jul 01 2020 17:45:00 GMT+0545

const time1 = new Date(2020, 1, 20, 4, 12, 11, 0);
console.log(time1); // Thu Feb 20 2020 04:12:11

//JavaScript Date Methods--------------

const timeInMilliseconds = Date.now();
console.log(timeInMilliseconds); // 1636473041754

const time = new Date();

// get day of the month
const date4 = time.getDate();
console.log(date4); // 9

// get full year
const year = time.getFullYear();
console.log(year); // 2021

const utcDate = time.getUTCDate();
console.log(utcDate); // 9

const event1 = new Date('Feb 19, 2020 23:15:30');
// set the date
event1.setDate(15);
console.log(event1.getDate()); // 15

// Only 28 days in February!
event1.setDate(35);

console.log(event1.getDate()); // 6

//Formatting a Date------------------------------
const currentDate = new Date();
const datee = currentDate.getDate();
const month = currentDate.getMonth();
const yearr = currentDate.getFullYear();

// show in specific format
let monthDateYear = (month+1) + '/' + datee + '/' + yearr;

console.log(monthDateYear); // 11/9/2021