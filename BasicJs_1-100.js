////////////////////////////////////////
//// Name :     Hendy           ///////
//// From :     Sawangan        ///////
///////////////////////////////////////

/////////////////////////////////////////
//soal 1 : omment Your JavaScript Code//
////////////////////////////////////////

// <-- comment 1 line

/* >= 2 line */ 

////////////////////////////////////////////
//Soal 2:Variables                      ///
//////////////////////////////////////////

var ourName;

var myNameHendy;

////////////////////////////////////////
///Soal 3: Assignment OperatorPassed //
///////////////////////////////////////

var angka = 7;
var angkasecond = angka;

///////////////////////////////////////////////////////////////
//soal 4:Initializing Variables with the Assignment Operator//
//////////////////////////////////////////////////////////////

var aangka = 9;

//////////////////////////////////////////////////////////
///soal 5 : Understanding Uninitialized VariablesPassed///
/////////////////////////////////////////////////////////

var number = 5;
var secondnumber = 10;
var me = 'I am a';

number = number + 1;
secondnumber = secondnumber + 5;
me = me + " String!";

//////////////////////////////////////////////////////////
//soal 6 : Sensitivity in Variables                    //
/////////////////////////////////////////////////////////

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//////////////////////////////////////////////////////////////////////////////
//                              Aritmatika                                  //
// + = plus             ++ = increment              --x = prefix decrement  //
// - = minus            -- = Decrement                                      //
// * = perkalian        x++= postfix increment                              //
// / = pembagian        x--= postfix decrement                              //
// % = modulus          ++x= prefix increment                               //
//////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
//Soal 7: Two Numbers with JavaScriptPassed         //
//////////////////////////////////////////////////////
var plus = 10 + 10;

/////////////////////////////////////////////////////
//Soal 8 : One Number from Another with JavaScript //
////////////////////////////////////////////////////
var minus = 45 - 33;

/////////////////////////////////////////////////////
//Soal 9 :Multiply Two Numbers with JavaScript    //
////////////////////////////////////////////////////
var product = 8 * 10;

////////////////////////////////////////////////////////////
//soal 10 : Divide One Number by Another with JavaScript //
///////////////////////////////////////////////////////////
var quotient = 66 / 33;

//////////////////////////////////////////////////////////
//soal 11 : Increment a Number with JavaScriptPassed   //
/////////////////////////////////////////////////////////
var myVar = 87;

myVar++;

////////////////////////////////////////////////////////
//Soal 12 :Decrement a Number with JavaScript        //
///////////////////////////////////////////////////////
var myVar = 11;

myVar--;

////////////////////////////////////////////////////////
//Soal 13 : Create Decimal Numbers with JavaScript    //
///////////////////////////////////////////////////////
var ourDecimal = 5.7;

var myDecimal = 8.9;

////////////////////////////////////////////////////////
//soal 14 : Multiply Two Decimals with JavaScript    //
///////////////////////////////////////////////////////
var product = 1.0 * 5.0;

/////////////////////////////////////////////////////////////
//soal 15 : Divide One Decimal by Another with JavaScript //
////////////////////////////////////////////////////////////
var quotient = 4.4 / 2.0; 

///////////////////////////////////////////////////////////
//soal 16 :Finding a Remainder in JavaScriptPassed      //
//////////////////////////////////////////////////////////
var remainder = 11 % 3;

////////////////////////////////////////////////////////////////
//soal 17 :Compound Assignment With Augmented AdditionPassed //
///////////////////////////////////////////////////////////////
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

//////////////////////////////////////////////////////////////////
//soal 18 : Compound Assignment With Augmented SubtractionPassed//
//////////////////////////////////////////////////////////////////
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;

//////////////////////////////////////////////////////////////////
//soal 19 :Compound Assignment With Augmented Multiplication   //
/////////////////////////////////////////////////////////////////
var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;

