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
}