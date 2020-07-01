import React, { Component } from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import { Container, Content, Text, Card, CardItem, Icon, Left, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import CustomHeader from '../../components/CustomHeader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findAllContacts } from '../../actions/contact';

class HomeScreen extends Component {

  componentDidMount() {
    this.props.findAllContacts();
  }

  goTo(screen) {
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#7050ff' }}>
        <StatusBar barStyle="light-content" />
        <CustomHeader navigation={this.props.navigation} disableBackButton={true} />
        <Content padder>

          <Grid style={{ backgroundColor: '#7050ff', alignSelf: 'center', minWidth: '105%', minHeight: 685, bottom: -20 }}>
            <Row style={{ backgroundColor: '#7050ff', height: 180, top: -20 }}>
              <Col style={{ width: 220 }}>
                <Body style={{ paddingVertical: 40, paddingRight: 30, left: 30 }}>
                  <Text style={{ alignSelf: 'center', color: 'white', fontSize: 22 }}>
                    Jenius Contact
              </Text>
                  <Text note style={{ color: '#d3cafc', marginTop: 10 }}>Organize Your Contacts</Text>
                </Body>
              </Col>
              <Col>
                <ImageBackground resizeMode="contain" source={require('../../assets/contact.png')} style={{ width: '100%', height: '100%', padding: 20, left: 20 }}></ImageBackground>
              </Col>
            </Row>
            <Row style={{ backgroundColor: '#f6f5f6', borderTopEndRadius: 30, borderTopStartRadius: 30 }}>
              <Col style={{ padding: 30 }}>
                <Card noShadow style={{ borderRadius: 20, marginVertical: 10 }}>
                  <CardItem button style={{ borderRadius: 20, height: 80 }} onPress={() => this.goTo('Contact')}>
                    <Left>
                      <Icon name='users' type='Feather' style={{ fontSize: 50, paddingLeft: 20, color: '#874EF3' }}></Icon>
                    </Left>
                    <Body style={{ left: -50, alignSelf: 'center' }}>
                      <Text>List Contacts</Text>
                    </Body>
                  </CardItem>
                </Card>
                <Card noShadow style={{ borderRadius: 20, marginVertical: 10 }}>
                  <CardItem style={{ borderRadius: 20, height: 80 }} button onPress={() => this.goTo('TnC')}>
                    <Left>
                      <Icon name='info' type='Feather' style={{ fontSize: 50, paddingLeft: 20, color: '#874EF3' }}></Icon>
                    </Left>
                    <Body style={{ left: -50, alignSelf: 'center' }}>
                      <Text>About Us</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
            </Row>
          </Grid>


        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts.data
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ findAllContacts }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(HomeScreen);