import exprss from 'express';
class App {
    constructor() {
            this.server = exprss();
        }
        /*const app = exprss();
        app.get("/", (req, res) => {
            res.send({ smg: "Api. Games " });
        })*/
}

export default new App().server;