import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    FlatList,
    Button,
    TouchableOpacity
} from "react-native";

import { put, post, getAll } from '../../services/FunctionClasses/PeopleFunctions'


class ListPeople extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getData()
    }
    async getData() {
        const resposta = await getAll()
        console.log(resposta.dados)
        this.setState({
            data: resposta.dados
        })

    }

    render() {
        return (
            <View>
                <View>
                    <Button title="Atualizar" onPress={() => this.getData()} />
                </View>
                <FlatList data={this.state.data ? [...this.state.data] : []}
                keyExtractor={item => `${item.cod_pessoa}`}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('EditPeople',{item})}>
                        <Text>{item.nome_pessoa}</Text>
                    </TouchableOpacity>
                )} />
            </View>
        )
    }
}


export default ListPeople