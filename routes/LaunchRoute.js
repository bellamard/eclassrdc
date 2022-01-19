import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Launch from '../pages/launch';
const Stack = createNativeStackNavigator();

const LaunchRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Launch" component={Launch} />
    </Stack.Navigator>
  );
};
export default LaunchRoute;
