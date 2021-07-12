import './styles.css'
import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'
import logoMain from '../../assets/logoMain.svg'
import React from 'react'
import Chip from '@material-ui/core/Chip'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import DeleteIcon from '@material-ui/icons/Delete'




export default function Main() {

  return (

    <div className="conteinerMain ">
      <Link to="/profile">
        <AccountCircleIcon className="accIcon" style={{ fontSize: 70 }}/>
      </Link>
      <div className="homeInfo">
        <img className="logoMain" src={ logoMain } alt="logo"/>
        <h1>Google</h1>
        <h2>Descrição</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et pellentesque risus tempor blandit. Eu nibh et at dignissim diam, donec adipiscing. Suspendisse imperdiet mauris in enim diam, tortor id aliquet sagittis. Aliquam arcu, et proin phasellus porta aliquet suscipit. Sed nunc, nam sem placerat aliquam vitae vel hendrerit ullamcorper. Vel faucibus quisque diam pulvinar quam. Neque nibh est tellus lacus malesuada egestas volutpat sit vitae. Nunc mollis pellentesque netus sollicitudin id egestas convallis. Posuere tellus amet ultricies arcu commodo vitae in in. Sed bibendum enim at ut condimentum pulvinar vulputate suspendisse diam. Porta tempus ornare ac nulla tristique eleifend libero cursus. Pellentesque felis ornare gravida viverra cursus eget curabitur feugiat. Urna, velit ornare vitae facilisi egestas est. Amet nibh porttitor scelerisque felis felis enim. Id pellentesque ut porta nec sed a, cursus. Platea sem odio ornare ut varius fermentum, facilisis id. A, amet ut sit eu nisl. Mattis molestie urna lacus aliquet tempus semper a sapien. Eget aliquet risus commodo, nulla tellus. Sem et in in diam enim, nunc erat egestas leo. Enim id ultrices platea habitant quis egestas. Duis gravida quam molestie.</p>

        <h2>Requisitos</h2>
        <div className="flexRow gap03rem">
          <Chip style={ { backgroundColor:'#505DD1' } } label="nodejs" />
          <Chip style={ { backgroundColor:'#505DD1' } } label="React" />
          <Chip style={ { backgroundColor:'#505DD1' } } label="ExpressJs" />
        </div>


        <h2>Senioridade</h2>
        <p>Pleno</p>

        <h2>Salario / Benefícios</h2>
        <p>R$ 5.200,00 / VT, VA, Plano de saúde, Gympass, Auxílio Home Office</p>

        <div className="flexRow contentCenter mb2rem gap2rem">

          <FavoriteBorderIcon  style={ { color: 'green', fontSize: 50 } } />  <DeleteIcon style={{ fontSize: 50 }} color='secondary' />

        </div>

      </div>
    </div>
  )
}