import { RelationPojo } from './../models/relation.model';
import { connect } from "../config/db.config";
import { QueryTypes } from 'sequelize';

export class RelationRepository {
    _database: any = {}
    _relationRepository: any

    constructor() {
        this._database = connect()
        this._relationRepository = this._database.sequelize.getRepository(RelationPojo)
    }

    async getRelationById(user_id: string): Promise<any> {
        try {
            return await this._database.sequelize.query('select user_id, relation.crypto_id, crypto_name, value, asset, stock, amount from crypto full join relation on crypto.crypto_id = relation.crypto_id where user_id = ?',
                {
                    replacements: [user_id],
                    type: QueryTypes.SELECT
                })
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    async updateRelationById(newRelation: RelationPojo): Promise<string> {
        const data = await this._relationRepository.findOne({where: {
            user_id: newRelation.user_id,
            crypto_id: newRelation.crypto_id
        }})
        if (!!data) {
            this._relationRepository.update({ amount: newRelation.amount }, {where: {
                user_id: newRelation.user_id,
                crypto_id: newRelation.crypto_id
            }})
            return data
        } else {
            this._relationRepository.create(newRelation)
            return "Created new relation"
        }
    }
}