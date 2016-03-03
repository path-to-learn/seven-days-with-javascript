vowelArr = ['a','e','i','o','u'];
myConsonantsList = new Array();

for (var i = 0; i <= s.length; i++) {
    index = s.charAt(i)
    if (vowelArr.indexOf(index)!==-1) {
        console.log(index);
    }else{
        myConsonantsList.push(index);
    }
}
console.log(myConsonantsList.join("\n"));

//Below uses ES6 spread operator as well

// complete the function
function vowelsAndConsonants(s) {
    _vowels = ['a','e','i','o','u'];
    vowels = [];
    consonants = [];
    for (letter of s) {
        if (_vowels.indexOf(letter) !== -1)
            vowels.push(letter)
        else
            consonants.push(letter)
    }
    vowels.push(...consonants) // es5 vowels.push.apply(vowels, consonants);
    for (letter of vowels) {
        console.log(letter);
    }
}
