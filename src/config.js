export default {
    avatar: 'https://avatars.githubusercontent.com/u/85998341?v=4',
    author: '重铬酸钠',
    // 此处填入 #HitokotoEnable# 会启用一言 API，否则会直接显示你定义的内容，一言 API 的 Get 参数请自行去 main.js 中修改（默认调用文学与哲学一言）
    hitokoto: '#HitokotoEnable#',
    // name 无实际意义，仅用于标识此行用于表示什么
    // 按钮图标通过 icon 与 customIcon 共同决定
    // customIcon 为 false 则使用 fontawesome 图标库，此时 icon 处需要填入 fontawesome 图标库的类名
    // 若 customIcon 为 true 你可以在 icon 处填入任意的 HTML 标签，当然此时的样式需要你自己去处理
    socialLinks: [
        { name: 'Telegram', icon: 'fa-brands fa-telegram', link: 'https://t.me/SodiumDichromate', customIcon: false },
        { name: 'Email', icon: 'fa-solid fa-envelope', link: 'mailto:sthenight@outlook.com', customIcon: false },
        { name: 'Github', icon: 'fa-brands fa-github', link: 'https://github.com/sTheNight', customIcon: false },
        { name: 'Bilibili', icon: 'fa-brands fa-bilibili', link: 'https://space.bilibili.com/255841070', customIcon: false }
    ],
    navItems: [
        { name: '航天模拟器简中汉化包', link: 'https://github.com/sTheNight/Spaceflight-Simulator-CNlang' },
        { name: '我的个人主页', link: 'https://github.com/sTheNight/HomePage' }
    ]
}