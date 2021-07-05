
import './style.css'

export default function Card({card}) {

  return (

    <div className="card" >

      <img src={ card.icon } alt='imagem logo' />

      <h2>{ card.title }</h2>
      <p>{ card.text }</p>

      <button>{ card.buttonText }</button>

    </div>
  )
}