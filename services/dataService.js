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


const addtowishlist=(id,title,price,image,description)=>{

    return db.wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Product already exists"
                }
            }
            else{
                const newProduct = new db.wishlist({id,title,price,image,description})
                newProduct.save()//to save data into mongodb

                return{
                    status:true,
                    statusCode:200,
                    message:"Product added to wish-list"
                }
            }
        }

    )
  
}

// to get wish list

const getwishlist=()=>{
    return db.wishlist.find().then(
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
                    message:" wish-list is empty"
                }
            }
        }
    )
}

deletewish=(id)=>{
    return db.wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result,
                    message:"Product Removed"

                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:"Your wish-list is empty"
                }
            }
        }
    )
}



module.exports ={
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish
}