

var express = require('express');
const history = require('connect-history-api-fallback')

const { createProxyMiddleware } = require('http-proxy-middleware');


var app = express();
const port = 3000



const rootPath = "E:/linmao/LinkAI.Platform.Web/dist"


app.use(express.static(rootPath))


app.use(history({
    verbose: true,
    index: '/'
}))

app.use('/api', createProxyMiddleware({
    // target: 'http://dev-lmdecision.codefr.com/', //测试环境
    target: 'https://aipre-api.linkmore.com/', //预发环境
    // target: 'https://ai-api.linkmore.com/', //正式环境
    changeOrigin: true
}));

app.get("/", function (req, res) {
    res.sendFile(`${rootPath}/index.html`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
