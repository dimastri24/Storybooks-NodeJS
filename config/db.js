const monggose = require('mongoose');

const connectDB = async () => {
    monggose.set('strictQuery', true);
    try {
        const conn = await monggose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
