import { getDate } from "../helpers/getDate"

export function addANewDayToRecord(statisticObj, newDayValue = 0) {
    let { year, month, day } = getDate();

    if (!statisticObj[year]) {
        statisticObj[year] = {}
    }

    if (!statisticObj[year][month]) {
        statisticObj[year][month] = {}
    }

    statisticObj[year][month][day] = newDayValue;
    
    return statisticObj
}