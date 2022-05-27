import { getDate } from "../helpers/getDate";
import { objIsEmpty } from "../helpers/objIsEmpty";

export function getTodayDataOfARecord(record) {
    if (objIsEmpty(record)) return 0;

    const { year, month, day } = getDate();

    const todayData = record[year]
        ?(record[year][month]
            ?(record[year][month][day]
                ?record[year][month][day]
                :0
            ):0
        ):0;
    
    return todayData;
}