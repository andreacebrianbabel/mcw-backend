"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationPojo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
let RelationPojo = class RelationPojo extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: false,
        type: sequelize_1.STRING,
        field: 'crypto_id'
    }),
    __metadata("design:type", String)
], RelationPojo.prototype, "crypto_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: false,
        type: sequelize_1.STRING,
        field: 'user_id'
    }),
    __metadata("design:type", String)
], RelationPojo.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DECIMAL,
        field: 'amount'
    }),
    __metadata("design:type", Number)
], RelationPojo.prototype, "amount", void 0);
RelationPojo = __decorate([
    (0, sequelize_typescript_1.Table)({
        freezeTableName: true,
        schema: 'public',
        tableName: 'relation',
        createdAt: false,
        updatedAt: false
    })
], RelationPojo);
exports.RelationPojo = RelationPojo;
