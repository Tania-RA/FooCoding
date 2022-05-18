/**1.Create a function that takes 3 arguments and returns the sum of the these arguments.*/

function sumElement(num1, num2, num3) {
    return (num1 + num2 + num3);
}
sumElement(7, 8, 10);

/**2.Create a function named colorCar that receives a color, and prints out, 'a red car' for example. */

function colorCar(color) {
    return ('a ' + color + ' car.');
}
colorCar('blue');

/**3.Create an object and a function that takes the object as a parameter and prints out all of its properties and values. */

const Animal = {
    name: "Billy",
    age: 9,
    type: "Cat",
    gender: "Male"
}

function callObject(object) {
    return object;
}
callObject(Animal);

//4.Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color, code) {
    if (code == 1) {
        return ('a ' + color + ' car');
    } else if (code == 2) {
        return ('a ' + color + ' motorbike');
    } else {
        return "code can only be 1 or 2";
    }

}
vehicleType("blue", 2);

//5.Can you write the following without the if statement, but with just as a single line with console.log(...);?

console.log(3 === 3 ? "yes" : "no");

//6.Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, age) {
    let used;
    if (age < 1) {
        used = 'new'
    } else {
        used = 'used'
    }

    if (code == 1) {
        return ('a ' + color + ' ' + used + ' car');
    } else if (code == 2) {
        return ('a ' + color + ' ' + used + ' motorbike');
    } else {
        return "code can only be 1 or 2";
    }
}
vehicle("blue", 1, 2);

//7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

const vehicles = ["motorbike", "caravan", "bike", "taxi", "bus"]

//8.How do you get the third element from that list?

console.log('To access third element: "vehicles[2]",i.e., ' + vehicles[2]);

//9.Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

function vehicle2(color, code, age) {
    let used;
    if (age < 1) {
        used = 'new'
    } else {
        used = 'used'
    }
    if (code >= 1 && code <= vehicles.length) {
        code = vehicles[code - 1];
        return ('a ' + color + ' ' + used + ' ' + code);
    } else {
        return "code can only be 1 or 2";
    }

}
vehicle2("green", 3, 1);

//10.Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

let adString = "Amazing Joe's Garage, we service "
for (i = 0; i <= vehicles.length - 1; i++) {

    if (i == vehicles.length - 2) {
        adString += (vehicles[i] + ' and ');
    } else if (i == vehicles.length - 1) {
        adString += (vehicles[i] + '.');
    } else {
        adString += (vehicles[i] + ', ');
    }


}
console.log(adString);

//11.What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

vehicles.push("tractor");
let adString2 = "Amazing Joe's Garage, we service "
for (i = 0; i <= vehicles.length - 1; i++) {

    if (i == vehicles.length - 2) {
        adString2 += (vehicles[i] + ' and ');
    } else if (i == vehicles.length - 1) {
        adString2 += (vehicles[i] + '.');
    } else {
        adString2 += (vehicles[i] + ', ');
    }


}
console.log(adString2);

//12.Create an empty object.

const emptyObject = {

}

//13.Create an object that contains the teachers that you have had so far for the different modules.

let courseTeachers = {
    "Module1": {
        "Teacher": "Claudio"
    },
    "Module2": {
        "Teacher": "Saif"
    },
    "Module3": {
        "Teacher": "Sahin"
    }
}
console.log(courseTeachers);

//14.Add a property to the object you just created that contains the languages that they have taught you.

courseTeachers.Module1.Language = "HTML";
courseTeachers.Module2.Language = "CSS";
courseTeachers.Module3.Language = "JavaScript";
  
console.log(courseTeachers);

//15.Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log("Result for x==y will be false");
console.log(x==y);
console.log("Result for x===y will be true");
console.log(x===y);
console.log("Result for z==y will be true");
console.log(z==y);
console.log("Result for z===y will be true");
console.log(z===y);

//16.Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

//Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

o2.foo="changed";
console.log(o3);
o1.foo="will not change o3";
console.log(o3);

//Does the order that you assign (o3 = o2 or o2 = o3) matter?
o3.foo=("It's o3");
o3=o2;
o2=o3;
//o3=o2;
console.log(o3);
console.log("Order doesn't matter");

//17.What does the following code return? (And why?)
let bar = 42;
console.log(typeof typeof bar);

