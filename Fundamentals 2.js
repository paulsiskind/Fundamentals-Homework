Oldest Person

function oldestPerson(obj) {
 var oldestAge = 0;
 var oldestPerson;
 for (person in obj) {
   if (obj[person] > oldestAge) {
     oldestAge = obj[person];
     oldestPerson = person
   }
 }return oldestAge;
}oldestPerson(obj);
 
var obj = {
   
    'Chuck': 22,
    'Brian': 46
    }


    Longest Word

    function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var result = [];
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            result = str[i];
        }
    }
    return result;
}longestWord('the Goat hates Cheese Museums')

LongestWord with punctuation removed

function longestWord(string) {
    string = string.replace(/[^\w\s]|_/g, "")
    var str = string.split(" ");
    var longest = 0;
    var result = [];
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            result = str[i];
        }
    }
    return result;
}longestWord('the, Goat ,hates, Cheese Museums')

Factorial

function fact(x){
    var y = x;
   
    for (var i=x; i>0; i--){
        y *= i;
    }return y;
}fact(Math.floor(Math.random()*10));


Bonus Palindrome

function palI(str){
    var result = '';
    for (var i = 0; i<=str.length; i++){
         result += str.charAt(str.length - i);
    }if (str == result){
        return true;
    }else{
        return false;
    }
}palI('tacocat');