import User from "../models/User";

class UserController {
    create(req, res) {
        console.log("Olá");
    }
    read(req, res) {
        console.log(User);
        res.send({})
    }
}

export default new UserController();