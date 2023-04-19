import { UserPojo } from './../data/models/user.model';
import { UserRepository } from './../data/repositories/user.repository';
import { NewUserDto, UserDto } from "../types"

export class UserService {
    _userRepository: UserRepository

    constructor() {
        this._userRepository = new UserRepository()
    }

    async addUser(user: NewUserDto): Promise<string> {
        const userPojo: UserPojo = this.parseUserDtoIntoPojo(user)
        const userPromise = await this._userRepository.addUser(userPojo).then(user_id => {

            return user_id
        }).catch(error => {
            console.error(error)
            throw error
        })
        return userPromise
    }

    async getAllUsers(): Promise<UserDto[]> {
        const usersPromise = await this._userRepository.getAllUsers().then(usersAsPojo => {
            let usersAsDto: UserDto[] = []

            usersAsPojo.forEach(userAsPojo => {
                let userAsDto = this.parseUserPojoIntoDto(userAsPojo)
                usersAsDto.push(userAsDto)
            })
            return usersAsDto
        }).catch(error => {
            console.error(error)
            throw error
        })

        return usersPromise
    }

    async getUserById(id: string): Promise<UserDto | undefined> {
        console.log
        const userPromise = await this._userRepository.getUserById(id).then(userAsPojo => {
            if (!!userAsPojo)
                return this.parseUserPojoIntoDto(userAsPojo)
            else
                return undefined
        }).catch(error => {
            console.error(error)
            throw error
        })
        return userPromise
    }

    async getLogin(username: string, password: string): Promise<UserDto> {
        const usersPromise = await this._userRepository
            .getLogin(username, password)
            .then((result) => {
                if (!result)
                    return undefined

                return this.parseUserPojoIntoDto(result)
            })
            .catch((error) => {
                console.error(error)
                throw error
            })

        return usersPromise
    }

    async updateUserById(user: UserDto): Promise<string> {
        const userDepositPojo: UserPojo = user as UserPojo
        console.log("En el service del pojo(POJO): " + userDepositPojo)
        const cryptoPromise = await this._userRepository
            .updateUserById(userDepositPojo)
            .then((user) => {
                return user
            })
            .catch((error) => {
                console.error(error)
                throw error
            })

        return cryptoPromise
    }


    parseUserDtoIntoPojo(userDto: NewUserDto): UserPojo {
        let newUser: UserDto = userDto as UserDto
        return newUser as unknown as UserPojo
    }

    parseUserPojoIntoDto(userPojo: UserPojo): UserDto {
        const userDto: UserDto = {
            user_id: userPojo.dataValues.user_id,
            username: userPojo.dataValues.username,
            password: userPojo.dataValues.password,
            email: userPojo.dataValues.email,
            fullname: userPojo.dataValues.fullname,
            deposit: userPojo.dataValues.deposit
        }
        return userDto
    }
}