
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import Button from '../screens/components/Button';

export default class HomeScreen extends Component {
    render(){
        <View>
            <Button onPress={buttonPressed/>


            <Button
                buttonStyle={styles.square}
                textColor={styles.squareColor}
            />
        </View>
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightskyblue',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'ivory',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  squareColor: {
    color: 'rebeccapurple',
    fontSize: 16,
  },
});
