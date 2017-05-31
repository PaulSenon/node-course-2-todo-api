var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp').catch((e) => {
    console.log('Unable to connect to mongo DB');
});


module.exports = {
    mongoose
};
