import caseCheck from './caseCheck';

export let origArr, crypArr = true;

// Encrypt function
const encrypt = (plaintext, key) => {
    origArr = plaintext.split('');
    crypArr = [];
    key = key % 26;

    for (let i = 0; i < plaintext.length; i++) {
        let n = origArr[i].toUpperCase().charCodeAt(0) + key;
        if (n > 90) {
            let p = n - 90;
            crypArr.push(String.fromCharCode(64 + p));
        }
        else if (n < 65) {
            let p = 65 - n;
            crypArr.push(String.fromCharCode(91 - p));
        }
        else {
            crypArr.push(String.fromCharCode(n));
        }
    }

    caseCheck(plaintext);
    return crypArr.join('');
}

export default encrypt;
