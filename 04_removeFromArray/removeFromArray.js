const removeFromArray = function removeValue(array,value1,value2,value3,value4) {
    
    result=array.filter(array=> array!==value1 && array!==value2&& array!==value3&& array!==value4)
    return result
};


// Do not edit below this line
module.exports = removeFromArray;
