import {
    Dashboard,
    Login,
    NotFound,
    Settings,
    ArticleList,
    ArticleEdit
} from '../views'

export const mainRouter = [{
        pathname: '/login',
        component: Login
    },
    {
        pathname: '/404',
        component: NotFound
    },
    {
        pathname: '/login',
        component: Login
    },
]


export const adminRouter = [{
        pathname: '/admin/dashboard',
        component: Dashboard,
        title:'仪表盘',
        icon: 'dashboard',
        isNav: true
    },
    {
        pathname: '/admin/article',
        component: ArticleList,
        title:'文章管理',
        icon: 'ordered-list',
        isNav: true,
        exact: true
    },
    {
        pathname: '/admin/article/edit/:id',
        component: ArticleEdit
    },
    {
        pathname: '/admin/settings',
        component: Settings,
        title: '设置',
        icon: 'setting',
        isNav: true
    },
]