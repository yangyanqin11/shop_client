import React, { Component } from 'react'
import { View, Text, Switch, TouchableOpacity, Modal,Image } from 'react-native'
import MyMinPick from '../../utils/mytoast/myminPick'
import Picker from 'react-native-picker'
import {_setPreparationTime} from '../../utils/request'

export default class OrderSetting extends Component {
  state = {
    clickToday: false,
    clickTomorrow: false,
    clickHour: false,
    clickHourItem: 4,
    isshade: false,
    switch:false,
    minutes: [],
    pickhour: [{ id: 1, hour: '30分钟' }, { id: 2, hour: '45分钟' }, { id: 3, hour: '1小时' }, { id: 4, hour: '1小时15分钟' }, { id: 5, hour: '1小时45分钟' }, { id: 6, hour: '2小时' },{id:7,hour:'2小时15分钟'},{id:8,hour:'2小时45分钟'},{id:9,hour:'3小时'}]
  }
  componentDidMount() {
    for (var i = 5; i < 61; i++) {
      this.state.minutes.push(i)
    }
  }
  showMinPick = () => {
    this.setState({ isshade: true });
    Picker.init({
      pickerData: this.state.minutes,
      selectedValue: [59],
      pickerTitleText: '',
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerCancelBtnColor: [0, 0, 0, 1],
      pickerToolBarBg: [255, 255, 255, 1],
      pickerBg: [255, 255, 255, 1],
      onPickerConfirm: data => {
        console.log(data);
        this.setState({ isshade: false });
      },
      onPickerCancel: data => {
        this.setState({ isshade: false });
        console.log(data);
      },
      onPickerSelect: data => {
        console.log(data);
      }
    });
    Picker.show();
  }
  // 当页面挂载完成时，请求数据
  // componentDidMount(){
  //   let params = {
  //     preparation_time:600
  //   }
  //   _setPreparationTime().then(res=>{
  //     console.log(res)
  //   }).catch(err=>{
  //     console.log(err.response)
  //   })
  // }
  render() {
    return (
      <View style={{ backgroundColor: '#f8f8f9', flex: 1 }}>
        {/* 遮罩层 */}
        {
          !this.state.isshade ? <></> :
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: '100%', height: '100%', zIndex: 10, position: 'absolute', top: 0 }}></View>
        }
        {/* 0-时间选择器待优化 */}
        <View style={{ backgroundColor: '#ffffff', marginHorizontal: 15, paddingVertical: 20, borderRadius: 15, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 18, color: '#5d5757' }}>出餐时间设置</Text>
          <Text style={{ fontSize: 15, color: '#838181', marginTop: 5 }}>出餐时间：即接单后到备餐完成的时间</Text>
          <Image source={require('../../assets/images/png/dd_fengexian.png')} style={{width:'100%', marginTop: 20}}></Image>
          <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', paddingTop: 19 }}>
            <Text style={{ fontSize: 18, color: '#5d5757' }}>承诺出餐时间</Text>
            <TouchableOpacity activeOpacity={1} onPress={this.showMinPick}>
             <View style={{flexDirection:'row',alignItems:'center'}}><Text style={{ fontSize: 15, color: '#838181',marginRight:5 }}>15分钟</Text>
              <Image source={require('../../assets/images/png/gr_gengduo_icon1.png')} style={{width:7,height:11}}></Image></View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: '#ffffff', marginHorizontal: 15, paddingVertical: 20, borderRadius: 15, paddingHorizontal: 20, marginTop: 22 }}>
          {/* 1 */}
          <Text style={{ fontSize: 18, color: '#5d5757' }}>预订单设置</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, color: '#5d5757' }}>休息时间支持预定</Text>
            {/* 开关状态 */}
            {this.state.switch ? <TouchableOpacity style={{width:53,height:26,borderRadius:13,backgroundColor:'#18DD83',alignItems:'flex-end',justifyContent:'center',paddingRight:1}} onPress={()=>{this.setState({switch:false})}}><Text style={{width:24,height:24,borderRadius:12,backgroundColor:'white'}}></Text></TouchableOpacity> :<TouchableOpacity style={{width:53,height:26,borderRadius:13,backgroundColor:'#9D9B9B',justifyContent:'center',paddingLeft:1}} onPress={()=>{this.setState({switch:true})}}><Text style={{width:24,height:24,borderRadius:12,backgroundColor:'white'}}></Text></TouchableOpacity>}
          </View>
          <Text style={{ fontSize: 15, color: '#838181', marginTop: 5 }}>休息时间即除营业时间外的时间</Text>
          {/* 2 */}
          <View style={{paddingVertical: 20, paddingBottom: 20}}>
             <Image source={require('../../assets/images/png/dd_fengexian.png')} style={{width:'100%', marginBottom: 20}}></Image>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Text style={{ fontSize: 18, color: '#5d5757' }}>商家接受预定日期</Text>
              <Text style={{ fontSize: 15, color: '#838181', marginLeft: 5 }}>公休日不接单</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
              <Text style={{ backgroundColor: '#ececec', paddingTop: 3,paddingBottom:3, borderRadius: 15, paddingHorizontal: 12.5 }}>今天</Text>
              <Text style={{ marginHorizontal: 5 }}>~</Text>
              <View>
                {/* 2-1今日明日弹出框 */}
                <TouchableOpacity onPress={() => { this.setState({ clickToday: !this.state.clickToday }) }} style={{backgroundColor: '#18DD83', borderRadius: 15, paddingHorizontal: 10,flexDirection:'row',alignItems:'center'}}>
                  <Text style={{color:'white',padding:3 }}>{this.state.clickTomorrow ? '明天' : '今天'}</Text>
                  <Image source ={require('../../assets/images/png/dw_sanjiaoicon.png')}></Image>
                </TouchableOpacity>
                {
                  this.state.clickToday ?
                    <TouchableOpacity style={{ position: 'absolute', top: 28 }} onPress={() => { this.setState({ clickTomorrow: !this.state.clickTomorrow, clickToday: !this.state.clickToday }) }}>
                      <Text style={{ backgroundColor: '#18DD83', padding: 3, borderRadius: 15, paddingHorizontal: 18,color:'white'}}>{this.state.clickTomorrow ? '今天' : '明天'}</Text>
                    </TouchableOpacity>
                    :
                    <></>
                }
              </View>
            </View>
          </View>
          {/* 3-小时选择框需要动画 */}
          <Image source={require('../../assets/images/png/dd_fengexian.png')} style={{width:'100%', marginBottom: 20}}></Image>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, color: '#5d5757' }}>预定单提醒时间</Text>
            <View>
              <TouchableOpacity activeOpacity={1} onPress={() => { this.setState({ clickHour: !this.state.clickHour }) }} style={{ backgroundColor: '#18DD83', width: 110, height: 28.5, borderRadius: 15, alignItems: 'center',flexDirection:'row',justifyContent:'center' }}>
                <Text style={{ fontSize: 15, color: 'white', lineHeight: 28.5 }}>{this.state.pickhour[this.state.clickHourItem - 1].hour}</Text>
                <Image source ={require('../../assets/images/png/dw_sanjiaoicon.png')} style={{marginLeft:8}}></Image>
              </TouchableOpacity>
              {
                this.state.clickHour ?
                  <View style={{ position: 'absolute', top: 30, zIndex: 10, borderRadius: 15, backgroundColor: '#e5e4e4', width: 104, alignItems: 'center' }}>
                    {
                      this.state.pickhour.map((item) => {
                        return (
                          <TouchableOpacity onPress={() => { this.setState({ clickHourItem: item.id,clickHour:false }) }} activeOpacity={1} key={item.id}>
                            <Text style={{ fontSize: 15, color: this.state.clickHourItem == item.id ? '#5D5757' : '#9d9b9b', lineHeight: 28 }}>{item.hour}</Text>
                          </TouchableOpacity>
                        )
                      })
                    }
                  </View>
                  :
                  <></>
              }
            </View>
          </View>
          <Text style={{ fontSize: 15, color: '#5D5757', marginTop: 5 }}>您希望提前多久提醒</Text>
          {
            this.state.clickHour ?
              <View style={{ backgroundColor: 'transparent', width: '100%', height: 165 }}></View>
              :
              <></>
          }
        </View>
      </View >
    )
  }
}
