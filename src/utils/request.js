import axios from 'axios';
import qs from 'qs';

const baseUrl='https://vc4ora8cy4.execute-api.ap-northeast-1.amazonaws.com/dev_v2'

//请求拦截处理
axios.interceptors.request.use(config=>{
    console.log('本次请求的地址为：'+config.url,'请求拦截器');
    return config;
});

//返回拦截处理
axios.interceptors.response.use(res => {
    return res;
});
// 登录用户请求
export const _reqLogin = (data) => {
    return axios({
        method:"POST",
        url:baseUrl+"/get_oauth2_token",
        data
    })
}
// 设置营业时间
export const _SetBusinessTime = (data) => {
    return axios({
        method:"POST",
        url:baseUrl+"/set_business_time",
        data
    })
}
// 设置出餐时间
export const _setPreparationTime = (params) =>{
    return axios({
        method:'GET',
        url:baseUrl+'/set_preparation_time',
        params
    })
}