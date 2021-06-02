import React, { Component } from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'

export default class Agreement extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f8f8f9',paddingHorizontal: 20, }}>
        <TouchableOpacity onPress={() => { this.props.navigation.push('UseClause') }} activeOpacity={1} style={{ paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
          <Text style={{ marginLeft: 5, fontSize: 18,fontWeight:'bold',color:'#5D5757' }}>使用条款</Text>
          <Image source={require('../../assets/images/png/gr_gengduo_icon1.png')} style={{width:7,height:11}}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.props.navigation.push('PrivacyClause') }} activeOpacity={1} style={{ paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
          <Text style={{ marginLeft: 5, fontSize: 18,fontWeight:'bold',color:'#5D5757' }}>隐私条款</Text>
          <Image source={require('../../assets/images/png/gr_gengduo_icon1.png')} style={{width:7,height:11}}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.props.navigation.push('Contract') }} activeOpacity={1} style={{ paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
        <Text style={{ marginLeft: 5, fontSize: 18,fontWeight:'bold',color:'#5D5757' }}>商家合同</Text>
          <Image source={require('../../assets/images/png/gr_gengduo_icon1.png')} style={{width:7,height:11}}></Image>
        </TouchableOpacity>
      </View>
    )
  }
}
