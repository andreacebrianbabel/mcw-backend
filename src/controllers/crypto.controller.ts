import { CryptoService } from "../services/crypto.service"
const cryptoService: CryptoService = new CryptoService()

export const cryptoController = {
    getAllCryptos: (_req: any, res: any) => {
        cryptoService.getAllCryptos().then(result => {
            res.json(result)

        }).catch(excepcion => {
            console.error(excepcion)
            res.sendStatus(500)
        })
    },
}