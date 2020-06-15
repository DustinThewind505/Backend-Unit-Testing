const averageSum = (arr) => {
    let totalSum = 0;
    let numberOfScores = 0;
   
    arr.forEach(score => {
        totalSum += score;
        numberOfScores++
    })

    return totalSum / numberOfScores;
}


const theArray = arr => {
    return Array.isArray(arr)
}

const lessThan50k = arr => {
    const newArray = arr.filter(salary => salary >= 50000);
    
    return newArray;
}


module.exports = {theArray, averageSum, lessThan50k};