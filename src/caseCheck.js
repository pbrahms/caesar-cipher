const caseCheck = (origArr, crypArr) => {
    for (let i = 0; i < origArr.length; i++) {
        if (origArr[i] === origArr[i].toLowerCase()) {
            crypArr[i] = crypArr[i].toLowerCase();
        }
    }
    return crypArr;
}

export default caseCheck;
