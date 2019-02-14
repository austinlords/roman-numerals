//back-end logic
var convertToRomanNumerals = function(number) {
  var ones, tens, hundreds, thousands = undefined;
  var numberArray = [];
  var romanArray = [""];
  stringArray = number.toString().split("");
  stringArray.forEach(function(number){
    number = parseInt(number);
    numberArray.push(number);
  });
  var ones = numberArray[numberArray.length - 1];
  if (numberArray[numberArray.length - 2]){
    var tens = numberArray[numberArray.length - 2];
  } else tens = false;
  if (numberArray[numberArray.length - 3]){
    var hundreds = numberArray[numberArray.length - 3];
  } else hundreds = false;
  if (numberArray[numberArray.length - 4]){
    var thousands = numberArray[numberArray.length - 4];
  } else thousands = false;
  if (ones === 9) {
    romanArray[0] = "IX";
  } else if (ones === 8) {
    romanArray[0] = "VIII";
  } else if (ones === 7) {
    romanArray[0] = "VII";
  } else if (ones === 6) {
    romanArray[0] = "VI";
  } else if (ones === 5) {
    romanArray[0] = "V";
  } else if (ones === 4) {
    romanArray[0] = "IV";
  } else if (ones === 3) {
    romanArray[0] = "III";
  } else if (ones === 2) {
    romanArray[0] = "II";
  } else if (ones === 1) {
    romanArray[0] = "I";
  } else if (ones === 0) {
    romanArray[0] = "";
  }
  if (tens === 9) {
    romanArray[1] = "XC";
  } else if (tens === 8) {
    romanArray[1] = "LXXX";
  } else if (tens === 7) {
    romanArray[1] = "LXX";
  } else if (tens === 6) {
    romanArray[1] = "LX";
  } else if (tens === 5) {
    romanArray[1] = "L";
  } else if (tens === 4) {
    romanArray[1] = "XL";
  } else if (tens === 3) {
    romanArray[1] = "XXX";
  } else if (tens === 2) {
    romanArray[1] = "XX";
  } else if (tens === 1) {
    romanArray[1] = "X";
  } else if (tens === 0) {
    romanArray[1] = "";
  }
  if (hundreds  === 9) {
    romanArray[2] = "CM";
  } else if (hundreds === 8) {
    romanArray[2] = "DCCC";
  } else if (hundreds === 7) {
    romanArray[2] = "DCC";
  } else if (hundreds === 6) {
    romanArray[2] = "DC";
  } else if (hundreds === 5) {
    romanArray[2] = "D";
  } else if (hundreds === 4) {
    romanArray[2] = "CD";
  } else if (hundreds === 3) {
    romanArray[2] = "CCC";
  } else if (hundreds === 2) {
    romanArray[2] = "CC";
  } else if (hundreds === 1) {
    romanArray[2] = "C";
  } else if (hundreds === 0) {
    romanArray[2] = "";
  }
  if (thousands === 3) {
    romanArray[3] = "MMM";
  } else if (thousands === 2) {
    romanArray[3] = "MM";
  } else if (thousands === 1) {
    romanArray[3] = "MM";
  } else if (thousands === 0) {
    romanArray[3] = "";
  }
  romanArray.reverse();
  romanArray = romanArray.join('');
  return romanArray;
} //end of convertToRomanNumerals function

//front-end logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var romanNumerals = convertToRomanNumerals(userInput);
    $("#romanNumerals").text(romanNumerals);
    $("#result").show();
  }); // end of submit function
}); //end of front end
