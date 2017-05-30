// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server')

    // db.collection('Todos').deleteMany({text: 'Eat'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat'}).then((res) => {
    //     console.log(res);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res);
    // });

    // db.collection('Users').deleteMany({
    //     name: 'Paul'
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('592d8fa04f5693a584f981c3')
    }).then((res) => {
        console.log(res);
    });

    //db.close();
});
