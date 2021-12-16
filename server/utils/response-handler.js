const responseHandler = (status, err, success) => {
    return {
        status: status,
        err: err ? err : null,
        data: success ? success : null
    };
}

module.exports = {
    responseHandler
};
