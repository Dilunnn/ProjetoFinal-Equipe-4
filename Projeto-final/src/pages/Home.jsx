import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.destaque}>
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
          <img src="Imagens/White-Sneakers-PNG-Clipart 1.svg" alt="" />
        </div>
      </section>

      <div className="container py-5">
        <h5 className="fw-bold mb-4">Coleções em destaque</h5>
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className={styles.card.cardCustom } >
              <span className={styles.badgeDesconto}>30% OFF</span>
              <h5 className="mt-3">
                Novo drop <br /> <strong>Supreme</strong>
              </h5>
              <button className={styles.btnComprar}>Comprar</button>
              <img
                src="Imagens/Mask group.svg"
                alt="Supreme"
               
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className={styles.card.cardCustom}>
              <span className={styles.badgeDesconto}>30% OFF</span>
              <h5 className="mt-3">
                Coleção <br /> <strong>Adidas</strong>
              </h5>
              <button className={styles.btnComprar}>Comprar</button>
              <img
                src="Imagens/ddd 1.svg"
                alt="Adidas"
                
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className={styles.card.cardCustom}>
              <span className={styles.badgeDesconto}>30% OFF</span>
              <h5 className="mt-3">
                Novo <br /> <strong>Beats Bass</strong>
              </h5>
              <button className={styles.btnComprar}>Comprar</button>
              <img
                src="Imagens/d9db11953a2d185d37246bb1f500c957 1.svg"
                alt="Beats"
                class={styles.cardImg}
              />
            </div>
          </div>
        </div>
      </div>

      <h3 className={styles.destaque}>Coleções em Destaque</h3>

      <div className={styles.icones}>
        <img src="Imagens/Frame 10.png" alt="Camisa" />
        <img src="Imagens/Frame 11.png" alt="calca" />
        <img src="Imagens/Frame 13.png" alt="tenis" />
        <img src="Imagens/Frame 14.png" alt="fone" />
      </div>

      <section className={styles.produtos}>
        <h2>Produtos em Alta</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img
              src="Imagens/Layer 1aa 2.png"
              alt="Tênis K-Swiss V8 Masculino"
            />
            <p className={styles.categoria}>Tênis</p>
            <p className={styles.nome}>K-Swiss V8 - Masculino</p>
            <div className={styles.precos}>
              <p className={styles.precoAntigo}>R$200</p>
              <p className={styles.precoNovo}>R$100</p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src="Imagens/Layer 1aa 2.png"
              alt="Tênis K-Swiss V8 Masculino"
            />
            <p className={styles.categoria}>Tênis</p>
            <p className={styles.nome}>K-Swiss V8 - Masculino</p>
            <div className={styles.precos}>
              <p className={styles.precoAntigo}>R$200</p>
              <p className={styles.precoNovo}>R$100</p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src="Imagens/Layer 1aa 2.png"
              alt="Tênis K-Swiss V8 Masculino"
            />
            <p className={styles.categoria}>Tênis</p>
            <p className={styles.nome}>K-Swiss V8 - Masculino</p>
            <div className={styles.precos}>
              <p className={styles.precoAntigo}>R$200</p>
              <p className={styles.precoNovo}>R$100</p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src="Imagens/Layer 1aa 2.png"
              alt="Tênis K-Swiss V8 Masculino"
            />
            <p className={styles.categoria}>Tênis</p>
            <p className={styles.nome}>K-Swiss V8 - Masculino</p>
            <div className={styles.precos}>
              <p className={styles.precoAntigo}>R$200</p>
              <p className={styles.precoNovo}>R$100</p>
            </div>
          </div>
        </div>
        <br />
        <div className={styles.cards}>
          <div className={styles.card}>
            <img
              src="Imagens/Layer 1aa 2.png"
              alt="Tênis K-Swiss V8 Masculino"
            />
            <p className={styles.categoria}>Tênis</p>
            <p className={styles.nome}>K-Swiss V8 - Masculino</p>
            <div className={styles.precos}>
              <p className={styles.precoAntigo}>R$200</p>
              <p className={styles.precoNovo}>R$100</p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src="Imagens/Layer 1aa 2.png"
              alt="Tênis K-Swiss V8 Masculino"
            />
            <p className={styles.categoria}>Tênis</p>
            <p className={styles.nome}>K-Swiss V8 - Masculino</p>
            <div className={styles.precos}>
              <p className={styles.precoAntigo}>R$200</p>
              <p className={styles.precoNovo}>R$100</p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src="Imagens/Layer 1aa 2.png"
              alt="Tênis K-Swiss V8 Masculino"
            />
            <p className={styles.categoria}>Tênis</p>
            <p className={styles.nome}>K-Swiss V8 - Masculino</p>
            <div className={styles.precos}>
              <p className={styles.precoAntigo}>R$200</p>
              <p className={styles.precoNovo}>R$100</p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src="Imagens/Layer 1aa 2.png"
              alt="Tênis K-Swiss V8 Masculino"
            />
            <p className={styles.categoria}>Tênis</p>
            <p className={styles.nome}>K-Swiss V8 - Masculino</p>
            <div className={styles.precos}>
              <p className={styles.precoAntigo}>R$200</p>
              <p className={styles.precoNovo}>R$100</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ofertaEspecial}>
        <div className={styles.container}>
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
              <h2 className="fw-bold text-black">
                Air Jordan edição de colecionador
              </h2>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam cumque harum molestias atque doloremque ut et
                perferendis deserunt distinctio hic assumenda esse, voluptatum
                odit error quae ipsam facere libero repellat?
              </p>
              <a href="#" className={styles.btnOferta}>
                Ver Oferta
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
