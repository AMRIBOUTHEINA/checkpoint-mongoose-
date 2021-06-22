let mongoose = require('mongoose')
const Schema= mongoose.Schema

const Personschéma = new Schema({
    name: {type: String , required: true},
    age: Number,
    favoriteFoods: [String]
})

module.exports=mongoose.model('person', Personschéma)