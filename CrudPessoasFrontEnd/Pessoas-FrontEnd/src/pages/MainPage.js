import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';

class MainPage extends Component {
    render() {
        return (
            <View>
                <View>
                    <Button title="Cadastrar" onPress={() => this.props.navigation.navigate('CreatePeople')} />
                </View>
                <View>
                    <Button title="Listar" onPress={() => this.props.navigation.navigate('ListPeople')} />
                </View>
               
            </View>
        )
    }
}

export default MainPage