import { Table, Column, Model } from 'sequelize-typescript'
import { STRING, DECIMAL } from 'sequelize'

@Table({
    freezeTableName: true,
    schema: 'public',
    tableName: 'crypto',
    createdAt: false,
    updatedAt: false
})
export class CryptoPojo extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: false,
        type: STRING,
        field: 'crypto_id'
    })
    crypto_id: string

    @Column({
        type: STRING,
        field: 'crypto_name'
    })
    crypto_name: string

    @Column({
        type: DECIMAL,
        field: 'value'
    })
    value: number

    @Column({
        type: STRING,
        field: 'asset'
    })
    asset: string

    @Column({
        type: DECIMAL,
        field: 'stock'
    })
    stock: number

    createdAt: Date
    updatedAt: Date
}