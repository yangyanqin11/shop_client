
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity
} from 'react-native';

// 利用modal实现弹窗
export default class MyToast extends Component {

  render() {
    return (
      <Modal style={styles.container}
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => {
          this.props.cancel()
        }}>
        <TouchableOpacity style={{ flex: 1 }}>
          <View style={styles.dialogContainer}>
            <View style={styles.innerContainer}>
              <Text style={{fontSize:16,lineHeight:50}}>{this.props.content}</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  // 弹窗区域
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 168,
    height: 50
  },
  // 文本区域
  contentContainer: {
    flex: 1,
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