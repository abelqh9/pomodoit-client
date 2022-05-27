import { getDate } from "../helpers/getDate";

function getNewRecord() {
    const { year, month, day } = getDate();
    return {[year]: {[month]: {[day]: 0}}};
}

export { getNewRecord }