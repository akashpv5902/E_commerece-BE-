const db = require('./db')

// get all the products from db

const getProducts =()=>{
    return db.Product.find().then( 
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'No Product Found!'
                }
            }
        }

    )
}
module.exports ={
    getProducts
}