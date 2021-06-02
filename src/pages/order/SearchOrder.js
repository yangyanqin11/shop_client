import React, { Component } from 'react'
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView, TouchableOpacity, StatusBar, Alert } from 'react-native';
import OtherOrderItem from '../../components/OtherOrderItem'

//待完善
export default class SearchOrder extends Component {
    state = {
        value: '',
        placeholder: '请输入取餐号/订单编号',
        isPostList: false, //是否搜索
        keyword: '',//搜索关键字
        orderList: [{ id: 1, a: 1, b: 2 }, { id: 2, a: 3, b: 4 }, { id: 3, a: 5, b: 4 }, { id: 4, a: 7, b: 4 }],//订单列表
    }

    componentDidMount() {
        this._getHotWords()
    }

    //获取搜索历史列表数据
    _getHotWords() {
        let params = '{"data":{}}'
    }

    //搜索
    onChanegeTextKeyword() {
        console.log(this.state.value)
        if (!this.state.value) {
            Alert.alert(
                "温馨提示：",
                "请输入取餐号/订单编号",
                [
                    {
                        text: "取消",
                        onPress: () => console.log('点击取消'),
                        style: "cancel",
                    },
                    {
                        text: "确定",
                        onPress: () => console.log('点击确定'),
                        style: "cancel",
                    },
                ],
            );
            return;
        }
        this.setState({
            isPostList: true
        })
        // 向后端发起数据请求
        console.log(111)
    }


    //获取历史记录
    _getHistory() {
        // 查询本地历史
        getItems("searchHistory").then(data => {
            if (data == null) {
                this.setState({
                    searchHistory: [],
                })
            } else {
                this.setState({
                    searchHistory: data,
                })
            }
        })
    }
    // 保存搜索标签
    _insertSearch(newText) {
        let text = newText.replace(/(^\s*)|(\s*$)/g, "")
        if (!_.isEmpty(text)) {
            if (this.state.searchHistory.indexOf(text) != -1) {
                // 本地历史 已有 搜索内容
                let index = this.state.searchHistory.indexOf(text);
                let tempArr = arrDelete(this.state.searchHistory, index)
                tempArr.unshift(text);
                setItem("searchHistory", tempArr);
            } else {
                // 本地历史 无 搜索内容
                let tempArr = this.state.searchHistory;
                tempArr.unshift(text);
                setItem("searchHistory", tempArr);
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, alignItems: 'center', marginTop: 20, justifyContent: 'space-between', height: 40, backgroundColor: '#F8F8F9' }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                        <Image style={{ width: 17, height: 17, resizeMode: 'contain' }} source={require('../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
                    </TouchableOpacity>
                    <View style={styles.inputBox}>
                        <View style={styles.inputIcon} >
                            <Image style={{ width: 17, height: 17 }} source={require('../../assets/images/png/search.png')} />
                        </View>
                        <TextInput style={styles.inputText}
                            autoCapitalize="none"
                            value={this.state.value}
                            onChangeText={(text) => this.setState({ value: text })}
                            onSubmitEditing={() => {
                                //开始搜索
                                this.onChanegeTextKeyword(this.state.value);
                            }}
                            returnKeyType="search"
                            underlineColorAndroid="transparent"
                            placeholder={this.state.placeholder}
                            placeholderTextColor={'#A09E9E'}
                            // autoFocus={true}
                            defaultValue={this.state.value}
                            keyboardType="default" />
                    </View>
                    <Text style={{ color: '#2A2A2A', fontSize: 16 }}>取消</Text>
                </View>

                {/*监听页面，刷新搜索本地历史历史*/}
                {
                    (this.state.isPostList) ? <></> : (this.state.orderList.length = 0) ?
                        //搜索到的内容
                        <ScrollView style={styles.scrollView}>
                            {/* 循环遍历内容 */}
                            {
                                this.state.orderList.map((item, index) => {
                                    return (
                                        <View key={index}>
                                            <OtherOrderItem props={this.props} num={item.a}></OtherOrderItem>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView> :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F8F9' }}>
                            <Image style={{ width: 82, height: 107 }} source={require('../../assets/images/png/sousuoye_zanwudingdanIcon.png')}></Image>
                            <Text style={{ fontSize: 19, color: '#A09E9E', marginTop: 10 }}>暂无订单</Text>
                        </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#F8F8F9',
        flex: 1
    },
    inputBox: {
        // height: Platform.OS === 'ios' ? 25 : 35,
        backgroundColor: '#E5E4E4',
        width: 267,
        height: 40,
        borderRadius: 15,
        justifyContent: 'center'
    },
    inputIcon: {
        marginLeft: Platform.OS === 'ios'
            ? 5
            : 20
    },
    inputText: {
        position: 'absolute',
        marginLeft: 50,
        paddingVertical: 0,
        fontSize: 16,
        color: '#a09e9e'
    }
});
