import React from 'react';
import { View ,Text, StyleSheet,Alert} from 'react-native';
import { Button, Card } from 'react-native-paper';

const details = (props,{navigation,route}) => {
   const {_id,name,email,phone}=props.route.params.item

   const deleteuser=() =>{
      fetch("http://192.168.18.4:3000/detail/"+_id,{
         method:'delete',
         headers:{
            'content-type':'application/json'
         }
      })
      .then(res=>res.json())
      .then(deleteuser=>{
         Alert.alert('Details deleted')
         props.navigation.navigate('home')
      })
      .catch(err =>{
         Alert.alert('something went wrong')
      })
   }
   return(
      <View>
         <Card style={styles.card}>
            <Text>{name}</Text>
         </Card>
         <Card style={styles.card}>
            <Text> {email}</Text>
         </Card>
         <Card style={styles.card}>
            <Text> {phone}</Text>
         </Card>
         <Button mode="contained" style={styles.button} onPress= {() =>{props.navigation.navigate("update",{_id,name,email,phone})}}>
            Edit
         </Button>
       
         <Button mode="contained" style={styles.button1} onPress ={() =>deleteuser()}>
            Delete
         </Button>
         
      </View>
   );
}
const styles = StyleSheet.create({
   card: {
      padding: 15,
      margin:7,
      top:200
   },
   button: {
      backgroundColor:'black',
      width:150,
      top:215,
      left:180
   },
   button1: {
      backgroundColor:'black',
      width:150,
      top:180,
      left:10
   }
});
export default details;
