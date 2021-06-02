
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

// 利用modal实现loading
export default class MyLoading extends Component {
  render() {
    return (
      <Modal style={styles.container}
        transparent={true}
        visible={this.props.visible}
      >
        <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.props.cancel() }}>
          <View style={styles.dialogContainer}>
            <View style={styles.innerContainer}>
              <ActivityIndicator style={{marginTop:40}} size="large" color="#00ff00" />
              <Text style={{ fontSize: 16, }}>登录中</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // 半透明背景
  dialogContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  // 弹窗区域
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 270,
    height: 160
  },
  // 文本区域
  contentContainer: {
    flex: 1,
    width: 270,
    height: 75,
    flexDirection: 'row',
    position: "absolute",
    top: 0,
    borderTopColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // 文本样式
  dialogContentTextStyle: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 25,
    marginRight: 25
  },
  // 按钮文本
  hidemodalTxt: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
    padding: 8,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: '#00cb88',
    color: '#ffffff',
    borderRadius: 10
  },
});