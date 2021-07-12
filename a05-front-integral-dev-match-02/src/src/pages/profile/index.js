import './styles.css'
import InputPassword from '../../components/inputpassword'
import { useState, useEffect } from 'react'
import { getCityByCep } from '../../services/viacep'
import { toast } from 'react-toastify';
import photo from '../../assets/photo.svg'
import Chip from '@material-ui/core/Chip'
import { Link } from 'react-router-dom'
import CancelPresentationTwoToneIcon from '@material-ui/icons/CancelPresentationTwoTone'
import PopUp from '../../components/popup'



export default function SignUp() {
  
  const [password, setPassword] = useState('')
  const [cep, setCep] = useState('')
  const [city, setCity] = useState('')

  async function loadCityByCep(myCep) {
    
    const cityByCep = await getCityByCep(myCep)

    if (!cityByCep) {

      toast.error("Digite um CEP válido", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      
      return
    }
    
    setCity(cityByCep)
  }

  useEffect(() => {

    if (cep.length < 9 && city.length > 0) {
      setCity('')
    }

    if (cep.indexOf('-') !== -1) {
      
      if (cep.length === 9) {
        
        loadCityByCep(cep)
      }
      return
    }

    if (cep.length === 8) {
      loadCityByCep(cep)
    }

  }, [cep])
  

  return (
    <div className="conteinerProfile ">

      <Link to="/">
        <CancelPresentationTwoToneIcon className="closeIcon" color="secondary" style={{ fontSize: 70  }}/>
      </Link>
      <form className="formRegister form">

        <div className="textCenter mb1rem">

          <h1>Perfil</h1>

        </div>

        <div className="bodyProfile">
          <div className="formProfile flexColunm">

            <label htmlFor="name" >Nome</label>
            <input id="name" type="text" placeholder="Digite seu nome" />
            
            <label htmlFor="email" >E-mail</label>
            <input id="email" type="text" placeholder="Digite seu email" />

            <label htmlFor="cep" >CEP</label>
            <input id="cep" type="text" placeholder="Digite seu cep" value={ cep } onChange={ (e) => setCep(e.target.value) } maxLength={ 9 }/>
            
            <label htmlFor="city" >Cidade</label>
            <input id="city" type="text" placeholder="Digite seu cidade" value={ city } onChange={ (e) => setCity(e.target.value) } />
            
            <InputPassword label="Senha" placeholder="Digite sua senha" value={ password } setValue={ setPassword } />
              
            <h1>Habilidades</h1>
          <div className="skills flexRow gap03rem ">

            <Chip style={ { backgroundColor: '#505DD1' } } label="nodejs" />
            <Chip style={ { backgroundColor: '#505DD1' } } label="React" />
            <Chip style={ { backgroundColor: '#505DD1' } } label="ExpressJs" />
            
            <PopUp/>

          </div>
          </div>

          <div className="flexColunm contentCenter itemsCenter">

            <div className="photoProfile ">

             <img src={photo} alt="foto perfil"/>

            </div>

            <Link to="/">
            <button className="btnDarkBlue mt2rem">Salvar alterações</button>
            </Link>
              
          </div>

        </div>

      </form>
    </div>
  )
}