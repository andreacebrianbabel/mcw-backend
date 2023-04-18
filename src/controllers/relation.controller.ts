import { RelationService } from "../services/relation.service"
const relationService: RelationService = new RelationService()

export const relationController = {
    getRelationById: (req: any, res: any) => {
        try {
            const user_id = req.params.id
            relationService.getRelationById(user_id).then(result => {
                res.json(result)
            })

        } catch (exception) {
            console.error(exception)
            res.sendStatus(500)
        }
    },

    updateRelationById: (req: any, res: any) => {
        try {
            const newRelation = req.body

            console.log("updateAmount en el controller: " + newRelation)

            relationService.updateRelationById(newRelation).then((result) => {

                console.log("updateAmount desde controller")
                res.json(result)
            })
        } catch (exception) {
            console.log("Error updateAmount desde el controller")

            console.log(exception)
            res.sendStatus(500)
        }
    },
}