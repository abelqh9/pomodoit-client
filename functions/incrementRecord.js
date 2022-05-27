import { getDate } from "../helpers/getDate";

export function incrementRecord(obj, increment) {
    let newObj = JSON.parse(JSON.stringify(obj)),
    { year, month, day } = getDate();
    newObj[year][month][day] += increment;
    return newObj;
}