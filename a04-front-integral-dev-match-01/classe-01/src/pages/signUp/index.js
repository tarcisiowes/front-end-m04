import './styles.css'
import { Link } from 'react-router-dom'
import AllRightReserved from '../../components/allrightreserved'
import InputPassword from '../../components/inputpassword'
import { useState, useEffect } from 'react'
import { getCityByCep } from '../../services/viacep'
import { toast } from 'react-toastify';



export default function SignUp() {
  
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
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
    <div className="conteinerForm ">

      <form className="formRegister form">

        <div className="textCenter mb1rem">

          <h1>Cadastre-se</h1>
          <Link to="/login">Entrar</Link>

        </div>

        <div className="bodyRegister">
          <div className="bodyregister">
            <div className="flexColunm">

              <label htmlFor="name" >Nome</label>
              <input id="name" type="text" placeholder="Digite seu nome" />
              
            </div>

            <div className="flexColunm">

              <label htmlFor="cep" >CEP</label>
              <input id="cep" type="text" placeholder="Digite seu cep" value={ cep } onChange={ (e) => setCep(e.target.value) } maxLength={ 9 }/>
              
            </div>

            <InputPassword label="senha" placeholder="Digite sua senha" value={password} setValue={setPassword} />
            
          </div>

          <div className="bodyregister">
            <div className="flexColunm">

              <label htmlFor="email" >E-mail</label>
              <input id="email" type="text" placeholder="Digite seu email" />
              
            </div>

            <div className="flexColunm">

              <label htmlFor="city" >Cidade</label>
              <input id="city" type="text" placeholder="Digite seu cidade" value={ city } onChange={ (e) => setCity(e.target.value) } />
              
            </div>

            <InputPassword label="Confirme sua senha" placeholder="Digite sua senha novamente" value={confirmPassword} setValue={setConfirmPassword} />
            
          </div>
        </div>

        <button className="btnDarkBlue">Cadastrar</button>
        <AllRightReserved/>
      </form>
    </div>
  )
}