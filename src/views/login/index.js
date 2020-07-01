import React, { Component } from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import { Container, Content, Text, Form, Item, Input, Label, Body, Button } from 'native-base';
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
        <StatusBar backgroundColor="red" barStyle="light-content" />
        <CustomHeader navigation={this.props.navigation} disableBackButton={true} />
        <Content padder>

          <Grid style={{ backgroundColor: '#7050ff', left: -10, minWidth: '105%', minHeight: 685, bottom: -20 }}>
            <Row style={{ backgroundColor: '#7050ff', height: 130, top: -20 }}>
              <Col style={{ width: '90%' }}>
                <Body style={{ paddingVertical: 20, paddingRight: 30, left: 30 }}>
                  <Text style={{ color: 'white', fontSize: 25 }}>
                    Hello There!
              </Text>
                  <Text style={{ color: 'white', fontSize: 15 }}>
                    Welcome to ContactApp
              </Text>
                </Body>
              </Col>
            </Row>
            <Row style={{ backgroundColor: '#f6f5f6', borderTopEndRadius: 30, borderTopStartRadius: 30 }}>
              <Col style={{ padding: 30 }}>
                <Form style={{ marginTop: 30 }}>
                  <Item stackedLabel>
                    <Label>Username</Label>
                    <Input placeholder="" />
                  </Item>
                  <Item stackedLabel last>
                    <Label>Password</Label>
                    <Input placeholder=""></Input>
                  </Item>
                </Form>
                <Button rounded style={{ backgroundColor: '#7050ff', marginTop: 50 }}>
                  <Text style={{ paddingLeft: 140 }}>Login</Text>
                </Button>
                <Text style={{ color: 'grey', fontSize: 15, paddingLeft: 80, paddingTop: 20 }}>
                  Forgot your password?
              </Text>
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