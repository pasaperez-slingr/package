/**
 * This flow step will send generic request.
 *
 * @param {object} inputs
 */
step.listDocumentsPandadoc = function (inputs) {

  return sys.logs.warn(JSON.stringify(svc.http.get({url:'https://postman-echo.com/get'})));
}
