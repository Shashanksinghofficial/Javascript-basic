//this is comment inside double slash //
//1//
console.log("hello world")
//2//
var a="38";
console.log(a)
a="4";
console.log(a)
//3//
//change the  value of a using another method //
var A;
A="56";
console.log(A)
//4//
//variable name also combined and next word letter in the capital form //
//right method to write a var name//
var myName="Ankit Kosta";
console.log(myName)
//5//
//add and subtract the variable//
// number has no double quotes//
var one=22;
var two=33;
var three=44;

console.log(one+two+three)
// another method to add and subtract//
var totalMarks=one+two+three;
console.log(totalMarks)
//6 update automatically year //
var DOB= 2004;
var currentYear=new Date().getFullYear();

console.log(currentYear-DOB)
//@nother//
var myAge=currentYear-DOB;
console.log(myAge)
//7//
//copy one value in another //
var first="this is first";
console.log(first)
var second=first;
console.log(second)
//There are four type of data //
//number //
var number= 55.66;
console.log("this is number"+  number)
// string data with double quotes as a value//
var love="Hanuman";
console.log("This is string" + love)
//boolean data 
//true and false condition//
//complete 💯//
var random = Math.random() * 100
console.log("this is random :", random);
let situation;
if (random >= 1 && random <= 50) {
  situation = true;  // Assign true if within range
} else {
  situation = false; // Assign false otherwise
}
  // Optionally, show different messages based on the Boolean value
if (situation) {
  console.log("Go to school!");
} else {
  console.log("Stay home!");
}
//we can also use ternary operator here(?)by giving condition//

//array types// 
//for store more data in one var//

var cars=["thar","swift","vagonour","alto","Suzuki"];
console.log(cars)
//array with numbers //
var room=[23,34,66,44,46,86,67,44,44,87,56,34,99,55];
console.log(room)
// js operators //
//"+"","-","×","÷"//
var num1=30;
var num2=10;
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)
console.log(num1%num2)
//operands are called the two value where the operator works between//
//assignment operator(=)//
//equality operator(!=)//
//arithmetic operator(+)//
//ternary operator(?)//
//comparision operator(<)//
//logical operator (!)//

//exponetial(**)//
// 2×2×2=(2)^3
var r=2;
var n=3;
console.log(r**n)
// increment(++)//
//decrement(--)//
var f=6;
console.log(++f);
var g=6;
console.log(--g);
var h=6;
console.log(h++);
var i=6;
console.log(i--);
// additional assignment//
var fi=3;
var si=3;
console.log("this is fi+=7",fi+=7)
console.log("this is fi+=si",fi+=si)
//subtraction assignment//
var f=3;
var s=3;
console.log(f-=s)
console.log(f-=2)
//multiplication assignment//
var af=3;
var as=3;
console.log(af*=3)
console.log(af*=as)
//division assignment//
var aaf=3;
var aas=3;
console.log(aaf/=3)
console.log(aaf/=aas)
//remainder assignment//
var aff = 3;
var ass = 3;
console.log("this is %",af%=3)
console.log("this is %",aff%=ass)
//ternary operator//

var userAge=19;
(userAge>18)?
console.log("Eligible"):
console.log("Not Eligible");

// another //
 isAHoliday=false;
(isAHoliday)?
console.log("stayHome"):
console.log("GoToSchool");
// logical operator and(&&)//
//when both condition are true then he show true value//
holiday=true;
raining=false;
(holiday&&raining)?
console.log("Go for play"):
console.log("stay At Home");


// or operator (||)//
festival=true;
holiday=false;
(festival||holiday)?
console.log("Go for play"):
console.log("stay At Home");

// not operator//
//he behave opposite value//
festival=true;
holiday=false;
(festival=!holiday)?
console.log("this is not operator","Go for play"):
console.log("stay At Home");

//logic no 2 //
console.log((2+3)*4)
console.log(2+3*4)

//char access//
//chartAt()//
//char position find//
//start from 0.//
var fruits="Pineapple"
console.log(fruits.charAt(3))

//char access using var //
var flowers="sunflower";
var index =8;
console.log(flowers.charAt(index))

//find length//
// length count from 1 not 0//
//length count space also//
var items="furniture of the year"
console.log(items.length);


// uppercase and lowercase//
var uppercase ="ankit kosta"
console.log("This text is in lowecase but he change in uppercase",uppercase.toUpperCase());

//lowercase//
var lowercase = "ANKIT KOSTA"
console.log("This text is in uppercase but he change in lowercase", lowercase.toLowerCase());

// string comparison//
// this show in true and false//
var color="orange"
var fruit="orange"
var same=(color==fruit)
console.log(same)

//backtip//
var backtip=`this is'a backtip`
console.log(backtip)

var age="sixteen";
console.log(`my age is ${age}`)

