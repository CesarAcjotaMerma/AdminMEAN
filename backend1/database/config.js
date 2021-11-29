const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://admin:1admin9@proyectos.v6tev.mongodb.net/hospitaldb'

const dbConnection = async() => {

    try {
        await mongoose.connect( MONGODB_URI , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}

module.exports = {
    dbConnection
}