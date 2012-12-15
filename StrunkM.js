// Michael Strunk
// SDI 1212
// Project 4
// Code Library

var StringLibrary = function (str) {
	
	// Checks for a phone number
	// Returns boolean
	var isPhoneNum = function (str) {
		var re = /\d{3}-\d{3}-\d{4}/;
		return re.test(str);
		};
	
	// Checks for a valid email 
	// Returns boolean
	var isEmail = function (str) {
		var re = /^\w+@[\w.\-]+\.[A-Za-z]{2,3}$/;
		return re.test(str);
		};
	
	return {
			"isPhoneNum" : isPhoneNum,
			"isEmail" : isEmail
	};
			
};

var stringLib = StringLibrary();
console.log(stringLib.isPhoneNum("256-655-0016"));
console.log(stringLib.isEmail("test@test.com"));

