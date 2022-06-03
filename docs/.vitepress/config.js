export default {
    // 站点配置
    lang: 'zh-CN',
    title: 'OPSC.run',
    description: 'Open secure private connection',
    base:"/ospc.run/", //这里的路径必须是你创建项目的绝对路径
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
    //    siteTitle: 'My Custom Title',
        nav:nav(),
        socialLinks: [
            { icon: 'github', link: 'https://github.com/book-s/ospc' },
        ],

        sidebar: {
            '/group/go/':sidebarGo(),
            '/group/data/mysql/':sidebarDataMysql(),
            '/group/data/sqlite/':sidebarDataSqlite(),
        }
    },
}

function nav() {
    return[
        {
            text: 'Golang',
            collapsible: true,
            items:[
                { text: '基础', link: '/group/go/basics/index', activeMatch: '/group/go/basics/'},
                { text: '进阶', link: '/group/go/advanced/index', activeMatch: '/group/go/advanced/'},
                { text: '标准库', link: '/group/go/library/index', activeMatch: '/group/go/library/'},
            ]
        },
        {
            text: 'Database',
            collapsible: true,
            items:[
                { text: 'MYSQL', link: '/group/data/mysql/index', activeMatch: '/group/data/mysql/'},
                { text: 'SQLite', link: '/group/data/sqlite/index', activeMatch: '/group/data/sqlite/'},
            ]
        },
        {
            text: 'Tools',
            collapsible: true,
            items:[
                { 
                    text: "工具箱",
                    items:[
                        { text: 'Markdown', link: 'https://markdown.com.cn/' },
                        { text: 'Go语言基础教程', link: 'https://www.liwenzhou.com/' },
                        { text: 'Leva日志', link: 'https://book-s.github.io/vuepres/' },
                    ]
                },
                { 
                    text: "图片处理",
                    items:[
                        { text: '在线图片编辑', link: 'https://tinypng.com/' },
                        { text: '图片压缩', link: 'https://www.tuyitu.com/photoshop/' },
                        { text: '图片logo编辑', link: 'https://www.logomaker.com.cn/' },
                    ]
                }, 
            ]
        },
    ]
    
}


function sidebarGo(){
    return[
        {
            text: '基础',
            collapsible: true,
            items: [
                { text: '基础介绍', link:'/group/go/basics/'},
                { text: '变量', link:'/group/go/basics/abc'},
                { text: 'if else', link:'/group/go/basics/abc1'},
                { text: '结构体', link:'/group/go/basics/abc2'},
            ]
        },
        {
            text: '进阶',
            collapsible: true,
            items: [
                { text: '进阶', link:'/group/go/advanced/index'},
            ]
        },
        {
            text: '标准库',
            collapsible: true,
            items: [
                { text: '标准库', link:'/group/go/library/index'},
            ]
        },
    ]
}

function sidebarDataMysql(){
    return[
        {
            text: 'Mysql',
            collapsible: true,
            items: [
                { text: 'Mysql安装', link:'/group/data/mysql/'},
                { text: '基础操作', link:'/group/data/mysql/BasicOperation'},
                { text: '增删改查', link:'/group/data/mysql/AddDeleteModifyQuery'},
                { text: '表查询', link:'/group/data/mysql/TableQuery'},
                { text: '表关系', link:'/group/data/mysql/TableRelation'},
                { text: '表约束', link:'/group/data/mysql/TableConstraints'},
            ]
        },
    ]
}

function sidebarDataSqlite(){
    return[
        {
            text: 'Sqlite',
            collapsible: true,
            items: [
                { text: 'Sqlite入门', link:'/group/data/sqlite/'},
            ]
        },
    ]
}