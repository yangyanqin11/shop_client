import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import LoginScreen from '../login/LoginScreen'
import LanguageScreen from '../login/LanguageScreen'
import NavTab from './NavTab'
import SearchOrder from '../order/SearchOrder'
import OtherOrderDetail from '../orderDetail/OtherOrderDetail'
import TakeoutOrderDetail from '../orderDetail/TakeoutOrderDetail'
import StoreSetting from '../my/storesetting/StoreSetting'
import OpeningTime from '../my/storesetting/openingtime/OpeningTime'
import CheckTime from '../my/storesetting/CheckTime'
import BusinessCategory from '../my/storesetting/category/BusinessCategory'
import MainCategory from '../my/storesetting/category/MainCategory'
import OrderSetting from '../my/OrderSetting'
import Agreement from '../my/Agreement'
import Contract from '../my/agreement/Contract'
import PrivacyClause from '../my/agreement/PrivacyClause'
import UseClause from '../my/agreement/UseClause'
import { TouchableOpacity } from 'react-native-gesture-handler';

function BackImage() {
  return (
    <Image style={{ marginLeft: 10,width:10,height:15}} source={require('../../assets/images/png/sousuo_gengduo_icon.png')}></Image>
  )
}
const Stack = createStackNavigator();
function Nav() {
  return (
    <Stack.Navigator initialRouteName="NavTab" >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: '登录', headerShown: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{ title: '语言切换', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 19 }, headerStyle: { backgroundColor: '#f8f8f9' } }}
      />
      <Stack.Screen
        name="NavTab"
        component={NavTab}
        options={{ title: '首页', headerShown: false,headerStyle:{backgroundColor:'#f8f8f9'} }}
      />
      <Stack.Screen
        name="Search"
        component={SearchOrder}
        options={{ title: '搜索', headerShown: false }}
      />
      {/* 订单详情根据不同的详情决定组件个数 */}
      <Stack.Screen
        name="OtherOrderDetail"
        component={OtherOrderDetail}
        options={{ title: '其他订单详情', headerShown: false }}
      />
      <Stack.Screen
        name="TakeoutOrderDetail"
        component={TakeoutOrderDetail}
        options={{ title: '外卖订单详情', headerShown: false }}
      />
      <Stack.Screen
        name="StoreSetting"
        component={StoreSetting}
        options={{
          title: '门店设置',
          headerBackImage: () => { return <BackImage></BackImage> },
          headerTitleAlign: 'center', headerTitleStyle: { fontSize: 19 }, headerStyle: { backgroundColor: '#f8f8f9' }
        }}
      />
      <Stack.Screen
        name="OpeningTime"
        component={OpeningTime}
        options={{ title: '营业时间', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 19 }, headerStyle: { backgroundColor: '#f8f8f9' } }}
      />
      <Stack.Screen
        name="CheckTime"
        component={CheckTime}
        options={{ title: '核销时间', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 19 }, headerStyle: { backgroundColor: '#f8f8f9' } }}
      />
      <Stack.Screen
        name="BusinessCategory"
        component={BusinessCategory}
        options={{ title: '经营品类', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 19 }, headerStyle: { backgroundColor: '#f8f8f9' } }}
      />
      <Stack.Screen
        name="MainCategory"
        component={MainCategory}
        options={{
          title: '经营品类',
          headerTitleAlign: 'center',
          headerRight:()=>{return <TouchableOpacity style={{marginRight:26}}><Text style={{fontSize:15,color:'#2a2a2a',fontWeight:'bold'}}>保存</Text></TouchableOpacity>},
          headerTitleStyle: { fontSize: 19 },
          headerStyle: { backgroundColor: '#f8f8f9' }
        }}
      />
      <Stack.Screen
        name="OrderSetting"
        component={OrderSetting}
        options={{ title: '订单设置', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 19 }, headerStyle: { backgroundColor: '#f8f8f9' } }}
      />
      <Stack.Screen
        name="Agreement"
        component={Agreement}
        options={{ title: '合同协议', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 19 }, headerStyle: { backgroundColor: '#f8f8f9' } }}
      />
      <Stack.Screen
        name="Contract"
        component={Contract}
        options={{ title: '商家合同', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 19 }, headerStyle: { backgroundColor: '#f8f8f9' } }}
      />
      <Stack.Screen
        name="PrivacyClause"
        component={PrivacyClause}
        options={{ title: '隐私条款', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 19 }, headerStyle: { backgroundColor: '#f8f8f9' } }}
      />
      <Stack.Screen
        name="UseClause"
        component={UseClause}
        options={{ title: '使用条款', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 19 }, headerStyle: { backgroundColor: '#f8f8f9' } ,color:'#5D5757'}}
      />
    </Stack.Navigator>
  );
}

export default Nav; 