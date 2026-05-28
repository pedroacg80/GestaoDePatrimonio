import style from "./card.module.css";
interface Localizacao {
    localizacaoID: string,
    nomeLocal: string,
    localSAP: number,
    descricaoSAP: string,
    areaID: string
}

const Card = ({ nomeLocal, localSAP, descricaoSAP, areaID, localizacaoID }: Localizacao) => {
    return (
        <tbody>
            <tr className={style.environmentTable}>
                <td>{nomeLocal}</td>
                <td>{areaID}</td>
                <td>
                    Samanta Melissa
                </td>
            </tr>
        </tbody>
    )
}
export default Card;