import { addANewDayToRecord } from "./addANewDayToRecord";
import { getRandomMotivationPhrase } from "./getRandomMotivationPhrase";
import { resetTodosTime } from "./resetTodosTime";

function getNewUserDataForANewDay(oldUserDataObj) {
    return {
        todos: resetTodosTime(oldUserDataObj.todos),
        motivation: {new: true, index: getRandomMotivationPhrase()},
        timeRecord: addANewDayToRecord(oldUserDataObj.timeRecord),
        scoreRecord: addANewDayToRecord(oldUserDataObj.scoreRecord),
        distractionsRecord: addANewDayToRecord(oldUserDataObj.distractionsRecord),
        lastConnection: Date.now()
    };
}

export { getNewUserDataForANewDay }