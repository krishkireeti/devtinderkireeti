
const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://kirikom94_db_user:namastedev@cluster0.fozs4g9.mongodb.net/devTinder"

    );
};

module.exports = connectDB;

