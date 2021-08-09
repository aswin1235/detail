import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert,FlatList, TouchableOpacity} from 'react-native';
import { Card, FAB } from 'react-native-paper';


const home = ({navigation}) => {
   const [data,Setdata]=useState('')
   const [loading,Setloading]=useState(true)

   const fetchdata =() =>{
      fetch("http://192.168.18.4:3000/detail")
      .then(res=>res.json())
      .then(result=>{
         Setdata(result)
         Setloading(false)
      }).catch(err=>{
         Alert.alert('something went wrong')
      })
   }
   useEffect(() =>{
      fetchdata()
   })
   const renderlist=((item)=>{
 return(
      <View style={styles.container}>
         {/* <ImageBackground style={styles.img}
           source={require('../assets/p6.jpg')}> */}
           
         {/* <Text style={styles.home} >Home </Text> */}
{/*       
          <Card style={styles.mycard}  > */}
           <TouchableOpacity >
            <Text style={styles.text} onPress= {() =>navigation.navigate("details",{item})} >{item.name}</Text>
            </TouchableOpacity>
         {/* </Card> */}
         {/* <Card style={styles.mycard} onPress= {() =>{navigation.navigate('update')}}>
            <Text>Update</Text>
         </Card>
         <FAB
         icon='plus'
         style={styles.fab}
         onPress= {() =>{navigation.navigate('create')}}
         /> */}
         {/* </ImageBackground> */}

      </View>
   )
})
return (
   <View style={{flex:1}}>
       <FlatList
       data={data}
       renderItem={({item}) =>{
            return renderlist(item)
       }}
       keyExtractor={item=>item._id}
       onRefresh={() =>fetchdata()}
       refreshing={loading}
       />

   </View>

)


   }    

const styles = StyleSheet.create({
   mycard: {
      position: 'relative',
      padding: 10,
      margin:13,
      top:85
   },
   img: {
    width:320,
    height:550
   },
   home: {
      bottom:5,
      textAlign:'center',
      fontSize:25,
      fontWeight:'bold',
      color:'black'
   },
   fab: {
      backgroundColor:'gold',
      position: 'absolute',
      margin: 5,
      right: 10,
      bottom: 35
   },
   text:{
      fontSize:25
   }  

});
export default home;