import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class BusinessCategory extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F8F8F9' }}>
                <View style={{ backgroundColor: '#ffffff', paddingVertical: 20, borderRadius: 15, paddingHorizontal: 20, margin: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 18, color: '#5d5757' }}>审核须知</Text>
                    <View style={{ alignItems: 'baseline', justifyContent: 'space-between',marginTop: 24}}>
                        <Image source={require('../../../../assets/images/png/dd_fengexian.png')} style={{width:'100%',marginBottom:23}}></Image>
                        <View style={{flexDirection:'row',alignItems:'center'}}><Text style={{width:6,height:6,borderRadius:3,backgroundColor:'#5D5757',marginRight:6,lineHeight:40}}></Text><Text style={{ fontSize: 15, color: '#5d5757',lineHeight:40 }}>经营品类每月仅允许修改3次，请谨慎修改</Text></View>
                        <View style={{flexDirection:'row',alignItems:'center'}}><Text style={{width:6,height:6,borderRadius:3,backgroundColor:'#5D5757',marginRight:6,lineHeight:40}}></Text><Text style={{ fontSize: 15, color: '#5d5757',lineHeight:40 }}>主营业务必填，辅营业务选填</Text></View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#ffffff', margin: 20, marginTop: 0, paddingVertical: 20, borderRadius: 15, paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 18, color: '#5d5757' }}>主营品类</Text>
                        <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.push('MainCategory') }} style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{ fontSize: 15, color: '#5D5757',marginRight:5 }}>中式菜肴-北京料理</Text>
                            <Image source={require('../../../../assets/images/png/gr_gengduo_icon1.png')} style={{width:7,height:11}}></Image>
                        </TouchableOpacity>
                    </View>
                    <Image source={require('../../../../assets/images/png/dd_fengexian.png')} style={{width:'100%', marginTop: 20,}}></Image>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', paddingTop: 19 }}>
                        <Text style={{ fontSize: 18, color: '#5d5757' }}>辅营品类</Text>
                        <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.push('MainCategory') }} style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{ fontSize: 15, color: '#5D5757',marginRight:5 }}>无</Text>
                            <Image source={require('../../../../assets/images/png/gr_gengduo_icon1.png')} style={{width:7,height:11}}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    fontStyle: {
        fontSize: 18,
        color: '#5D5757',
    },
    container: {
        paddingTop: 13,
        paddingBottom: 13,
        alignItems: 'center'
    }
})