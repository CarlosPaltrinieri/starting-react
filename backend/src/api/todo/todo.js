const restful = require('node-restful')
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    description: {type: String, required: true},
    done: {type: Boolean, required: true, default: false},
    createdAt: {type: Date, default: Date.now}
})

//Tudo que for posto no module.exports será exposto para fora do arquivo podendo ser utulizado por terceiros.
module.exports = restful.model('Todo',todoSchema)