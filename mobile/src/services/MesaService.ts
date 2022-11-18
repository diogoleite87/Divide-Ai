import Api from "../providers";
import { Mesa } from "../schemas/Models";

const getMesas = () => Api.get<Mesa[]>(`/mesa`)

export const MesaService = {
    getMesas
}
