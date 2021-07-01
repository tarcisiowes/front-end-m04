
import imgs2 from '../../assets/coracao.svg'
import xClose from '../../assets/botao-fechar.svg'
import './style.css'

export default function Card2() {

  return (

    <div className="card2">
      <div className="topo2">

        <img src={ xClose } alt='botao de fechar pg' className="xclose2" />
        
      </div>
      <div className="conteudo2">

        <img src={ imgs2 } alt='imagem coracao' />
        
        <div className="mensagens">

          <h2>Thank you, James!</h2>
          <p>We’ll use your feedback to improve our customer support performance.</p>

        </div>
        <div className="areaBotao">

          <span>Write a comment</span>
          <button>Done</button>
          
        </div>
      </div>
    </div>
  )
}