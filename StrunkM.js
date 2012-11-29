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

for (var weaponChoice = 0; weaponChoice < weaponsChoice.length; weaponChoice++){
	var myHeroName = myHeroNames[weaponsChoice],
		weaponThisTime = weaponsChoice[weaponChoice];
	
	
	console.log(myHeroNames + " chose to use the " + weaponsChoice + " in respective order. ")
	
};









 




