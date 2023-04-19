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

    getCryptoById: (req: any, res: any) => {
        try {
            const crypto_id = req.params.id
            cryptoService.getCryptoById(crypto_id).then(result => {
                res.json(result)
                console.log(result)
            })

        } catch (exception) {
            console.error(exception)
            res.sendStatus(500)
        }
    },

    updateCryptoById: (req: any, res: any) => {
        try {
            const newCrypto = req.body

            console.log("newCrypto en el controller: " + newCrypto)

            cryptoService.updateCryptoById(newCrypto).then((result) => {
                console.log("newCrypto desde controller")
                res.json(result)
            })
        } catch (exception) {
            console.log("Error newCrypto desde el controller")

            console.log(exception)
            res.sendStatus(500)
        }
    },
}