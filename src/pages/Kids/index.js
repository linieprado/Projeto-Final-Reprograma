import React from 'react'
import Lista from './../../assets/li.jpg'
import Scratch from './../../assets/scratch.jpg'
import Hora from '../../assets/hora.jpg'
import Code from '../../assets/code.jpg'
import Alice from '../../assets/alice.jpg'
import Block from '../../assets/block.jpg'
import Twine from '../../assets/twine.jpg'
import Swift from '../../assets/swift.jpg'



import Menu from '../../components/Menu'

import '../Kids/styles.css'

const Kids = () =>{
    
    return(
        <>
        < Menu />
            <main>
            <h1 className='titulo-artigo'>A Importância do Ensino de  Programação para Crianças</h1><br/>
            <section className='site-section'>
                    <article className= 'artigo-site'>
                    <p> Informática é coisa de criança também!E envolvê-los nesse mundo desde cedo pode favorecer inúmeros benefícios
                        para o seu desenvolvimento. E esses benefícios vão muito além do que simplesmente a inserção e atratividade
                        desde cedo no ambiente profissional da programação. <i>Programar</i> desenvolve o raciocício lógico matemárico, 
                        estimula a criatividade, as interações sociais, autonomia, dentre muitos outros aspectos, sociais, cognitivos e emocionais.<br/><br/>
                        A <i>linguagem de programação</i> é composta por códigos complexos que requer capacidade de análise, lógica e crítica, desenvolvendo
                        lado esquerdo do cérebro da criança. Constatemente a criança é desafiada a pensar em ideias inovadoras e usar sua criatividade, afim
                        de solucionar problemas do seu dia-a-dia com mais facilidade.<br/><br/> Com a <i>prática da programação</i>, as crianças poderão aprender a lidar
                        com as frustrações, ao por exemplo, não conseguir executar um código, ou perceber seus erros, tendo em vista, a sensibilidade da linguagem.
                        Como uma <i>linguagem a programação</i> ajuda a criança na organização dos pensamentos, na comunicação fazendo com que elas articulem seu pensamento
                        e consiga dialogar melhor. <br/><br/> Contribui para uma melhor concentração no estudo de disciplinas lógicas e exatas como matemática, física e química.
                        Aprimora e estimula o trabalho em equipe, se provocada a entrar e contato com outras crianças que também estudam ou codam.

                        </p>
                    <img className='imagem'src={Lista} alt="imagem escrita" />
                </article>
            </section>
            <section className='display-section'>
            <h2 className='titulo-display'>Plataformas de Programação para Crianças</h2>
            <ul className='display-section'>                
                <li>
                <img src={Scratch} alt="Site scratch"/>
                <a href="https://scratch.mit.edu/">Scratch</a>
                </li>
                
                <li>
                <img src={Hora} alt="Site hora do código"/>
                <a href="https://hourofcode.com/br">Hora do Código</a>
                </li>
                
                <li>
                <img src={Code} alt="Site code combat"/>
                <a href="https://br.codecombat.com/">Code Combat</a>
                </li>

                <li>
                <img src={Alice} alt="Site alice"/>
                <a href="https://www.alice.org/">Alice</a>  
                </li>

                <li>
                <img src={Block} alt="Site block"/>
                <a href="https://blockly.games/">Blocky Games</a>
                </li>

                <li>
                <img src={Twine} alt="Site twine"/>
                <a href="http://twinery.org/">Twine</a>    
                </li>

                <li>
                <img  src={Swift} alt="Site swift"/>
                <a href="https://www.apple.com/swift/playgrounds/">Swift Playgrounds</a>  
                </li>

            </ul>
            </section>
            </main>
           
        </>
    )
}

export default Kids