const reverseString = function(String) {

    let reverseString=''

    for (let i=String.length-1;i>=0;i--){
        reverseString+=String[i]
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
