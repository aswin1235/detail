import React, { useState } from 'react';
import { View,StyleSheet,Text, Alert} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

const create = ({navigation}) => {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')

  const submitData = () =>{
    fetch("http://192.168.18.4:3000/detail",{
      method:'post',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,
        email,
        phone
      })
    })
    .then(res =>res.json())
    .then(data =>{
      Alert.alert('Details saved sucessfully')
      navigation.navigate('home')
    })
    .catch(err =>{
      Alert.alert('something went wrong')
    })
  }
    return(
    
             
          <View>
            <View  style={styles.inputcontainer}>
            <TextInput  style={styles.txt}
                label="Name"
                mode="outlined"
                onChangeText={name =>setName(name)}
               />
               <TextInput  style={styles.txt}
                label="Email"
                mode="outlined"
                onChangeText={email =>setEmail(email)}
               />
              
                   <TextInput style={styles.txt}
             label="Mobile-no"
                mode="outlined"
                onChangeText={phone =>setPhone(phone)}
               />
                </View>
               <Button mode='contained' style={styles.btn}
                  onPress= {() =>submitData()}>
                    
            
                 <Text>Save</Text>
                 <Entypo size={15} name="save"/>
               </Button>
               <Button 
               mode='contained' style={styles.btn}
                onPress={()=>{navigation.navigate('home')}}>
              </Button>
         </View>
   
    );
}
const styles =StyleSheet.create({
  inputcontained: {
   width:120,
   top:40
  },
  btn: {
    width:145,
    top:165,
    left:90,
    backgroundColor:'black',
    padding:4
  },
  txt: {
    width:300,
    top:45,
    left:10,
    padding:10
  },
  img: {
    width:320,
    height:550
   }
});
export default create;   