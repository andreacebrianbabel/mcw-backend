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
exports.CryptoService = void 0;
const crypto_model_1 = require("../data/models/crypto.model");
const crypto_repository_1 = require("../data/repositories/crypto.repository");
class CryptoService {
    constructor() {
        this._cryptoRepository = new crypto_repository_1.CryptoRepository();
    }
    getAllCryptos() {
        return __awaiter(this, void 0, void 0, function* () {
            const cryptosPromise = yield this._cryptoRepository.getAllCryptos().then(cryptosAsPojo => {
                let cryptosAsDto = [];
                cryptosAsPojo.forEach(cryptoAsPojo => {
                    let cryptoAsDto = this.parseCryptoPojoIntoDto(cryptoAsPojo);
                    cryptosAsDto.push(cryptoAsDto);
                });
                return cryptosAsDto;
            }).catch(error => {
                console.error(error);
                throw error;
            });
            return cryptosPromise;
        });
    }
    parseCryptoDtoIntoPojo(cryptoDto) {
        let cryptoPojo = new crypto_model_1.CryptoPojo();
        cryptoPojo.setDataValue('crypto_id', cryptoDto.crypto_id);
        cryptoPojo.setDataValue('crypto_name', cryptoDto.crypto_name);
        cryptoPojo.setDataValue('value', cryptoDto.value);
        cryptoPojo.setDataValue('asset', cryptoDto.asset);
        cryptoPojo.setDataValue('stock', cryptoDto.stock);
        return cryptoPojo;
    }
    parseCryptoPojoIntoDto(cryptoPojo) {
        const cryptoDto = {
            crypto_id: cryptoPojo.dataValues.user_id,
            crypto_name: cryptoPojo.dataValues.crypto_name,
            value: cryptoPojo.dataValues.value,
            asset: cryptoPojo.dataValues.asset,
            stock: cryptoPojo.dataValues.stock,
        };
        return cryptoDto;
    }
}
exports.CryptoService = CryptoService;
