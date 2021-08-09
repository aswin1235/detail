import  React,{useEffect} from 'react';
import { View,Image,StyleSheet } from 'react-native';
//import { require } from 'yargs';


const splashscreen =({navigation}) =>{
  useEffect (() =>{
    setTimeout (() =>{
      navigation.navigate('Login')
    }, 1000)
  }, [])
  return(
    <View style={styles.container}>
      <Image source={require('../assets/logo2.jpg')}
      resizeMode="contain" style={styles.picture}>
      </Image>
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  picture:{
    height:1000,
    width:500
  }
})
 export default splashscreen;