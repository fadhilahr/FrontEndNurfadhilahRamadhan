import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
export default class ContactApp extends Component {
    render() {
        return (
            <Root>
                <App />
            </Root>
        );
    }
}
AppRegistry.registerComponent(appName, () => ContactApp);


