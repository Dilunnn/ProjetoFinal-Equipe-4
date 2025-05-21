import { Link } from 'react-router-dom'
import logo from '../assets/logodigitalcollege.png'
import carrinho from '../assets/Carrinho.png'
import Busca from '../assets/Search.png'



const Navbar = () => {
  return (
    <div className='row justify-content-between align-items-center'>
      <div className="col-5 col-sm-2  text-center">
        <Link to='/'>
          <img src={logo} id='logonavbar' alt="Logo do site" />
        </Link>
      </div>
      <div className="col col-sm-6">
      <form className="d-flex align-items-baseline" role="search">
            <input className="form-control" type="search" placeholder="Tênis" aria-label="Pesquisar" id="BuscaNavbar"/>
            <button className="btn" type="submit">
              <img src={Busca} alt="Buscar" style={{ height: "17px" }} />
            </button>
      </form>

      </div>
      <div id='CadastroNavbar' className="col-1 ">
        {/* Cadastre-se */}
        <Link to='/cadastro' className='text-dark'>
        Cadastre-se
        </Link>
      </div>
      <div id='EntrarNavbar' className="col-1 border btn">
        <Link to='/entrar' id='EntrarNavbar'>Entrar</Link>
      </div>
      <div className="col-2 col-sm-1 text-center">
        <Link to='/carrinho'>
        <img id='CarrinhoNavbar' src={carrinho} alt="Carrinho" />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
