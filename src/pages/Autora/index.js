import React from 'react'
import LinkedIn from '../../assets/linkedin.svg'
import GitHub from '../../assets/git.svg'
import Instagram from '../../assets/insta.svg'
import Perfil from '../../assets/perfil.jpg'
import Menu from '../../components/Menu'
import Form from '../../components/Form'

import '../Autora/styles.css'

const Autora = () =>{
    
    return(
        <>
        < Menu />
            <div className='perfil'>
                <img className='foto-perfil'src={Perfil} alt="Foto autora" />
                <h1 className='tituloperfil'>Sobre Mim...</h1><br/>
                <p>Sejam muito bem vindos!!!<br/><br/>
                    Sou Aline Prado, sempre fui apaixonada por aprender e ensinar. Não é atoa que fiz 2 graduações completas. O novo sempre me atraiu. 
                    E diante do que temos vivido, recomeçar é sempre um presente que não podemos deixar para depois.
                    Não estou fazendo apenas uma transição de carreira, estou agregando mais conhecimento e sabedoria para a minha vida. 
                    E recomeçando em uma nova área que tem aberto meus olhos e me fazendo compreender o mundo de outras formas.</p><br/>
                <p>Minha história com a Programação começou sem eu me dar conta. É uma relação de amor e ódio, mas conseguimos sempre nos acertar. 
                    A Reprograma nos apresentou. E hoje fazemos terapia em vários outros bootcamps.
                    Visite meu GitHub e Netlify tem relatos de nossos encontros!</p><br/>

            <ul>
                <h2 className='titulolista'>Formação</h2>
                <li className='lista'>Desenvolvedora Front End (HTML, CSS, Javascript, React) - REPROGRAMA - Turma ON10 (2021) - Em formação</li>
                <li className='lista'>Pedagoga e Secretária pela Universidade Federal da Bahia</li>
                <li className='lista'>Especialista em Educação Infantil e Alfabetização pela Faculdade Maurício de Nassau</li>
            </ul>
            <ul>
                <h2 className='titulolista'>Soft Skills</h2>
                <li className='lista'>Criatividade</li>
                <li className='lista'>Resiliência</li>
                <li className='lista'>Liderança</li>
                <li className='lista'>Empatia</li>
                <li className='lista'>Comunicação eficaz</li>
                <li className='lista'>Ética</li>
                

            </ul>
            </div>
            <div>
                <h3 className='tituloredes'>Minhas Redes Sociais</h3>

                <div  className='redes'>
                <a className='link' href="https://www.linkedin.com/in/alinepradosilva/">
                <img src={LinkedIn} alt= "Logo LinkedIn"/>
                </a>
                <a className='link' href="https://github.com/linieprado">
                <img src={GitHub} alt= "Logo Github"/>
                </a>
                <a className='link' href="https://www.instagram.com/linieprado/?hl=pt-br">
                <img src={Instagram} alt= "Logo Github"/>
                </a>
                </div>

            </div>     
            < Form />            
             
        </>

    )
}

export default Autora

