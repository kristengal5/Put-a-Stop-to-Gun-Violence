/* .js files add interaction to your website */

var factList=[
  "Over 500 people die every day due to violence with firearms.",
  
"Between 2012 and 2016, there were 1.4 million firearm-related deaths worldwide.",

"An estimated 2,000 people are injured by gunshots per day.",

"Every day over 110 americans are killed with guns.",

"Over 39,000 were killed with guns in the US per year - that is an average of over 100 per day.",

"Up to 15 billion rounds of ammunition are produced per year.",

"Openly carrying firearms in public is legal in 45 states.",

"Nearly 75% of active shooters legally purchased or possessed the firearm.",

"Each day 12 children die from gun violence in America.",

"Black youth are 4x more likely to be killed with guns than white youth.",

]

var fact=document.getElementById("fact");
var myButton=document.getElementById("myButton");
var count=0;

if(myButton){
  myButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count ++;
  if(count==factList.length){
    count=0;
  }
}


var displayName=document.getElementById("message");
var button = document.getElementById("button");

if(button){
  button.addEventListener("click", displaySecret);
}


function displaySecret(){
  var text=document.getElementById("myText").value;
  displayName.innerHTML = "Hello, my name is " + text+ ". As I'm sure you know, gun violence and school shootings have been a very prevalent and tragic issue. This puts many at risk, including school children. I am asking for a stricter regulation of firearm sales and gun violence prevention laws. Thank you for considering these solutions to create a safer community for all."
}