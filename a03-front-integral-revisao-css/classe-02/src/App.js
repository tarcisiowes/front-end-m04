import Card from './components/card'
import globo from './assets/icone-globo.svg'
import lupa from './assets/icone-lupa.svg'
import mapa from './assets/icone-mapa.svg'

import './App.css'

const cards = [
  {
    id:1,
    icon: lupa,
    title: 'Search',
    text: 'Search in any topic you are interested and find any answers you need.',
    buttonText:'Learn more about Search'
  },
  {
    id:2,
    icon: globo,
    title: 'Browser',
    text: 'Search in any topic you are interested and find any answers you need.',
    buttonText:'Learn more about Search'
  },
  {
    id:3,
    icon: mapa,
    title: 'Maps',
    text: 'Search in any topic you are interested and find any answers you need.',
    buttonText:'Learn more about Search'
  }
]

function App() {

  return (
    
    <div className="App">
      <div className="conteiner">

        { cards.map((card) => (
          <div key={ card.id }>
            
            <Card card={ card } />

          </div>
        ))}
             
      </div>

    </div>
  )
}

export default App;
