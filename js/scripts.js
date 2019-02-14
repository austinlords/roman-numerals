//BACK-END LOGIC

//this callback function will convert ones place, tens places, hundreds, thousands place into roman numerals.
var onesTensHundredsThousands = function(place, oneValue, fiveValue, tenValue) {
  if (place === 9) {
    return oneValue + tenValue;
  } else if (place === 8) {
    return fiveValue + oneValue + oneValue + oneValue;
  } else if (place === 7) {
    return fiveValue + oneValue + oneValue;
  } else if (place === 6) {
    return fiveValue + oneValue;
  } else if (place === 5) {
    return fiveValue;
  } else if (place === 4) {
    return oneValue + fiveValue;
  } else if (place === 3) {
    return oneValue + oneValue + oneValue;
  } else if (place === 2) {
    return oneValue + oneValue;
  } else if (place === 1) {
    return oneValue;
  } else if (place === 0) {
    return "";
  }
}

//this callback function will return value of ones, tens, hundreds and thousands place in an (array) such as [3, 4, 5, 7].
// index is measured from end in reverse. eg. [3, 4, 5, 7] index of 1 = 7, index of 2 = 5
var getValues = function(array, index) {
  if (array[array.length - index]){
    return array[array.length - index];
  } else return false;
}

// this function will convert a number provided by user into Roman Numerals. Will return a string of Roman Numerals.
var convertToRomanNumerals = function(number) {
  var ones, tens, hundreds, thousands = false;
  var numberArray = [];
  var romanArray = [""];
  var stringArray = number.toString().split(""); //stringArray will look like this ["4","7","9"].
  stringArray.forEach(function(number){
    number = parseInt(number);
    numberArray.push(number); //numberArry will look like this [4,7,9].
  });

  //callback functions to get the numeric value of each place [thousands, hundreds, tens, ones]
  //do not change index values. ones=1, tens=2, hundreds=3, thousands=4
  var ones = getValues(numberArray, 1);
  var tens = getValues(numberArray, 2);
  var hundreds = getValues(numberArray, 3);
  var thousands = getValues(numberArray, 4);

  //callback functions to convert numeric values into roman numerals for each place [thousands, hundreds, tens, ones]
  //do not change order (ones-tens-hundreds-thousands)
  romanArray[0] = onesTensHundredsThousands(ones, "I", "V", "X");
  romanArray[1] = onesTensHundredsThousands(tens, "X", "L", "C");
  romanArray[2] = onesTensHundredsThousands(hundreds, "C", "D", "M")
  romanArray[3] = onesTensHundredsThousands(thousands, "M", "", "")

  romanArray.reverse();
  romanArray = romanArray.join('');
  return romanArray;
}

//FRONT-END LOGIC
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var romanNumerals = convertToRomanNumerals(userInput);
    $("#romanNumerals").text(romanNumerals);
    $("#result").show();
  });
});
