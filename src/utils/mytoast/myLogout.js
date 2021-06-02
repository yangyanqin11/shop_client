
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
        <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.props.cancel() }}>
          <View style={styles.dialogContainer}>
            <View style={styles.innerContainer}>
              <Text style={{ fontSize: 18, marginTop: 30, marginBottom: 20,color:'#3f3c3c',width:232,textAlign:'center' }}>{this.props.content}</Text>
              <View style={{flexDirection:'row',justifyContent:'space-around',width:270}}>
                <TouchableOpacity activeOpacity={1} onPress={() => { this.props.cancel() }}>
                  <Text style={{ fontSize: 17, backgroundColor: '#e5e4e4', padding: 9, paddingLeft: 38, paddingRight: 38, color: '#2a2a2a', borderRadius: 10 }}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => { this.props.confirm() }}>
                  <Text style={{ fontSize: 17, backgroundColor: '#00cb88', padding: 9, paddingLeft: 38, paddingRight: 38, color: '#ffffff', borderRadius: 10 }}>确认</Text>
                </TouchableOpacity>
              </View>
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
    width: 307,
    height: 159
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
    paddingLeft: 38,
    paddingRight: 38,
    backgroundColor: '#00cb88',
    color: '#ffffff',
    borderRadius: 10
  },
});