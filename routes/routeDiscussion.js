import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Discussion from '../pages/dashboard';
import Conference from '../pages/dashboard/video/videocall';
import Conversion from '../pages/dashboard/discussion/conversation';
const Stack = createNativeStackNavigator();

const RouteVideo = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discussion"
        component={Discussion}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Conference" component={Conference} />
      <Stack.Screen name="Conversion" component={Conversion} />
    </Stack.Navigator>
  );
};
export default RouteVideo;
