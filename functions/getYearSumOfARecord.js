export function getYearSumOfARecord(statisticObj, year) {
    let yearSum = 0;
    for (const month in statisticObj[year]) {
        let monthSum = 0;
        for (const day in statisticObj[year][month]) {
            monthSum += statisticObj[year][month][day];
        }
        yearSum += monthSum;
    }
    return yearSum;
}