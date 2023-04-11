"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const relation_controller_1 = require("../controllers/relation.controller");
const router = express_1.default.Router();
router.get('/get/:id', relation_controller_1.relationController.getRelationById);
exports.default = router;
module.exports = router;
