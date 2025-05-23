import React, { useState } from 'react';
import styles from './Carrinho.module.css'; // Import do CSS Module
import produto from '../assets/Produto.png'

const Carrinho = () => {
  const [quantidade, setQuantidade] = useState(1);
  const precoUnitario = 219.00;
  const desconto = 30.00;
  const frete = 0.00;

  const calcularTotal = () => quantidade * precoUnitario;
  const calcularSubtotal = () => calcularTotal();
  const calcularTotalFinal = () => calcularSubtotal() + frete - desconto;

  const aumentarQuantidade = () => setQuantidade(prev => prev + 1);
  const diminuirQuantidade = () => quantidade > 1 && setQuantidade(prev => prev - 1);
  const finalizarCompra = () => alert('Finalizando compra...');
  return (
    <div className={styles.pageContainer}>
      <main>
        <section className={`container rounded-2 ${styles.fundo}`}>
          <div className="row">
            <div className="col-8">
              <div className="row">
                <div className="col d-flex fw-bold">
                  <p className="col-2">MEU CARRINHO</p>
                  <p className="col-2 offset-4">QUANTIDADE</p>
                  <p className="col-1 offset-1">UNITÁRIO</p>
                  <p className="col-1 offset-1">TOTAL</p>
                </div>
                <hr />
                <div className="row">
                  <div className="col-5 d-flex">
                    <div className={`col-4 align-content-center d-flex flex-wrap rounded-3 justify-content-center ${styles.produtoImgContainer}`}>
                      <img src={produto} width='120px' alt="produto" />
                    </div>
                    <div className="col-10">
                      <p className="fw-bold">Tênis Nike Revolution 6 Next Nature Masculino</p>
                      <p>Cor: <strong>Vermelho / Branco</strong></p>
                      <p>Tamanho: <strong>42</strong></p>
                    </div>
                  </div>

                  <div className="col-2 offset-1 d-flex flex-column align-items-center">
                    <div role="group" aria-label="Quantidade">
                      <button onClick={diminuirQuantidade} className="btn btn-outline-secondary">-</button>
                      <span className="d-inline mx-2">{quantidade}</span>
                      <button onClick={aumentarQuantidade} className="btn btn-outline-secondary">+</button>
                    </div>
                    <a href="#" className="mt-2 text-muted small">Remover item</a>
                  </div>

                  <div className="col offset-1">
                    <p className="text-decoration-line-through opacity-25">R$219,00</p>
                    <p className="fw-bold">R${precoUnitario.toFixed(2).replace('.', ',')}</p>
                  </div>

                  <div className="col">
                    <p className="text-decoration-line-through opacity-25">R$219,00</p>
                    <p className="fw-bold">R${calcularTotal().toFixed(2).replace('.', ',')}</p>
                  </div>
                </div>

                <hr />

                <div className={`row ${styles.freteCupom}`}>
                  <div className="col">
                    <label htmlFor="cupomdedesconto" className="fw-bold">Cupom de desconto</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="cupomdedesconto" />
                      <button className={`btn border ${styles.btnOk}`}>Ok</button>
                    </div>
                  </div>
                  <div className="col">
                    <label htmlFor="frete" className="fw-bold">Calcular frete</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="frete" />
                      <button className={`btn border ${styles.btnOk}`}>Ok</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="container">
                <h6 className="fw-bold m-1">Resumo</h6>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="opacity-50">Subtotal:</p>
                  <p className="fw-bold">R${calcularSubtotal().toFixed(2).replace('.', ',')}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="opacity-50">Frete:</p>
                  <p className="fw-bold">R${frete.toFixed(2).replace('.', ',')}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="opacity-50">Desconto:</p>
                  <p className="fw-bold">R${desconto.toFixed(2).replace('.', ',')}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="fw-bold">Total</p>
                  <p className="fw-bold text-danger">R${calcularTotalFinal().toFixed(2).replace('.', ',')}</p>
                </div>
                <div className="d-flex justify-content-end">
                  <p className="opacity-25">ou 10x de R$ 21,00 sem juros</p>
                </div>
                <div>
                  <button onClick={finalizarCompra} className="btn btn-warning col-12 text-white fw-bolder">
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row">
            <div className="col-8">
              <div className="row">
                <div className="col d-flex justify-content-between">
                  <h1 className="h6">Produtos Relacionados</h1>
                  <button className="btn">Ver todos</button>
                </div>
              </div>
              <div className="row">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="col-3">
                    <img src={produto} className={styles.sapatos} alt="" />
                    <div>
                      <p className="opacity-25 pt-2 m-0">Tênis</p>
                      <p className="opacity-75">K-Swiss V8 - Masculino</p>
                      <div className="d-flex justify-content-between">
                        <p className="text-decoration-line-through opacity-25">R$200</p>
                        <p className="fw-bold">R$100</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Carrinho;
