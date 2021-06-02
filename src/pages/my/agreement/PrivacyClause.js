import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class PrivacyClause extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f8f8f9', paddingHorizontal: 20, }}>
        <TouchableOpacity onPress={() => { this.props.navigation.push('Agreement') }} activeOpacity={1} style={{ paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
          <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: 'bold',color:'#5D5757' }}>隐私政策</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.props.navigation.push('Agreement') }} activeOpacity={1} style={{ paddingVertical: 22, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
          <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: 'bold',color:'#5D5757' }}>个人信息处理政策</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