/////////////////////////////////////////////////////////////////
//soal 20 :Compound Assignment With Augmented Division        //
////////////////////////////////////////////////////////////////
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;

////////////////////////////////////////////////////////////////
//soal 21 :Declare String Variables                          //
///////////////////////////////////////////////////////////////

var firstName = "Hendy";
var lastName = "Nur";

var myFirstName = "Hendy";
var myLastName  = "Nurfrianto";

//////////////////////////////////////////////////////////////
//soal 22 :Escaping Literal Quotes in Strings              //
/////////////////////////////////////////////////////////////
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

///////////////////////////////////////////////////////////
//Soal 23 : Quoting Strings with Single Quotes          //
//////////////////////////////////////////////////////////

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

////////////////////////////////////////////////////////
//Soal 24 : Escape Sequences in Strings              //
///////////////////////////////////////////////////////

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

////////////////////////////////////////////////////////////
//Soal 25 : Concatenating Strings with Plus Operator     //
///////////////////////////////////////////////////////////

var ourStr = "I come first. " + "I come second.";

var myStr = "This is the start. " + "This is the end.";

///////////////////////////////////////////////////////////////////
//soal 26: Concatenating Strings with the Plus Equals Operator  //
/////////////////////////////////////////////////////////////////

var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

/////////////////////////////////////////////////////////////////
//soal 27 : Constructing Strings with Variables               //
///////////////////////////////////////////////////////////////

var ourName = "Hendy";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myName = "hendy";
var myStr = "My name is "+ myName +" and I am well!";

//////////////////////////////////////////////////////////////////
//soal 28 : Appending Variables to Strings                     //
////////////////////////////////////////////////////////////////

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "Have fun";
var myStr = "Learning to code is ";
myStr += someAdjective;

/////////////////////////////////////////////////////////////////
//soal 29: Find the Length of a String                        //
///////////////////////////////////////////////////////////////

var firstNameLength = 0;
var firstName = "Hendy";

firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Nurfrianto";

lastNameLength = lastName.length;

////////////////////////////////////////////////////////////////////////////
//soal 30 : Use Bracket Notation to Find the First Character in a String //
//////////////////////////////////////////////////////////////////////////

var firstLetterOfFirstName = "";
var firstName = "hendy";

firstLetterOfFirstName = firstName[0];


var firstLetterOfLastName = "";
var lastName = "Nurfrianto";

firstLetterOfLastName = lastName[0];

///////////////////////////////////////////////////////////////////////////
//soal 31 : Understand String Immutability                             ///
/////////////////////////////////////////////////////////////////////////

var myStr = "Jello World";

myStr = "Hello World";

//////////////////////////////////////////////////////////////////////////
//soal 32 : Use Bracket Notation to Find the Nth Character in a String //
////////////////////////////////////////////////////////////////////////

var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

var lastName = "Lovelace";

var thirdLetterOfLastName = lastName[2];

///////////////////////////////////////////////////////////////////////////
//soal 33 : Use Bracket Notation to Find the Last Character in a String ///
///////////////////////////////////////////////////////////////////////////

var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Lovelace";

var lastLetterOfLastName = lastName[lastName.length -1];

//////////////////////////////////////////////////////////////////////////////////
//soal 34: Use Bracket Notation to Find the Nth-to-Last Character in a String ///
////////////////////////////////////////////////////////////////////////////////
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

var lastName = "Lovelace";

var secondToLastLetterOfLastName = lastName[lastName.length -2];

/////////////////////////////////////////////////////////////////////////////////
//soal 35:  Word Blanks                                                       //
///////////////////////////////////////////////////////////////////////////////

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

///////////////////////////////////////////////////////////////////////////////
//soal 36 :Store Multiple Values in one Variable using JavaScript Arrays    //
//////////////////////////////////////////////////////////////////////////////

var ourArray = ["John", 23];

var myArray = ["hendy", 17];

