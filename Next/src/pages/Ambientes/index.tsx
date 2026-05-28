import Header from '@/components/header/header'
import style from './ambientes.module.css'
import { useState } from 'react';
import { listarLocalizacoes } from '../api/localizacao';
import ListaAmbientes from '@/components/listaAmbiente/listaAmbiente';


interface Localizacao {
    nomeLocal: string,
    localSAP: number,
    descricaoSAP: string,
    areaID: string
}

const Ambientes = () => {
    
    const [localizacoes, setLocalizacoes] = useState<Localizacao[]>([]);
    const [pesquisa, setPesquisa] = useState("");
    
    // console.log(pesquisa);
    console.log(localizacoes + "local");
    
    const localizacoesFiltrados = localizacoes.filter((localizacao) =>
        localizacao.nomeLocal?.toLowerCase().includes(pesquisa.toLowerCase()));
    
    // console.log(localizacoesFiltrados + "fghgfgf");

    return (
        <>
            <Header />
            <main className={style.pageContent}>
                <section
                    className={`${style.pageHeader} ${style.layout_guide}`}
                    aria-labelledby="titulo-ambientes"
                >
                    <h1 id={style.tituloAmbientes}>Ambientes</h1>
                    <form className={style.searchArea} role="search">
                        <label htmlFor="pesquisa-ambiente" className={style.srOnly}>
                            Pesquisar ambiente
                        </label>
                        <input
                            type="search"
                            id={style.pesquisaAmbiente}
                            name="pesquisaAmbiente"
                            placeholder="Pesquise o ambiente"
                            value={pesquisa}
                            onChange={(e) => {setPesquisa(e.target.value)}}
                        />
                        <button
                            type="button"
                            className={style.filterButton}
                            aria-label="Filtrar ambientes"
                        >
                            <i className="fa-solid fa-sliders" />
                        </button>
                    </form>
                </section>
                
                <ListaAmbientes />

                <nav className={style.pagination} aria-label="Paginação">
                    <button
                        type="button"
                        className={style.paginationButton}
                        aria-label="Página anterior"
                    >
                        ‹
                    </button>
                    <a href="#" className={`${style.paginationLink} ${style.current}`} aria-current="page">
                        1
                    </a>
                    <a href="#" className={style.paginationLink}>
                        2
                    </a>
                    <a href="#" className={style.paginationLink}>
                        3
                    </a>
                    <button
                        type="button"
                        className={style.paginationButton}
                        aria-label="Próxima página"
                    >
                        ›
                    </button>
                </nav>
            </main>
        </>
    )
}

export default Ambientes;