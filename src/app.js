import exprss from 'express';
import mongoose, { mongo } from 'mongoose';
import routes from './routes';
class App {
    constructor() {
        this.server = exprss();
        this.database();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.server.use(exprss.json());
    }
    database() {
        mongoose.connect(
            "mongodb://pco-sistema:pco-sistema@pco-shard-00-00-or5lx.mongodb.net:27017,pco-shard-00-01-or5lx.mongodb.net:27017,pco-shard-00-02-or5lx.mongodb.net:27017/mygame?ssl=true&replicaSet=PCO-shard-0&authSource=admin&retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            }, (error, conn) => {
                try {
                    console.log("Conexão estabelecida")
                } catch (error) {
                    console.log("Erro na conexão estabelecida", error.message);
                }

            })
    };
    routes() {
        this.server.use(routes);
    }
}

export default new App().server;