//index and indexOf start from 0//
var basket =["baanana","pineapple","orange","grapes","guava"]
console.log(basket.indexOf("guava"));

var basket =["baanana","pineapple","orange","grapes","guava"]
var find= basket.indexOf("guava");
console.log("this is another",find)
//if there is no value in array then show negative values-1//
console.log(basket.indexOf("watermelon"));

//concat //
var basket1=["pink","yellow","green","black","white"]
var basket2=["parrot","cat","lion","tiger","bull"]
var basket3=basket1.concat(basket2)
console.log(basket1.concat(basket2));
console.log("another-method",basket3)
//if we use simple method //
console.log("this is simple method to join with comma-",basket1,basket2);
console.log("this is join using plus-",basket1+basket2);

//sort//
var sort=["zebra","banana","parrot","owl","ship","cat","mango"]
console.log(sort.sort())

// get value using index by sort//

// condition//
var yourAge=26;
if(yourAge>=18){
  console.log("You are eligible")
}
else{
  console.log("You are not Eligible ")
}
//there is no need to write else statement//
var yourAge=27;
if(yourAge>=18){
  console.log("You are also eligible")
}
// nesterd condition for join to if-else condition nested//
var rupees=70;
if(rupees>50){
if(rupees>100){
  console.log("Enough Money");
}
else{
  console.log("few Money");
}
}
else{
  console.log("you are poor")
}
//ladder concept//
var quantity =786;
if(quantity>=100){
  console.log("sufficient quantity ")
}else if (quantity>=50) {
  console.log("Not proper")
} else {
  console.log("Weak performance ")
}
// switch case num value is executed by given below case same value //
var num=6;
switch (num){
  case 8:
    console.log("8 num is in the variable ")
    break;
        case 6:
      console.log("6 num is in the variable ")
      break;
      case 5:
        console.log("5 num is in the variable ")
        break;
    case 7 :
      console.log("7 num is in the variable ")
    break;

}
//another Ram same case//
var name="Ram";
switch (name){
  case "sohan":
    console.log("8 num is in the variable ")
    break;
    case "Ram":
      console.log("Shree Ram is in theis in the variable ")
    break;
    case 6:
      console.log("6 num is in the variable ")
      break;
      case 5:
        console.log("5 num is in the variable ")
        break;
}
//break is not required everyone//


for(var counter=1;
counter<=10;
counter++){
  console.log(counter)
}
//anither//
var fruits=["banana","apple","watermelon","orange","guava"]
for(var fruitsIndex=0;fruitsIndex<6;fruitsIndex++){
  console.log("fruits",fruits[fruitsIndex]);
}
//another with module//
for(var counter=1;
counter<=30;
counter++){
  if(counter%3==0){
  console.log("conter%3",counter)
}
}
//another)//
var ballsInAOver=6;
for(var ballsThrown=1;
ballsThrown<=ballsInAOver;
ballsThrown++){
  console.log("Ball thrown",ballsThrown);
  if(ballsThrown==ballsInAOver){
    console.log("restart Over")
    
  }
  
}
//break the statement//
for(var counter=1;counter<=5;counter++){
  if(counter==4){
   break;
  }
  console.log("stop here in 3")
}
//continue//
//in this 2 is not exicute//
//i==2 then 2 is not show and i==5 then 5 is not show or i=%2 then 2 divisible is not show //
userInputValue=10;
for(var i=1;i<=userInputValue;i++){
  if(i==2){
    continue;
  }
  console.log("the number is"+i);
}
//while function//
var number=1;
while(number<=5){
  console.log("while",number);
  number++;
}
//another//
var count=1;
while(count<=10){
  console.log("ANKIT KOSTA");
  count++;
}

//another//
var countered=1;
while(countered<=10){
  countered++;
if(countered%2==0){
  console.log("Divisible by 2 is",countered);
   }
}
//another//
var series=1;
while(series<=20){
  series++;
  if(series%2==0&&series>=10){
    console.log(series)
  }
}
// unlimited count//
var numbered;
var iterator=1;
while(iterator<=numbered){
  console.log(iterator);
  iterator++;
}
//table of 5//
var digit=1;
while(digit<=10){
    console.log("5×",digit,"=",5*digit)
    digit++;
}
//function//
//we can call many times by function//
function table(){
  document.getElementById('table')
  for(digit=1;digit<=10;){
    console.log("onclick Button",5*digit);
    console.log("onclick Button",5*digit);
    digit++;
  }
}
//table of 4//
function four(){
  document.getElementById("four")
  for(var four=1;four<=10;){
    console.log("table of 4 =",4*four)
    four++;
  }
}
//--------------------------------
//input type table//
document.getElementById("tableForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting traditionally
    const number = document.getElementById("numberInput").value;
    let result = `<h3>Multiplication Table for ${number}</h3><ul>`;
    
    for (let i = 1; i <= 10; i++) {
      result += `<li>${number} x ${i} = ${number * i}</li>`;
    }
    
    result += `</ul>`;
    document.getElementById("tableResult").innerHTML = result;
  });
