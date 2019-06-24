const db = require('../../database/dbConnection')

module.exports = class pessoa {
    static getAll(callback){
        return db.query("SELECT * FROM pessoa", callback)
    }

    static getId(id,callback){
        return db.query(`SELECT * FROM pessoa WHERE cod_pessoa = ${id}`, callback)
    }


    static getByName(name,callback){
        return db.query(`SELECT * FROM pessoa WHERE nome_pessoa like ('%${name}%')`, callback)
    }

    static getByEmail(email,callback){
        return db.query(`SELECT * FROM pessoa WHERE email_pessoa like ('%${email}%')`, callback)
    }

    static add(pessoa, callBack){
        return db.query(
        `insert into pessoa(nome_pessoa, senha_pessoa, email_pessoa) values(?,?,?)`, 
        [pessoa.nome_pessoa , pessoa.senha_pessoa, pessoa.email_pessoa], callBack);
    }

    static remove(id,callback){
        console.log("BATEU NO REMOVE : ",id)
        return db.query("DELETE FROM pessoa WHERE cod_pessoa = ?",[id],callback)
    }

    static edit(pessoa,callback){
        return db.query("UPDATE pessoa SET nome_pessoa = ?, senha_pessoa = ?, email_pessoa = ? WHERE cod_pessoa = ?"
        ,[pessoa.nome_pessoa, pessoa.senha_pessoa, pessoa.email_pessoa, pessoa.cod_pessoa],callback)
    }
}