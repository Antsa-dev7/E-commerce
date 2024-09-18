import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStackScreen from "./screen/RockStackScreen";

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
}

export default App;