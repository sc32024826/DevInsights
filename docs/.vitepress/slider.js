const slider = [
  {
    text: '前端',
    items: [
      { text: 'Javascript', link: '/javascript' },
      { text: 'Regex', link: '/regexDemo' },
      { text: 'Uniapp', link: '/uniapp' },
      { text: 'Vue', link: '/vue' },
      { text: 'Typescript', link: '/Typescript' },
      { text: 'VitePress', link: '/vitepress' },
      {
        text: 'CSS特效及动画',
        items: [
          { text: 'Vanta', link: '/css/vanta' },
          { text: 'Loading', link: '/css/loading' },
          { text: 'Matrix', link: '/css/Matrix' }
        ]
      },
      { text: 'Nuxt3', link: '/Nuxt3' },
      { text: '单元测试', link: '/jest' },
      { text: 'webGL', link: '/webGL' },
      { text: 'Electron', link: '/Electron' },
      {
        text: 'npm 依赖',
        items: [
          { text: 'husky', link: '/npm-packages/husky' },
          { text: 'commitlint', link: '/npm-packages/commitlint' },
          { text: 'standard-version', link: '/npm-packages/standard-version' }
        ]
      }
    ]
  },
  {
    text: 'Shell',
    items: [
      { text: 'Bash Shell', link: '/shell/bash' },
      { text: 'zsh', link: '/shell/MacOS/zsh' },
      { text: 'PowerShell', link: '/shell/Windows/Powershell' },
      { text: 'Npm', link: '/shell/npm' },
      { text: 'Scoop', link: '/shell/Windows/Scoop' },
      { text: 'HomeBrew', link: '/shell/MacOS/Homebrew' },
      { text: '服务器相关', link: '/server/server' }
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
      { text: '宝塔面板', link: '/server/Baota' }
    ]
  },
  {
    text: 'serverless',
    collapsible: true,
    items: [{ text: 'Serverless', link: '/serverless/index' }]
  },
  {
    text: '数据库',
    items: [
      { text: 'MySQL', link: '/' },
      { text: 'MongoDB', link: '/' },
      { text: 'Redis', link: '/' },
      { text: 'SQLite', link: '/' }
    ]
  },
  {
    text: 'Unreal Engine',
    items: [
      { text: '建模', link: '/' },
      { text: '蓝图', link: '/' },
      { text: '灯光渲染', link: '/' },
      { text: '粒子特效', link: '/' }
    ]
  },
  {
    text: '训练',
    items: [{ text: 'tesseract', link: '/' }]
  },
  {
    text: '项目',
    collapsible: true,
    items: [
      { text: '超凡云仓APP', link: '/' },
      { text: '超凡云仓WMS for PDA', link: '/' },
      { text: '超凡智云', link: '/' },
      { text: '超凡记菲', link: '/' },
      { text: '安睡号码-音波助眠 小程序', link: '/' },
      { text: '超凡云仓供应链后台管理B端', link: '/' },
      { text: 'CRMEB 二次开发', link: '/' },
      { text: '金不换橙单二次开发', link: '/' },
      { text: '金不换橙单移动端二次开发', link: '/' }
    ]
  },
  {
    text: 'AI',
    collapsible: true,
    items: [
      { text: 'stable diffuion', link: '/ai/stable-diffuion' },
      { text: 'ChatGPT', link: '/ai/chatGPT' }
    ]
  },
  {
    text: '待分类页面',
    collapsible: true,
    items: []
  }
]
export default slider
