import { objIsEmpty } from "../helpers/objIsEmpty";

export function getTotalSumOfARecord(record) {
    if (objIsEmpty(record)) return 0;
    let total = 0
    for (const year in record) {
        for (const month in record[year]) {
            for (const day in record[year][month]) {
                total += Number(record[year][month][day]);
            }
        }
    }
    return total;
    return Math.floor(total/(1000*60*60));
}