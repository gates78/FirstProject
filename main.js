/*
let theAge = 45;
let theName = "Said";
let theSex = "Male";

if (theAge < 40) {
  console.log("the age is less than 40");
} else {
  console.log("the age is 40 or more.");
}

let Result = theSex == "Female" ? console.log("Mrs.") : console.log("Mr.");

theSex === "Female" ? console.log("Mrs.") : console.log("Mr.");

let Resulto = theSex == "Female" ? "Mrs." : "Mr.";
document.write(Resulto + "<br>");
document.write("<br>");
document.write(`Hello ${Resulto} ${theName}`);
theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 to 60")
  : theAge >= 60
  ? console.log("Older")
  : console.log("Unknown");

theName === "Said"
  ? console.log("It's me , YaaaaY!")
  : console.log("It's not Me, Wooooooooo!");

// Nullish Coalescing Operator And Logical OR

console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(0));

let price = 0;
console.log(`the prise is ${price || 200}`);
console.log(`the prise is ${price ?? 200}`);

// If Condition Challenge

let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
  console.log("Good");
}

if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}

if (st.length !== "string") {
  console.log("Good");
}

if (st.length !== "number") {
  console.log("Good");
}

if (st.substring(0, st.indexOf(" ")).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

// Switch Statement

let day = 8;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Other day");
}

// switch and If statements (challenge)

// Challenge 1
let job = "IT";
let salary = 0;

switch (job) {
  case "Manager":
    salary = 8000;

    break;

  case "IT":
  case "Support":
    salary = 6000;

    break;
  case "Developer":
  case "Designer":
    salary = 7000;

    break;

  default:
    salary = 4000;
}

console.log(`the job is ${job} and Salary is ${salary}`);

// Challenge 2

let holidays = 0;
let money = 0;

if (holidays == 0) {
  money = 5000;
} else if (holidays <= 2) {
  money = 3000;
} else if ((holidays = 3)) {
  money = 2000;
} else {
  money = 2000;
}

console.log(`my Money is ${money}`);

// Array Big Intro

// Array and nested Array
let myFriends = ["Hamza", "Mustapha", "Omar", "Mohamed", ["Ali", "Adam"]];
console.log(`Hello ${myFriends[1]}`);
console.log(myFriends[3][3]);
console.log(myFriends[4][0][0]);

console.log(myFriends);
myFriends[1] = "Bouazza";
myFriends[4] = "Bouchaib";
console.log(myFriends);
myFriends[4] = ["Bouchaib", "Houssine"];
console.log(myFriends);

console.log(Array.isArray(myFriends));

// Using Length with Array

console.log(myFriends[1].length);
myFriends[7] = "Said";
console.log(myFriends);

myFriends[5] = "Mounir";
console.log(myFriends);
// add at the end of Array
myFriends[myFriends.length] = "Samir";
console.log(myFriends);
// Replace the last one
myFriends[myFriends.length - 1] = "David";
console.log(myFriends);

console.log(myFriends[null]);
console.log(myFriends);

for (var i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] == "undefined") {
    myFriends[i] = "Tawfik";
    // and then ?
    // should I use double for loop or helper variable?
  }
}

console.log(myFriends);

// to limit the length at 4 pieces
myFriends.length = 4;
console.log(myFriends);

// Add and remove from the aray

//at the begining
myFriends.unshift("Alfred");
console.log(myFriends);

//at the end
myFriends.push("Brenda");
console.log(myFriends);

let oneFriend = myFriends.shift();
console.log(myFriends);
console.log(oneFriend);

let lastFriend = myFriends.pop();
console.log(myFriends);
console.log(lastFriend);

myFriends.push("Elizabeth");
console.log(myFriends);

console.log(myFriends.indexOf("Elizabeth"));
console.log(myFriends.lastIndexOf("Elizabeth"));

myFriends.unshift("Elizabeth");
console.log(myFriends);

console.log(myFriends.indexOf("Elizabeth"));
console.log(myFriends.lastIndexOf("Elizabeth"));
console.log(myFriends.lastIndexOf("Elizabeth", -1));
console.log(myFriends.lastIndexOf("Elizabeth", -2));

console.log(myFriends.includes("Samir"));
if (myFriends.lastIndexOf("Osama") === -1) {
  console.log("Not Found!");
}

myFriends.sort();
myFriends.reverse();

console.log(myFriends);

// slice doesn't remove items from the array
let myArray = myFriends.slice(1, 5);
console.log(myArray);

//to add or remove use splice

//remove
myFriends.splice(1, 2);
console.log(myFriends);

//add
myFriends.splice(0, 0, "Samir", "Samara");
console.log(myFriends);

myFriends.splice(0, 1);
console.log(myFriends);

// add athe index 1
myFriends.splice(1, 0, "Said", "Abdel");
console.log(myFriends);

//Join Arrays
let allFriends = myFriends.concat(myArray, "Hisham", ["Abdo", "Noor"]);
console.log(allFriends);

console.log(allFriends.join(" "));
console.log(allFriends.join("|").toUpperCase());



//Array Challenge


let zero = 0;
let Zero = 0;
let counter = 3;
let Counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
console.log(my.slice(zero, ++counter).reverse());
console.log(my.slice(++zero, --counter).reverse());
console.log(my[--counter].slice(--zero, counter) + my[++zero].slice(++zero));
console.log(
  my[--zero].slice(-++zero, -(--zero)) + my[zero].slice(-zero).toUpperCase()
);

console.log(my.slice(Zero, ++Counter).reverse());
console.log(my.slice(++Zero, -(--Counter)).reverse());
console.log(my[--Counter].slice(--Zero, Counter) + my[++Zero].slice(Counter));
console.log(
  my[Zero].slice(-Counter, -Zero) + my[Zero].slice(-(--Counter)).toUpperCase()
);



// Loop Concept

let myFriends = ["Hamza", "Mustapha", "Omar", "Mohamed", "Ali", "Adam", "ABC"];

console.log("------------------Find the name of Ali");
for (let i = 0; i < 10; i++) {
  if (myFriends[i] === "Ali") {
    console.log(`I have found the name at the item ${i}`);
  }
}
console.log("------------------Find strings");
for (let i = 0; i < 15; i++) {
  if (typeof myFriends[i] === "string") {
    console.log(`I have found the name at the item ${i}`);
  }
}
console.log("------------------Find numbers");
for (let i = 0; i < 15; i++) {
  if (typeof myFriends[i] === "number") {
    console.log(`I have found the name at the item ${i}`);
  }
}

// Looping on Sequences

for (let j = 0; j < myFriends.length; j++) {
  for (let k = 0; k <= 8; k++) {
    if (typeof myFriends[j][k] !== "undefined") {
      console.log(myFriends[j][k].toUpperCase().repeat(16));
    } else {
      break;
    }
  }
  console.log("_____");
}
*/
/*
document.getElementById("submit").onclick = function () {
  let mytext = document.getElementById("myText").value;
  document.write(`your text is : ${mytext}`);
};

document.getElementById("map").onclick = function () {
  var x = document.getElementById("demo");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

  function showPosition(position) {
    x.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;
  }
};

if (navigator.onLine) {
  console.log("User is online");
} else {
  console.log("User is offline");
}

const arr = [1, 2, 0, "", undefined, null, 3, NaN, false, false, 0, 1];

const filteredArr = arr.filter(Boolean);

console.log(filteredArr);

//const array = [-3, -2, -1, 0, 1, 2, 3];

filteredArr.forEach((it) => {
  if (it >= 0) {
    console.log(it);
    return; // or break
  }
});

console.log("Hello");

let xyz = 44;

function parent() {
  let xyz = 55;
  console.log(`From parent function ${xyz}.`);
  function child() {
    //let xyz = 33;
    console.log(`from Child function ${xyz}.`);
    function grand() {
      let xyz = 88;
      console.log(`from grand function ${xyz}.`);
    }
    grand();
  }
  child();
}
parent();

console.log(`from global scope ${xyz}`); 
*/

