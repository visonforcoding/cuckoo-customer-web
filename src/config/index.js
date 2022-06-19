module.exports = {

    title: 'learn-mall',

    /**
     * @type {boolean} true | false
     * @description Whether fix the header
     */
    fixedHeader: false,

    /**
     * @type {boolean} true | false
     * @description Whether show the logo in sidebar
     */
    sidebarLogo: false,
    isDev: process.env.NODE_ENV === 'development',
    baseUrl: 'http://localhost:8081',
    getBaseUrl() {
        // const API_URL = process.env.VUE_APP_API_URL || 'development'
        // let key = API_URL.replace(/^csc-(.*)/, '$1')
        let requestUrl = ''
        let prefix = 'http://'
        let host = location.hostname
        let port = location.port
     
        requestUrl = prefix + host
        if(this.isDev){
            return ''
        }

        return requestUrl
    },
    /**
     * 是否是本地环境
     */

    whiteList:['/login'],
    wsUrl:"ws://localhost:8088"
}