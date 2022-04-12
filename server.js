
const express=require('express')
const app=express();
const cors=require('cors');
const port=process.env.PORT ||4000
const urlencoded = require('body-parser/lib/types/urlencoded');
app.use(express.json())
app.use(express.urlencoded({extended:true}));
const router=require('../crud/routes/productRouter.js')

app.use('/api/products',router)


app.get('/',(req,res)=>{
res.json({message:'hello fron new api brother'})
}).listen(port,()=>{
    console.log('everything is fine')
})