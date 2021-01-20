import {origArr, crypArr} from './encrypt'

export const caseCheck = (plaintext) => {
    for (let i = 0; i < plaintext.length; i++) {
        if (origArr[i] === origArr[i].toLowerCase()) {
            crypArr[i] = crypArr[i].toLowerCase();
        }
    }
    return crypArr;
}

export default caseCheck;