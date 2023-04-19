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

    async getCryptoById(id: string): Promise<CryptoPojo | undefined> {
        try {
            return await this._cryptoRepository.findByPk(id)
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    async updateCryptoById(newCrypto: CryptoPojo): Promise<string> {
        const data = await this._cryptoRepository.findOne({
            where: {
                crypto_id: newCrypto.crypto_id,
            }
        })

        if (!!data) {
            this._cryptoRepository.update({ stock: newCrypto.stock }, {
                where: {
                    crypto_id: newCrypto.crypto_id
                }
            })
            return data
        } else {
            return undefined
        }
    }
}