// argument topic -------------------------------//
//argument value //
function sip(red){
  for(var c=1;c<=10;){
    console.log(c*red);
    c++;
  }
}
//write any number here for table//
sip(80);
//-----------------------------//
//even and odd find//
function evennOddd(numbered){
 if(numbered%2==0){
   console.log(numbered,"is even")
 }else{
   console.log(numbered,"is odd")
 }
 
}
// write any number in place of 8 and find even and odd//
evennOddd(8);
//////////////////////////////////)
//even and odd find//
function evenOdd(number){
 if(number%2==0){
   console.log(number,"even")
 }else{
   console.log(number,"is odd")
 }
 
}
evenOdd(3);

//-------_------------------_--_---
document.getElementById("evenOdd").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  const number = parseInt(document.getElementById("inputNumber").value, 10); // Get the input number
  let result;

  // Function to check even or odd
  function evenOdd(number) {
    if (number % 2 === 0) {
      return `${number} is even.`;
    } else {
      return `${number} is odd.`;
    }
  }

  result = evenOdd(number); // Call the function with the input number

  // Display the result
  document.getElementById("numberResult").innerHTML = `<h3>${result}</h3>`;
});

//--------_----------------_---_---

// true and false value//
function read(numbers){
if(numbers%3==0){
  return true;
  
}else{
  return false;
}
}
var result=read(577)
console.log(result)
// curious meletia //
//invaders count//
var TotalInvaders=10;
for(var InvadersCount=1;
InvadersCount<=TotalInvaders;
InvadersCount++){
  console.log(InvadersCount,"Invaders");
}
//Invaders Speed//
var TotalScore=0;
function Hit(){
 TotalScore=TotalScore+1;
 console.log(TotalScore);
}
// object// 
var objectName={
  name:"Maruti",color:"Black",engine:"300cc"

}
console.log(objectName);
// use one key//
console.log(objectName.color)

// min and max find//
var minimum= Math.min(-10,50,-20);
console.log("This is minimum",minimum);

//max//
//green color is javascript property// and white color is my property//
var maximum =Math.max(-10,-20,57,370,378,-29,67);
console.log("This is maximum",maximum);
// random value //
// random number with decimal value but when we give trunc function in it remove decimal numbers//
var random =Math.random()*100
console.log("this is random",random);
// trunc//
var ran= Math.trunc(random)
console.log("This is trunc without decimal",ran);
// round //
var exact=Math.random()*1000
console.log(exact);
var exacted=Math.round(exact)
console.log(exacted);
// Math.floor//
var exact=Math.random()*10
console.log(exact);
var exacted=Math.floor(exact)
console.log(exacted);
//Math.ceil//
var exact = Math.random() *20
console.log(exact);
var exacted = Math.ceil(exact)
console.log(exacted);
// date and time//
var currentDate =new Date();
console.log(currentDate);
const now = new Date();
console.log(now);
//current date format using iso//
var isoDate =currentDate.toISOString();
console.log(isoDate);
//using get time for mm second//
var mm =currentDate.getTime();
console.log(mm);
// comparison between date 1 and Date 2//
var date1 =new Date(2022,08,01,14,34,0,0);
var date2 =new Date(2022,10,01,14,34,0,0);
var date1InM = date1.getTime();
var date2InM = date2.getTime();
console.log(date1InM,date2InM);
if(date1>date2){
  console.log("Date 1 is greater than Date 2");
}else{
  console.log("Date 2 is greater than Date 1")
}
// Syntex error missing var meaning//
//va p =1;//
//console.log(p);//

//runtine error//
//console.log(y);//


//logical error mean logic not correct // 

// special error handling for hide a error///
try{
  showName();
}catch(error){
  print("some error occurred ")
}

// create my error //
try{
  showName();
}
catch(error){
  var customError=new Error("WARNING,I am a Hacker");
console.log(customError);
}
alert("WARNING, I am a Hacker")


// access css using js zerk dinode first heading//
document.getElementsByTagName("h1")[0].style.color="blue"
// console.warning//
console.warn("Goast")

// document.write like html//
document.write("Ankit kosta");
// date insert using p tag//
function openDate(){
  document.getElementById("click").innerHTML=Date();
  
}
// error//
console.error("Danger!")
//clear for clear all console data//
//console.clear();//

console.assert(7==(10-3));
// undifined and null//
var und=(undefined);
console.log(und);
var n=(null);
console.log(n);
console.log("Complete Javascript 💯")
