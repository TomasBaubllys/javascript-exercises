const reverseString = function(stringIn) {
    let stringOut = ""
    for(let i = stringIn.length - 1; i >= 0; --i) {
        stringOut += stringIn[i]
    }

    return stringOut
};

// Do not edit below this line
module.exports = reverseString;
