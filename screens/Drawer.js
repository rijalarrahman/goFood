import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Image
} from 'react-native';

import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
  Item,
  Input,
  FooterTab,
  Card,
  CardItem
} from 'native-base';

export default class GoFood extends Component {
  render(){
    return(
      <Container style={{backgroundColor:'#76797c'}}>
      </Container>
    )
  }
}

AppRegistry.registerComponent('Foodiegofood', () => GoFood);
