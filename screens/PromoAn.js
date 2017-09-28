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

              <Image source={require('../pran.jpg')} style={{ width:120, height:40, marginLeft:-25}} />

            </Body>

            <Right>

              <Button transparent>
                <Image source={require('../pesanan.jpg')} style={{ width:65, height:65, marginLeft:8}} />
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

      </Container>

    )
  }
}

AppRegistry.registerComponent('Foodiegofood', () => GoFood);
