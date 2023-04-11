"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptoController = void 0;
const crypto_service_1 = require("../services/crypto.service");
const cryptoService = new crypto_service_1.CryptoService();
exports.cryptoController = {
    getAllCryptos: (_req, res) => {
        cryptoService.getAllCryptos().then(result => {
            res.json(result);
        }).catch(excepcion => {
            console.error(excepcion);
            res.sendStatus(500);
        });
    },
};
