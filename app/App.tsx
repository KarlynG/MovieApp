import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './navigations/Navigations';
import { LogBox } from 'react-native';
import { GradientProvider } from './context/GradientContext';

//import FadeScreen from './screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <GradientProvider>
        <Navigations/>
      </GradientProvider>
    </NavigationContainer>
  )
}

LogBox.ignoreLogs(['Remote debugger']);
export default App;
