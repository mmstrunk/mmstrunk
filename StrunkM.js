// Michael Strunk
// SDI 1212
// Project 3
// My third JavaScript


// Hero Keys

var Bruno = {
	age: "28",
	height: "Six Foot",
	catchPrase: "Im here to stay"
	
};

var Axel = {
	age: "34",
	height: "Six Two",
	catchPrase: "Time to die"
};

var Rose = {
	age: "24",
	height: "Five two",
	catchPrase: "This looks like a job for a girl"
};


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

// json for-loop

var goneHeros = function (json) {
	for (var i = 0; i < json.fallenHeros.length; i++){
		var deadHero = json.fallenHeros[i];
		say(" At the age of " + deadHero.age + ", the hero " + deadHero.name + " was slane by the dragon");
	};
};




 




