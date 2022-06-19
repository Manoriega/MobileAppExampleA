import {View, Text, StatusBar, ImageBackground} from 'react-native';
import React from 'react';
import TextStyle from '../styles/text';
import ContainerStyle from '../styles/containers';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Feature() {
  return (
    <View style={ContainerStyle.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FBF8FF" />
      <ImageBackground resizeMode="cover" style={ContainerStyle.backgroundS}>
        <View style={ContainerStyle.body}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            <Ionicons name="cube" size={68} color="black" />
            <Text style={[TextStyle.lightTitle, TextStyle.center]}>
              Your App
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            <Text style={[TextStyle.secondaryTitle, TextStyle.center]}>
              Secondary title
            </Text>
            <Ionicons name="cube" size={68} color="black" />
          </View>
          <View style={{flex: 2}}>
            <Text style={TextStyle.primaryTitle}>Header title example</Text>
            <Text
              style={[
                TextStyle.paragraph_sm,
                {textAlign: 'justify', marginTop: 21},
              ]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              cursus felis tincidunt nibh porttitor, eu lacinia metus varius.
              Sed congue tristique efficitur. Sed porttitor nisl quis leo
              accumsan scelerisque. Sed rutrum viverra est, eget semper orci
              volutpat a. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </Text>
          </View>
          <View style={{flex: 2}}>
            <Text style={TextStyle.secondaryTitle}>Header title example</Text>
            <Text
              style={[
                TextStyle.paragraph_sm,
                {textAlign: 'justify', marginTop: 21},
              ]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              cursus felis tincidunt nibh porttitor, eu lacinia metus varius.
              Sed congue tristique efficitur. Sed porttitor nisl quis leo
              accumsan scelerisque. Sed rutrum viverra est, eget semper orci
              volutpat a. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
