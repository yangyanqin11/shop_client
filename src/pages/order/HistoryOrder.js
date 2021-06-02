import React, { Component } from 'react'
import { View, Text, Button, ScrollView, TouchableOpacity,Image} from 'react-native'
import OtherOrderItem from '../../components/OtherOrderItem'
import TakeOutOrderItem from '../../components/TakeOutOrderItem'

export default class HistoryOrder extends Component {
  state = {
    active: 1,
    clickDay: false,
    clickDayItem: 6,
    pickday: [{ id: 1, day: '4.18' }, { id: 2, day: '4.19' }, { id: 3, day: '4.20' }, { id: 4, day: '4.21' }, { id: 5, day: '4.22' }, { id: 6, day: '4.23' },]
  }
  showDayPick = () => {
    this.setState({ clickDay: !this.state.clickDay });
  }
  render() {
    return (
      <ScrollView>
        <View style={{ paddingLeft: 30, flexDirection: 'row', backgroundColor: 'white', alignItems: 'center' }}>
          <View>
            {/* 弹出日期选择框 */}
            <TouchableOpacity activeOpacity={1} style={{ alignItems: 'center', flexDirection: 'row', width: 55, height: 51 }} onPress={this.showDayPick}>
              <Text style={{ color: '#3F3C3C', marginLeft: 8, fontSize: 14 }}>{this.state.pickday[this.state.clickDayItem - 1].day}</Text>
              <Image style={{ width: 10, height: 9, marginLeft: 3 }} source={require('../../assets/images/png/dl_riqixuanzeicon.png')} ></Image>
            </TouchableOpacity>
            {
              this.state.clickDay ?
                <View style={{ position: 'absolute', top: 40, borderRadius: 15, backgroundColor: '#f3f3f3', zIndex: 20, width: 64, height: 175, paddingVertical: 5 }}>
                  {
                    this.state.pickday.map((item) => {
                      return (
                        <TouchableOpacity onPress={() => { this.setState({ clickDayItem: item.id, clickDay: false }) }} activeOpacity={1} key={item.id} style={{ alignItems: 'center' }}>
                          <Text style={{ fontSize: 13, color: this.state.clickDayItem == item.id ? '#000000' : '#989897', lineHeight: 28 }}>{item.day}</Text>
                        </TouchableOpacity>
                      )
                    })
                  }
                </View>
                :
                <></>
            }
          </View>
          {/* 导航 */}
          <View style={{ width: 270 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ padding: 17 }} onPress={() => { this.setState({ active: 1 }) }}>
                  <Text style={{ marginLeft: 3, color: this.state.active == 1 ? '#5D5757' : '#989897', fontSize: 14 }}>外卖单</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 17 }} onPress={() => { this.setState({ active: 2 }) }}>
                  <Text style={{ marginLeft: 3, color: this.state.active == 2 ? '#5D5757' : '#989897', fontSize: 14 }}>其它单</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 17, alignItems: 'center' }} onPress={() => { this.setState({ active: 3 }) }}>
                  <Text style={{ marginLeft: 3, color: this.state.active == 3 ? '#5D5757' : '#989897', fontSize: 14 }}>取消单</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 17, alignItems: 'center' }} onPress={() => { this.setState({ active: 4 }) }}>
                  <Text style={{ marginLeft: 3, color: this.state.active == 4 ? '#5D5757' : '#989897', fontSize: 14 }}>退款单</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
        <View>
          {this.state.active == 1 ? <HistoryTakeOutOrder props={this.props.props}></HistoryTakeOutOrder> : this.state.active == 2 ? <HistoryOtherOrder props={this.props.props}></HistoryOtherOrder> : <HistoryCancleOrder props={this.props.props}></HistoryCancleOrder>}
        </View>
      </ScrollView>
    )
  }
}
// 1-2-1外卖单组件
class HistoryTakeOutOrder extends Component {
  state = {
    historytakeoutorder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.historytakeoutorder.map((item) => {
            return (
              <View key={item.id}>
                <TakeOutOrderItem props={this.props.props} num={item.a} tomorrow={item.b}></TakeOutOrderItem>
              </View>
            )
          })
        }
      </View>
    )
  }
}
// 1-2-2其它单组件
class HistoryOtherOrder extends Component {
  state = {
    historyotherorder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.historyotherorder.map((item) => {
            return (
              <View key={item.id}>
                <OtherOrderItem props={this.props.props} num={item.a} tomorrow={item.b}></OtherOrderItem>
              </View>
            )
          })
        }
      </View>
    )
  }
}
// 1-2-3取消单组件
class HistoryCancleOrder extends Component {
  state = {
    historyotherorder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.historyotherorder.map((item) => {
            return (
              <View key={item.id}>
                <OtherOrderItem props={this.props.props} num={item.a} tomorrow={item.b} cancel={true}></OtherOrderItem>
              </View>
            )
          })
        }
      </View>
    )
  }
}