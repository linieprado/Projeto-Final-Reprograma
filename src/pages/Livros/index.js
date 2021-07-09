import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'

import Axios from 'axios'
import './styles.css'

const Livros = () => {
    const [livros, setLivro] = useState([]) 
    const [filtroLivro, setFiltroLivro] = useState([])
    const [busca, setBusca] = useState('')

    useEffect(()=>{
        const pegaDados = async () => {
            const resposta = await Axios.get('https://my-json-server.typicode.com/linieprado/book/db')
            const dados = await resposta.data.livros
            setLivro(dados)
        }
        pegaDados()
    },[])

    function addCurtida(id) {
        const novaListaLivros = livros.map(livro => {
            return livro.titulo === id ? 
            {...livro, favorite:!livro.favorite}
            :livro
        })
        setLivro(novaListaLivros)
    }

    useEffect(()=>{
        setFiltroLivro(
            livros.filter(livro => {
                return livro.titulo.includes(busca)
            })
        )
    },[busca, livros])

    return(
        <>
            <Menu />
            <input placeholder="Digite um titulo" onChange={e=>{setBusca(e.target.value)}}/>
            {filtroLivro.map(livro=> (
                <div>
                    <div className="main-livros" >
                    <p>{livro.descricao}</p>
                    <p>{livro.titulo} - {livro.autor}</p>
                    <img src={livro.capa} alt={livro.titulo}/>
                     {livro.favorite && <span>Favorito</span>}
                   <div></div>
                    <button   onClick={()=>addCurtida(livro.titulo)} >Favoritar ❤ <i></i></button>
                    </div>
                </div>
                
            ))}
        </>
    )
}

export default Livros