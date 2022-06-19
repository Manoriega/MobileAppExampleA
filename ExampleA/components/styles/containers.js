'use strict';
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundS: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#FBF8FF',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 32,
    paddingBottom: 15,
  },
  textInput: {
    marginTop: 10,
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 35,
    borderWidth: 1,
    borderColor: 'black',
    width: '50%',
    fontSize: 12,
  },
  primaryButton: {
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3C393F',
  },
  textArea:{
    marginTop: 10,
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 210,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 12,
    textAlignVertical: 'top',
    textAlign: 'justify',
  },
});
