import efeliz from '../../assets/emoji-feliz.svg'
import eneutro from '../../assets/emoji-neutro.svg'
import etriste from '../../assets/emoji-triste.svg'
import xClose from '../../assets/botao-fechar.svg'
import './style.css'

export default function Card1() {

  return (
    <div className="card1">
      <div className="topo">

        <img src={ xClose } alt='botao de fechar pg' className="xclose" />
        
      </div>
      <div className="conteudo">

        <h3> How satisfied are you with our customer support performance? </h3>

        <div className="emojis">

          <img src={efeliz} alt='emoji feliz'/>
          <img src={eneutro} alt='emoji neutro'/>
          <img src={ etriste } alt='emoji feliz' />
          
        </div>

        <button>Close</button>
        
      </div>
    </div>
  )
}