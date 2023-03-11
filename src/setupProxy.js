const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            headers: {
                accept: "application/json",
                method: "GET",
            },
            changeOrigin: true,
        })
    );

    // app.use(
    //     "/api_to_portal",
    //     createProxyMiddleware({
    //         target:
    //             "",
    //         headers: {
    //             accept: "application/json",
    //             method: "GET",
    //         },
    //         changeOrigin: true,
    //     })
    // );
};