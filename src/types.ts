export class UserDto {
    user_id: string
    username: string
    password: string
    email: string
    fullname: string
    birthday: number
    deposit: number
}

export type NewUserDto = Omit<UserDto, 'user_id'>

export class CryptoDto {
    crypto_id: string
    crypto_name: string
    value: number
    asset: string
    stock: number
}

export class RelationDto {
    crypto_id: string
    user_id: string
    amount: number
}

export type NewRelationDto = Omit<RelationDto, 'user_id'>