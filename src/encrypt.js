// Encrypt function
let caesarEncrypt = (word, key) => {
    const origAr = word.split('');
    let crypAr = [];
    key = key % 25;

    for (let i = 0; i < word.length; i++) {
        let n = origAr[i].toUpperCase().charCodeAt(0) + key;
        /// NOTE: This condition is incomplete, see below
        if (n > 90) {
            let p = n - 90;
            crypAr.push(String.fromCharCode(64 + p));
        }
        /// NOTE: This condition is incomplete, see below
        else if (n < 65) {
            let p = 65 - n;
            crypAr.push(String.fromCharCode(91 - p));
        }
        /// NOTE: There are also values smaller of 65 and bigger than 90 that are not character and should fit inside this case
        else {
            crypAr.push(String.fromCharCode(n));
        }
    }
    caseCheck(word);
    return crypAr.join('');
}

let caseCheck = (word) => {
    for (let i = 0; i < word.length; i++) {
        if (origAr[i] === origAr[i].toLowerCase()) {
            crypAr[i] = crypAr[i].toLowerCase();
        }
    }
    return crypAr;
}

// Decrypt function
let ceasarDecrypt = (word, key) => caesarEncrypt(word, key * -1)