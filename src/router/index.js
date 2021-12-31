import Vue from 'vue'
import VueRouter from 'vue-router'

const LoginHome = () => import('../components/login/LoginHome')
const LoginForm = () => import('../components/login/LoginForm')
const LoginBanner = () => import('../components/login/LoginBanner')
const RegisterForm = () => import('../components/register/RegisterForm')
const RegisterBanner = () => import('../components/register/RegisterBanner')
const ProfileHome = () => import('../components/profile/ProfileHome')
const ProfileNavigation = () => import('../components/profile/ProfileNavigation')
const ProfileAppBar = () => import('../components/profile/ProfileAppBar')
const NavDashboards = () => import('../components/templates/navigationdrawer/EN/NavDashboards')
const NavAppsPages = () => import('../components/templates/navigationdrawer/EN/NavAppsPages')
const NavDashboardsBR = () => import('../components/templates/navigationdrawer/BR/NavDashboardsBR')
const NavAppsPagesBR = () => import('../components/templates/navigationdrawer/BR/NavAppsPagesBR')
const MenuLang = () => import('../components/templates/appbar/EN/MenuLang')
const AppBarAvatarTitle = () => import('../components/templates/appbar/EN/AppBarAvatarTitle')
const MenuLangBR = () => import('../components/templates/appbar/BR/MenuLangBR')
const AppBarAvatarTitleBR = () => import('../components/templates/appbar/BR/AppBarAvatarTitleBR')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        components:{
            home: LoginHome,
        },
        children:[
            {
                path: '',
                components:{
                    form: LoginForm,
                    banner: LoginBanner
                }
            },
            {
                path: 'register/',
                components:{
                    form: RegisterForm,
                    banner: RegisterBanner
                }
            }
        ]
    },
    {
        path: '/profile/dashboards/',
        components:{
            home: ProfileHome,
        },
        children:[
            {
                path: 'ecomerce/',
                components:{
                    navigation: ProfileNavigation,
                    appbar: ProfileAppBar
                },
                children:[
                    {
                        path: '',
                        components:{
                            dashboards: NavDashboards,
                            appspages: NavAppsPages,
                            menulang: MenuLang,
                            appbaravatartitle: AppBarAvatarTitle
                        }
                    },
                    {
                        path: 'BR/',
                        components:{
                            dashboards: NavDashboardsBR,
                            appspages: NavAppsPagesBR,
                            menulang: MenuLangBR,
                            appbaravatartitle: AppBarAvatarTitleBR
                        }
                    }
                ]
            },
            {
                path: 'analytics/',
                components:{
                    navigation: ProfileNavigation,
                    appbar: ProfileAppBar
                },
                children:[
                    {
                        path: '',
                        components:{
                            dashboards: NavDashboards,
                            appspages: NavAppsPages,
                            menulang: MenuLang,
                            appbaravatartitle: AppBarAvatarTitle
                        }
                    },
                    {
                        path: 'BR/',
                        components:{
                            dashboards: NavDashboardsBR,
                            appspages: NavAppsPagesBR,
                            menulang: MenuLangBR,
                            appbaravatartitle: AppBarAvatarTitleBR
                        }
                    }
                ]
            },
            {
                path: 'email/',
                components:{
                    navigation: ProfileNavigation,
                    appbar: ProfileAppBar
                },
                children:[
                    {
                        path: '',
                        components:{
                            dashboards: NavDashboards,
                            appspages: NavAppsPages,
                            menulang: MenuLang,
                            appbaravatartitle: AppBarAvatarTitle
                        }
                    },
                    {
                        path: 'BR/',
                        components:{
                            dashboards: NavDashboardsBR,
                            appspages: NavAppsPagesBR,
                            menulang: MenuLangBR,
                            appbaravatartitle: AppBarAvatarTitleBR
                        }
                    }
                ]
            },
            {
                path: 'chat/',
                components:{
                    navigation: ProfileNavigation,
                    appbar: ProfileAppBar
                },
                children:[
                    {
                        path: '',
                        components:{
                            dashboards: NavDashboards,
                            appspages: NavAppsPages,
                            menulang: MenuLang,
                            appbaravatartitle: AppBarAvatarTitle
                        }
                    },
                    {
                        path: 'BR/',
                        components:{
                            dashboards: NavDashboardsBR,
                            appspages: NavAppsPagesBR,
                            menulang: MenuLangBR,
                            appbaravatartitle: AppBarAvatarTitleBR
                        }
                    }
                ]
            },
            {
                path: 'todo/',
                components:{
                    navigation: ProfileNavigation,
                    appbar: ProfileAppBar
                },
                children:[
                    {
                        path: '',
                        components:{
                            dashboards: NavDashboards,
                            appspages: NavAppsPages,
                            menulang: MenuLang,
                            appbaravatartitle: AppBarAvatarTitle
                        }
                    },
                    {
                        path: 'BR/',
                        components:{
                            dashboards: NavDashboardsBR,
                            appspages: NavAppsPagesBR,
                            menulang: MenuLangBR,
                            appbaravatartitle: AppBarAvatarTitleBR
                        }
                    }
                ]
            },
            {
                path: 'calendar/',
                components:{
                    navigation: ProfileNavigation,
                    appbar: ProfileAppBar
                },
                children:[
                    {
                        path: '',
                        components:{
                            dashboards: NavDashboards,
                            appspages: NavAppsPages,
                            menulang: MenuLang,
                            appbaravatartitle: AppBarAvatarTitle
                        }
                    },
                    {
                        path: 'BR/',
                        components:{
                            dashboards: NavDashboardsBR,
                            appspages: NavAppsPagesBR,
                            menulang: MenuLangBR,
                            appbaravatartitle: AppBarAvatarTitleBR
                        }
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        components:{
            home: LoginHome
        },
        children:[
            {
                path: '',
                components:{
                    form: LoginForm,
                    banner: LoginBanner
                }
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
