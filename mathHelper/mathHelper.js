const averageSum = (arr) => {
    let totalSum = 0;
    let numberOfScores = 0;

    for( let i = 0; i < arr.length; i++ ){
        totalSum += arr[i];
        numberOfScores++;
    }

    return totalSum / numberOfScores;
}

module.exports = averageSum;