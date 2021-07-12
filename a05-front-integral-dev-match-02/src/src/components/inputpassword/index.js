import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


export default function InputPassword({ label, placeholder, value, setValue }) {
    
  const [showPassword, setShowPassword] = useState(false)

  return (
    
    <div className="flexColunm inputPassword" >

      <label htmlFor="password" >{ label }</label>
      <input id="password" type={ showPassword ? "text" : "password" } placeholder={ placeholder } value={ value } onChange={ (e) => setValue(e.target.value) }/>

      <FontAwesomeIcon className="eyePassword" icon={ showPassword? faEyeSlash: faEye } onClick={() => setShowPassword(!showPassword)} size="lg" />
          
    </div>
  )
}