//////////////////////////////////////////////////////////////////////////////
//soal 37 : Nest one Array within Another Array                            //
/////////////////////////////////////////////////////////////////////////////
var ourArray = [["the universe", 42], ["everything", 101010]];

var myArray = [["Hendy", 13], ["One Pack", 1]];

/////////////////////////////////////////////////////////////////////////////
//soal 38 : Access Array Data with Indexes                                //
////////////////////////////////////////////////////////////////////////////

var ourArray = [50,60,70];
var ourData = ourArray[0];

var myArray = [50,60,70];

var myData = myArray[0];

/////////////////////////////////////////////////////////////////////////////
//soal 39 : Modify Array Data With Indexes                                //
////////////////////////////////////////////////////////////////////////////

var ourArray = [18,64,99];
ourArray[1] = 45; 

var myArray = [18,64,99];
myArray[0] = 45;

///////////////////////////////////////////////////////////////////////////
//soal 40 : Access Multi-Dimensional Arrays With Indexes                //
//////////////////////////////////////////////////////////////////////////

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//soal 41 : Manipulate Arrays With push()                                                                   //
//push() menambahkan satu atau lebih elemen pada akhir sebuah array dan mengembalikan penjang array baru.   //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);

var myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog", 3]);

//////////////////////////////////////////////////////////////////////////////////////
//soal 42 : Manipulate Arrays With pop()                                            //
// pop() menghapus elemen terakhir dari array dan mengembalikan elemen tersebut     //
//////////////////////////////////////////////////////////////////////////////////////

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();

var myArray = [["John", 23], ["cat", 2]];

var removedFromMyArray = myArray.pop();

///////////////////////////////////////////////////////////////////////
//soal 43 : Manipulate Arrays With shift()                          //
//////////////////////////////////////////////////////////////////////

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();

var myArray = [["John", 23], ["dog", 3]];

var removedFromMyArray = myArray.shift();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//soal 44 : Manipulate Arrays With unshift()                                                                                            //
// shift() menghapus elemen pertama pada array dan mengembalikan elemen tersebut. Method ini mengubah panjang (jumlah elemen) array     //
// unshift() menambahkan satu atau lebih elemen ke indek awal array dan mengembalikan jumlah index array yang baru                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); 
ourArray.unshift("Happy");

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

myArray.unshift(["Paul",35]);

////////////////////////////////////////////////////////////////////
//soal 45 : Shopping List                                        //
///////////////////////////////////////////////////////////////////
var List = [["Chocolate Bar", 15],["Hendy", 15, 12, 2, "Nurfrianto"],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15]];

/////////////////////////////////////////////////////////////////
//soal 46 : Write Reusable JavaScript with Functions          //
////////////////////////////////////////////////////////////////

function ourReusableFunction() {
    console.log("Heyya, Hendy");
  }
  
  ourReusableFunction();

  function reusableFunction(){
    console.log("Hi World");
  }
  
  reusableFunction()

/////////////////////////////////////////////////////////////////////
//soal 47 : Passing Values to Functions with Arguments            //
////////////////////////////////////////////////////////////////////
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
  }
  ourFunctionWithArgs(10, 5); 

  function functionWithArgs(a,b){
    console.log(a + b);
  }
  
  functionWithArgs(1,2);

///////////////////////////////////////////////////////////////////
//soal 48 : Global Scope and Functions                          //
//////////////////////////////////////////////////////////////////
// Declare your variable here
var myGlobalNumber = 10;

function fun1() {
  oopsGlobalNumber = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobalNumber != "undefined") {
    output += "myGlobal: " + myGlobalNumber;
  }
  if (typeof oopsGlobalNumber != "undefined") {
    output += " oopsGlobal: " + oopsGlobalNumber;
  }
  console.log(output);
}

//////////////////////////////////////////////////////////////////
//soal 49 :Local Scope and Functions                           //
/////////////////////////////////////////////////////////////////
function LocalScope() {
    'use strict';
    var myName = "hendy";
    console.log(myName);
  }
  LocalScope();
  
  console.log(myName);

