import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Header, Body, Button, Title, Left, Icon } from 'native-base';
import PropTypes from 'prop-types';

class CustomHeader extends Component {

    render() {
        return (
            <Header style={{backgroundColor:'#7050ff'}} noShadow>
                <StatusBar backgroundColor="#7050ff" barStyle="light-content"/>
                <Left>
                    {this.props.disableBackButton ? 
                        <Button transparent onPress={() =>
                            this.props.navigation.openDrawer()}>
                            <Icon name='ios-menu'/>
                        </Button> :
                        <Button transparent onPress={() =>
                            this.props.navigation.goBack()}>
                            <Icon name='ios-arrow-back'/>
                        </Button>
                    }
                </Left>
                <Body style={{left:-50}}>
                    <Title>{this.props.title}</Title>
                </Body>
            </Header>
        );
    }
    static propTypes = {
        title: PropTypes.string,
        navigation: PropTypes.object,
        disableBackButton: PropTypes.bool
    }
}

export default CustomHeader;