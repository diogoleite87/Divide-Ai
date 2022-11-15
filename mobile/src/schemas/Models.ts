export type AuthData = {
    user: {
        id: number
        name: string
        email: string
        created_at: string
        updated_at: string
    },
    token: string
}

export type Profile = {
    id: number
    name: string
    email: string
    created_at: string
    updated_at: string
}
