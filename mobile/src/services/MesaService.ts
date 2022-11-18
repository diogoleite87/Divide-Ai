import Api from "../providers";
import { Mesa } from "../schemas/Models";

const getMesas = () => Api.get<Mesa[]>(`/mesa`)
const deleteMesa = (id: number) => Api.delete(`/mesa/${id}`)

export const MesaService = {
    getMesas,
    deleteMesa
}
