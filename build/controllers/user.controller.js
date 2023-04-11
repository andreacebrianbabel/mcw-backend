"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
const userService = new user_service_1.UserService();
const uuid_1 = require("uuid");
exports.userController = {
    addUser: (req, res) => {
        try {
            const id = (0, uuid_1.v4)();
            const newUser = req.body;
            newUser.user_id = id;
            console.log(newUser);
            userService.addUser(newUser).then(result => {
                res.json(result);
            });
        }
        catch (excepcion) {
            console.error(excepcion);
            res.sendStatus(500);
        }
    },
    getUserById: (req, res) => {
        try {
            const user_id = req.params.id;
            userService.getUserById(user_id).then(result => {
                res.json(result);
                console.log(result);
            });
        }
        catch (excepcion) {
            console.error(excepcion);
            res.sendStatus(500);
        }
    },
    getUserByLogin: (req, res) => {
        try {
            const username = req.params.username;
            const password = req.params.password;
            userService.getLogin(username, password).then((result) => {
                res.json(result);
            });
        }
        catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    }
};
