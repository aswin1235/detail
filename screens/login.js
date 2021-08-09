import React,{ useState }from 'react';
import {  StyleSheet, Text, View,ImageBackground, Alert} from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';


const login = ({navigation}) => {
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')

   const signin =()=>{
      fetch("http://192.168.18.4:3000/api/user/login",{
         method:"post",
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify({
            email,
            password
         })
      }).then(async(res)=>{
         if (res.status==202){
            const cookie =res.headers.get('auth-token')
            await AsyncStorage.setItem('token',cookie)
            Alert.alert('user signed sucessfully')
            navigation.navigate('home')
         }else if(res.status===400){
            Alert.alert('enter Valid Email/password')
         }else if (res.status===401){
            Alert.alert('user not found')
         }else if (res.status===402){
            Alert.alert('invalid password')
         }
      })
   }
  return(
     <View>
        <ImageBackground style={styles.img}
           source={require('../assets/p1.jpg')}
         > 

     <View style={styles.container}>
          
          
        <View>
        <Text style={styles.heading}>Zonografic</Text>
        <Entypo style={styles.icon2} size={20} name="email"/>
           <Entypo style={styles.icon3} size={20} name="key"/>
        
           <View style={styles.inputcontainer}>
           <TextInput style={styles.inputext}
              label="Password...."
              mode="outlined"
              onChangeText ={password=>setPassword(password)}
              />
              <TextInput style={styles.inputext}
              label="Email...."
              mode="outlined"
              keyboardType="email-address"
              onChangeText={email=>setEmail(email)}
              />
              </View>
        </View>
        <Text style={styles.forpassd}>forgot password...?</Text>
        <View style={styles.btn}>
           
           <Button style={styles.textbtn} mode="contained"  onPress={() =>signin()}>
              <Text>Login</Text>
           </Button>
           <Button style={styles.textbtn1} mode="contained" onPress={()=>{navigation.navigate('signup')}}>
              <Text>Register</Text>
           </Button>
          
        </View>
      </View>
      </ImageBackground>
      </View>
      


  );
}

const styles = StyleSheet.create({
 container: {
   //  backgroundColor: 'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   inputcontainer: {
      // backgroundColor: 'green',
      width: 200,
      top: 110,
      margin: 15,
      flexDirection: 'column-reverse'
   },
   inputext: {
      width:280,
      fontSize: 10,
      fontWeight: 'bold',
      bottom: 55,
      right:55

   },
   btn: {
        marginBottom: 30,
        padding: 20,
        bottom:45
   },
   textbtn: {
      backgroundColor:'black',
      width:130,
      top:15,
      right:80
   },
   textbtn1:{
      backgroundColor:'black',
      width:130,
      bottom:22,
      left:80
   },
   heading: {
     fontStyle:'italic',
     bottom:35,
     textAlign:'center',
     fontSize:30,
     fontWeight:'bold',
     color:'white'
   },
   forpassd: {
      color:'white',
      bottom:35,
      left:55
   },
   icon2: {
      top:25,
      left:250,
      color:'white'
  },
   icon3: {
      color:'white',
      top:70,
      left:250
     },
     img: {
      width:320,
      height:550
     }
  
});

export default login;