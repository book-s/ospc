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
            '/group/ipfs/':sidebarIpfs(),
            '/group/libp2p/':sidebarLibp2p(),
            '/group/data/mysql/':sidebarDataMysql(),
            '/group/code/':sidebarCode(),
            '/group/data/sqlite/':sidebarDataSqlite(),
        }
    },
    markdown:{
        lineNumbers:true //代码显示行号
    }
}

function nav() {
    return[
        {
            text: 'OSPC',
            collapsible: true,
            items:[
                { text: '简介', link: '/group/ospc/Introduction/index', activeMatch: '/group/ospc/Introduction/'},
                { text: '用户系统', link: '/group/ospc/Introduction/usersystem', activeMatch: '/group/ospc/Introduction/'},
                { text: '关于', link: '/group/ospc/about/index', activeMatch: '/group/ospc/about/'},
                { text: '字符串', link: '/group/ospc/string/index', activeMatch: '/group/ospc/string/'},
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
            text: 'Ipfs',
            collapsible: true,
            items:[
                { text: 'IPFS', link: '/group/ipfs/index', activeMatch: '/group/ipfs/'},
                { text: 'IPFS-Cluster', link: '/group/ipfs/ipfs-cluster', activeMatch: '/group/ipfs/'},
            ]
        },
        {
            text: 'Libp2p',
            collapsible: true,
            items:[
                { text: 'Libp2p', link: '/group/libp2p/index', activeMatch: '/group/libp2p/'},
                { text: 'Core Components', link: '/group/libp2p/libp2p_core', activeMatch: '/group/libp2p/'},
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
            text: 'Code',
            collapsible: true,
            items:[
                { text: 'Base58', link: '/group/code/base58/index', activeMatch: '/group/code/base58/'},
                { text: 'UTF8', link: '/group/code/utf8/index', activeMatch: '/group/code/utf8/'},
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
                { text: 'Ubuntu基础', link:'/group/go/vscode/ubuntu-use'},
                { text: 'VS Code配置Go语言开发环境', link:'/group/go/vscode/index'},     
                { text: 'Golang打包', link:'/group/go/vscode/Build'},
                { text: 'Ubuntu Go环境配置', link:'/group/go/vscode/ubuntu'},

            ]
        },
        {
            text: '基础',
            collapsible: true,
            items: [
                { text: '基础介绍', link:'/group/go/basics/'},
                { text: 'Fmt', link:'/group/go/basics/fmt'},
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
                { text: '用户系统', link:'/group/ospc/Introduction/usersystem'},
                { text: '关于', link:'/group/ospc/about/'},
                { text: '字符串', link:'/group/ospc/string/'},
            ]
        },
    ]
}

function sidebarCode(){
    return[
        {
            text: 'Code',
            collapsible: true,
            items: [
                { text: 'Base58介绍', link:'/group/code/base58/'},
                { text: 'UTF8', link:'/group/code/utf8/'},
            ]
        },
    ]
}

function sidebarIpfs(){
    return[
        {
            text: 'IPFS',
            collapsible: true,
            items: [
                { text: 'IPFS', link:'/group/ipfs/'},
                { text: 'IPFS-Cluster', link:'/group/ipfs/ipfs-cluster'},
            ]
        },
    ]
}

function sidebarLibp2p(){
    return[
        {
            text: 'Libp2p',
            collapsible: true,
            items: [
                { text: 'Libp2p', link:'/group/libp2p/index'},
                { text: 'Core Components', link:'/group/libp2p/libp2p_core'},
            ]
        },
    ]
}