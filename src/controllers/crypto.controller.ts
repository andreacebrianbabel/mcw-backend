import { CryptoService } from "../services/crypto.service"
const cryptoService: CryptoService = new CryptoService()

export const cryptoController = {
    getAllCryptos: (_req: any, res: any) => {
        cryptoService.getAllCryptos().then(result => {
            res.json(result)

        }).catch(exception => {
            console.error(exception)
            res.sendStatus(500)
        })
    },
}