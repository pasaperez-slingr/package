exports.callbackTest = function () {
    sys.ui.sendMessage({
        scope: 'uiService:testUiService.testUiService',
        name: 'callbackTest',
        config: {},
        callbacks: {
            callbackTest: function (originalMessage, callbackData) {
                sys.logs.info('callbackTest');
            }
        }
    });
}

exports.test = function () {
    sys.logs.warn("test function");
    log("test function");
    return "test function";
}

//a