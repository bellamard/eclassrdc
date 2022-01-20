import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Accueil from '../pages/dashboard';
import Cours from '../pages/dashboard/cours';
import Travaux from '../pages/dashboard/travaux';
import Video from '../pages/dashboard/video';
import Discussion from '../pages/dashboard/discussion';
import Mail from '../pages/dashboard/mail';
const Stack = createDrawerNavigator();

const LaunchRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={Accueil} />
      <Stack.Screen name="Mes cours" component={Cours} />
      <Stack.Screen name="Mes traveaux" component={Travaux} />
      <Stack.Screen name="Vidéo Conférence" component={Video} />
      <Stack.Screen name="Discussion" component={Discussion} />
      <Stack.Screen name="Mail" component={Mail} />
    </Stack.Navigator>
  );
};
export default LaunchRoute;
