import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, TouchableOpacity, Alert, BackHandler } from 'react-native';
import OrderScreen from '../order/OrderScreen';
import MyScreen from '../my/MyScreen';
import I18n from '../../utils/languages/languages'
//93行类比更改语言，跟随系统语言切换
const Tab = createBottomTabNavigator();
const TabStack = createStackNavigator();

// 底部tab栏
export default function Navigation() {
  return (
    <Tab.Navigator backBehavior='none' initialRouteName='order' tabBarOptions={{ showLabel: false }} >
      <Tab.Screen
        name="order"
        component={OrderScreen}
        options={{
          label: I18n.t('order'),
          headerMode: 'none',
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            tintColor = 'red'
            return (
              <View style={{ alignItems: 'center', marginLeft: 50 }}>
                <Image
                  style={{ width: 20, height: 22, }}
                  source={
                    focused
                      ? require('../../assets/images/png/orderA.png')
                      : require('../../assets/images/png/orderB.png')
                  }>
                </Image>
                <Text style={{ fontSize: 11, marginTop: 5 }}>{I18n.t('order')}</Text>
              </View>
            );
          }
        }}
      />
      <Tab.Screen
        name="my"
        component={MyScreen}
        options={{
          title: '我的',
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            tintColor = 'red';
            return (
              <View style={{ alignItems: 'center', marginRight: 50 }}>
                <Image
                  style={{ width: 21, height: 22, }}
                  source={
                    focused
                      ? require('../../assets/images/png/myA.png')
                      : require('../../assets/images/png/myB.png')
                  }>
                </Image>
                <Text style={{ fontSize: 11, marginTop: 5 }}>{I18n.t('my')}</Text>
              </View>
            );
          }
        }}
      />
    </Tab.Navigator>
  );
}

