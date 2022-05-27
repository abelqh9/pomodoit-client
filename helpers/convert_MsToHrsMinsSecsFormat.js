export function convert_MsToHrsMinsSecsFormat(miliseconds) {
    let hours = (Math.floor(miliseconds/(1000*60*60))) > 9
        ? Math.floor(miliseconds/(1000*60*60))
        : "0" + Math.floor(miliseconds/(1000*60*60));

    let minutes = (Math.floor((miliseconds%(1000*60*60))/(1000*60))) > 9
        ? Math.floor((miliseconds%(1000*60*60))/(1000*60))
        : "0" + Math.floor((miliseconds%(1000*60*60))/(1000*60));

    let seconds = (Math.floor(((miliseconds%(1000*60*60))%(1000*60))/1000)) > 9
        ? Math.floor(((miliseconds%(1000*60*60))%(1000*60))/1000)
        : "0" + Math.floor(((miliseconds%(1000*60*60))%(1000*60))/1000);

    return hours + "-" + minutes + "-" + seconds
}