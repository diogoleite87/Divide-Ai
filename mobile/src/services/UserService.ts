import Api from "../providers";
import { Profile } from "../schemas/Models";

const getProfile = () => Api.get<Profile>(`/profile`)

export const UserService = {
    getProfile
}
