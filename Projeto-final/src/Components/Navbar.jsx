import { Link } from 'react-router-dom';
import logoImg from '../assets/logodigitalcollege.png';
import cartImg from '../assets/Carrinho.png';
import buscaImg from '../assets/Search.png';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="row w-100 align-items-center">
            <div className="col-4 d-flex align-items-center">
              <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
                <img src={logoImg} alt="Group Logo" height="30" className="d-inline-block align-text-top" />
              </Link>
            </div>

            <div className="col-4">
              <form className="d-flex">
                <input id='BuscaNavbar' className="form-control" type="search" placeholder="Tênis" aria-label="Search" />
                <button className="btn" type="submit">
                  <img src={buscaImg} alt="Buscar" height="20" />
                </button>
              </form>
            </div>

            <div className="col-4 d-flex justify-content-end align-items-center gap-2">
              <Link to="/Cadastro" id='CadastroNavbar' className="btn fw-bold">
                Cadastre-se
              </Link>
              <Link to="/Entrar" id='EntrarNavbar' className="btn">
                Entrar
              </Link>
              <Link to="/carrinho"><img src={cartImg} alt="Carrinho" height="30" /></Link>
            </div>
          </div>
          <div className='row'>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
