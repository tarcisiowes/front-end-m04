import './styles.css'
import { Link } from 'react-router-dom'


export default function SignIn() {

  return (
    <div className="conteinerForm">

      <form className="formLogin">

        <div className="textCenter mb1rem">

          <h1>Entrar</h1>
          <Link to="/register">Cadastre-se</Link>

        </div>

        <div className="flexColunm">

          <label htmlFor="email" >E-mail</label>
          <input id="email" type="text" placeholder="Digite seu email" />
          
        </div>

        <div className="flexColunm">

          <label htmlFor="password" >Senha</label>
          <input id="password" type="password" placeholder="Digite sua senha" />

          <button className="btnDarkBlue">Entrar</button>
          
        </div>

        <div>

          <input type="checkbox" value="Lembrar-me" name="remember" />
          <span htmlFor="remember" >Lembrar-me</span>

        </div>

        <Link to="/forgotpassword" className="my1rem">Esqueci minha senha</Link> <br/>
        <span className="lightLabel" >@2021 Todos os direitos reservados Tarcisio wesley</span>
      </form>
    </div>
  )
}