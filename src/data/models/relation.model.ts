import { Table, Column, Model } from 'sequelize-typescript'
import { STRING, DECIMAL } from 'sequelize'

@Table({
    freezeTableName: true,
    schema: 'public',
    tableName: 'relation',
    createdAt: false,
    updatedAt: false
})
export class RelationPojo extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: false,
        type: STRING,
        field: 'crypto_id'
    })
    crypto_id: string

    @Column({
        primaryKey: true,
        autoIncrement: false,
        type: STRING,
        field: 'user_id'
    })
    user_id: string

    @Column({
        type: DECIMAL,
        field: 'amount'
    })
    amount: number
}