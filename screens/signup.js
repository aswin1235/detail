
import React, { useState } from 'react';
import {  StyleSheet, Text, View,ImageBackground, Alert} from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import Entypo from 'react-native-vector-icons/Entypo';
const signup = ({navigation}) => {

const [name,setName] = useState('')
    const [email,setEmail]  = useState('')
    const [password,setPassword] = useState('')
    const Register =() =>{
      fetch("http://192.168.18.4:3000/api/user/register",{
        method:'Post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          name,
          email,
          password
        })
      }).then((response) => {
        if (response.status === 200) {
          Alert.alert('Registered sucessfully ')
          navigation.navigate('Login')
        }else if (response.status ===400) {
          Alert.alert('Enter Valid Email/Password')
        }else if (response.status === 401) {
          Alert.alert('Email already exist')
        }else if (response.status === 402) {
          Alert.alert('Something went wrong')
        }
      })
   }
   return(
// const signup = ({navigation}) => {
//    const [name,setName]=useState('')
//    const [email,setEmail]=useState('')
//    const [password,setPassword]=useState('')

   // const sign = () =>{
   //    fetch("http://192.168.18.4:3000/api/user/register" ,{
   //       method:'post',
   //       headers:{
   //          'Content-Type':'application/json'
   //       },
   //       body:JSON.stringify({
   //          name,
   //          email,
   //          password
   //       })
   //    })
   //    .then(res =>res.json())
   //  .then(data =>{
   //    Alert.alert('registed sucessfully')
   //    navigation.navigate('login')
   //  })
   //  .catch(err =>{
   //    Alert.alert('something went wrong')
   //  })
      // .then (async(response)=>{
      //    const statusCode = response.status;
      //    if (response.status===404){
      //       Alert.alert('registerd sucessfully')
      //       navigation.navigate('login')
      //    }else if (response.status===400){
      //       Alert.alert('enter valid/email')
      //    }else if (response.status===401){
      //       Alert.alert('email already exit')
      //    }
      // })
 

   
    
        <View style={styles.container}>
   
           
           <Text style={styles.heading}>Create a New Account</Text>

           <Entypo style={styles.icon} size={20} name="user"/>
           {/* <AntDesign style={styles.icon1} size={20} name="phone"/> */}
           <Entypo style={styles.icon2} size={20} name="email"/>
           <Entypo style={styles.icon3} size={20} name="key"/>
           
              <View style={styles.inputcontainer}>
              
              <TextInput style={styles.inputext}
              label="password"
              mode="outlined"
              onChangeText={password =>setPassword(password)}
             />
           
              <TextInput style={styles.inputext}
              label="email address"
              mode="outlined"
              onChangeText={email =>setEmail(email)}
              />
               {/* <TextInput style={styles.inputext}
              label="phone number"
              mode="outlined"
              /> */}
              <TextInput style={styles.inputext}
              label="user name"
              mode="outlined"
              onChangeText={name =>setName(name)}
            />
            <View style={styles.btntxt}>
           
               <Button  style={styles.textbtn}  mode="contained"
              onPress={() => Register()}>
                  Register
          </Button>
           
            </View>
            </View>
            </View>
       
  );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#c0c0c0',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 50
   },
   inputext: {
      fontSize: 10,
      bottom: 10,
      width:270,
      right:45
   },
   inputcontainer: {
      width: 200,
      height: 35,
      margin: 15,
      // padding: 15,
      flexDirection: 'column-reverse'
   },
   heading: {
       bottom: 125,
      fontSize: 20,
      fontWeight:'bold'
   },
   textbtn: {  
      backgroundColor:'black',
      left:45,
      top: 70,
      width:110

   },
   btntxt: {
     bottom:260
   },
   icon: {
    bottom:87,
    left:139
  },
  icon1: {
   bottom:47,
   left:139
  },
  icon2: {
   top:7,
   left:139
  },
  icon3: {
   top:45,
   left:139
//   },
//   img: {
//    width:320,
//    height:550
  }


});

export default signup;