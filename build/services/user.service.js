"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("./../data/repositories/user.repository");
class UserService {
    constructor() {
        this._userRepository = new user_repository_1.UserRepository();
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPojo = this.parseUserDtoIntoPojo(user);
            const userPromise = yield this._userRepository.addUser(userPojo).then(user_id => {
                return user_id;
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return userPromise;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log;
            const userPromise = yield this._userRepository.getUserById(id).then(userAsPojo => {
                if (!!userAsPojo)
                    return this.parseUserPojoIntoDto(userAsPojo);
                else
                    return undefined;
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return userPromise;
        });
    }
    getLogin(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersPromise = yield this._userRepository
                .getLogin(username, password)
                .then((result) => {
                if (!result)
                    return undefined;
                return this.parseUserPojoIntoDto(result);
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return usersPromise;
        });
    }
    parseUserDtoIntoPojo(userDto) {
        let newUser = userDto;
        return newUser;
    }
    parseUserPojoIntoDto(userPojo) {
        const userDto = {
            user_id: userPojo.dataValues.user_id,
            username: userPojo.dataValues.username,
            password: userPojo.dataValues.password,
            email: userPojo.dataValues.email,
            fullname: userPojo.dataValues.fullname,
            birthday: userPojo.dataValues.birthday,
            deposit: userPojo.dataValues.deposit
        };
        return userDto;
    }
}
exports.UserService = UserService;
