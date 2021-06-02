import React, { Component } from 'react'
import { View, Text, Alert, TouchableOpacity, TextInput, StyleSheet, ActivityIndicator, Image, ToastAndroid } from 'react-native'
import validator from '../../utils/validator'
import MyLogin from '../../utils/mytoast/myLogin'
import MyLoading from '../../utils/mytoast/myloading';
import {_reqLogin} from '../../utils/request'
import Store from  '../../utils/store';
const {getAccountInfo, setAccountInfo} = Store;

export default class LoginScreen extends Component {
  state = {
    account: '',
    password: '',
    username: '',
    accountValid: true,
    checked: true,
    isShowMyLogin: false,
    isShowMyLoading: false,
    isShowError:false,
    errorMessage:''

  }
  /* 2-1-邮箱更新 */
  checkAccount = (currentAccount) => {
    this.setState({ account: currentAccount })
  }
  /* 3-1-用户名更新*/
  checkUserame = (currentUserame) => {
    this.setState({ username: currentUserame })
  }
  /* 4-1-密码更新 */
  checkPassword = (currentPassword) => {
    this.setState({ password: currentPassword })
  }
  /* -登录验证格式并跳转,利用mytoast实现弹窗 */
  submit = () => {
    // 邮箱格式验证
    let updateAccount = validator.validateEmail(this.state.account)
    if(!updateAccount){
      this.setState({
        isShowError:true
      })
      setTimeout(()=>{
       this.setState({
        isShowError:false
       })
      },2000)
      return 
    }else{
    //登录
    let data = {
      "email":this.state.account,
      "password":this.state.password,
      "grant_type":"password"
      }
    _reqLogin(data).then(async (res)=>{
      console.log(res);
      let token = res.data.access_token;
    // 在用户登录成功之后，若勾选了记住我，则将信息进行一个保存
    if(this.state.checked) {
      var data = {
          account: this.state.account,
          password: this.state.password,
          username: this.state.username,
          token:token
      }
      await setAccountInfo(data);
      alert('信息保存成功')
    } else { // 没有勾选就记录个空对象数据
      await setAccountInfo({});
      alert('信息不需要保存')
    }
      this.props.navigation.navigate('NavTab')
    }).catch((error) => {
      this.setState({
       errorMessage:error.response.data.message,
       isShowMyLogin:true
      })
      let _this = this;
      setTimeout(function(){
      _this.setState({
      errorMessage:'',
      isShowMyLogin:false
     })
     },2000) 
     return;
    })
    }
  }
  //  页面加载完成时
   componentDidMount(){
    // 获取记住账号密码信息
    let  data = getAccountInfo();
    data.then((obj) =>{
       console.log(obj,'获取用户信息');
        //更新组件的状态数据
        this.setState({
            account: obj.account,
            password: obj.password,
            username: obj.username,
        });
    });
}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f8f9' }}>
        {/* 1-吉祥物图片 */}
        <Image style={{ marginTop: 141, width: 145.5, height: 134, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_zhujixiangwu.png')} />
        {/* 2-邮箱输入 */}
        <View style={{ borderRadius: 10, height: 46, width: 277.5, backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 39, alignItems: 'center',borderRightWidth:4,borderBottomWidth:4,borderColor:'#f5f5f5' }}>
          <Image style={{ marginLeft: 20.5, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/email.png')} />
          <TextInput onChangeText={this.checkAccount} clearButtonMode="always" style={{ marginLeft: 35, fontSize: 15,width:200 }} placeholder="请输入邮箱" value={this.state.account} ></TextInput>
        </View>
        {/* 3-用户名输入 */}
        <View style={{ borderRadius: 10, height: 46, width: 277.5, backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 20, alignItems: 'center',borderRightWidth:4,borderBottomWidth:4,borderColor:'#f5f5f5' }}>
          <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_youxiangshouji_icon.png')} />
          <TextInput onChangeText={this.checkUserame} clearButtonMode="always" style={{ marginLeft: 35, fontSize: 15,width:200 }} placeholder="请输入用户名" value={this.state.username}></TextInput>
        </View>
        {/* 4-密码输入 */}
        <View style={{ borderRadius: 10, height: 46, width: 277.5, backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 20, alignItems: 'center',borderRightWidth:4,borderBottomWidth:4,borderColor:'#f5f5f5' }}>
          <Image style={{ marginLeft: 20, width: 20, height: 20, resizeMode: 'contain' }} source={require('../../assets/images/png/password.png')} />
          <TextInput onChangeText={this.checkPassword} clearButtonMode="always" secureTextEntry={true} style={{ marginLeft: 35, fontSize: 15,width:200 }} placeholder="请输入密码" value={this.state.password}></TextInput>
        </View>
        {/* 5-记住我 */}
        <View style={{ marginTop: 25, width: 277.5, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => { this.setState({ checked: !this.state.checked }) }} >
            {
              this.state.checked ?
                <Image style={{ width: 20.5, height: 20.5, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo1.png')} />
                :
                <Image style={{ width: 20.5, height: 20.5, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo2.png')} />
            }
          </TouchableOpacity>
          <Text style={{ fontSize: 15, marginLeft: 6 }}>记住我</Text>
        </View>
        {/* 6-登录按钮以及弹窗提示 */}
        <View style={{ height: 46.5, width: 277.5, backgroundColor: this.state.account && this.state.username && this.state.password ? '#00CB88' : '#c9c9c9', borderRadius: 5, marginTop: 35 }}>
          <TouchableOpacity onPress={this.submit} disabled={this.state.account && this.state.username && this.state.password ? false : true}>
            <Text style={{ textAlign: 'center', fontSize: 18.41, color: '#FFFFFF', marginTop: 11 }}>登 录</Text>
          </TouchableOpacity>
        </View>
        <MyLogin
          content={this.state.errorMessage}
          visible={this.state.isShowMyLogin} />
        <MyLoading
          visible={this.state.isShowMyLoading} />
        {/* 7-语言选择 */}
        <View style={{ width: 305, flexDirection: 'row', marginTop: 110, alignItems: 'center' }}>
          <Image style={{ width: 18.5, height: 18.5, resizeMode: 'contain' }} source={require('../../assets/images/png/dw_yuyanqiehuan.png')} />
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Language') }}>
            <Text style={{ marginLeft: 6, fontSize: 19.53 }}>语言</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
