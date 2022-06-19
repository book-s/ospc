export default {
    // 站点配置
    lang: 'zh-CN',
    title: 'OSPC.run',
    titleTemplate: 'Open secure private connection',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
    //    logo: 'https://vuejs.org/images/logo.png',
        nav:nav(),
        socialLinks: [
            { icon: 'github', link: 'https://github.com/book-s/ospc' },
        ],

        sidebar: {
            '/group/ospc/': sidebarOspc(),
            '/group/go/':sidebarGo(),
            '/group/data/mysql/':sidebarDataMysql(),
            '/group/data/sqlite/':sidebarDataSqlite(),
        }
    },
}

function nav() {
    return[
        {
            text: 'OSPC',
            collapsible: true,
            items:[
                { text: '简介', link: '/group/ospc/Introduction/index', activeMatch: '/group/ospc/Introduction/'},
                { text: '关于', link: '/group/ospc/about/index', activeMatch: '/group/ospc/about/'},
            ]
        },
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
            text: '开发环境准备',
            collapsible: true,
            items: [
                { text: 'VS Code配置Go语言开发环境', link:'/group/go/vscode/index'},
                { text: 'Go依赖管理及Go module使用', link:'/group/go/vscode/module'},
                { text: '如何使用Go module导入本地包', link:'/group/go/vscode/GoModule'},
            ]
        },
        {
            text: '基础',
            collapsible: true,
            items: [
                { text: '基础介绍', link:'/group/go/basics/'},
                { text: '变量与常量', link:'/group/go/basics/VariablesConstants'},
                { text: '数据类型', link:'/group/go/basics/datatype'},
                { text: '运算符', link:'/group/go/basics/operator'},
                { text: '流程控制', link:'/group/go/basics/ProcessControl'},
                { text: '数组', link:'/group/go/basics/array'},
                { text: '切片', link:'/group/go/basics/slice'},
                { text: 'Map', link:'/group/go/basics/map'},
                { text: '函数', link:'/group/go/basics/function'},
                { text: '指针', link:'/group/go/basics/Pointer'},
                { text: '结构体', link:'/group/go/basics/StructuralMorphology'},
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

function sidebarOspc(){
    return[
        {
            text: 'OSPC',
            collapsible: true,
            items: [
                { text: '简介', link:'/group/ospc/Introduction/'},
                { text: '关于', link:'/group/ospc/about/'},
            ]
        },
    ]
}