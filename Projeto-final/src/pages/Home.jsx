import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      {/* Seção Principal */}
      <section className={styles.hero} style={{ backgroundColor: '#f8f9fa' }} >
        <div className={styles.heroText}>
          <span className={styles.destaque} style={{ color: '#F6AA1C' }}>
            Melhores ofertas personalizadas
          </span>
          <h1>
            Queima de estoque Nike <span>🔥</span>
          </h1>
          <p>
            Consequat culpa exercitation mollit nisi excepteur do do tempor
            laboris eiusmod irure consectetur.
          </p>
          <button className={styles.btnHero}>Ver Ofertas</button>
        </div>
        <div className={styles.heroImg}>
          <img src="Imagens/White-Sneakers-PNG-Clipart 1.svg" alt="Tênis Nike" />
        </div>
      </section>

      {/* Coleções em Destaque */}
      <div className="container py-5">
        <h5 className="fw-bold mb-4">Coleções em destaque</h5>
        <div className="row g-4">

          <div className="col-md-4">
            <div className={styles.cardCustom}>
              <span className={styles.badgeDesconto}>30% OFF</span>
              <h5 className="mt-3">
                Novo drop <br />
                <strong>Supreme</strong>
              </h5>
              <button className={styles.btnComprar}>Comprar</button>
              <img
                src="Imagens/Mask group.svg"
                alt="Supreme"
                className={styles.cardImg}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.cardCustom}>
              <span className={styles.badgeDesconto}>30% OFF</span>
              <h5 className="mt-3">
                Coleção <br />
                <strong>Adidas</strong>
              </h5>
              <button className={styles.btnComprar}>Comprar</button>
              <img
                src="Imagens/ddd 1.svg"
                alt="Adidas"
                className={styles.cardImg}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.cardCustom}>
              <span className={styles.badgeDesconto}>30% OFF</span>
              <h5 className="mt-3">
                Novo <br />
                <strong>Beats Bass</strong>
              </h5>
              <button className={styles.btnComprar}>Comprar</button>
              <img
                src="Imagens/d9db11953a2d185d37246bb1f500c957 1.svg"
                alt="Beats"
                className={styles.cardImg}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Ícones de Categorias */}
      <div className="container text-center py-4">
        <h3 className={styles.destaque}>Coleções em Destaque</h3> <br />
        <div className={styles.icones}>

          <img src="Imagens/Frame 10.png" alt="Camisa" />
          <img src="Imagens/Frame 11.png" alt="Calça" />
          <img src="Imagens/Frame 13.png" alt="Tênis" />
          <img src="Imagens/Frame 14.png" alt="Fone" />
        </div>
      </div>

      {/* Produtos em Alta */}
      <section className="container py-5">
        <h2 className={`text-center mb-4 ${styles.titulo}`}>Produtos em Alta</h2>

        <div className="row g-4 mb-4">
          <div className="col-lg-3 col-md-6">
            <div className={styles.card}>
              <span className={styles.badgeDesconto}>30% OFF</span>
              <img
                src="Imagens/Layer 1aa 2.png"
                alt="Tênis K-Swiss V8 Masculino"
                className="img-fluid"
              />
              <p className={styles.categoria}>Tênis</p>
              <p className={styles.nome}>K-Swiss V8 - Masculino</p>
              <div className={styles.precos}>
                <p className={styles.precoAntigo}>R$200</p>
                <p className={styles.precoNovo}>R$100</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className={styles.card}>
              <span className={styles.badgeDesconto}>30% OFF</span>
              <img
                src="Imagens/Layer 1aa 2.png"
                alt="Tênis K-Swiss V8 Masculino"
                className="img-fluid"
              />
              <p className={styles.categoria}>Tênis</p>
              <p className={styles.nome}>K-Swiss V8 - Masculino</p>
              <div className={styles.precos}>
                <p className={styles.precoAntigo}>R$200</p>
                <p className={styles.precoNovo}>R$100</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className={styles.card}>
              <img
                src="Imagens/Layer 1aa 2.png"
                alt="Tênis K-Swiss V8 Masculino"
                className="img-fluid"
              />
              <p className={styles.categoria}>Tênis</p>
              <p className={styles.nome}>K-Swiss V8 - Masculino</p>
              <div className={styles.precos}>
                <p className={styles.precoAntigo}>R$200</p>
                <p className={styles.precoNovo}>R$100</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className={styles.card}>
              <img
                src="Imagens/Layer 1aa 2.png"
                alt="Tênis K-Swiss V8 Masculino"
                className="img-fluid"
              />
              <p className={styles.categoria}>Tênis</p>
              <p className={styles.nome}>K-Swiss V8 - Masculino</p>
              <div className={styles.precos}>
                <p className={styles.precoAntigo}>R$200</p>
                <p className={styles.precoNovo}>R$100</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className={styles.card}>
              <img
                src="Imagens/Layer 1aa 2.png"
                alt="Tênis K-Swiss V8 Masculino"
                className="img-fluid"
              />
              <p className={styles.categoria}>Tênis</p>
              <p className={styles.nome}>K-Swiss V8 - Masculino</p>
              <div className={styles.precos}>
                <p className={styles.precoAntigo}>R$200</p>
                <p className={styles.precoNovo}>R$100</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className={styles.card}>
              <img
                src="Imagens/Layer 1aa 2.png"
                alt="Tênis K-Swiss V8 Masculino"
                className="img-fluid"
              />
              <p className={styles.categoria}>Tênis</p>
              <p className={styles.nome}>K-Swiss V8 - Masculino</p>
              <div className={styles.precos}>
                <p className={styles.precoAntigo}>R$200</p>
                <p className={styles.precoNovo}>R$100</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className={styles.card}>
              <img
                src="Imagens/Layer 1aa 2.png"
                alt="Tênis K-Swiss V8 Masculino"
                className="img-fluid"
              />
              <p className={styles.categoria}>Tênis</p>
              <p className={styles.nome}>K-Swiss V8 - Masculino</p>
              <div className={styles.precos}>
                <p className={styles.precoAntigo}>R$200</p>
                <p className={styles.precoNovo}>R$100</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className={styles.card}>
              <img
                src="Imagens/Layer 1aa 2.png"
                alt="Tênis K-Swiss V8 Masculino"
                className="img-fluid"
              />
              <p className={styles.categoria}>Tênis</p>
              <p className={styles.nome}>K-Swiss V8 - Masculino</p>
              <div className={styles.precos}>
                <p className={styles.precoAntigo}>R$200</p>
                <p className={styles.precoNovo}>R$100</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Especial */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src="Imagens/Laye 1.png"
                alt="Air Jordan"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <div className={styles.subtitulo}>Oferta especial</div>
              <h2 className="fw-bold text-dark mb-3">
                Air Jordan edição de colecionador
              </h2>
              <p className="text-muted mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam cumque harum molestias atque doloremque ut et
                perferendis deserunt distinctio hic assumenda esse, voluptatum
                odit error quae ipsam facere libero repellat?
              </p>
              <button className={styles.btnOferta}>Ver Oferta</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;