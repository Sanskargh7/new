
// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

    

module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define('users',{
        name:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING
        }
    })
    return User
}