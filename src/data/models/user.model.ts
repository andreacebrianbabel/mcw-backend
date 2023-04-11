import { Table, Column, Model } from 'sequelize-typescript'
import { STRING, DECIMAL } from 'sequelize'

@Table({
    freezeTableName: true,
    schema: 'public',
    tableName: 'users',
    createdAt: false,
    updatedAt: false
})
export class UserPojo extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: false,
        type: STRING,
        field: 'user_id'
    })
    user_id: string

    @Column({
        type: STRING,
        field: 'username'
    })
    username: string
    
    @Column({
        type: STRING,
        field: 'fullname'
    })
    fullname: string

    @Column({
        type: STRING,
        field: 'password'
    })
    password: string

    @Column({
        type: STRING,
        field: 'email'
    })
    email: string

    @Column({
        type: DECIMAL,
        field: 'deposit'
    })
    deposit: number
}