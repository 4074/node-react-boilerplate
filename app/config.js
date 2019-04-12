module.exports = {
    host: '0.0.0.0',
    port: 4010,
    proxy: {
        '/api': {
            target: 'http://localhost:4000',
            changeOrigin: true
        }
    }
}