import { UserPojo } from "../models/user.model";
import { connect } from "../config/db.config";

export class UserRepository {
    _database: any = {}
    _userRepository: any

    constructor() {
        this._database = connect()
        this._userRepository = this._database.sequelize.getRepository(UserPojo)
    }

    async addUser(newUser: UserPojo): Promise<string> {
        try {
            newUser = await this._userRepository.create(newUser)
            return newUser.id
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getUserById(id: string): Promise<UserPojo | undefined> {
        try {
            return await this._userRepository.findByPk(id)
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    async getLogin(username: string, password: string): Promise<UserPojo> {
        let user: UserPojo = {} as UserPojo
        try {
            return await this._userRepository.findOne({
                where: { username: username, password: password }
            })
        } catch (error) {
            console.error(error)
            throw error
        }
        return user
    }
}