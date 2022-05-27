let localTimeLeft = 0;
let timeLeftInterval = null;

// onmessage = function (e) {
self.onmessage = function (e) {
    let [ state, timeLeft ] = e.data;

    localTimeLeft = timeLeft;

    if ( ["work", "rest"].includes(state) ){
        clearInterval(timeLeftInterval);
        timeLeftInterval = setInterval(() => {
            localTimeLeft -= 1000
            self.postMessage(localTimeLeft);
        }, 1000);
    }
    
    if ( ["stop", "readyFor"].includes(state)  || !state ){
        clearInterval(timeLeftInterval);
    }
}