const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require ('./../server/models/user.js');

// var id = '592f214432b43da09b0a164c11';
//
// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('ID not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var id = '592efbe92125252052024388';

User.findById(id).then((user) => {
    if(!user){
        return console.log('ID not found');
    }
    console.log('User :',user);
}).catch((e) => console.log(e));
