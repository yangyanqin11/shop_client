import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Picker from 'react-native-picker'
import ChooseWeek from './ChooseWeek'
import {_SetBusinessTime} from '../../../../utils/request'
import Store from  '../../../../utils/store'
const {getAccountInfo, setAccountInfo} = Store;

export default class OpeningTime extends Component {
    state = {
        openingState: true,
        businessWeek: false,
        businessTime: true,
        choiceBusinessWeek: false,
        choiceBusinessTime: 0,
        timeLimit: false,
        cancelWeek: true,
        isshade: false,
        minutes: [],
    }
    componentDidMount() {
        for (var i = 5; i < 61; i++) {
            this.state.minutes.push(i)
        };
    }
    showMinPick = () => {
        this.setState({ isshade: true });
        Picker.init({
            pickerData: this.state.minutes,
            selectedValue: [59],
            pickerTitleText: '设置核销时间',
            pickerToolBarFontSize: 18,
            pickerConfirmBtnText: 'X',
            pickerCancelBtnText: '',
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
    updateOpeningState = () => {
        this.setState({
            openingState: !this.state.openingState
        })
    }
    changeBusiness = () => {
        this.setState({
            choiceBusinessWeek: false,
        })
    }
    changeBusinessWeek = () => {
        this.setState({
            choiceBusinessWeek: true,
        })
    }
    updateBusiness = () => {
        this.setState({
            businessTime: true,
            choiceBusinessTime: false,
        })
    }
    changeBusinessTime = () => {
        this.setState({
            businessTime: false,
        })
    }
    addTime = () => {
        if(this.state.choiceBusinessTime==1||this.state.choiceBusinessTime==2){
            this.setState({
                choiceBusinessTime: 2,
            })
            return
        }
        this.setState({
            choiceBusinessTime: 1,
        })
    }
    // updateBusinessTime = () =>{
    //     let data ={
    //         start_time:480,
    //         end_time:660
    //     }
    //     // _SetBusinessTime(data).then((res)=>{
    //     //     console.log(res)
    //     // }).catch(err=>{
    //     //     console.log(err.response)
    //     // })
    // }

    render() {
        let { businessWeek, choiceBusinessTime, choiceBusinessWeek, businessTime, openingState, cancelWeek } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#F8F8F9' }}>
                {/* 遮罩层 */}
                {
                    !this.state.isshade ? <></> :
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: '100%', height: '100%', zIndex: 10, position: 'absolute', top: 0 }}></View>
                }  
                <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 96.5, height: 96.5 }} source={require('../../../../assets/images/png/dw-dianpukuang.png')}></Image>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#5D5757', paddingTop: 12, paddingBottom: 25 }}>盐忆</Text>
                </View>
                    <View style={styles.container}>
                        {/* 1 */}
                        <TouchableOpacity onPress={this.updateOpeningState}>
                            {openingState ? <View style={{ backgroundColor: '#50E4A1', borderRadius: 15, paddingTop: 10, paddingBottom: 40, alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../../assets/images/png/dw_yingyeicon.png')}></Image>
                                    <Text style={{ fontSize: 18, color: '#5D5757', paddingLeft: 6 }}>营业中</Text>
                                </View>
                                <Text style={{ fontSize: 14, color: '#5D5757' }}>本店正在营业中</Text>
                            </View> : <View style={{ backgroundColor: '#FD875C', borderRadius: 15, paddingTop: 10, paddingBottom: 40, alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}><Image source={require('../../../../assets/images/png/dw_xieyeicon.png')}></Image>
                                    <Text style={{ fontSize: 18, color: 'white', paddingLeft: 6 }}>歇业中</Text>
                                </View>
                                <Text style={{ fontSize: 14, color: 'white' }}>本店正在营业中</Text>
                            </View>}
                        </TouchableOpacity>
                        {/* 2 */}
                        <View style={{ paddingTop: 25, paddingBottom: 25, paddingLeft: 23, paddingRight: 23, backgroundColor: 'white', borderRadius: 15, marginTop: -24, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#5D5757', fontSize: 17 }}>今日营业时间</Text>
                            <Text style={{ color: '#5D5757', fontSize: 15 }}>10:00～20:00</Text>
                        </View>
                        {/* 3 */}
                        <View style={{ paddingLeft: 23, paddingRight: 23, backgroundColor: 'white', borderRadius: 20, marginTop: 20.5 }}>
                            <View style={{ borderBottomColor: '#ECECEC', borderBottomWidth: 1, paddingTop: 23.5, paddingBottom: 15.5 }}>
                                <Text style={{ color: '#5D5757', fontSize: 17 }}>营业时间设置</Text>
                            </View>
                            {/* 3-1 */}
                            <View style={{ paddingTop: 14, paddingBottom: 14, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: choiceBusinessWeek ? 0 : 1, borderBottomColor: '#ECECEC' }}>
                                <Text style={styles.fontStyle}>营业日</Text>
                                <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 57 }} onPress={this.changeBusiness}>
                                    {choiceBusinessWeek ? <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')}></Image> : <View style={{ position: 'relative' }}>
                                        <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')} ></Image>
                                        <Image source={require('../../../../assets/images/png/dw_shixinyuan.png')} style={{ width: 5, height: 5, position: 'absolute', left: 3.5, top: 3.5 }}></Image>
                                    </View>}
                                    <Text style={styles.fontStyle}>每日营业</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center' }} onPress={this.changeBusinessWeek}>
                                    {choiceBusinessWeek ?
                                        <View style={{ position: 'relative' }}>
                                            <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')} ></Image>
                                            <Image source={require('../../../../assets/images/png/dw_shixinyuan.png')} style={{ width: 5, height: 5, position: 'absolute', left: 3.5, top: 3.5 }}></Image>
                                        </View> :
                                        <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')}></Image>}
                                    <Text style={styles.fontStyle}>选择营业日</Text>
                                </TouchableOpacity>
                            </View>
                            {/* 星期的选择 */}
                            {choiceBusinessWeek ? <ChooseWeek></ChooseWeek> : <></>}
                            {/* 3-2 */}
                            <View style={{ paddingTop: 14, paddingBottom: 14, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.fontStyle}>营业时间段</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={this.updateBusiness}>
                                        {!businessTime ? <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')}></Image> : <View style={{ position: 'relative' }}>
                                            <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')} ></Image>
                                            <Image source={require('../../../../assets/images/png/dw_shixinyuan.png')} style={{ width: 5, height: 5, position: 'absolute', left: 3.5, top: 3.5 }}></Image>
                                        </View>}
                                    </TouchableOpacity>
                                    <Text style={styles.fontStyle}>全天</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={this.changeBusinessTime}>
                                        {!businessTime ? <View style={{ position: 'relative' }}>
                                            <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')} ></Image>
                                            <Image source={require('../../../../assets/images/png/dw_shixinyuan.png')} style={{ width: 5, height: 5, position: 'absolute', left: 3.5, top: 3.5 }}></Image>
                                        </View> : <Image source={require('../../../../assets/images/png/dw_xuanzhongquanquan.png')}></Image>}
                                    </TouchableOpacity>
                                    <Text style={styles.fontStyle}>选择时间段</Text>
                                </View>
                            </View>
                            {/* 时间段的选择 */}
                            {choiceBusinessTime==1||choiceBusinessTime==2 ? <View><Text style={{ fontSize: 14, color: '#5D5757' }}>最多可添加三项</Text></View> : <></>}
                            {!businessTime ? <TouchableOpacity onPress={this.showMinPick} style={{ height: 34.5, backgroundColor: '#E5E4E4', borderRadius: 15, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20 }}>
                                <Text style={{ fontSize: 15, color: '#5D5757' }}>10:30</Text>
                                <Text style={{ fontSize: 15, color: '#5D5757' }}>至</Text>
                                <Text style={{ fontSize: 15, color: '#5D5757' }}>21:30</Text>
                            </TouchableOpacity> : <></>}
                            {choiceBusinessTime==1||choiceBusinessTime==2 ? <TouchableOpacity onPress={this.showMinPick} style={{ height: 34.5, backgroundColor: '#E5E4E4', borderRadius: 15, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20 }}>
                                <Text style={{ fontSize: 15, color: '#5D5757' }}>选择开始时间</Text>
                                <Text style={{ fontSize: 15, color: '#5D5757' }}>至</Text>
                                <Text style={{ fontSize: 15, color: '#5D5757' }}>选择结束时间</Text>
                            </TouchableOpacity> : <></>}
                            {choiceBusinessTime==2 ? <TouchableOpacity onPress={this.showMinPick} style={{ height: 34.5, backgroundColor: '#E5E4E4', borderRadius: 15, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20 }}>
                                <Text style={{ fontSize: 15, color: '#5D5757' }}>选择开始时间</Text>
                                <Text style={{ fontSize: 15, color: '#5D5757' }}>至</Text>
                                <Text style={{ fontSize: 15, color: '#5D5757' }}>选择结束时间</Text>
                            </TouchableOpacity> : <></>}
                            {!businessTime ? <View style={{ alignItems: 'center', paddingBottom: 28, paddingTop: 28 }}>
                                <Text style={{ fontSize: 15, color: '#5D5757' }} onPress={this.addTime}>+新增时间段</Text>
                            </View> : <></>}
                        </View>
                        {/* 4 */}
                        <View style={{ paddingLeft: 23, paddingRight: 23, backgroundColor: 'white', borderRadius: 20, marginTop: 20.5 }}>
                            <View style={{ flexDirection: 'row', paddingTop: 21, paddingBottom: 17, alignItems: 'center' }}>
                                <Image source={require('../../../../assets/images/png/dw_xingxingicon.png')}></Image>
                                <Text style={{ fontSize: 17, color: '#5D5757', paddingLeft: 8 }}>外卖营业时间</Text>
                            </View>
                            <Text style={{ fontSize: 15, color: '#5D5757', paddingBottom: 24.5 }}>外卖业务营业时间默认为开店后半小时至关店前半小时，您可以随时在“门店设置”页面选择开启或关闭外卖业务～
                       </Text>
                        </View>
                        <TouchableOpacity style={{ marginTop: 29, backgroundColor: '#FF6127', height: 44, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }} onPress={this.updateBusinessTime}>
                            <Text style={{ fontSize: 17, color: 'white' }}>确认修改</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )

    }
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 18,
        marginRight: 17.5,
        flex: 1
    },
    fontStyle: {
        fontSize: 14,
        color: '#5D5757',
        paddingLeft: 2
    },
})