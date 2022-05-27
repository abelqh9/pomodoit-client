import { getDate } from "../helpers/getDate";

export function getMonthsSumsOfAYearOfARecord(statisticObj, year, miliToHours) {
    let sumsByMonths = {};
    for (const month  in statisticObj[year]) {
        let monthSum = 0;
        for (const day in statisticObj[year][month]) {
            monthSum += statisticObj[year][month][day];
        }
        sumsByMonths[month] = monthSum;
    }
    let { year: thisYear, month: thisMonth } = getDate();
    for (let i= 0; i < (Number(year) === Number(thisYear) ? thisMonth : 12); i++) {
        if (!sumsByMonths[i]) sumsByMonths[i] = 0;
    }
    return miliToHours ? Object.values(sumsByMonths).map(d=>d/(1000*60*60)) : Object.values(sumsByMonths);
}