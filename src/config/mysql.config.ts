const devConfig = {
    host: 'localhost',
    database: 'learn-typescript',
    password: 'rootroot',
}
const prodConfig = {
    host: 'localhost',
    database: 'learn-typescript',
    password: 'rootroot',
}
module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig
