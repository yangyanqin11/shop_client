import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Alert,BackHandler, StatusBar } from 'react-native';
import TakeOutOrder from './TakeOutOrder'
import OtherOrder from './OtherOrder'
import HistoryOrder from './HistoryOrder'

export default class OrderScreen extends Component {
    state = {
        active: 1,
        isHistoryOrder:false
    }
    render() {
        return (
            <>
            {this.state.isHistoryOrder?
            <View style={{flex:1, marginTop: 50, backgroundColor: '#f8f8f9' }}>
            <StatusBar backgroundColor='white'></StatusBar>
            {/* 1-顶部tab栏，搜索框跳转搜索界面 */}
            <View style={{paddingLeft: 20,paddingRight:17,marginTop:-35,flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',backgroundColor:'white',paddingTop:35,paddingBottom:10}}>
                <TouchableOpacity onPress={() => { this.setState({ active: 1,isHistoryOrder:false }) }}>
                    <Text style={{ color: this.state.active == 1 ? '#5D5757' : '#A09E9E',fontSize:17,fontWeight:'600' }}>外卖</Text>
                    {this.state.active == 1 ? <Image source={require('../../assets/images/png/dq_xuanzhong.png')} style={{marginLeft:-28}}></Image> :<></>}
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => { this.setState({ active: 2,isHistoryOrder:false }) }}>
                    <Text style={{ color: this.state.active == 2 ? '#5D5757' : '#A09E9E',fontSize:17 }}>其他</Text>
                    {this.state.active == 2 ? <Image source={require('../../assets/images/png/dq_xuanzhong.png')} style={{marginLeft:-28}}></Image> :<></>}
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => { this.setState({ active: 3,isHistoryOrder:true }) }}>
                    <Text style={{ color: this.state.active == 3 ? '#5D5757' : '#A09E9E',fontSize:17 }}>历史</Text>
                    {this.state.active == 3 ? <Image source={require('../../assets/images/png/dq_xuanzhong.png')} style={{marginLeft:-28}}></Image> :<></>}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Search') }} style={{ alignItems: 'center', backgroundColor: '#e5e5e4', width: 60, height: 28.5, borderRadius: 15,justifyContent:'center' }}>
                    <Image style={{ resizeMode: 'contain', width: 14, height: 14, }} source={require('../../assets/images/png/search.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1}}>
                {this.state.active == 1 ? <TakeOutOrder props={this.props}></TakeOutOrder> : this.state.active == 2 ? <OtherOrder props={this.props}></OtherOrder>:<HistoryOrder props={this.props}></HistoryOrder>}
            </View>
        </View>:<View style={{flex:1, paddingTop: 50, backgroundColor: '#f8f8f9' }}>
                {/* 1-顶部tab栏，搜索框跳转搜索界面 */}
                <View style={{marginLeft: 20,marginRight:17, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { this.setState({ active: 1,isHistoryOrder:false }) }}>
                        <Text style={{ color: this.state.active == 1 ? '#3f3c3c' : '#989897',fontSize:17 }}>外卖</Text>
                        {this.state.active == 1 ? <Image source={require('../../assets/images/png/dq_xuanzhong.png')} style={{marginLeft:-25}}></Image> :<></>}
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => { this.setState({ active: 2,isHistoryOrder:false }) }}>
                        <Text style={{ color: this.state.active == 2 ? '#3f3c3c' : '#989897',fontSize:17 }}>其他</Text>
                        {this.state.active == 2 ? <Image source={require('../../assets/images/png/dq_xuanzhong.png')} style={{marginLeft:-25}}></Image> :<></>}
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => { this.setState({ active: 3,isHistoryOrder:true}) }}>
                        <Text style={{ color: this.state.active == 3 ? '#3f3c3c' : '#989897',fontSize:17 }}>历史</Text>
                        {this.state.active == 3 ? <Image source={require('../../assets/images/png/dq_xuanzhong.png')} style={{marginLeft:-25}}></Image> :<></>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Search') }} style={{ alignItems: 'center', backgroundColor: '#e5e5e4', width: 60, height: 28.5, borderRadius: 15,justifyContent:'center' }}>
                        <Image style={{ resizeMode: 'contain', width: 14, height: 14, }} source={require('../../assets/images/png/search.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, marginTop: 20 }}>
                    {this.state.active == 1 ? <TakeOutOrder props={this.props}></TakeOutOrder> : this.state.active == 2 ? <OtherOrder props={this.props}></OtherOrder> : <HistoryOrder props={this.props}></HistoryOrder>}
                </View>
            </View>}</>
            
        )
    }
}

