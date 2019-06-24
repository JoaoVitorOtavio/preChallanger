const express = require('express')
const bodyparser = require('body-parser')
const cors = require('./cors/cors')

const server = express()
const port = 3003
const router = express.Router()

const pessoaRouter = require('./routers/pessoaRouter')

server.use(cors)
server.use(bodyparser.urlencoded({extended:true}))
server.use(bodyparser.json())

router.get("/",(req,res)=>{
    res.json({
        message:"Api rodando!"
    })
})

server.use('/', router);
server.use('/pessoa', pessoaRouter);


server.listen(port, () => console.log(`Api rodando na porta : ${port}`))