///////////////////////////////////////////////////////////////
//soal 50 : Global vs. Local Scope in Functions             //
//////////////////////////////////////////////////////////////
var myWear = "pants";

function Outfit() {

  var myWear = "Helm";
  return myWear;
}

Outfit();

//////////////////////////////////////////////////////////////
//soal 51 : Return a Value from a Function with Return     //
/////////////////////////////////////////////////////////////

function minusSeven(num) {
    return num - 7;
  }
  function timesFive(num) {
    return num * 5;
  }
  var answer = timesFive(5);
  var answer2 = timesFive(2);
  var answer3 = timesFive(0);
  
  console.log(minusSeven(10));

/////////////////////////////////////////////////////////////////////
//Soal 52 :Understanding Undefined Value returned from a Function //
///////////////////////////////////////////////////////////////////

var sum = 0;
function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}
addThree();
addFive();

/////////////////////////////////////////////////////////////////////
//soal 53: Assignment with a Returned Value                       //
////////////////////////////////////////////////////////////////////
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7); 

//////////////////////////////////////////////////////////////////////////
//soal 54: Stand in Line                                                //
//JSON.parse() untuk mengubah string JSON menjadi javascript object.    //
//JSON.stringify() untuk mengubah javascript object menjadi string JSON //
//////////////////////////////////////////////////////////////////////////
function nextInLine(arr, item) {
    arr.push(item);
    var removed = arr.shift();
    return removed; 
  }
  
  // Test Setup
  var testArr = [1,2,3,4,5];
  
  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

/////////////////////////////////////////////////////////////////////
//soal 55 : Understanding Boolean Values                          //
////////////////////////////////////////////////////////////////////
function Boolean() {
    return true;
  }


///////////////////////////////////////////////////////////////////////////////
//                              Perbandingan
// 
// ==       = Equal value                   <     = Less than
// ===      = Equal value and type          >     = Greater than
// !=       = Not equal                     >=    = Greater than or equal
// !==      = Not equal value and type      <=    = Less than or equal
// 
//////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//soal 56 : Use Conditional Logic with If Statements                 //
///////////////////////////////////////////////////////////////////////

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
trueOrFalse(false);

/////////////////////////////////////////////////////////////////////////
//soal 57 :Comparison with the Equality Operator                      //
////////////////////////////////////////////////////////////////////////

