import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import Picker from 'react-native-picker';

// 利用modal实现弹窗
export default class MyHourPick extends Component {
  render() {
    return (
      <Modal style={styles.container}
        transparent={true}
        visible={this.props.visible}
        animationType='fade'
        onRequestClose={() => {
          this.props.cancel()
        }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.props.cancel() }}>
          <View style={styles.dialogContainer}>
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
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  // 弹窗区域
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    marginBottom: 0,
    width: 360,
    height: 294
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
    color: '#ececec',
    marginLeft: 25,
    marginRight: 25
  },
  // 按钮区域
  btnContainer: {
    flex: 1,
    width: 270,
    height: 85,
    flexDirection: 'row',
    position: "absolute",
    bottom: 0,
    alignItems: 'center',
  },
  // 按钮样式
  dialogConfirmButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderLeftColor: '#cccccc',
    borderLeftWidth: 1
  },
  dialogCancelButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderRightColor: '#cccccc'
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