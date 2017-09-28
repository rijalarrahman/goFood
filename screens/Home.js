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

  handlePress8(){
    this.props.navigator.push({
      screen:'example.Terfavorit',
    })
  }

  render(){
    return(

      <Container style={{backgroundColor:'#eff4f7'}}>

          <Header searchBar rounded style={{backgroundColor:'#212121', }}>

            <Left>
              <Button transparent>
                <Icon name='md-arrow-back' />
              </Button>
            </Left>

            <Body>

              <Image source={require('../gf.jpg')} style={{ width:125, height:40, marginLeft:-25}} />

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

        <Content style={{marginTop:10}}>
          
          <Row style={{marginBottom:5}}>

            <Button transparent onPress={() => this.handlePress()} style={{width:110, height:110, marginLeft:7}}>
              <Image source={require('../bmi.jpg')} style={{width:110, height:110, marginRight:8}} />
            </Button>

            <Button transparent onPress={() => this.handlePress1()} style={{width:110, height:110, marginLeft:8}}>
              <Image source={require('../prm.jpg')} style={{width:110, height:110, marginRight:8}} />
            </Button>

            <Button transparent onPress={() => this.handlePress2()} style={{width:110, height:110, marginLeft:8}}>
              <Image source={require('../tr.jpg')} style={{width:110, height:110, marginRight:8}} />
            </Button>

          </Row>


          <Row style={{marginBottom:5}}>

            <Button transparent onPress={() => this.handlePress3()} style={{width:110, height:110, marginLeft:7}}>
              <Image source={require('../ts.jpg')} style={{width:110, height:110, marginRight:8}} />
            </Button>

            <Button transparent onPress={() => this.handlePress4()} style={{width:110, height:110, marginLeft:8}}>
              <Image source={require('../pa.jpg')} style={{width:110, height:110, marginRight:8}} />
            </Button>

            <Button transparent onPress={() => this.handlePress5()} style={{width:110, height:110, marginLeft:8}}>
              <Image source={require('../j24.jpg')} style={{width:110, height:110, marginRight:8}} />
            </Button>

          </Row>


          <Row style={{marginBottom:5}}>

            <Button transparent onPress={() => this.handlePress6()} style={{width:110, height:110, marginLeft:7}}>
              <Image source={require('../mh.jpg')} style={{width:110, height:110, marginRight:8}} />
            </Button>

            <Button transparent onPress={() => this.handlePress7()} style={{width:110, height:110, marginLeft:8}}>
              <Image source={require('../ms.jpg')} style={{width:110, height:110, marginRight:8}} />
            </Button>

            <Button transparent onPress={() => this.handlePress8()} style={{width:110, height:110, marginLeft:8}}>
              <Image source={require('../tfv.jpg')} style={{width:110, height:110, marginRight:8}} />
            </Button>

          </Row>

        </Content>

      </Container>

    )
  }
}

AppRegistry.registerComponent('Foodiegofood', () => GoFood);
