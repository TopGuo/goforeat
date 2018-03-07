import React from 'react'
import PropTypes from 'prop-types'
import {View,ActivityIndicator,Text,TouchableOpacity,StyleSheet} from 'react-native'
import GLOBAL_PARAMS from '../utils/global_params'

const styles = StyleSheet.create({
  commonContainer:{
    height:50,flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#fff'
  }
})

const ListFooter = ({loadingStatus,errorToDo}) => {
  switch (loadingStatus){
    case GLOBAL_PARAMS.httpStatus.LOADING:{
      return (
        <View style={styles.commonContainer}>
          <ActivityIndicator style={{flex:1,}} size='small' color='#000'/>
          {/* <Text style={{flex:1}}>正在加載中...</Text> */}
        </View>
      )
    }
    case GLOBAL_PARAMS.httpStatus.LOAD_FAILED: {
      return (
        <TouchableOpacity style={styles.commonContainer} onPress={() => errorToDo()}>
          <View  style={{flex:1,alignItems:'center'}}>
            <Text>加載失敗,請點擊重試...</Text>
          </View>
        </TouchableOpacity>
      )
    }
    case GLOBAL_PARAMS.httpStatus.NO_MORE_DATA: {
      return (
        <View style={[styles.commonContainer]}>
          <View style={{width:GLOBAL_PARAMS._winWidth*0.4,height:1,marginLeft:10,marginRight:10,backgroundColor:'#ddd'}}></View>
          <View style={{width:5,height:5,borderRadius:50,backgroundColor:'#ccc'}}></View>
          <View style={{width:GLOBAL_PARAMS._winWidth*0.4,height:1,marginLeft:10,marginRight:10,backgroundColor:'#ddd'}}></View>
        </View>
      )
    }
    default: return null
  }
}

ListFooter.defaultProps = {
  loadingStatus: 0
}
ListFooter.propTypes = {
  loadingStatus:PropTypes.number,
  errorToDo:PropTypes.func
}

export default ListFooter
