import { RelationService } from "../services/relation.service"
const relationService: RelationService = new RelationService()

export const relationController = {
    getRelationById: (req: any, res: any) => {
        try {
            const user_id = req.params.id
            relationService.getRelationById(user_id).then(result => {
                res.json(result)
            })

        } catch (excepcion) {
            console.error(excepcion)
            res.sendStatus(500)
        }
    },

    // updateRelationAmountById: (req: any, res: any) => {
    //     try {
    //         const newAmount = req.body.user
    //         const user_id = req.body.user_id

    //         console.log("updateAmount Body: " + req.body.user_id)
    //         console.log("updateAmount en el controller: " + newAmount)

    //         relationService.updateRelationAmountById(newAmount).then((result) => {

    //             console.log("updateAmount desde controller")
    //             res.json(result)
    //         })
    //     } catch (exception) {
    //         console.log("Error updateAmount desde el controller")

    //         console.log(exception)
    //         res.sendStatus(500)
    //     }
    // },

    // getCryptoById: (req: any, res: any) => {
    //     try {
    //         const crypto_id = req.params.crypto_id
    //         const user_id = req.params.user_id

    //         relationService.getCryptoById(crypto_id, user_id).then(result => {
    //             res.json(result)
    //         })
    //     }
    //     catch (excepcion) {
    //         console.error(excepcion)
    //         res.sendStatus(500)
    //     }
    // }
}