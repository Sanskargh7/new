const dbconfig=require('../config/dbconfig')
const {Sequelize,DataTypes}=require('sequelize')
const sequelize=new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host:dbconfig.HOST,
        dialect:dbconfig.dialect,
        pool:{
            max:dbconfig.pool.max,
            min:dbconfig.pool.min,
            acquire:dbconfig.pool.acquire,
            idle:dbconfig.pool.idle
        }
    }
)
sequelize.authenticate().then(()=>{
    console.log('connected......')
}).catch(err=>{
    console.log(err)
})
const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize
db.products=require('../models/productModel')(sequelize,DataTypes)

 db.user=require('../models/user')(sequelize,DataTypes)
db.sequelize.sync({force:false}).then(()=>{
    console.log('yes re-sync is done')
}).catch(err=>{
    console.log('connection is field')
})
module.exports=db;