/// # 48 & 49
// let myFriends = [1, 2, 3, true, "Osama", "Ahmed", "Sayed", "Ali", "Samy"];

// let myNames = [];

// for (i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === "string") {
//     myNames.push(myFriends[i]);
//   }
// }

// console.log(myNames);

/// # 50 Nested Loops

let products = ["Keybord", "Mouse", "Screen", "CPU", "Motherboard"];
let colors = ["Red", "Blue", "Green"];
let models = [2021, 2022, 2023];
let showNum = 5;

// FirstLoop: for (i = 0; i < products.length; i++) {
//   document.write(`<div><h3>${products[i]}</h3>
//       </div>`);
//   document.write("#".repeat(10));

//   SecLoop: for (j = 0; j < colors.length; j++) {
//     document.write(`<h5>${colors[j]}</h5>
//       `);
//     ThirdLoop: for (k = 0; k < models.length; k++) {
//       document.write(`<p>${models[k]}</p>
//       `);
//       // if (colors[j] == "Blue" && models[k] == 2021) {
//       //   break FirstLoop;
//       // }
//     }
//   }
// }

// 52 & 53
// document.write(`<h1>We have ${showNum} products:</h1>`);
// for (i = 0; i < showNum; i++) {
//   document.write("<div>");
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   document.write("</div>");
//   for (j = 0; j < colors.length; j++) {
//     document.write(`<p>${colors[j]}</p>`);
//   }
//   document.write(colors.join(" | "));
// }

