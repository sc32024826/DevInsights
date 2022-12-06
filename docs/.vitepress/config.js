import mdItCustomAttrs from 'markdown-it-custom-attrs'
import useNav from './nav'
import useSilder from './slider'
export default {
    markdown: {},
    title: 'Hello VitePress',
    description: 'Just playing around.',
    themeConfig: {
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        lastUpdated: 'Last Updated', // string | boolean
        // 启动页面丝滑滚动
        smoothScroll: true,
        siteTitle: '一顾倾人诚',
        nav: useNav,
        sidebar: useSilder,
    },
    config: (md) => {
        md.use(mdItCustomAttrs, 'image', {
            'data-fancybox': "gallery"
        })
    },
    head: [
        [
            "link",
            { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },
        ],
        ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
        ["script", { src: "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" }],
        ["script", { src: "https://cdn.jsdelivr.net/npm/vanta/dist/vanta.rings.min.js" }]
    ]
}
