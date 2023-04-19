import { CryptoDto } from "../types"
import { CryptoPojo } from '../data/models/crypto.model';
import { CryptoRepository } from '../data/repositories/crypto.repository';

export class CryptoService {
    _cryptoRepository: CryptoRepository

    constructor() {
        this._cryptoRepository = new CryptoRepository()
    }

    async getAllCryptos(): Promise<CryptoDto[]> {
        const cryptosPromise = await this._cryptoRepository.getAllCryptos().then(cryptosAsPojo => {
            let cryptosAsDto: CryptoDto[] = []

            cryptosAsPojo.forEach(cryptoAsPojo => {
                let cryptoAsDto = this.parseCryptoPojoIntoDto(cryptoAsPojo)
                cryptosAsDto.push(cryptoAsDto)
            })
            return cryptosAsDto
        }).catch(error => {
            console.error(error)
            throw error
        })

        return cryptosPromise
    }

    async getCryptoById(id: string): Promise<CryptoDto | undefined> {
        console.log
        const cryptoPromise = await this._cryptoRepository.getCryptoById(id).then(cryptoAsPojo => {
            if (!!cryptoAsPojo)
                return this.parseCryptoPojoIntoDto(cryptoAsPojo)
            else
                return undefined
        }).catch(error => {
            console.error(error)
            throw error
        })
        return cryptoPromise
    }

    async updateCryptoById(crypto: CryptoDto): Promise<string> {
        const cryptoStockPojo: CryptoPojo = crypto as CryptoPojo
        console.log("En el service del pojo(POJO): " + cryptoStockPojo)
        const cryptoPromise = await this._cryptoRepository
            .updateCryptoById(cryptoStockPojo)
            .then((stock) => {
                return stock
            })
            .catch((error) => {
                console.error(error)
                throw error
            })

        return cryptoPromise
    }

    parseCryptoDtoIntoPojo(cryptoDto: CryptoDto): CryptoPojo {
        let cryptoPojo: CryptoPojo = new CryptoPojo()

        cryptoPojo.setDataValue('crypto_id', cryptoDto.crypto_id)
        cryptoPojo.setDataValue('crypto_name', cryptoDto.crypto_name)
        cryptoPojo.setDataValue('value', cryptoDto.value)
        cryptoPojo.setDataValue('asset', cryptoDto.asset)
        cryptoPojo.setDataValue('stock', cryptoDto.stock)

        return cryptoPojo
    }

    parseCryptoPojoIntoDto(cryptoPojo: CryptoPojo): CryptoDto {
        const cryptoDto: CryptoDto = {
            crypto_id: cryptoPojo.dataValues.crypto_id,
            crypto_name: cryptoPojo.dataValues.crypto_name,
            value: cryptoPojo.dataValues.value,
            asset: cryptoPojo.dataValues.asset,
            stock: cryptoPojo.dataValues.stock,
        }
        return cryptoDto
    }
}