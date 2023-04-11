import { RelationDto } from './../types';
import { NewRelationDto } from "../types"
import { RelationPojo } from '../data/models/relation.model';
import { RelationRepository } from '../data/repositories/relation.repository';

export class RelationService {
    _relationRepository: RelationRepository

    constructor() {
        this._relationRepository = new RelationRepository()
    }

    async getRelationById(user_id: string): Promise<any> {
        return await this._relationRepository.getRelationById(user_id)
            .then(RelationPojo => {
                console.log(RelationPojo)
                return RelationPojo
            })
    }

    parseRelationDtoIntoPojo(relationDto: NewRelationDto): RelationPojo {
        let relationPojo: RelationPojo = new RelationPojo()

        relationPojo.setDataValue('crypto_id', relationDto.crypto_id)
        relationPojo.setDataValue('user_id', null)
        relationPojo.setDataValue('amount', relationDto.amount)

        return relationPojo
    }

    parseRelationPojoIntoDto(relationPojo: RelationPojo): RelationDto {
        const relationDto: RelationDto = {
            crypto_id: relationPojo.dataValues.crypto_id,
            user_id: relationPojo.dataValues.user_id,
            amount: relationPojo.dataValues.amount,
        }
        return relationDto
    }
}