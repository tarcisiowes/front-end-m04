import './styles.css'
import { Link } from 'react-router-dom'


export default function SignUp() {

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

            <div className="flexColunm">

              <label htmlFor="password" >Senha</label>
              <input id="password" type="password" placeholder="Digite sua senha" />

            </div>
            
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

            <div className="flexColunm">

              <label htmlFor="confirmPassword" >Confirme sua senha</label>
              <input id="confirmPassword" type="password" placeholder="Digite sua senha novamente" />

            </div>
            
          </div>
        </div>

        <button className="btnDarkBlue">Cadastrar</button>
        <span className="lightLabel" >@2021 Todos os direitos reservados Tarcisio wesley</span>
      </form>
    </div>
  )
}