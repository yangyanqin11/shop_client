import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, TouchableHighlight } from 'react-native';
import EventBus from 'react-native-event-bus';
import Language from '../../utils/languages/languages';
import I18n from '../../utils/languages/languages'

export default class LanguageScreen extends Component {
  state = {
    en: false,
    cn: true,
    jap: false,
  }

  changeEnLanguage = () => {
    this.state.en ? '' : this.setState({ en: true, cn: false, jap: false })
    Language.locale = 'en'
  }
  changeCnLanguage = () => {
    this.state.cn ? '' : this.setState({ en: false, cn: true, jap: false })
    Language.locale = 'cn'
  }
  changeJapLanguage = () => {
    this.state.jap ? '' : this.setState({ en: false, cn: false, jap: true })
    Language.locale = 'jap'
  }
  render() {
    return (
      <View style={{ backgroundColor: '#f8f8f9', flex: 1 }}>
        {/* 1 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 18 ,fontWeight:'bold',color:'#5D5757'}}>Yami</Text>
            <Text style={{ color: '#BABABA',fontSize:14 }}>English</Text>
          </View>
          <TouchableOpacity onPress={this.changeEnLanguage}>
            {
              this.state.en ?
                <Image style={{ width: 28, height: 28, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo1.png')} />
                :
                <Image style={{ width: 28, height: 28, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo2.png')} />
            }
          </TouchableOpacity>
        </View>
        {/* 2 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20, marginTop: 0, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 18,fontWeight:'bold',color:'#5D5757' }}>美味</Text>
            <Text style={{ color: '#BABABA',fontSize:14 }}>中文</Text>
          </View>
          <TouchableOpacity onPress={this.changeCnLanguage}>
            {
              this.state.cn ?
                <Image style={{ width: 28, height: 28, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo1.png')} />
                :
                <Image style={{ width: 28, height: 28, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo2.png')} />
            }
          </TouchableOpacity>
        </View>
        {/* 3 */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20, marginTop: 0, alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 18,fontWeight:'bold',color:'#5D5757' }}>おいしい</Text>
            <Text style={{ color: '#BABABA',fontSize:14 }}>日本语</Text>
          </View>
          <TouchableOpacity onPress={this.changeJapLanguage}>
            {
              this.state.jap ?
                <Image style={{ width: 28, height: 28, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo1.png')} />
                :
                <Image style={{ width: 28, height: 28, resizeMode: 'contain' }} source={require('../../assets/images/png/dl_jizhuwo2.png')} />
            }
          </TouchableOpacity>
        </View>
        <Text style={{ marginTop: 28, padding: 80, }}>{I18n.t('languageChanged')}</Text>
      </View>
    )
  }
}