var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI).catch((e) => {
    console.log('Unable to connect to mongo DB');
});


module.exports = {
    mongoose
};
