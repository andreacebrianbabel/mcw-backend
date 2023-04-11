"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
router.post('/add', user_controller_1.userController.addUser);
router.get('/get/:id', user_controller_1.userController.getUserById);
router.get('/:username/:password', user_controller_1.userController.getUserByLogin);
exports.default = router;
module.exports = router;
