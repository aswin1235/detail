import React from 'react';
import {  StyleSheet, Text, View,ImageBackground} from 'react-native';
import {Button,TextInput} from 'react-native-paper';

const signin  =({navigation}) =>{
   return(
      <ImageBackground style={styles.img}
      source={require('../assets/p2.jpg')}
    > 
     <View>
     <Text style={styles.text}>Find &  explore world top places  </Text>
     
    <View>
     
       <Button style={styles.btn}
      mode='contained'
      onPress={()=>{navigation.navigate('tasksign')}}
        >
          Sign in
       </Button>
      
       <Button style={styles.btn}
          color='red'
        mode='contained'
   
        >
          Sign up
       </Button>
       
      
       
       </View>  

     </View>
    </ImageBackground>
   );
}
const styles=StyleSheet.create({
   btn: {
      width:230,
      top:160,
      left:35,
      padding:5,
      color:'white',
      margin:10
      

   },
   img: {
      width:320,
      height:550
     },
   text:{
      textAlign:'center',
      color:'white',
      fontSize:25,
      fontWeight:'bold',
      top:130,
  
      
   }
})
export default signin;