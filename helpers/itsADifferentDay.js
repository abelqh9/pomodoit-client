export function itsADifferentDay(lastConnectionInMili) {
    let now = new Date(), last = new Date(lastConnectionInMili);
    return now.getDate() !== last.getDate() ? true : false
}