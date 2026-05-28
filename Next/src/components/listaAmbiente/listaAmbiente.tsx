import { useEffect, useState } from "react";
import Card from "../card/card";
import style from "./listaAmbiente.module.css";
import { listarLocalizacoes } from "@/pages/api/localizacao";

interface Localizacao {
    localizacaoID: string,
    nomeLocal: string,
    localSAP: number,
    descricaoSAP: string,
    areaID: string
}


const ListaAmbientes = () => {

    const [localizacoes, setLocalizacoes] = useState<Localizacao[]>([]);
    const [pesquisa, setPesquisa] = useState("");

    async function listar() {
        try {
            const lista = await listarLocalizacoes();
            setLocalizacoes(lista.data);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        listar();
    }, [])



    const localizacoesFiltradas = localizacoes.filter((localizacao) =>
        localizacao.nomeLocal.toLowerCase().includes(pesquisa.toLowerCase()));
    return (
        <>
            
            <section
                className={`${style.tableSection} ${style.layout_guide}`}
                aria-label="Lista de ambientes"
            >
                <table className={style.environmentTable}>
                    <thead>
                        <tr>
                            <th>Local</th>
                            <th>Área</th>
                            <th>Responsável</th>
                        </tr>
                    </thead>
                    {localizacoes.length > 0 ? localizacoes.map((item) => (
                        <Card
                            key={item.localizacaoID}
                            localizacaoID={item.localizacaoID}
                            nomeLocal={item.nomeLocal}
                            localSAP={item.localSAP}
                            descricaoSAP={item.descricaoSAP}
                            areaID={item.areaID}
                        />
                    )) : (
                        <thead>
                            <tr>
                                <th>
                                    Nenhuma localizacao encontrada
                                </th>
                            </tr>
                        </thead>
                    )}
                </table>
            </section>
        </>
    )
}
export default ListaAmbientes;