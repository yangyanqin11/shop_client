import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
export default class OtherOrderItem extends Component {
  render() {
    return (
      <View style={{ margin: 17.5, marginBottom: 0, padding: 15.5, backgroundColor: '#FFFFFF', borderRadius: 30}}>
        {/* 1 */}
        <TouchableOpacity activeOpacity={1} onPress={() => { this.props.props.props.navigation.navigate('OtherOrderDetail') }} >
          <View style={{ flexDirection: 'row', height: 30, alignItems: 'center' }}>
            <Text style={{ fontSize: 19, color: '#5D5757',lineHeight: 30 }}>取餐号{this.props.num}</Text>
            <View style={{ flexDirection: 'row', width: '70%', justifyContent: 'space-between', marginLeft: 14 }}>
              <Text style={{ fontSize: 14, color: '#838181', lineHeight: 30 }}>桌号:58</Text>
              <Text style={{ color: this.props.byself === '自提' ? '#00CB88' : '#5FA6EE', fontSize: 17, lineHeight: 30 }}>{this.props.byself? '自提':'堂食'}</Text>
            </View>
          </View>
          {
            this.props.byself ?
            <View style={{marginTop: 10}}>
                 <Image source={require('../assets/images/png/dd_fengexian.png')} style={{width:'100%'}}></Image>
                 <View style={{ flexDirection: 'row', alignItems: 'center',paddingTop: 10 }}>
                <Text style={{ backgroundColor: '#FF6127', marginRight: 10, fontSize: 12, padding: 3, color: '#ffffff',borderRadius:3 }}>预定</Text>
                <Text style={{color: '#5D5757'}}>预订单/今日13:30自提</Text>
              </View>
            </View>
              :
              <></>
          }
          <View style={{paddingVertical: 10}}>
          <Image source={require('../assets/images/png/dd_fengexian.png')} style={{width:'100%'}}></Image>
            <Text style={{ textAlign: 'justify', fontSize: 13, color: '#838181',paddingBottom:10,paddingTop:10 }}>备注：麻烦师傅不要给我放辣椒我很怕辣，也不要放蒜，也不要放洋葱.</Text>
            <Image source={require('../assets/images/png/dd_fengexian.png')} style={{width:'100%'}}></Image>
          </View>
        </TouchableOpacity>
        {
          this.props.tomorrow ?
            <></>
            :
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{ width: 128.5, borderRadius: 15, overflow: 'hidden' }}><Button title="提醒" color="#5FA6EE"></Button></View>
              <View style={{ width: 128.4, borderRadius: 15, overflow: 'hidden' }}><Button title="完成" color="#00CB88"></Button></View>
            </View>
        }
        {
          this.props.cancel ?
            <View style={{ flexDirection: 'row',marginTop: 10 }}>
              <Text style={{ color: '#fb1f1f', marginLeft: 5 }}>
                <Image style={{ resizeMode: 'contain', width: 12, height: 12 }} source={require('../assets/images/png/cancel.png')} />
                取消原因：商家接单1分钟内顾客退款申请被系统自动通过
              </Text>
            </View> : <></>
        }
      </View>
    )
  }
}
