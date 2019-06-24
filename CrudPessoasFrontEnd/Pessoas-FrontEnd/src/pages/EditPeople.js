import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    FlatList,
    Button,
    TouchableOpacity
} from "react-native";

import { put, post, getAll, remove } from '../../services/FunctionClasses/PeopleFunctions'


class EditPeople extends Component {

    constructor(props) {
        super(props)

        this.state = {
            codigo:'',
            nome:'',
            senha:'',
            email:'',
        }
    }

    componentDidMount() {
        const {params} = this.props.navigation.state
        if(params && params.item){
            const item = params.item
            this.setState({
                codigo:item.cod_pessoa,
                nome:item.nome_pessoa,
                senha: item.senha_pessoa,
                email:item.email_pessoa
            })
        }
    }

    render() {
        return (
            <View>
                <View>
                    <Text>Nome</Text>
                    <TextInput onChangeText={value => this.setState({nome:value})}
                    value={this.state.nome} />
                </View>
                <View>
                    <Text>Senha</Text>
                    <TextInput onChangeText={value => this.setState({senha:value})}
                    value={this.state.senha} />
                </View>
                <View>
                    <Text>Email</Text>
                    <TextInput onChangeText={value => this.setState({email:value})} 
                    value={this.state.email}/>
                </View>
                <View>
                    <Button title="Editar" onPress={() => {
                        const resposta = put(this.state.nome, this.state.senha, this.state.email, this.state.codigo)
                        console.log(resposta)
                    }} />
                    <Button title="Excluir" onPress={async () => {
                        const resposta = await remove(this.state.codigo)
                        this.props.navigation.goBack();
                        console.log(resposta)
                    }} />
                </View>
            </View>
        )
    }
}


export default EditPeople