function testEqual(val) {
  if (val == "12") { 
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
testEqual(12);

///////////////////////////////////////////////////////////////////////////
//soal 58:Comparison with the Strict Equality Operator                  //
//////////////////////////////////////////////////////////////////////////
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
testStrict("7");
testStrict(7);

//////////////////////////////////////////////////////////////////////////
//soal 59 : Practice comparing different values                         //
//////////////////////////////////////////////////////////////////////////

function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

//////////////////////////////////////////////////////////////////////////
//soal 60 :Comparison with the Inequality Operator                      //
/////////////////////////////////////////////////////////////////////////
function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

//////////////////////////////////////////////////////////////////////////
//soal 61 : Comparison with the Strict Inequality Operator             //
/////////////////////////////////////////////////////////////////////////
function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

/////////////////////////////////////////////////////////////////////////
//soal 62: Comparison with the Greater Than Operator                  //
////////////////////////////////////////////////////////////////////////
function testGreaterThan(val) {
  if (val >100) { 
    return "Over 100";
  }

  if (val >10) { 
    return "Over 10";
  }

  return "10 or Under";
}
testGreaterThan(10);

/////////////////////////////////////////////////////////////////////////
//soal 63: Comparison with the Greater Than Or Equal To Operator      //
////////////////////////////////////////////////////////////////////////
function testGreaterOrEqual(val) {
  if (val >= 20) { 
    return "20 or Over";
  }

  if (val >= 10) {  
    return "10 or Over";
  }

  return "Less than 10";
}
testGreaterOrEqual(10);

////////////////////////////////////////////////////////////////////////
//soal 64 : Comparison with the Less Than Operator                   //
///////////////////////////////////////////////////////////////////////
function testLessThan(val) {
  if (val < 25) { 
    return "Under 25";
  }

  if (val < 55 ) { 
    return "Under 55";
  }

  return "55 or Over";
}
testLessThan(10);

///////////////////////////////////////////////////////////////////////
//soal 65 : Comparison with the Less Than Or Equal To Operator      //
//////////////////////////////////////////////////////////////////////
function testLessOrEqual(val) {
  if (val <= 12) { 
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
testLessOrEqual(10);

//////////////////////////////////////////////////////////////////////
//soal 66:Comparisons with the Logical And Operator                //
/////////////////////////////////////////////////////////////////////
function testLogicalAnd(val) {


  if (val <= 50 && val >= 25) {
      return "Yes";
    
  }

  return "No";
}
testLogicalAnd(10);
testLogicalAnd(25);

//////////////////////////////////////////////////////////////////////
//soal 67: Comparisons with the Logical Or Operator                //
/////////////////////////////////////////////////////////////////////
function testLogicalOr(val) {

  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);

/////////////////////////////////////////////////////////////////////
//soal 68: Introducing Else Statements                            //
////////////////////////////////////////////////////////////////////
function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);

///////////////////////////////////////////////////////////////////
//soal 69 : Introducing Else If Statements                      //
//////////////////////////////////////////////////////////////////
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
testElseIf(7);

/////////////////////////////////////////////////////////////////////
//soal 70 : Logical Order in If Else Statements                   //
////////////////////////////////////////////////////////////////////
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(4);

////////////////////////////////////////////////////////////////////
//soal 71 : Chaining If Else Statements                          //
///////////////////////////////////////////////////////////////////
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
testSize(7);

//////////////////////////////////////////////////////////////////////
//soal 72 : Golf Code    latihan                                   //
/////////////////////////////////////////////////////////////////////
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
}
golfScore(5, 4);

/////////////////////////////////////////////////////////////////////////
//soal 73 :Selecting from Many Options with Switch Statements         // 
////////////////////////////////////////////////////////////////////////
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case  1:
    return "alpha";
    break;
    case  2:
    return "beta";
    break;
    case  3:
    return "gamma";
    break;
    case  4:
    return "delta";
    break;
  }
  return answer;
}

////////////////////////////////////////////////////////////////////////////
//soal 74 : Adding a Default Option in Switch Statements                 //
///////////////////////////////////////////////////////////////////////////
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
    switch(val){
    case  "a":
    return "apple";
    break;
    case  "b":
    return "bird";
    break;
    case  "c":
    return "cat";
    break;
    default:
    return "stuff";
    break;
  }
  return answer;
}
switchOfStuff(1);

/////////////////////////////////////////////////////////////////////////////
//soal 75 : Multiple Identical Options in Switch Statements               //
////////////////////////////////////////////////////////////////////////////
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
  case 1:
  case 2:
  case 3:
    return "Low";
    break;
  case 4:
  case 5:
  case 6:
    return "Mid";
    break;
  case 7:
  case 8:
  case 9:
    return "High";
}
  return answer;
}
sequentialSizes(1);

//////////////////////////////////////////////////////////////////////////////
//soal 76 : Replacing If Else Chains with Switch                           //
/////////////////////////////////////////////////////////////////////////////
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
}
  return answer;
}
chainToSwitch(7);

///////////////////////////////////////////////////////////////////////////////////
//soal 77 : Returning Boolean Values from Functions                             //
//////////////////////////////////////////////////////////////////////////////////
function isLess(a, b) {
  return a <= b;
}
isLess(10, 15);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//soal 78 : Return Early Pattern for Functions        a or b are less than 0 
//
// Math.pow() function in JavaScript is used to power of a number i.e., the value of number raised to some exponent.
// Math.sqrt() function returns the square root of a number
// Math.round() function returns the value of a number rounded to the nearest integer
// Math.floor() function returns the largest integer less than or equal to a given number.
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);

