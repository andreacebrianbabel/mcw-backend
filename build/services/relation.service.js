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
exports.RelationService = void 0;
const relation_model_1 = require("../data/models/relation.model");
const relation_repository_1 = require("../data/repositories/relation.repository");
class RelationService {
    constructor() {
        this._relationRepository = new relation_repository_1.RelationRepository();
    }
    getRelationById(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._relationRepository.getRelationById(user_id)
                .then(RelationPojo => {
                console.log(RelationPojo);
                return RelationPojo;
            });
        });
    }
    parseRelationDtoIntoPojo(relationDto) {
        let relationPojo = new relation_model_1.RelationPojo();
        relationPojo.setDataValue('crypto_id', relationDto.crypto_id);
        relationPojo.setDataValue('user_id', null);
        relationPojo.setDataValue('amount', relationDto.amount);
        return relationPojo;
    }
    parseRelationPojoIntoDto(relationPojo) {
        const relationDto = {
            crypto_id: relationPojo.dataValues.crypto_id,
            user_id: relationPojo.dataValues.user_id,
            amount: relationPojo.dataValues.amount,
        };
        return relationDto;
    }
}
exports.RelationService = RelationService;
