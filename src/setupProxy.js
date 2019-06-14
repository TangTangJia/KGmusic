const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy('/proxy/', {
        "target": 'http://m.kugou.com',
        "secure": false,
        "changeOrigin": true,
        "pathRewrite": {
            "^/proxy": ""
        }
    }))
    app.use(proxy('/sproxy/', {
        "target": 'http://mobilecdn.kugou.com/api/v3',
        "secure": false,
        "changeOrigin": true,
        "pathRewrite": {
            "^/sproxy": ""
        }
    }))
    app.use(proxy('/dproxy/', {
        "target": 'http://www.kugou.com',
        "secure": false,
        "changeOrigin": true,
        "pathRewrite": {
            "^/dproxy": ""
        }
    }))
}