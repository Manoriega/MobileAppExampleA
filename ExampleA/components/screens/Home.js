import {
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import TextStyle from '../styles/text';
import ContainerStyle from '../styles/containers';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home() {
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
          <View style={{flex: 6, flexDirection: 'column'}}>
            <View style={{flex: 2}}>
              <Text style={TextStyle.primaryTitle}>Header title example</Text>
              <Text
                style={[TextStyle.paragraph_sm, {textAlign: 'justify', marginTop: 21}]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                cursus felis tincidunt nibh porttitor, eu lacinia metus varius.
                Sed congue tristique efficitur. Sed porttitor nisl quis leo
                accumsan scelerisque. Sed rutrum viverra est, eget semper orci
                volutpat a. Interdum et malesuada fames ac ante ipsum primis in
                faucibus.
              </Text>
            </View>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1655475368498-ac10a3f4f0f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
              }}
              style={styles.image}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 2,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});
