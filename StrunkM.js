// Michael Strunk
// SDI 1211
// Project 1
// My first JavaScript



// My variables in array
var myHeroNames = [
	"Bruno",
	"Axel",
	"Rose"
];

var weaponsChoice = [
	"Axe",
	"Sword",
	"Bow"
];

// While loop
var floor = 0;
while (floor < 4) {
	console.log (myHeroNames + " all searched  floor number " + floor +" and did not find the dragon ");
	floor++;
};
console.log ("They found the dragon on the 4th floor!")

// for-loop

for (var i = 0, j = weaponsChoice.length; i < j; i++){
	var myHeroName = myHeroNames[i];i++,
		weaponThisTime = weaponsChoice[i];i++;
	
	
	console.log(myHeroName + " chose to use the " + weaponThisTime + " as his weapon. ")
	
};








 




