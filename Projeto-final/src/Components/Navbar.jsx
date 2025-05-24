import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="row w-100 align-items-center">
            <div className="col-4 d-flex align-items-center">
              <Link
                to="/"
                className="navbar-brand d-flex align-items-center gap-2"
              >
                <img
                  src="/logodigitalcollege.png"
                  alt="Group Logo"
                  height="30"
                  className="d-inline-block align-text-top"
                />
              </Link>
            </div>

            <div className="col-4">
              <form className="d-flex">
                <input
                  id="BuscaNavbar"
                  className="form-control"
                  type="search"
                  placeholder="Pesquisar produto..."
                  aria-label="Search"
                />
                <button className="btn" type="submit">
                  <img src="/Search.png" alt="Buscar" height="20" />
                </button>
              </form>
            </div>

            <div className="col-4 d-flex justify-content-end align-items-center gap-2">
              <Link to="/Cadastro" id="CadastroNavbar" className="btn fw-bold">
                Cadastre-se
              </Link>
              <Link to="/Entrar" id="EntrarNavbar" className="btn">
                Entrar
              </Link>

              {/* Carrinho com hover */}
              <div className="carrinho-hover">
                <Link to="/carrinho">
                  <img src="/Carrinho.png" alt="Carrinho" height="30" />
                  <span className="carrinho-numero">2</span>
                </Link>

                {/* Lista que aparece no hover */}
                <div className="carrinho-lista">
                  <h6 style={{ color: 'black' }}>Meu Carrinho</h6>

                  <div className="item">
                    <div>
                      <img src="Imagens/White-Sneakers-PNG-Clipart 2.png" alt="tenis" />
                      <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
                      <small>Qtd: 1</small>
                    </div>

                    <span style={{ color: '#C92071' }}> R$219</span>
                  </div>

                  <div className="item">
                    <div>
                      <img src="Imagens/White-Sneakers-PNG-Clipart 2.png" alt="tenis" />
                      <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
                      <small>Qtd: 1</small>
                    </div>
                    <span style={{ color: '#C92071' }}>R$219</span>
                  </div>

                  <div className="total">
                    <strong>Total: <span style={{ color: '#C92071' }}>R$ 438</span></strong>
                  </div>

                  <Link to="/carrinho" >
                    <button className="btn-ver">Ver Carrinho</button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </nav>

      <br />

      <ul className="nav nav-underline container">
        <li className="nav-item">
          <a className="nav-link active" href="#" style={{ color: '#C92071' }}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="/Projeto-final-equipe-5/Lista de produtos/lista_de_produtos.html"
            style={{ color: 'black' }}
          >
            Produtos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: 'black' }}>
            Categorias
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="/Projeto-final-equipe-5/Detalhes/detalhes.html"
            style={{ color: 'black' }}
          >
            Meus Pedidos
          </a>
        </li>
      </ul>


      {/* CSS do Carrinho */}
      <style jsx>{`
        .carrinho-hover {
          position: relative;
        }

        .carrinho-numero {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #C92071;
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carrinho-lista {
          position: absolute;
          top: 40px;
          right: 0;
          width: 250px;
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 15px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          display: none;
          z-index: 1000;
        }

        .carrinho-hover:hover .carrinho-lista {
          display: block;
        }

        .item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }

        .item p {
          margin: 0;
          font-size: 14px;
        }

        .item small {
          color: #666;
        }

        .total {
          padding-top: 10px;
          text-align: center;
          margin-top: 10px;
          border-top: 1px solid #eee;
        }

        .btn-ver {
          width: 100%;
          padding: 8px;
          margin-top: 10px;
          background: #C92071;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .btn-ver:hover {
          background: #A1156F;
        }
      `}</style>
    </>
  );
};

export default Navbar;