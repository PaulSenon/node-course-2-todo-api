var env = process.env.NODE_ENV || 'development';

// when heroku run this, the NODE_ENV is elready set to 'production'
// so next lines are skipped, and MONGODB_URI is already set.
if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp'
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest'
}
