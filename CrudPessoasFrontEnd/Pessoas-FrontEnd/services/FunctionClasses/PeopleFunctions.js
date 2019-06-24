import React from 'react'
import axios from 'axios'
import api from '../api/api'

export const getAll = async () =>{
    const response = await api.get('/pessoa')
    return response.data;
    
}

export const getId = async (id) =>{
    const response = await api.get('/pessoa/'+id)
    return response.data
}

export const post = async (nome , senha, email) => {
    const response = await api.post('/pessoa/',{nome_pessoa:nome, senha_pessoa:senha, email_pessoa:email})
    return response.data.message
}

export const put = async (nome, senha, email, codigo) => {
    const response = await api.put('/pessoa/',{nome_pessoa:nome , senha_pessoa:senha, email_pessoa:email, cod_pessoa:codigo})
    return response.data;
}

export const remove = async (id) => {
    console.log('bateu aqui')
    const response = await api.delete('/pessoa/'+id)
    if(response.data.error){
        return false;
    }else{
        return true;
    }
}