import mongoose, { ConnectOptions } from 'mongoose';
import config from './config'

    (async () => {
        try{
            const mongooseOptions: ConnectOptions = {
                useNewUrlParser: true,
                useUnifiedTopology: true
                /* user: config.MONGO_USER,
                pass: config.MONGO_PASSWORD */
            }
            const db = await mongoose.connect(`mongodb+srv://dan:Dnsanianlau22@taskmancluster.pgq4v.mongodb.net/VideoFavDB?retryWrites=true&w=majority`,
            mongooseOptions,
             () => console.log('Conectado'));
            console.log('Base de datos conectada');
        }catch(error) {
            console.error(error)
        }
    })()