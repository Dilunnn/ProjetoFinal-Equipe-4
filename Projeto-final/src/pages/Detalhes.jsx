import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import style from './Detalhes.module.css'
import { useState } from 'react';


const Detalhes = () => {

let imagens =[
  "White-Sneakers-PNG-Clipart 1.svg",
  "sap amarelo.png",
  "sap azul.jpg",
  "sap ciano.png",
  "sap laranja.png",
  "sap verde.png"
]
const [imagemAtual, setImagemAtual]= useState(imagens[0])

  return (
    
    <div>
      <main>
      {/* produto e detalhes do produto */}

      
    <div/>
      <p className={style.caminho}>
        home/produtos/tênis/nike/tenis nike revolution 6 next nature masculino
      </p>
      <div id="selecionado">
        <div id={style.principal} className=" card mb-3">
          <div className="row g-0">
            {/* imagem  */}
            <div className="imagemP col-md-4 foto">
              <img
                src={imagemAtual}
                className="img-fluid rounded-start"
                alt="sapato nike"
              />
            </div>
            <div className="col-md-8">
              < div className="card-body">
                <h5 className="card-title">
                  tenis nike revolution 6 next nature masculino
                </h5>
                <p style={{fontSize: "smaller"}}>casual/nike/ref2353445</p>

                {/* avaliação do produto  */}
                <section className="avaliação">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      style={{color: "orange"}}
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                    style={{color: "orange"}}
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      style={{color: "orange"}}
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star-half"
                    viewBox="0 0 16 16"
                  >
                    <path
                     style={{color: "orange"}}
                      d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path
                     style={{color: "orange"}}
                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
                    />
                  </svg>
                  <span style={{backgroundColor: "orange", borderRadius: "5px"}}
                    >4.7
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        style={{color:" white"}}
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      />
                    </svg>
                  </span>
                  <span style={{color: "gray"}}>' (90 avaliações)</span>
                </section>

                {/* preço do produto  */}
                <section id="preço">
                  <h5 className="d-inline-block">R$219</h5>
                  <p className="d-inline-block">,00</p>
                  <p
                    className="d-inline-block"
                    style={{textDecoration:"line-through", color: "gray"}}
                  >
                    219,00
                  </p>
                </section>

                {/* descrição do produto */}
                <section id="descrição">
                  <h6 style={{color: "gray"}}>descrição do produto</h6>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat quod blanditiis asperiores obcaecati, earum
                    veritatis eligendi omnis a culpa at, amet velit vel expedita
                    laudantium similique perferendis et consequatur? In.
                  </p>
                </section>
                <br />
                {/* tamanhos disponiveis  */}
              
                <section className="tamanhos">
                  <p style={{color: "gray"}}>tamanhos</p>
                  <button id={style.btn_tamanho} className="btn">39</button>
                  <button id={style.btn_tamanho} className="btn">40</button>
                  <button id={style.btn_tamanho} className="btn">41</button>
                  <button id={style.btn_tamanho} className="btn">42</button>
                  <button id={style.btn_tamanho} className="btn">43</button>
                </section>

                {/* opções de cores do sapato */}
                <div className="cores">
                  <p style={{color: "gray"}}>cores</p>
                  <button className={`${style.azul} ${style.btn_cor} btn`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        style={{color:"rgb(0, 174, 255)"}}
                        cx="8"
                        cy="8"
                        r="8"
                      />
                    </svg>
                  </button>
                 <button className={`${style.laranja} ${style.btn_cor} btn`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        style={{color: "rgb(214, 95, 44)"}}
                        cx="8"
                        cy="8"
                        r="8"
                      />
                    </svg>
                  </button>
                 <button className={`${style.marrom} ${style.btn_cor} btn`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        style={{color: "darkslategrey"}}
                        cx="8"
                        cy="8"
                        r="8"
                      />
                    </svg>
                  </button>
                  <button className={`${style.preto} ${style.btn_cor} btn`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        style={{color: "rgb(64, 49, 100)"}}
                        cx="8"
                        cy="8"
                        r="8"
                      />
                    </svg>
                  </button>
                </div>

                {/* compra  */}
                <div className="compra">
                  <button
                    style={{color: "white"}}
                    type="button"
                    className="btn btn-warning"
                  >
                    comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* outras opções de sapatos  */}
     <div className={style.opções}>
  {imagens.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Miniatura ${index}`}
      onClick={() => setImagemAtual(img)}
      style={{ cursor: 'pointer', width: '60px', margin: '5px' }}
    />
  ))}
</div>


{/* -----------------------------------------------em baixo deu certo------------------------------------------------------------------ */}
    <div className={style.produtos_titulo}>
      {/*produtos relacionados*/}
      <p className={style.produtosR}>produtos relacionados</p>
      <Link to='/produtos' > ver todos  
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="16"
        height="16" 
        fill="currentColor"
        className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg></span></Link>
    </div>

      {/* sujestões */}
    <div className={style.lista}>
      <div className="card" id= {style.carta} style={{width: '18rem'}}>
        <img src="/K-Siss V8-Masculino.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p style={{color: 'gray'}}>tenis</p>
          <p className="card-text" style={{color: 'gray'}}>K-Siss V8 - masculino</p>
          <span style={{textDecoration: 'line-through', color: 'gray'}}>$200</span> <span>$100</span>
        </div>
      </div>

       <div className="card" id= {style.carta} style={{width: '18rem'}}>
        <img src="/K-Siss V8-Masculino.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p style={{color: 'gray'}}>tenis</p>
          <p className="card-text" style={{color: 'gray'}}>K-Siss V8 - masculino</p>
          <span style={{textDecoration: 'line-through', color: 'gray'}}>$200</span> <span>$100</span>
        </div>
      </div>

      <div className="card" id= {style.carta} style={{width: '18rem'}}>
        <img src="/K-Siss V8-Masculino.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p style={{color: 'gray'}}>tenis</p>
          <p className="card-text" style={{color: 'gray'}}>K-Siss V8 - masculino</p>
          <span style={{textDecoration: 'line-through', color: 'gray'}}>$200</span> <span>$100</span>
        </div>
      </div>

       <div className="card" id= {style.carta} style={{width: '18rem'}}>
        <img src="/K-Siss V8-Masculino.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p style={{color: 'gray'}}>tenis</p>
          <p className="card-text" style={{color: 'gray'}}>K-Siss V8 - masculino</p>
          <span style={{textDecoration: 'line-through', color: 'gray'}}>$200</span> <span>$100</span>
        </div>
      </div>

       <div className="card" id= {style.carta} style={{width: '18rem'}}>
        <img src="/K-Siss V8-Masculino.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p style={{color: 'gray'}}>tenis</p>
          <p className="card-text" style={{color: 'gray'}}>K-Siss V8 - masculino</p>
          <span style={{textDecoration: 'line-through', color: 'gray'}}>$200</span> <span>$100</span>
        </div>
      </div>

      </div>

</main>
    </div>

    
  )
}

export default Detalhes
