export function getDate() {
    let now = new Date(), year = now.getFullYear(), month = now.getMonth(), day = now.getDate();
    return { year, month, day };
}