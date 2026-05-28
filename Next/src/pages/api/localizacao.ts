import { api } from "./api";


// interface LocalizacaoListagem {
//     nomeLocal: string,
//     localSAP: number,
//     descricaoSAP: string,
//     areaID: string
// }

export async function listarLocalizacoes() {
    try {
        const response = await api.get("Localizacao");

        console.log(response.data);
        return response;
        
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}