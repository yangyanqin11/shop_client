import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class StoreSetting extends Component {
    state = {
        inside: false,
        insidestop: false,
        takeout: false,
        takeoutstop: false
    }
    render() {
        let { isShow } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: '#F8F8F9' }}>
                <View style={styles.container}>
                    <View style={styles.checkitem}>
                        <Text style={styles.font}>营业状态 <Text style={{ fontSize: 14, color: '#5D5757' }}>(食堂/自提)</Text></Text>
                        <View>
                            {/* 2-1营业中弹出框 */}
                            <TouchableOpacity activeOpacity={1} style={{backgroundColor: this.state.insidestop?'#FF6127':'#00CB88', width: 77, height: 28,borderRadius: 15,flexDirection:'row',alignItems:'center',justifyContent:'center'}} onPress={() => { this.setState({ inside: !this.state.inside }) }}>
                                <Text style={{  color: '#ffffff', fontSize: 15, }}>{this.state.insidestop ? '歇业中' : '营业中'}</Text>
                                <Image source={require('../../../assets/images/png/dw_sanjiaoicon.png')}></Image>
                            </TouchableOpacity>
                            {
                                this.state.inside ?
                                    <TouchableOpacity activeOpacity={1} style={{ position: 'absolute', top: 30 }} onPress={() => { this.setState({ insidestop: !this.state.insidestop, inside: !this.state.inside }) }}>
                                        <Text style={{ backgroundColor: !this.state.insidestop?'#FF6127':'#00CB88', borderRadius: 15, color: '#ffffff', fontSize: 15, width: 77, height: 28, lineHeight: 28, textAlign: 'center' }}>{this.state.insidestop ? '营业中' : '歇业中'}</Text>
                                    </TouchableOpacity>
                                    :
                                    <></>
                            }
                        </View>
                    </View>
                    <View style={{overflow:'hidden'}}><Image source={require('../../../assets/images/png/dd_fengexian.png')}></Image></View>
                    <View style={styles.checkitem}>
                        <Text style={styles.font}>营业状态 <Text style={{ fontSize: 14, color: '#5D5757' }}>(外卖)</Text></Text>
                        <View>
                            {/* 2-1营业中弹出框 */}
                            <TouchableOpacity activeOpacity={1} style={{backgroundColor: this.state.takeoutstop?'#FF6127':'#00CB88', width: 77, height: 28,borderRadius: 15,flexDirection:'row',alignItems:'center',justifyContent:'center'}} onPress={() => { this.setState({ takeout: !this.state.takeout }) }}>
                                <Text style={{  color: '#ffffff', fontSize: 15, }}>{this.state.takeoutstop ? '歇业中' : '营业中'}</Text>
                                <Image source={require('../../../assets/images/png/dw_sanjiaoicon.png')}></Image>
                            </TouchableOpacity>
                            {
                                this.state.takeout ?
                                    <TouchableOpacity activeOpacity={1} style={{ position: 'absolute', top: 30 }} onPress={() => { this.setState({ takeoutstop: !this.state.takeoutstop, takeout: !this.state.takeout }) }}>
                                        <Text style={{ backgroundColor: !this.state.takeoutstop?'#FF6127':'#00CB88', borderRadius: 15, color: '#ffffff', fontSize: 15, width: 77, height: 28, lineHeight: 28, textAlign: 'center' }}>{this.state.takeoutstop ? '营业中' : '歇业中'}</Text>
                                    </TouchableOpacity>
                                    :
                                    <></>
                            }
                        </View>
                    </View>
                    <View style={{overflow:'hidden'}}><Image source={require('../../../assets/images/png/dd_fengexian.png')}></Image></View>
                    <TouchableOpacity style={styles.item} onPress={() => { this.props.navigation.push('OpeningTime') }} activeOpacity={1}>
                        <Text style={styles.font}>营业时间</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#5D5757', fontSize: 15, paddingRight: 7 }}>10:00～20:00</Text>
                            <Image source={require('../../../assets/images/png/gr_gengduo_icon1.png')} style={{width:7,height:11,resizeMode:'contain'}}></Image>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.item} onPress={() => { this.props.navigation.push('CheckTime') }} activeOpacity={1}>
                        <Text style={styles.font}>核销时间</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#838181', fontSize: 15, paddingRight: 7 }}>20:00</Text>
                            <Image source={require('../../../assets/images/png/gr_gengduo_icon1.png')}></Image>
                        </View>
                    </TouchableOpacity> */}
                     <View style={{overflow:'hidden'}}><Image source={require('../../../assets/images/png/dd_fengexian.png')}></Image></View>
                    <TouchableOpacity onPress={() => { this.props.navigation.push('BusinessCategory') }} style={[styles.item, { borderBottomWidth: 0 }]}>
                        <Text style={styles.font}>经营品类 </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#5D5757', fontSize: 15, paddingRight: 7 }}>川菜</Text>
                            <Image source={require('../../../assets/images/png/gr_gengduo_icon1.png')} style={{width:7,height:11,resizeMode:'contain'}}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 17,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        position: 'relative'
    },
    checkitem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 88,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 67.5,
    },
    font: {
        color: '#5D5757',
        fontSize: 17,
        fontWeight: "600"
    }

})
