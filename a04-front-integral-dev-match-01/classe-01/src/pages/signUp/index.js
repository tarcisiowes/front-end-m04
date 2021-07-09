import './styles.css'
import { Link } from 'react-router-dom'
import AllRightReserved from '../../components/allrightreserved'
import InputPassword from '../../components/inputpassword'
import { useState } from 'react'





export default function SignUp() {
  
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
              <input id="cep" type="text" placeholder="Digite seu cep" />
              
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
              <input id="city" type="text" placeholder="Digite seu cidade" />
              
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