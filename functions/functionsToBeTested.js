// ======= functions to be tested =======
function add(a = 0, b = 0){
    if(isNumber(a) && isNumber(b)){
        return a + b;
    } else {
        throw new Error("Both arguments need to be numbers")
    }
    
}

const averageSum = (arr) => {
    let totalSum = 0;
    let numberOfScores = 0;

    arr.forEach(score => {
        totalSum += score;
        numberOfScores++
    })

    return totalSum / numberOfScores;
}


const checkIfArray = arr => {
    return Array.isArray(arr)
}

function isNumber(value){
    return !isNaN(parseFloat(value)) && isFinite(value);
}

const moreThan50k = arr => {
    const newArray = []

    arr.forEach(salary => {
        if (salary > 50000) {
            newArray.push(salary)
        }
    });
    console.log(newArray)
    return newArray;
}

module.exports = { add, averageSum, checkIfArray, moreThan50k };