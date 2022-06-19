import {View} from 'react-native';
import React from 'react';
import Navigator from './components/navigation/tabs';
import Cstyles from './components/styles/containers';

const App = () => {
  return (
    <View style={Cstyles.container}>
      <Navigator />
    </View>
  );
};

export default App;
