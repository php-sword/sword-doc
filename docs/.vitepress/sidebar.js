
const sidebar = {
    'doc': [
        {
            text: '项目介绍',
            children: [
                {
                    text: '项目介绍',
                    link: '/doc/introduce'
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
    ],
    'course': [
        {
            text: '基础教程',
            children: [
                {
                    text: '教程导读',
                    link: '/course/index'
                },
                {
                    text: '实践开始',
                    children: [
                        {
                            text: '准备工作',
                            link: '/course/practice/ready'
                        },
                        {
                            text: '创建HTTP服务器',
                            link: '/course/practice/create'
                        }
                    ]
                },
                {
                    text: 'Swoole',
                    link: '/course/swoole'
                }
            ]
        }
    ]
}

module.exports = {
    ['/doc/']: sidebar['doc'],
    ['/components/']: sidebar['components'],
    ['/course/']: sidebar['course'],
    // ['/api/]: 'auto'
}