// 54 While

// let i = 0;
// while (i < products.length) {
//   if (i == 3) {
//     continue;
//   }
//   document.write("<div>");
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   document.write("</div>");
//   i++;
// }

// for (i = 0; i < products.length; i++) {
//   if (i == 3) {
//     continue;
//   }
//   document.write("<div>");
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   document.write("</div>");
// }

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samira"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
  "Samir",
  "Samar",
];

let adminCount = 0;
for (i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  adminCount++;
}

document.write(`<h1>We have ${adminCount} admins:</h1>`);
for (j = 0; j < adminCount; j++) {
  document.write(`<h2> The Admin for Team ${j + 1} is ${myAdmins[j]}</h2>`);
  document.write(`Team members`);
  let z = 1;
  for (k = 0; k < myEmployees.length; k++) {
    if (myEmployees[k][0] !== myAdmins[j][0]) {
      continue;
    }
    document.write(`<h3>-${z} ${myEmployees[k]}</h3>`);
    z++;
  }
}

// #56 functions:

function sayHello(x) {
  console.log(`hello ${x}`);
}

for (o = 0; o < myEmployees.length; o++) {
  sayHello(myEmployees[o]);
}

// #57 Advanced Functions Return

function generateYears(start, end) {
  for (a = start; a <= end; a++) {
    if (a === 15) {
      console.log("Am here");
      continue;
    }
    console.log(a);
  }
}

generateYears(10, 20);
let result = 0;
function cal(...numbers) {
  for (b = 0; b < numbers.length; b++) {
    result = numbers[b] + result;
  }
  console.log(result);
}

cal(10, 20, 30, 40, 50);

function ShowInfo(
  Username = "Unknown",
  Age = "Unknown",
  Rate = 0,
  showSkills = "Yes",
  ...Skills
) {
  document.write(`<div>`);
  document.write(`<h2>welcome, ${Username}</h2>`);
  document.write(`<p>the age is ${Age}</p>`);
  document.write(`<p>the rate is $${Rate}</p>`);
  if (showSkills === "Yes") {
    if (Skills.length === 0) {
      document.write(`Skills : No Skills`);
    } else {
      document.write(`Skills: ${Skills.join(" | ")}`);
    }
  } else {
    document.write(`${Username} doesn't allow us to share his skills.`);
  }
  document.write(`</div>`);
}

ShowInfo("Said", 45, 99, "No");
