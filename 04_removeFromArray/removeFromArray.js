const removeFromArray = function(array, ...items) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!items.includes(array[i])) {
            newArray.push(array[i]);
        }
    };
    return newArray;
  
};

// Do not edit below this line
module.exports = removeFromArray;
