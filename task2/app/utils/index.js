exports.isReqBodyOk = reqBody => {
    let fieldNo = 0;

    for (const k of Object.keys(reqBody)) {
        fieldNo++;
        if (!reqBody[k])
            return 0;
    }

    if (fieldNo == 0)
        return 0;

    return 1;
}

