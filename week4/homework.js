//exercise 1
console.log('EXERCISE 1')
console.log('Hello World!') //English
console.log('Salaam Dunya!') //Urdu
console.log('Hej världen') //Swedish
console.log('Hallo Welt') //German

//exercise 2
/*
ERROR CODE
console.log('I'm awesome');
CORRECTED CODE
*/
console.log('EXERCISE 2')
console.log("I'm awesome")

/*
3. Declare a variable x and initialize it with an integer, using these exact steps:
3.1 First, declare your variable x (do not initialize it yet).
3.2 Add a console.log statement that explains in words what you think the value of x
3.3 Add a console.log statement that logs the value of x.
3.4 Now initialize your variable x with an integer.
3.5 Next, add a console.log statement that explains what you think the value of x is.
3.6 Add a console.log statement that logs the value of x.
*/

console.log('EXERCISE 3')
let x
console.log("I think the value of x would be: 10")
console.log(x)

x = 20
console.log("I think the value of x would be: 15")
console.log("The value of x represents someone's age which is: " + x)

/* 
4. Declare a variable y and assign a string to it.
4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
4.2 Now console.log the variable y.
4.3 Now assign a new string to the variable y.
4.4 Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.
4.5 Now console.log y again.
*/

let y = 'Cat'
console.log('Y is maybe: Dog')
console.log('y is: ' + y)
y = 'Dog'
console.log('Y is maybe: Dog')
console.log('y is: ' + y)


/*
5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
5.1 Declare a variable z and assign the number 7.25 to it.
5.2 console.log z.
5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
5.4 console.log a.
5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
5.6 console.log the highest value.
*/

let z= 7.25
console.log(z)
let a = Math.round(z)
console.log(a)
let highestValue
if (z>a){
    highestValue=z
    console.log('Highest value is of z which is: ')
}else{
    highestValue=a
    console.log('Highest value is of a which is: ')
}
console.log(highestValue)

/*
6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element. (See Naming conventions).
6.2 Write a console.log statement that explains in words what you think the value of the array is.
6.3 console.log your array.
6.4 Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).
6.5 Log your array.
6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
6.7 Log your new array!
*/

let colors= []
console.log('The array represents colors')
console.log(colors)
let animals= ['cat', 'dog', 'horse', 'cow']
console.log(animals)
animals=[...animals, 'baby pig']
console.log(animals)

/*
 Let's consider the following string: let myString = "this is a test".
7.1 Add the string to your file and console.log it.
7.2 Find a way to get the length of myString.
7.3 console.log the length of myString.
 */

const myString= "this is a test"
console.log(myString)
console.log(myString.length)

/*
8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
8.1 First declare at least four variables and assign them different data types.
8.2 For each variable write a console.log statement that logs the value
8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
8.4 Now use typeof to log the actual type of your variables.
8.5 Now compare the types of your different variables with one another.
8.6 Make sure to also show a message when the variables you are comparing are not the same type.
*/

const var1= 15
const var2= 'Tania'
const var3= 1444.76
const var4= true

console.log('Var1: '+var1)
console.log('Var2: '+var2)
console.log('Var3: '+var3)
console.log('Var4: '+var4)

console.log('Var1 is number')
console.log('Var2 is String')
console.log('Var3 is number')
console.log('Var4 is boolean')

console.log('Var1 is: '+typeof(var1))
console.log('Var2 is: '+typeof(var2))
console.log('Var3 is: '+typeof(var3))
console.log('Var4 is: '+typeof(var4))

if(typeof(var1)===typeof(var2)){
    console.log('Var1 and Var2 are of SAME TYPE')
}else{
    console.log('Var1 and Var2 are not of SAME TYPE')
}

if(typeof(var1)===typeof(var3)){
    console.log('Var1 and Var3 are of SAME TYPE')
}else{
    console.log('Var1 and Var3 are not of SAME TYPE')
}

if(typeof(var1)===typeof(var4)){
    console.log('Var1 and Var4 are of SAME TYPE')
}else{
    console.log('Var1 and Var4 are not of SAME TYPE')
}

if(typeof(var3)===typeof(var2)){
    console.log('Var3 and Var2 are of SAME TYPE')
}else{
    console.log('Var3 and Var2 are not of SAME TYPE')
}

if(typeof(var4)===typeof(var2)){
    console.log('Var4 and Var2 are of SAME TYPE')
}else{
    console.log('Var4 and Var2 are not of SAME TYPE')
}

if(typeof(var3)===typeof(var4)){
    console.log('Var3 and Var4 are of SAME TYPE')
}else{
    console.log('Var3 and Var4 are not of SAME TYPE')
}
/*
9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
9.1 Add at least 3 console.log statements in which you show that you understand what % does.
*/

let x1=7
x1=x1%3
console.log('X1 would be 1')
console.log('X1 is: '+x1)
console.log('% represents modulus')
console.log('Modulus divides the number. In this case 7/3')
console.log('The remainder is 1 which is represented by Modulus(%)')


/*
10. Write a program to answer the following questions:
10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
10.3 Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).
*/

let array1=['red',1,'green',233]
console.log(array1)
console.log('YES, we can store multiple types in an array as represnted in the above example')
if(6/0 === 10/0){
    console.log('Yes , we can compare infinites')
}else{
    console.log('Infinites cannot be compared')
}
