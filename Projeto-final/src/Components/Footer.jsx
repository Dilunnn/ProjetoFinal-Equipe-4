import logo_branca from '../assets/logo-do-site-branca.png'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
    <div className="container">
        <div className="row">
            
            <div className="col-md-3">
                <h5 className="mb-3"><img src={logo_branca} alt="logo branca" /> Digital Store</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore.</p>
                <div>
                    <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="text-white me-2"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="text-white"><i className="bi bi-twitter"></i></a>
                </div>
            </div>

            <div className="col-md-3">
                <h6 className="text-uppercase mb-3 border-start border-primary ps-2">Informação</h6>
                <ul className="list-unstyled">
                    <li><a href="#" className="text-white text-decoration-none">Sobre Drip Store</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Segurança</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Wishlist</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Trabalhe conosco</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Meus Pedidos</a></li>
                </ul>
            </div>

            <div className="col-md-3">
                <h6 className="text-uppercase mb-3">Categorias</h6>
                <ul className="list-unstyled">
                    <li><a href="#" className="text-white text-decoration-none">Camisetas</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Calças</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Bonés</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Headphones</a></li>
                    <li><a href="#" className="text-white text-decoration-none">Tênis</a></li>
                </ul>
            </div>

            <div className="col-md-3">
                <h6 className="text-uppercase mb-3">Contato</h6>
                <p className="mb-1">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                <p>(85) 3051-3411</p>
            </div>
        </div>

        <hr className="border-secondary mt-4" />
        <div className="text-center">
            <small>&copy; 2025 Digital College</small>
        </div>
    </div>
</footer>

  )
}

export default Footer
