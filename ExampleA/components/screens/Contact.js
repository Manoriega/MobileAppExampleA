import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import TextStyle from '../styles/text';
import ContainerStyle from '../styles/containers';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Contact() {
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
          <View style={{flex: 6}}>
            <Text style={TextStyle.paragraph_md}>Name</Text>
            <TextInput
              style={ContainerStyle.textInput}
              placeholder="Username"
            />
            <Text style={[TextStyle.paragraph_md, {marginTop: 20}]}>Email</Text>
            <TextInput
              style={ContainerStyle.textInput}
              placeholder="example@domain.ex"
            />
            <Text style={[TextStyle.paragraph_md, {marginTop: 20}]}>
              Message
            </Text>
            <TextInput
              multiline={true}
              style={ContainerStyle.textArea}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum feugiat dolor eget commodo. Maecenas varius orci vitae nisl pellentesque tincidunt. Sed in justo augue."
            />
            <View style={{flex: 1, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  ToastAndroid.show('Message sended', ToastAndroid.LONG);
                }}
                style={[
                  ContainerStyle.primaryButton,
                  {marginTop: 50, width: '50%'},
                ]}>
                <Text style={[TextStyle.paragraph_sm, {color: 'white'}]}>
                  Send
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
