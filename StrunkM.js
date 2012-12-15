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
	
	// Checks for a valid URL
	// Returns boolean
	var isUrl = function (str) {
		var re = /^(?:http|https):/;
		return re.test(str);
	};				
	
	// Capitalize the first letter in each word in string
	// Returns modified string with the first letter capitalized in each word
	var upperLetter = function (str) {
		var split = str.split(" ");
		var result = "";
		for (var i = 0, j = split.length; i < j; i++) {
			var spNew = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase());
			result = result.concat(spNew + " ");
			};
			return result;
			};
	
	// Changes the separator to a new given separator ex. a,b,c -> a/b/c
	var swapSep = function (str,newSep) {
		var re = /\W/g;
		return str.replace(re,newSep);
	};			
	
	return {
		"isPhoneNum" : isPhoneNum,
		"isEmail" : isEmail,
		"isUrl" : isUrl,
		"upperLetter" : upperLetter,
		"swapSep" : swapSep
	};
	

};

// Testing String

var stringLib = StringLibrary();
console.log(stringLib.isPhoneNum("256-655-0016"));
console.log(stringLib.isEmail("test@test.com"));
console.log(stringLib.isUrl("http://test.com"));
console.log(stringLib.upperLetter("This is a test to see if upper letters work"));
console.log(stringLib.swapSep("this,is,test","/"));

// Number Library

var NumberLibrary = function () {
	
	// Change a number to use a specific amount of decimal places
	var formatNum = function (num,afterDecimal) {
        return Number(num.toFixed(afterDecimal));
    };
    
    // Changes a string value to a integer value
    var stringToNum = function (num) {
	    return Number(num);
    };


    return {
	    "formatNum" : formatNum,
	    "stringToNum" : stringToNum
	};    
};

// Testing Number

var numberLib = NumberLibrary();
console.log(numberLib.formatNum(3.443,2));
console.log(numberLib.stringToNum("456"));