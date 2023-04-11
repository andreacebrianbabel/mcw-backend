import { UserService } from "../services/user.service"
const userService: UserService = new UserService()
import { v4 as uuid } from 'uuid';

export const userController = {
    addUser: (req: any, res: any) => {
        try {
            const id: string = uuid();
            const newUser = req.body;
            newUser.user_id = id
            console.log(newUser)
            userService.addUser(newUser).then(result => {
                res.json(result)
            })

        } catch (excepcion) {
            console.error(excepcion)
            res.sendStatus(500)
        }
    },

    getUserById: (req: any, res: any) => {
        try {
            const user_id = req.params.id
            userService.getUserById(user_id).then(result => {
                res.json(result)
                console.log(result)
            })

        } catch (excepcion) {
            console.error(excepcion)
            res.sendStatus(500)
        }
    },

    getUserByLogin: (req: any, res: any) => {
        try {
            const username = req.params.username
            const password = req.params.password
            userService.getLogin(username, password).then((result) => {
                res.json(result)
            });
        } catch (error) {
            console.error(error)
            res.sendStatus(500)
        }
    }
}