// // // alert('Hello world');

// // // Log to console 
// // console.log('Hello world');
// // console.log(123);
// // console.log(true);
// // var greeting = 'hello';
// // console.log(greeting);
// // console.log([1, 2, 3, 4]);
// // console.log({ a: 1, b: 2 });
// // console.table({ a: 1, b: 2 }); // gives object in the visually formatter table

// // console.error('THis is the some error');
// // console.warn('THis is some warning');
// // console.clear();
// // console.time('Hello');  // this is the start of the timer
// // console.log('Hello world');
// // console.log('Hello world');
// // console.log('Hello world');
// // console.log('Hello world');
// // console.log('Hello world');
// // console.timeEnd('Hello'); // this is the end of the timer

// // console.clear();


// // //VAR , LET and CONST

// // // VAR 

// // var name = "John Doe";
// // console.log(name);
// // name = 'Steve Smith';
// // console.log(name);

// // // Init var 
// // var greeting;
// // console.log(greeting);
// // greeting = 'Hello';
// // console.log(greeting);

// // // variable names include letters, number , underscore _ and $ dollar sign 
// // // It should not start with number 

// // // Multi words vars 
// // var firstName = 'John'; // Camel case // Recommended practise to use camel case for variables
// // var first_name = 'Sara'; // Underscore
// // var FirstName = 'Tom'; // Pascal case   // Mainly used in OOP concepts
// // var firstname;

// // // LET 
// // let name;
// // name = 'John Doe';
// // console.log(name);
// // name = 'Steve Smith';
// // console.log(name);

// // // CONST 

// // const name = 'John';
// // console.log(name);
// // // cannot reassign
// // name = 'Sara' // this will throw the error
// // // Const should always have a value
// // // Const greeting; // This will throw the error

// // // we cannot assign a new value to the CONST but we can manipulate it  
// // // Below code will work
// // const person = {
// //     name: 'ankit',
// //     age: 25
// // }
// // person.name = 'Singh';
// // person.age = 36;

// // console.log(person);

// // //Below code will throw the error 
// // const numbers = [1, 2, 3, 4, 5];
// // numbers.push(6); // this will work
// // console.log(numbers);
// // numbers = [1, 2, 3, 4, 5, 6, 7];
// // console.log(numbers); //this will throw the error


// // DATA TYPES IN JAVASCRIPT
// // 1. Primitive data types - Stored directly in the location the variable accesses.
// //                          - Stored on the stack
// // 2. Reference data types - Accessed by reference.
// // Objects that are stored on the heap.
// // A to pointer to a location in memory

// // 1. Primitive data types
// // String
// // const name = 'John Doe';
// // console.log(typeof (name));
// // // Number
// // const age = 28;
// // console.log(typeof (age));
// // // Boolean
// // const hasKids = true;
// // console.log(typeof (hadKids));
// // // null
// // const car = null;
// // console.log(typeof (car));
// // // undefined
// // const test = undefined;
// // console.log(typeof (test));
// // // Symbol(ES6)
// // const tests = Symbol();
// // console.log(typeof (tests));

// // // 2.Reference data types
// // // Arrays
// // const hobbies = ['Movies', 'music'];
// // console.log(typeof (hobbies));
// // // Object Literals
// // const address = {
// //     city: 'Navi mumbai',
// //     pincode: 400702
// // }
// // console.log(typeof (address));
// // // Functions
// // // Dates
// // const today = new Date();
// // console.log(typeof today);


// // TYPE CONVERSION 

// let val;

// //number to string 
// // val = string(555);
// // val = String(4 + 4);
// // boolean to string
// // val = String(true);
// // date to string
// // val = String(new Date());
// // Array to string 
// // val = String([1, 2, 3, 4]);

// // toString()
// // val = (5).toString();


// // String to number 

// val = Number('5');  // 5
// val = Number(true); // 1
// val = Number(false); // 0
// val = Number(null);   // 0
// val = Number('hello'); // NaN
// val = Number([1, 2, 3]); // NaN

// val = parseInt('100.30');  // 100
// val = parseFloat('100.30'); // 100.30 float consider the decimal
// val = (true).toString();

// var val1 = String(5);
// var val2 = 6;
// const sum = val1 + val2;
// console.log(sum);   // 56
// console.log(typeof (sum)); // string

// console.log(val);
// console.log(typeof (val));
// console.log(val.length);
// console.log(val.toFixed(2));

