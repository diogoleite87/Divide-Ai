import Api from "../providers";
import { CreateUserDTO } from "../schemas/DTO";
import { Profile } from "../schemas/Models";

const getProfile = () => Api.get<Profile>(`/profile`)
const createUser = (user: CreateUserDTO) => Api.post<void>('/user', user)

export const UserService = {
    getProfile,
    createUser
}
