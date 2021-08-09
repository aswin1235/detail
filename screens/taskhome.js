import React from 'react';
import {  StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Button,TextInput} from 'react-native-paper';

const home  =({navigation}) =>{
   return(
     <View>
     <Text style={styles.text}>Say hello to your new</Text>
     <Text style={styles.text}>app</Text>
    <View>
     
       <Button style={styles.btn}
       color='#dc143c'
        mode='contained' 
        onPress={()=>{navigation.navigate('tasklog')}}
        >
          Log in
       </Button>
      
       <Button style={styles.btn}
        mode='outlined'
        onPress={()=>{navigation.navigate('tasksign')}}
        >
          Sign up
       </Button>
       
      
       
       </View>     
     </View>
   );
}
const styles=StyleSheet.create({
   btn: {
      width:230,
      top:160,
      left:35,
      padding:5,
      borderRadius:20,
      margin:10
      

   },
   text:{
      textAlign:'center',
      color:'#dc143c',
      fontSize:25,
      fontWeight:'bold',
      top:130,
  
      
   }
})
export default home;