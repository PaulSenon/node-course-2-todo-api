const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require ('./../server/models/user.js');

// Todo.remove()
// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.remove({}).then((res) => {
//     console.log(res);
// });
//
// Todo.findOneAndRemove({_id: '593014e0555cb8e9e0e7f3d6'}).then((todo) => {
//     console.log(todo);
// });

// Todo.findByIdAndRemove('593014e0555cb8e9e0e7f3d6').then((todo) => {
//     console.log(todo);
// });
