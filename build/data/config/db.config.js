"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const relation_model_1 = require("./../models/relation.model");
const crypto_model_1 = require("./../models/crypto.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../models/user.model");
const connect = () => {
    const DB_HOSTNAME = 'localhost';
    const DB_PORT = 5342;
    const DB_NAME = 'mcw-hackaton';
    const DB_USERNAME = 'postgres';
    const DB_PASSWORD = '2910acP!';
    const DB_SCHEMA = 'public';
    const DB_DIALECT = 'postgres';
    const dbConfig = new sequelize_typescript_1.Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
        host: DB_HOSTNAME,
        dialect: DB_DIALECT,
        schema: DB_SCHEMA,
        port: DB_PORT,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });
    dbConfig.addModels([user_model_1.UserPojo, crypto_model_1.CryptoPojo, relation_model_1.RelationPojo]);
    const db = {};
    db.Sequelize = sequelize_typescript_1.Sequelize;
    db.sequelize = dbConfig;
    return db;
};
exports.connect = connect;
