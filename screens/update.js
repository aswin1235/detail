import React, { useState } from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import { Button, TextInput } from 'react-native-paper';


const update = ({navigation,route}) => {
    const getdetails = (type) =>{
        if(route.params){
            switch(type){
                case"name":
                return route.params.name
                case"email":
                return route.params.email
                case"phone":
                return route.params.phone
            }
        }
    }
    const[name,Setname]=useState( getdetails("name"))
    const[email,Setemail]=useState( getdetails("email"))
    const[phone,Setphone]=useState( getdetails("phone"))
    const updatedetails =() =>{
        fetch("http://192.168.18.4:3000/detail/"+route.params._id,{
            method:'patch',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                id:route.params._id,
                name,
                email,
                phone
            })
        })
        .then(res=>res.json())
        .then(data =>{
            Alert.alert('details updated')
            navigation.navigate('home')
        }).catch(err =>{
            Alert.alert("something went wrong")
        })
    }
   return(
        <View>
            <View style={styles.inputcontainer}>
            <TextInput 
                label="name"
                mode="outlined"
                onChangeText ={ name =>Setname(name)}
                value={name}
                />
                <TextInput 
                label="email"
                mode="outlined"
                onChangeText ={email =>Setemail(email)}
                value={email}
                />
                <TextInput 
                label="phone"
                mode="outlined"
                onChangeText ={phone =>Setphone(phone)}
                value={phone}
                />
              
            </View>
            <Button style={styles.btn}
            mode='contained'
             onPress= {() =>updatedetails()}>
                Update

            </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    inputcontainer: {
        bottom:250,
        width:280,
        height:45,
        margin:15,
        flexDirection:'column-reverse'
    },
    btn: {
        backgroundColor:'black',
        width:150,
        top:255,
        left:80
    }
});

export default update;