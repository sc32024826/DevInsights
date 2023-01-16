const slider = [
    {
        text: '前端',
        items: [
            { text: 'Javascript', link: '/javascript' },
            { text: 'Regex', link: '/regex'},
            { text: 'Uniapp', link: '/uniapp' },
            { text: 'Vue', link: '/vue' },
            // { text: 'Typescript', link: '/' },
            { text: 'VitePress', link: '/vitepress' },
            {
                text: 'CSS特效及动画',
                items: [
                    { text: 'Vanta', link: '/css/vanta' },
                    { text: 'Loading', link: '/css/loading' }
                ]
            },
            { text: 'Bash Shell', link: 'bash'}
        ]
    },
    {
        text: '后端',
        collapsible: true,
        items: [
            { text: 'Koa2', link: '/server/Koa2' },
            { text: 'Thinkphp', link: '/' },
            { text: 'Docker', link: '/server/Docker' },
            { text: 'Python', link: '/server/Python' },
            { text: 'Nginx', link: '/server/Nginx' },
        ]
    },
    {
        text: '数据库',
        items: [
            { text: 'MySQL', link: '/' },
            { text: 'MongoDB', link: '/' },
            { text: 'Redis', link: '/' },
            { text: 'SQLite', link: '/' },
        ]
    },
    {
        text: 'Unreal Engine',
        items: [
            { text: '建模', link: '/' },
            { text: '蓝图', link: '/' },
        ]
    },
    {
        text: '训练',
        items: [
            { text: 'tesseract', link: '/' },
        ]
    },
    {
        text: '项目',
        collapsible: true,
        items: [
            { text: '超凡云仓APP', link: '/' },
            { text: '超凡云仓WMS for PDA', link: '/' },
            { text: '超凡智云', link: '/' },
            { text: '安睡号码-音波助眠 小程序', link: '/' },
            { text: '超凡云仓供应链后台管理B端', link: '/' },
            { text: 'CRMEB 二次开发', link: '/' },
        ]
    },
    {
        text: '待分类页面',
        collapsible: true,
        items: [
            // {text: '超凡云仓APP', link: '/'},
        ]
    },
]
export default slider
