import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
    Picker,
    Button
} from "react-native";

import { put, post } from '../../services/FunctionClasses/PeopleFunctions'

class CreatePeople extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            senha: '',
            email: ''
        }
    }

    render() {
        return (
            <View>
                <View>
                    <Text>Nome</Text>
                    <TextInput onChangeText={value => this.setState({nome:value})} />
                </View>
                <View>
                    <Text>Senha</Text>
                    <TextInput onChangeText={value => this.setState({senha:value})} />
                </View>
                <View>
                    <Text>Email</Text>
                    <TextInput onChangeText={value => this.setState({email:value})} />
                </View>
                <View>
                    <Button title="Salvar" onPress={() => {
                        const resposta = post(this.state.nome, this.state.senha, this.state.email)
                        console.log(resposta)
                    }} />
                </View>
            </View>
        )
    }
}

export default CreatePeople