export function getMonthSumOfARecord(statisticObj, year, month) {
    let monthSum = 0;
    for (const day in statisticObj[year][month]) {
        monthSum += statisticObj[year][month][day]
    }
    return monthSum
}