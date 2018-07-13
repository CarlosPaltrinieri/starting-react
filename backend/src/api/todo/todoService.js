const Todo = require('./todo')

//API REST padrão.
//Get = Pega elemento escolhido.
//Post = Insere elemento.
//Put = Realiza alteração no elemento.
//Delete = Deleta elemento.
Todo.methods(['get', 'post,', 'put', 'delete'])

//New: Retorna os valores atualizados.
//RunValidators: Valida as atualizações.
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo
