import { CryptoPojo } from "../models/crypto.model";
import { connect } from "../config/db.config";

export class CryptoRepository {
    _database: any = {}
    _cryptoRepository: any

    constructor() {
        this._database = connect()
        this._cryptoRepository = this._database.sequelize.getRepository(CryptoPojo)
    }

    async getAllCryptos(): Promise<CryptoPojo[]> {
        try {
            return await this._cryptoRepository.findAll()
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}