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
	
	return {
			"isPhoneNum" : isPhoneNum
	};
			
};


var stringLib = StringLibrary();
console.log(stringLib.isPhoneNum("941-244-0011"));