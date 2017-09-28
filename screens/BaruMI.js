import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Image
} from 'react-native';
import BaruMI from './BaruMI';

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
  CardItem,
  Row,
  Segment
} from 'native-base';

export default class GoFood extends Component {

  static navigatorStyle = {
    navBarBackgroundColor: '#bac0c6',
    navBarHidden:true
  };

  handlePress(){
    this.props.navigator.push({
      screen:'example.BaruMI',
    })
  }

  handlePress1(){
    this.props.navigator.push({
      screen:'example.Promosi',
    })
  }

  handlePress2(){
    this.props.navigator.push({
      screen:'example.Terdekat',
    })
  }

  handlePress3(){
    this.props.navigator.push({
      screen:'example.Terlaris',
    })
  }

  handlePress4(){
    this.props.navigator.push({
      screen:'example.PromoAn',
    })
  }

  handlePress5(){
    this.props.navigator.push({
      screen:'example.Jam24',
    })
  }

  handlePress6(){
    this.props.navigator.push({
      screen:'example.MenuHe',
    })
  }

  handlePress7(){
    this.props.navigator.push({
      screen:'example.MenuSe',
    })
  }

  handlePress(){
    this.props.navigator.pop({
      screen: 'example.Home',
    })
  }

  render(){
    return(

      <Container style={{backgroundColor:'#eff4f7'}}>

          <Header searchBar rounded style={{backgroundColor:'#212121', }}>

            <Left>
              <Button transparent onPress={() => this.handlePress()}>
                <Icon name='md-arrow-back' />
              </Button>
            </Left>

            <Body>

              <Image source={require('../barmi.jpg')} style={{ width:125, height:40, marginLeft:-25}} />

            </Body>

            <Right>

              <Button transparent>
                <Image source={require('../p1.jpg')} style={{ width:65, height:65, marginLeft:8}} />
              </Button>

              <Button transparent>
                <Icon name='md-heart' />
              </Button>

            </Right>

         </Header>

        <Segment style={{backgroundColor:'#212121', paddingLeft:5, padding:-10}}>

          <View style={{backgroundColor:'#FFF', width:350, height:40, marginLeft:-5, borderRadius:2}}>

            <Item success>

              <Button transparent style={{marginLeft:-1}}>
                <Icon name='ios-search' />
              </Button>

              <Input placeholder='Mau makan apa hari ini?' />

            </Item>

          </View>

        </Segment>

        <View>

          <Button transparent style={{width:360, height:180}}>
            <Image source={require('../mart.jpg')} style={{width:360, height:180, marginRight:8}} />
          </Button>

          <Text style={{marginLeft:10}}>Martabak Blackpool</Text>

        </View>

      </Container>

    )
  }
}

AppRegistry.registerComponent('Foodiegofood', () => GoFood);
