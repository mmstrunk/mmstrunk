// Michael Strunk
// SDI 1212
// Project 2
// My second JavaScript



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

// function
var say = function(message){ console.log(message); 
	
};

// While loop
	var floor = 0;
		while (floor < 4) {
	
	say(myHeroNames + " all searched  floor number " + floor +" and did not find the dragon ");
	
	floor++;
};
	say("They found the dragon on the 4th floor!")

// for-loop
	for (var i = 0, j = weaponsChoice.length; i < j; i++){
	var myHeroName = myHeroNames[i];
		weaponThisTime = weaponsChoice[i];
	
	say(myHeroName + " chose to use the " + weaponThisTime + " as his weapon. ")
	
};

say( "The dragon slayed " + myHeroNames + " with one breath of fire! ")










 




