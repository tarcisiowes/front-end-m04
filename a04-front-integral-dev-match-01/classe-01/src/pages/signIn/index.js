import './styles.css'
import { Link } from 'react-router-dom'
import AllRightReserved from '../../components/allrightreserved'
import InputPassword from '../../components/inputpassword'
import { useState } from 'react'



export default function SignIn() {

  const [password, setPassword] = useState('')
    
  return (
    <div className="conteinerForm ">

      <form className="formLogin form">

        <div className="textCenter mb1rem">

          <h1>Entrar</h1>
          <Link to="/register">Cadastre-se</Link>

        </div>

        <div className="flexColunm">

          <label htmlFor="email" >E-mail</label>
          <input id="email" type="text" placeholder="Digite seu email" />
          
        </div>

        <InputPassword label="senha" placeholder="Digite sua senha" value={password} setValue={setPassword} />
        
        <button className="btnDarkBlue">Entrar</button>

        <div className="flexRow itemsCenter">

          <input type="checkbox" value="Lembrar-me" name="remember" />
          <span htmlFor="remember" >Lembrar-me</span>

        </div>

        <Link to="/forgotpassword" className="my1rem">Esqueci minha senha</Link>
        <AllRightReserved/>
      </form>
    </div>
  )
}