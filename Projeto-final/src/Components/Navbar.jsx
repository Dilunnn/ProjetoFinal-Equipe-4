import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='row'>
      <div className="col">
        <Link to='/'>
        Home 
        {/* depois adicionar a logo */}
        </Link>
      </div>
      <div className="col">
        {/* Barra de pesquisa */}

      </div>
      <div className="col">
        {/* Cadraste-se */}
        <Link to='/cadrasto'>
        Cadraste-se
        </Link>
      </div>
      <div className="col">
        {/* Entrar */}
        <Link to='/entrar'>Entrar</Link>
      </div>
      <div className="col">
        {/* Carrinho */}
        <Link to='/carrinho'>Carrinho 
        {/* depois adicionar o icon do carrinho */}
        </Link>
      </div>
    </div>
  )
}

export default Navbar
