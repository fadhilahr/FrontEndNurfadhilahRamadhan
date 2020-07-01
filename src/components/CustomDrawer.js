import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Container, Content, ListItem, Left, Icon, Text, Body, Badge, Right, Thumbnail, View } from 'native-base';

const menuItems = [
    {
        id: '1',
        icon: 'home',
        label: 'Home',
        target: 'Home'
    },
    {
        id: '2',
        icon: 'users',
        label: 'Contacts',
        target: 'Contacts'
    },
    {
        id: '3',
        icon: 'log-in',
        label: 'Login Page',
        target: 'Login'
    }
]

class CustomDrawer extends Component {

    closeDrawer() {
        this.props.navigation.closeDrawer();
    }

    openDrawer() {
        this.props.navigation.openDrawer();
    }

    navigate(target) {
        this.props.navigation.navigate(target);
    }

    renderListItem(data, index) {
        return (
            <ListItem icon onPress={() => this.navigate(data.target)} key={'item-' + index}>
                <Left>
                    <Icon type="Feather" active name={data.icon} style={{ fontSize:24, color:'#7050ff'}}/>
                </Left>
                <Body>
                    <Text style={{fontSize:16}}>{data.label}</Text>
                </Body>
            </ListItem>
        );
    }

    render() {
        return (
            <Container>
                <Content>
                    <ImageBackground
                        resizeMode="cover"
                        style={{
                            backgroundColor: '#7050ff',
                            height: 180,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Left style={{left:-30, paddingTop: 40}}>
                        <Thumbnail source={{ uri: 'https://img.posjateng.id/img/author/dede-suryana-JAHuSxBCAT.jpg' }}/>
                        <View style={{paddingTop:10,}}>
                        <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>User</Text>
                        <Text style={{color:'white'}}>usermail@gmail.com</Text>
                        </View>
                        </Left>
                    </ImageBackground>
                        {menuItems.map((item, index) => this.renderListItem(item, index))}
                </Content>
            </Container>
                )
            }
        }
        
export default CustomDrawer;