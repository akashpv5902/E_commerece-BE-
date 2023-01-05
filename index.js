const express = require('express')

const cors = require('cors')

const dataService = require('./services/dataService')

const app = express()

app.use(express.json())



app.listen(3000,()=>{
    console.log('listening on port 3000');
})

app.use(cors({
    origin:'http://localhost:4200'
}))

// api to get all products

app.get('/all-products',(req,res)=>{
    dataService.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})