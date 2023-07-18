exports.callbackTest = function () {
    log('test function arrived UI');
    sys.ui.sendMessage({
        scope: 'uiService:testUiService.testUiService',
        name: 'callbackTest',
        callbacks: {
            callbackTest: function (originalMessage, callbackData) {
                sys.logs.info('callbackTest');
            }
        }
    });
}
exports.test = function () {
    sys.logs.warn("test function");
    log("test function 1");
    return "test function 1";
}

// next_version=$(git describe --tags --abbrev=0 | awk -F. -v OFS=. 'NF==1{print "v" ++$NF}; NF>1{if(length($NF+1)>length($NF))$(NF-1)++; $NF=sprintf("%0*d", length($NF), ($NF+1)); print ""$0}') && git add . && git commit -m "Mensaje del commit" && git tag -a "$next_version" -m "Mensaje del tag" && git push --follow-tags && git push --delete origin $(git tag -l | sort -V | head -n -2) && git tag -l | sort -V | head -n -2 | xargs git tag -d && git fetch --tags
// alias commit='function _commit(){ next_version=$(git describe --tags --abbrev=0 | awk -F. -v OFS=. '\''{if (NF==1) {print "v0.0.1"} else {if (length($NF+1)>length($NF)) $(NF-1)++; $NF=sprintf("%0*d", length($NF), ($NF+1)); print ""$0}}'\'' ) && git add . && git commit -m "$1" && git push && git tag -a "$next_version" -m "Mensaje del tag" && git push --tags && git push --delete origin $(git tag -l | sort -V | head -n -2) && git tag -l | sort -V | head -n -2 | xargs git tag -d && git fetch --tags; };_commit'

/*
,
		{
			"type": "flowStep",
			"namespace": "steps",
			"path": "/flowSteps/testFlow"
		}

*/