const repeatString = function(string,number){  
    let text=string;
    if (number < 0){
        return 'ERROR'
    }
    else {
    let result=text.repeat(number);
    return result;
    }
}


// Do not edit below this line
module.exports = repeatString;
