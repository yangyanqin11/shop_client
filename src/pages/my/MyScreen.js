import React, { Component } from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native'
import MyLogout from '../../utils/mytoast/myLogout'


export default class MyScreen extends Component {
    state = {
        isShowMyLogout: false
    }
    logout = () => {
        this.setState({ isShowMyLogout: true });
    }
    ensureMyToast = () => {
        // this.setState({ isShowMyLogin: false });
        this.props.navigation.replace('Login')
    }
    cancelMyToast = () => {
        this.setState({ isShowMyLogout: false });
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#f8f8f9', alignItems: 'center' }}>
                {/* 1 */}
                <View style={{ marginTop: 50, marginBottom: -75, zIndex: 99, alignItems: 'center' }}>
                    <Image style={{ width: 97, height: 97, resizeMode: 'contain' }} source={require('../../assets/images/png/dw-dianpukuang.png')}></Image>
                    <Text style={{ fontSize: 22, color: '#3f3c3c', marginTop: 12 }}>盐忆</Text>
                </View>
                {/* 2 */}
                <View style={{ backgroundColor: '#ffffff', paddingHorizontal: 20, marginHorizontal: 20, borderRadius: 15, paddingTop: 110, paddingBottom: 33 }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.push('StoreSetting') }} activeOpacity={1} style={{ alignItems: 'center', paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/png/dw_mendiantubiao.png')} style={{width:16,height:16}}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 18,color:'#5D5757' }}>门店设置</Text>
                        </View>
                        <Image source={require('../../assets/images/png/gr_gengduo_icon1.png')} style={{width:7,height:11,resizeMode:'contain'}}></Image>
                    </TouchableOpacity>
                    <Image source={require('../../assets/images/png/dd_fengexian.png')}></Image>
                    <TouchableOpacity onPress={() => { this.props.navigation.push('OrderSetting') }} activeOpacity={1} style={{ paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/png/dw_dingdanicon.png')} style={{width:15,height:16}}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 18,color:'#5D5757'  }}>订单设置</Text>
                        </View>
                        <Image source={require('../../assets/images/png/gr_gengduo_icon1.png')} style={{width:7,height:11,resizeMode:'contain'}}></Image>
                    </TouchableOpacity>
                    <Image source={require('../../assets/images/png/dd_fengexian.png')}></Image>
                    <TouchableOpacity onPress={() => { this.props.navigation.push('Language') }} activeOpacity={1} style={{ paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/png/dw_yuyanqiehuan.png')} style={{width:15,height:15}}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 18,color:'#5D5757' ,fontFamily:'FangSong' }}>语言切换</Text>
                        </View>
                        <Image source={require('../../assets/images/png/gr_gengduo_icon1.png')} style={{width:7,height:11,resizeMode:'contain'}}></Image>
                    </TouchableOpacity>
                    <Image source={require('../../assets/images/png/dd_fengexian.png')}></Image>
                    <TouchableOpacity onPress={() => { this.props.navigation.push('Agreement') }} activeOpacity={1} style={{ paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/png/dw_hetongicon.png')} style={{width:18,height:18}}></Image>
                            <Text style={{ marginLeft: 5, fontSize: 18,color:'#5D5757'  }}>合同协议</Text>
                        </View>
                        <Image source={require('../../assets/images/png/gr_gengduo_icon1.png')} style={{width:7,height:11,resizeMode:'contain'}}></Image>
                    </TouchableOpacity>
                    <Image source={require('../../assets/images/png/dd_fengexian.png')}></Image>
                    <View style={{ paddingVertical: 22, flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/png/dw_wodicon.png')} style={{width:14,height:15}}></Image>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', flex: 1 }}>
                            <Text style={{ marginLeft: 5, fontSize: 18,color:'#5D5757'  }}>当前账号</Text>
                            <Text style={{ fontSize: 13, color: '#938f8f' }}>今天就要点外卖</Text>
                        </View>
                    </View>
                    {/* 3退出登录以及弹窗 */}
                    <TouchableOpacity activeOpacity={1} style={{ marginTop: 22, width: 291.5, height: 40.5, backgroundColor: '#00cb88', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }} onPress={this.logout}>
                        <Text style={{ color: '#ffffff', fontSize: 17 }}>退出登录</Text>
                    </TouchableOpacity>
                    <MyLogout
                        content='退出后将无法收到订单信息，是否确认退出登录？'
                        confirm={this.ensureMyToast}
                        cancel={this.cancelMyToast}
                        visible={this.state.isShowMyLogout} />
                </View>
            </View>
        )
    }
}
