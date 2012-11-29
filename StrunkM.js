// Michael Strunk
// SDI 1211
// Project 1
// My first JavaScript

// My variables
var myHeroName = "Bruno";
var castleLocation = "Red Castle";
var weaponChoice = "Bow";

var floor = 0;
while (floor < 4) {
	console.log (" searched " + floor +" and did not find the dragon ");
	floor++;
};

console.log ("Found the dragon")

//My outputs
console.log ("The hero's name is " + myHeroName);
console.log ("He is trying to slay the dragon and save the princess")
console.log ("He used his " + weaponChoice + " as weapon of choice");
console.log (myHeroName + " traveled to the  " + castleLocation);

// Conditional 1
if (castleLocation === "Blue Castle") {
    console.log(myHeroName + " did not find the castle and would have to search another day");
}
    else {
    if (castleLocation === "Red Castle") {
    console.log("He found the castle that was harboring the Dragon");
}
// Conditinal 2
if (weaponChoice === "Sword") {
    console.log(myHeroName + " was defeated by the dragon");
}
 else {
    if (weaponChoice === "Bow") 
    console.log("The Dragon was defeated in distant combat")
    console.log("He recieved a kiss from the princess")
 }}

 




