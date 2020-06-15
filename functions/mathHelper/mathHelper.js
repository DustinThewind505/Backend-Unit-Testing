// ======= functions to be tested =======

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

module.exports = { checkIfArray, averageSum, moreThan50k };