import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import tasklog from './screens/tasklog';
import tasksign from './screens/tasksign';
import taskhome from './screens/taskhome';

const Stack = createStackNavigator();
export default function app (){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName ="tasklog"
             screenOptions={{headerShown:false}}
            >
              <Stack.Screen
              name="tasklog"
              component={tasklog}/>
              <Stack.Screen
              name="tasksign"
              component={tasksign}/>
              <Stack.Screen
              name="taskhome"
              component={taskhome}/>
   
            </Stack.Navigator>
        </NavigationContainer>
    );
}