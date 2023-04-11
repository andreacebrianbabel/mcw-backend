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
exports.RelationRepository = void 0;
const relation_model_1 = require("./../models/relation.model");
const db_config_1 = require("../config/db.config");
const sequelize_1 = require("sequelize");
class RelationRepository {
    constructor() {
        this._database = {};
        this._database = (0, db_config_1.connect)();
        this._relationRepository = this._database.sequelize.getRepository(relation_model_1.RelationPojo);
    }
    getRelationById(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._database.sequelize.query('select user_id, relation.crypto_id, crypto_name, value, asset, stock, amount from crypto full join relation on crypto.crypto_id = relation.crypto_id where user_id = ?', {
                    replacements: [user_id],
                    type: sequelize_1.QueryTypes.SELECT
                });
            }
            catch (error) {
                console.error(error);
                return undefined;
            }
        });
    }
}
exports.RelationRepository = RelationRepository;
