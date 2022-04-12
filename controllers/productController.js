const { status } = require('express/lib/response')
const db=require('../models')
//create model main 
const Product=db.products

const addProduct=async(req,res)=>{
    let info={
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        
    }
    const product=await Product.create(info)
    res.status(200).send(product)
   
}
const getProducts=async (req,res)=>{
    let products=await Product.findAll({})
    res.status(200).send(products)

}
const getOneProduct=async (req,res)=>{
    let id=req.params.id
    let product=await Product.findOne({where:{id:id}})
    res.status(200).send(product)
}
const updateProducts=async (req,res)=>{
    let id=req.params.id
    const product=await Product.update(req.body,{where :{id:id}})
    res.status(200).send(product)
   
}
const deleteProduct=async (req,res)=>{
    let id=req.params.id
    await Product.destroy({where:{id:id}})
    res.status(200).send('product is deleted')
}

const search=async(req,res)=>{
    let title=req.params.title
    let data=await Product.findAll({
    
        where:{title:title}
    })
    res.send(data)
}

module.exports={
    addProduct,
    getProducts,
    getOneProduct,
    updateProducts,
    deleteProduct,
    
    search
}