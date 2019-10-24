import Login from '../page/login/Login'
import Home from '../page/home/Home'


export default [
    {
        path:'/login',
        exact:false,
        title:'登录',
        hideSide:'true',
        component: Login
    },
    {
        path:'/',
        exact:true,
        title:'首页',
        hideSide:'true',
        component: Home
    },
    
]