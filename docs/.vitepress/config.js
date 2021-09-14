const base = process.env.BASE || '/'
const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = {
    title: 'PHP-Sword',
    description: '基于EasySwoole的PHP协程快速开发框架，让你更专注于业务代码的开发！',
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/ps-logo.png' }]
    ],
    base: base,
    themeConfig: {
        repo: 'php-sword/sword',
        logo: '/ps-logo.png',
        docsDir: 'docs',
        docsBranch: 'master',

        // algolia: {
        //     appId: 'AH43I9TC8T',
        //     apiKey: '5a2e97575ed3aaa188be999ec7d94f20',
        //     indexName: 'sword-doc'
        // },

        // nav
        nav,

        // sidebar
        sidebar,

        // page meta
        editLinks: false,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
    },
    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: false },

        // options for markdown-it-toc
        toc: { includeLevel: [1, 2] },

        config: (md) => {
            const { demoBlockPlugin } = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin)
        }
    }
}
