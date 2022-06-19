import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Feature from '../screens/Feature';
import Contact from '../screens/Contact';
import NavStyles from '../styles/nav';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'mail' : 'mail-outline';
            } else if (route.name === 'Feature') {
              iconName = focused ? 'star' : 'star-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4A4453',
          tabBarInactiveTintColor: '#7B708B',
          tabBarStyle: {backgroundColor: '#B3A5C8'},
        })}>
        <Tab.Screen name="Home" component={Home} options={NavStyles.hidden} />
        <Tab.Screen name="Contact" component={Contact} options={NavStyles.hidden} />
        <Tab.Screen name="Feature" component={Feature} options={NavStyles.hidden} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
