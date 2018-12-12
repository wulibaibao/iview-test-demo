module.exports = {
    chainWebpack : config => {
        config
            .devServer.port(10086)

        config
            .devServer
            .disableHostCheck(true)
    }
}