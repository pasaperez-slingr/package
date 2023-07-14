/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookTest = {
    label: 'Catch HTTP TEST events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/test'
        }
    },
    callback: function(event) {
        sys.logs.warn("test listener");
    }
};
