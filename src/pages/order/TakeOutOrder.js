import React, { Component } from 'react'
import { View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TakeOutOrderItem from '../../components/TakeOutOrderItem'

export default class OtherOrder extends Component {
  state = {
    active: 1
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 50, marginHorizontal: 25, backgroundColor: '#3f3c3c', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { this.setState({ active: 1 }) }}>
            <Text style={{ backgroundColor: this.state.active == 1 ? '#00cb88' : '#3f3c3c', width: 6, height: 6, borderRadius: 3 }}></Text>
            <Text style={{ marginLeft: 6, color: this.state.active == 1 ? '#ffffff' : '#989897', fontSize: 17 }}>进行中</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center' }} onPress={() => { this.setState({ active: 2 }) }}>
            <Text style={{ backgroundColor: this.state.active == 2 ? '#00cb88' : '#3f3c3c', width: 6, height: 6, borderRadius: 3 }}></Text>
            <Text style={{ marginLeft: 6, color: this.state.active == 2 ? '#ffffff' : '#989897', fontSize: 17 }}>预定单</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center' }} onPress={() => { this.setState({ active: 3 }) }}>
            <Text style={{ backgroundColor: this.state.active == 3 ? '#00cb88' : '#3f3c3c', width: 6, height: 6, borderRadius: 3 }}></Text>
            <Text style={{ marginLeft: 6, color: this.state.active == 3 ? '#ffffff' : '#989897', fontSize: 17 }}>退款单</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          {this.state.active == 1 ? <DoingOrder props={this.props.props}></DoingOrder> : this.state.active == 2 ? <ReservedOrder props={this.props.props}></ReservedOrder> : <Refund props={this.props.props}></Refund>}
        </View>
      </View>
    );
  }
}
// 1-1进行中组件
class DoingOrder extends Component {
  state = {
    doingorder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#f8f8f9' }}>
        {
          this.state.doingorder.map((item) => {
            return (
              <TakeOutOrderItem key={item.id} props={this.props} doing={item.a}></TakeOutOrderItem>
            )
          })
        }
      </ScrollView>
    )
  }
}
// 1-2预定单组件
class ReservedOrder extends Component {
  state = {
    active: 1
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#f8f8f9' }}>
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-around', marginLeft: 16,marginRight:15}}>
          <TouchableOpacity style={{ width: 85, height: 30, alignItems: 'center', borderRadius: 10, backgroundColor: this.state.active == 1 ? '#e5e4e4' : 'transparent' }} onPress={() => { this.setState({ active: 1 }) }}>
            <Text style={{ fontSize: 15, marginTop: 4, color: this.state.active == 1 ?'#5D5757' : '#A09E9E'  }}>即将到时</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 85, height: 30, alignItems: 'center', borderRadius: 10, backgroundColor: this.state.active == 2 ? '#e5e4e4' : 'transparent' }} onPress={() => { this.setState({ active: 2 }) }}>
            <Text style={{ fontSize: 15, marginTop: 4, color: this.state.active == 2 ?'#5D5757' : '#A09E9E'  }}>今日</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 85, height: 30, alignItems: 'center', borderRadius: 10, backgroundColor: this.state.active == 3 ? '#e5e4e4' : 'transparent' }} onPress={() => { this.setState({ active: 3 }) }}>
            <Text style={{ fontSize: 15, marginTop: 4, color:this.state.active == 3 ?'#5D5757' : '#A09E9E'  }}>明日</Text>
          </TouchableOpacity>
        </View>
        <View>
          {this.state.active == 1 ? <ReservedSoonOrder props={this.props}></ReservedSoonOrder> : this.state.active == 2 ? <ReservedTodayOrder props={this.props}></ReservedTodayOrder> : <ReservedTomorrowOrder props={this.props}></ReservedTomorrowOrder>}
        </View>
      </ScrollView>
    )
  }
}
// 1-2-1即将到时组件
class ReservedSoonOrder extends Component {
  state = {
    reservedsoonorder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.reservedsoonorder.map((item) => {
            return (
              <View key={item.id}>
                <TakeOutOrderItem props={this.props} num={item.a}></TakeOutOrderItem>
              </View>
            )
          })
        }
      </View>
    )
  }
}
// 1-2-2今日组件
class ReservedTodayOrder extends Component {
  state = {
    reservedtodayorder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.reservedtodayorder.map((item) => {
            return (
              <TakeOutOrderItem key={item.id} props={this.props} num={item.a}></TakeOutOrderItem>
            )
          })
        }
      </View>
    )
  }
}
// 1-2-3明日组件
class ReservedTomorrowOrder extends Component {
  state = {
    reservedtomorroworder: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <View>
        {
          this.state.reservedtomorroworder.map((item) => {
            return (
              <View key={item.id}>
                <TakeOutOrderItem props={this.props} num={item.a}></TakeOutOrderItem>
              </View>
            )
          })
        }
      </View>
    )
  }
}
// 1-3退款组件
class Refund extends Component {
  state = {
    refund: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }]
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#f8f8f9' }}>
        {
          this.state.refund.map((item) => {
            return (
              <View key={item.id}>
                <TakeOutOrderItem props={this.props} refund={item.a}></TakeOutOrderItem>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}
