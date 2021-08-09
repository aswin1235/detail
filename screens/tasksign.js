import React from 'react';
import {  StyleSheet, Text, View,ImageBackground} from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';


const sign  =({navigation}) =>{
   return(
      <ImageBackground  style={styles.img}  source={require('../assets/p2.jpg')}  >
     <View>
        
     <Entypo style={styles.icon2} size={20} name="email"/>
     <Text style={styles.text}>Find &  explore world top</Text>
     <Text style={styles.text}>places</Text>
    <View>
     
     <TextInput style={styles.textinput}
       label='enter your name'
       mode='outlined'
       />
       
        <TextInput  style={styles.textinput}
       label='your email address'
       mode='outlined'
       />
        <TextInput  style={styles.textinput}
       label='your password'
       mode='outlined'
       />
       
   
       <Button style={{width:200,left:65,top:65}}
       color='red' 
       mode='contained'
       onPress={()=>{navigation.navigate('tasksign')}}
       >
          sign up
       </Button>
    
       <Button style={styles.btn1}
       color='blue'
        mode='contained'>
          facebook
       </Button>
       <Text style={{left:3,top:59,fontSize:15,textAlign:'center',color:'white'}}>or</Text>
       <Button style={styles.btn2}
       color='red'
        mode='contained'>
          google
       </Button>
       
       
      
       
       </View>  
      
     </View>
      </ImageBackground>   
   );
}
const styles=StyleSheet.create({
   btn: {
      width:230,
      top:50,
      left:20,
     
      margin:30

   },
   text:{
      textAlign:'center',
      color:'white',
      fontSize:20,
      right:5,     
      top:50,      
   },

   textinput: {
      top:60,
      height: 40,
      margin: 5,
      width:200,
      left:55
      // borderWidth: 1,
      // borderRadius:25
    },
    btn2: {
     
      width:130,
      top:35,
      left:180
   },
    btn1: { 
      width:130,
      top:95,
      left:10
   },
   img: {
      width:320,
      height:550
     },
     icon2: {
        color:'white',
        top:220,
        left:38
       }
  

})
export default sign;
