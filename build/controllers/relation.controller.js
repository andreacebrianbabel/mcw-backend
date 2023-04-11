"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relationController = void 0;
const relation_service_1 = require("../services/relation.service");
const relationService = new relation_service_1.RelationService();
exports.relationController = {
    getRelationById: (req, res) => {
        try {
            const user_id = req.params.id;
            relationService.getRelationById(user_id).then(result => {
                res.json(result);
            });
        }
        catch (excepcion) {
            console.error(excepcion);
            res.sendStatus(500);
        }
    },
};
