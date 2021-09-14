
const sidebar = {
    'doc': [
        {
            text: '项目介绍',
            children: [
                {
                    text: '项目介绍',
                    link: '/doc/index'
                },
                {
                    text: '快速开始',
                    link: '/doc/quick-start'
                }
            ]
        },
        {
            text: '服务搭建',
            children: [
                {
                    text: 'HTTP Server',
                    link: '/doc/service/http-server'
                },
                {
                    text: 'WebSocket',
                    link: '/doc/service/web-socket'
                },
                {
                    text: 'TCP/UDP',
                    link: '/doc/service/tcp-udp'
                }
            ]
        }
    ],
    'components': [
        {
            text: '组件',
            children: [
                {
                    text: '基础组件',
                    link: '/components/index'
                }
            ]
        }
    ]
}

module.exports = {
    ['/doc/']: sidebar['doc'],
    ['/components/']: sidebar['components'],
    // [getPath('/api/')]: 'auto'
}
