import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#292929',
          width: '100%',
          height: 350,
          borderRadius: 15,
        }}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 28,
            paddingTop: 15,
            textAlign: 'center',
          }}>
          Seja Bem-vindo!
        </Text>
        <Button title="Sair" onPress={this.props.fechar} />
      </View>
    );
  }
}
