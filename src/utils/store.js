import {useAsyncStorage} from '@react-native-community/async-storage';
/** 默认导出Store对象 */
export default {
    /**
     * Token信息
     * @param value
     */
    setToken: function(value){
        const { setItem, removeItem} = useAsyncStorage('@Token');
        if(value){
            setItem(JSON.stringify(value));
        }else{
            removeItem();
        }
    },
    getToken: async function(){
        const {getItem} = useAsyncStorage('@Token');
        return JSON.parse(await getItem());
    } ,
    /**
     * 用户登录信息存储和获取
     * @param value
     */
    setUserInfo: function(value){
        const {setItem, removeItem} = useAsyncStorage('@UserInfo');
        if(value){
            setItem(JSON.stringify(value));
        }else{
            removeItem();
        }
    },
    getUserInfo: async function(){
        const {getItem} = useAsyncStorage('@UserInfo');
        return JSON.parse(await getItem());
    } ,
    /**
     * 记住账号密码
     * @param value
     */
    setAccountInfo: function(value){
        const {setItem, removeItem} = useAsyncStorage('@AccountInfo');
        if(value){
            setItem(JSON.stringify(value));
        }else{
            removeItem();
        }
    },
    getAccountInfo: async function(){
        const {getItem} = useAsyncStorage('@AccountInfo');
        return JSON.parse(await getItem());
    } 

}