///////////////////////////////////////////////////////////////////////////////
//soal 79 : Counting Cards                                                  
//
//
//      Count            Change	Cards
//       +1	              2, 3, 4, 5, 6
//        0	              7, 8, 9
//       -1	              10, 'J', 'Q', 'K', 'A'
//
//
//
//////////////////////////////////////////////////////////////////////////////
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

///////////////////////////////////////////////////////////////////////////////
//soal 80 : Build JavaScript Objects                                        //
//////////////////////////////////////////////////////////////////////////////

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

var myDog = {
  "name": "Musti",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

///////////////////////////////////////////////////////////////////////////////
//soal 81 : Accessing Object Properties with Dot Notation                   //
//////////////////////////////////////////////////////////////////////////////

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;     
var shirtValue = testObj.shirt;    

//////////////////////////////////////////////////////////////////////////////
//soal 82 : Accessing Object Properties with Bracket Notation              //
/////////////////////////////////////////////////////////////////////////////

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];  
var drinkValue = testObj["the drink"];   

////////////////////////////////////////////////////////////////////////////
//soal 83 : Accessing Object Properties with Variables                   //
///////////////////////////////////////////////////////////////////////////

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;     
var player = testObj[playerNumber];  

///////////////////////////////////////////////////////////////////////////
//soal 84 : Updating Object Properties                                  //
//////////////////////////////////////////////////////////////////////////

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Campers"]
};
myDog["name"] = "Happy Coder"

//////////////////////////////////////////////////////////////////////////
//soal 85 : Add New Properties to a JavaScript Object                 ///
/////////////////////////////////////////////////////////////////////////

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Campers"]
};
myDog.bark = "gug gok";

///////////////////////////////////////////////////////////////////////////
//soal 86 : Delete Properties from a JavaScript Object                  //
//////////////////////////////////////////////////////////////////////////
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

var myDog = {
  "name": " Coder",
  "legs": 4,
  "tails": 1,
  "friends": [" Campers"],
  "bark": "woof"
};

delete myDog.tails;

////////////////////////////////////////////////////////////////////////////
//soal 87 : Using Objects for Lookups                                    //
///////////////////////////////////////////////////////////////////////////

function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha": "Hendy",
    "bravo": "Nurfrianto",
    "charlie": "angel",
    "delta": "Done",
    "echo": "Hard",
    "foxtrot": "joke"
  };
  result = lookup[val];
  return result;
}
phoneticLookup("charlie");

///////////////////////////////////////////////////////////////////////////
//soal 88 : Testing Objects for Properties                              //
//////////////////////////////////////////////////////////////////////////

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}
checkObj("gift");

//////////////////////////////////////////////////////////////////////////
//soal 89 : Manipulating Complex Objects                               //
/////////////////////////////////////////////////////////////////////////

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
    {
    "artist": "Sule",
    "title": "Piano Man",
    "release_year": 1903,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": false
  }
];

////////////////////////////////////////////////////////////////////////
//soal 90 : Accessing Nested Objects                                 //
///////////////////////////////////////////////////////////////////////

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];

//////////////////////////////////////////////////////////////////////
//soal 91 : Accessing Nested Arrays                                //
/////////////////////////////////////////////////////////////////////

var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];

