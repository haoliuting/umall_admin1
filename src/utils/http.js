import axios from "axios"
import qs from "qs"
import Vue from "vue"
import {erroralert} from "./alert"
//开发环境使用 8080
let baseUrl="/api"
Vue.prototype.$pre="http://localhost:3000"

//生产环境使用 打包
// let baseUrl=""
// Vue.prototype.$pre=""


//响应拦截
axios.interceptors.response.use(res=>{
    console.group("本次请求地址是："+res.config.url)
    console.log(res);
    console.groupEnd()
    //18.统一处理失败
    if(res.data.code!==200){
        erroralert(res.data.msg)
    }
    return res
})

/************菜单管理 start**************************/
//7.添加
export const reqMenuAdd=(user)=>{
    return axios({
        url:baseUrl+"/api/menuadd",
        method:"post",
        data:qs.stringify(user)
    })
}


//19.列表
export let reqMenulist=()=>{
    return axios({
        url:baseUrl+"/api/menulist",
        params:{
            istree:true
        }
    })
}

//30.删除
export let reqMenuDel=(obj)=>{
    return axios({
        url:baseUrl+"/api/menudelete",
        method:"post",
        data:qs.stringify(obj)
    })
}

//38.一条数据
export let reqMenuDetail=(obj)=>{
    return axios({
        url:baseUrl+"/api/menuinfo",
        params:obj
    })
}

//39.修改接口
export let reqMenuUpdate=(user)=>{
    return axios({
        url:baseUrl+"/api/menuedit",
        method:"post",
        data:qs.stringify(user)
    })
}
/************菜单管理 end**************************/

//7.添加
export const reqbannerAdd=(user)=>{
    return axios({
        url:baseUrl+"/api/banneradd",
        method:"post",
        data:qs.stringify(user)
    })
}


//19.列表
export let reqbannerlist=()=>{
    return axios({
        url:baseUrl+"/api/bannerlist",
        params:{
            istree:true
        }
    })
}
