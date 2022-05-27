import { getDate } from "../helpers/getDate";

export function getDaysValuesOfAMonthOfARecord(statisticObj, year, month, miliToHours) {
    let daysValues = {};

    for (const day in statisticObj[year][month]) {
        daysValues[day] = statisticObj[year][month][day];
    }

    let { year: thisYear, month: thisMonth, day: thisDay } = getDate();

    for (let i = 1; i <= ((year===thisYear && month===thisMonth) ? thisDay : 31); i++) {
        if (!daysValues[i]) daysValues[i] = 0
    }
    return miliToHours ? Object.values(daysValues).map(d=>d/(1000*60*60)) : Object.values(daysValues);
}