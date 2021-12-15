import Vue from 'vue'
import VueRouter from 'vue-router'

const LoginHome = () => import('../components/login/LoginHome')
const HomeBar = () => import('../components/templates/Bars/HomeBar')
const LoginForm = () => import('../components/login/LoginForm')
const LoginBanner = () => import('../components/login/LoginBanner')
const RegisterForm = () => import('../components/register/RegisterForm')
const RegisterBanner = () => import('../components/register/RegisterBanner')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        components:{
            content: LoginHome,
            appbar: HomeBar
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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
