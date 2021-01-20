import caseCheck from './caseCheck';

export let origArr = true;
export let crypArr = true;

// Encrypt function
export const encrypt = (plaintext, key) => {
    origArr = plaintext.split('');
    crypArr = [];
    key = key % 25;

    for (let i = 0; i < plaintext.length; i++) {
        let n = origArr[i].toUpperCase().charCodeAt(0) + key;
        /// NOTE: This condition is incomplete, see below
        if (n > 90) {
            let p = n - 90;
            crypArr.push(String.fromCharCode(64 + p));
        }
        /// NOTE: This condition is incomplete, see below
        else if (n < 65) {
            let p = 65 - n;
            crypArr.push(String.fromCharCode(91 - p));
        }
        /// NOTE: There are also values smaller of 65 and bigger than 90 that are not character and should fit inside this case
        else {
            crypArr.push(String.fromCharCode(n));
        }
    }

    caseCheck(plaintext);
    return crypArr.join('');
}

export default encrypt;