////////////////////////////////////////////////////////////////////
//soal 92 : Record Collection                                    //
///////////////////////////////////////////////////////////////////
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};
function updateRecords(id, prop, value) {
  if(value === "") delete collection[id][prop];
  else if(prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}
updateRecords(5439, "artist", "ABBA");

/////////////////////////////////////////////////////////////////
//soal 93 : Iterate with JavaScript While Loops               //
////////////////////////////////////////////////////////////////
var myArray = [];
var i = 0;
while (i < 5){
    myArray.push(i);
    i++;
}

//////////////////////////////////////////////////////////////
//soal 94 : Iterate with JavaScript For Loops              //
/////////////////////////////////////////////////////////////

var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
var myArray = [];

for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

////////////////////////////////////////////////////////////
//soal 95 : Iterate Odd Numbers With a For Loop           //
///////////////////////////////////////////////////////////

var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

var myArray = [];

for (var i = 1; i < 11; i += 2) {
  myArray.push(i);
}

/////////////////////////////////////////////////////////////////
//soal 96 : Count Backwards With a For Loop                   //
////////////////////////////////////////////////////////////////

var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

var myArray = [];

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

////////////////////////////////////////////////////////////////
//soal 97 : Iterate Through an Array with a For Loop         //
///////////////////////////////////////////////////////////////
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

/////////////////////////////////////////////////////////////////
//soal 98 : Nesting For Loops                                 //
///////////////////////////////////////////////////////////////
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);

///////////////////////////////////////////////////////////////
//soal 99 : Iterate with JavaScript Do...While Loops        //
/////////////////////////////////////////////////////////////

var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5);

///////////////////////////////////////////////////////////
//soal 100 : Replace Loops using Recursion              //
/////////////////////////////////////////////////////////

function sum(arr, n) {
    if (n <= 0) {
      return arr[0];
    } else {
      return sum(arr, n - 1) + arr[n];
    }
}

///////////////////////////////////////////////////////
//soal 101 : Profile Lookup                         //
/////////////////////////////////////////////////////
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
for (var i = 0; i < contacts.length; i++) {
  if (contacts[i].firstName === name) {
    if (prop in contacts[i]) {
      return contacts[i][prop];
    } else return "No such property";
  }
}
return "No such contact";
}

lookUpProfile("Akira", "likes");

////////////////////////////////////////////////////////////////////
//soal 102 : Generate Random Fractions with JavaScript           //
//////////////////////////////////////////////////////////////////
function randomFraction() {
  var result = 0;

  while (result === 0){
    result = Math.random()
  }
  return result;
}

///////////////////////////////////////////////////////////////////
//soal 103 : Generate Random Whole Numbers with JavaScript      //
//////////////////////////////////////////////////////////////////
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    
  return Math.floor(Math.random() * 10);
}

////////////////////////////////////////////////////////////////
//soal 104: Generate Random Whole Numbers within a Range     //
//////////////////////////////////////////////////////////////
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; 

}
var myRandom = randomRange(5, 15);

////////////////////////////////////////////////////////////////
//soal 105 : Use the parseInt Function                       //
///////////////////////////////////////////////////////////////

function convertToInteger(str) {
  var toint = parseInt(str);
  return toint
}

convertToInteger("56");

//////////////////////////////////////////////////////////////
//soal 106 : Use the parseInt Function with a Radix        //
/////////////////////////////////////////////////////////////
function convertToInteger(str) {
  var a = parseInt(str, 2);
  return a
}

convertToInteger("10011");

//////////////////////////////////////////////////////////////
//soal 107 : Use the Conditional (Ternary) Operator         //
//////////////////////////////////////////////////////////////
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

/////////////////////////////////////////////////////////////
//soal 108 : Use Multiple Conditional (Ternary) Operators //
////////////////////////////////////////////////////////////
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
  }
  
  checkSign(10);

////////////////////////////////////////////////////////////
//soal 109 : Use Recursion to Create a Range of Numbers  //
//////////////////////////////////////////////////////////
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
   return [startNum];
 } else {
   var numbers = rangeOfNumbers(startNum, endNum - 1);
   numbers.push(endNum);
   return numbers;
 }
};

//////////////////////////////////////////////////////////
//soal 110 : Use Recursion to Create a Countdown       //
////////////////////////////////////////////////////////

function countdown(myArray, n){
  if(n <= 0){
    return;
  }
  else{
    myArray.push(n);
    countdown(myArray, n - 1);
  }
}