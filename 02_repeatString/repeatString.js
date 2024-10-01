const repeatString = function(stringToRep, timesToRep) {
    if(timesToRep < 0) {
        return "ERROR"
    }

    let sol = ""

    for(let i = 0; i < timesToRep; ++i) {
        sol += stringToRep
    }

    return sol
};

// Do not edit below this line
module.exports = repeatString;
