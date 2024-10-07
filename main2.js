function showDetails(a, b, c) {
  for (i = 0; i < arguments.length; i++) {
    typeof arguments[i] === "string"
      ? (username = arguments[i])
      : typeof arguments[i] === "number"
      ? (age = arguments[i])
      : typeof arguments[i] === "boolean" && arguments[i] === true
      ? (decision = "Ok")
      : (decision = "Not OK");
  }

  document.write(
    `My name is ${username} and my age is ${age} and decision is ${decision}`
  );
}

showDetails(78, "Farida", true);
document.write("<br>----------------<br>");
showDetails(45, false, "Said");

/// Anonymous function

let result = function () {
  console.log(`Hello Babe!`);
};

result();

// Nested functions

//Arrow function # 66
let calc = (num1, num2) => num1 + num2;

console.log(calc(1, 2));

// Scope Global vs. Local

// let names = function (...mylist) {
//   return `[${mylist.join("] , [")}]`;
// };

// console.log(names("Said", "Samir", "Ahmed", "Ali", "Ibrahim"));

let names = (...mylist) => `String [${mylist.join("] , [")}] => Done !`;

console.log(names("Said", "Samir", "Ahmed", "Ali", "Ibrahim", "Nabil"));

let myNumbers = [20, 50, 10, 60];
let calco = (one, two, ...three) => one + two + three[0];
console.log(calco(myNumbers[0], myNumbers[1], myNumbers[2]));

// # 71 High Order Functions
//map

let resultt = myNumbers.map((e) => e + e);
console.log(resultt);

let swappingCases = "elZeRo";
// let swapp = swappingCases
//   .split("")
//   .map(function (e) {
//     return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase();
//   })
//   .join("");

let swapp = swappingCases
  .split("")
  .map((e) => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()))
  .join("");
console.log(swapp);

let invertedNumbers = [-1, 3, 66, 89, -300, -34, 9000, 10000000];

let swappo = invertedNumbers.map((e) => -e);
console.log(swappo);

let ignoreNums = "Mo45r6oc90c54o90";
let swappoo = ignoreNums
  .split("")
  .map((e) => (isNaN(parseInt(e)) ? e : ""))
  .join("");
console.log(swappoo);

let swappooo = invertedNumbers.filter((e) => e > 3000);
console.log(swappooo);

let sentence = "I love Fooood Code Too Playing Much";

let small = sentence
  .split(" ")
  .filter((e) => e.length <= 4)
  .join(" ");
console.log(small);

let numero = myNumbers.reduce((a, b) => a + b);
console.log(numero);

document.getElementById("submit").onclick = function () {
  let mytext = document.getElementById("myText").value;
  console.log("Hello Babyyyyyyy " + mytext);
};

let theBiggest = [
  "Bla",
  "Mississippi_in_America",
  "Propaganda",
  "Ahmed",
  "Other",
  "AAA",
  "Battery",
  "Test",
];
let removeChars = ["E", "@", "@", "l", "@", "z", "e", "@", "r", "@", "o"];

let check = theBiggest.reduce((e, b) => (e.length > b.length ? e : b));
console.log(check);

let Eliminate = removeChars.filter((e) => (e === "@" ? "" : e)).join("");
console.log(Eliminate);

removeChars.forEach(function (e) {
  console.log(e);
});

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split(",")
  .filter((e) => (isNaN(parseInt(e)) ? e : ""))

  .map((e) => (e === "EE" ? "E" : e))
  .map((e) => (e === "_" ? " " : e))
  .map((e) => (e === "Z" ? "" : e))
  .reduce((a, b) => a + b);
//.join("");
console.log(solution);

let user = {
  theName: "Said",
  theAge: 45,
  skills: ["HTML", "CSS", "JS"],
  addresses: {
    Morocco: "Casablanca",
    Egypt: {
      one: "Alexandria",
      two: "Cairo",
    },
  },
  Available: false,
  theEmail: "gates78@gmail.com",
  greeting: function () {
    return "Hello World!";
  },
  checkAv: function () {
    if (user.Available === true) {
      return "Free to work";
    } else {
      return "Not available to work";
    }
  },
};

let chakk = function (x) {
  if (x > 40) {
    return "Nice";
  } else {
    return "Young";
  }
};

console.log(user.greeting());
console.log(user["theAge"]);
console.log(user["addresses"]["Morocco"]);
console.log(user.checkAv());
console.log(chakk(user["theAge"]));
console.log(user.skills.join(" | "));
