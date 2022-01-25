import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Video from '../pages/dashboard/';
import Conference from '../pages/dashboard/video/videocall';
const Stack = createNativeStackNavigator();

const RouteVideo = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator>
        <Stack.Screen
          name="Video"
          component={Video}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Conference"
          component={Conference}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RouteVideo;
