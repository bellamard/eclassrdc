import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Video from '../pages/dashboard/';
import Conference from '../pages/dashboard/video/videocall';
import Lecons from '../pages/dashboard/lecons';
const Stack = createNativeStackNavigator();

const RouteVideo = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Video"
        component={Video}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Conference" component={Conference} />
      <Stack.Screen name="Lecons" component={Lecons} />
    </Stack.Navigator>
  );
};
export default RouteVideo;
