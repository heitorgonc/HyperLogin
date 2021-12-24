import Vue from 'vue'
import VueRouter from 'vue-router'

const LoginHome = () => import('../components/login/LoginHome')
const LoginForm = () => import('../components/login/LoginForm')
const LoginBanner = () => import('../components/login/LoginBanner')
const RegisterForm = () => import('../components/register/RegisterForm')
const RegisterBanner = () => import('../components/register/RegisterBanner')
const ProfileHome = () => import('../components/profile/ProfileHome')
const ProfileNavigation = () => import('../components/profile/ProfileNavigation')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        components:{
            content: LoginHome,
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
                path: '/register',
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
            content: ProfileHome,
        },
        children:[
            {
                path: 'ecomerce',
                components:{
                    navigation: ProfileNavigation
                }
            },
            {
                path: 'analytics',
                components:{
                    navigation: ProfileNavigation
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
