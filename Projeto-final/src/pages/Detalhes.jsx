import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import style from './Detalhes.module.css'


const Detalhes = () => {
  return (
    <div>
      <main>
      {/* produto e detalhes do produto */}

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
      <div className={"card"+ style.carta} style={{width: '18rem'}}>
        <img src="/K-Siss V8-Masculino.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p style={{color: 'gray'}}>tenis</p>
          <p className="card-text" style={{color: 'gray'}}>K-Siss V8 - masculino</p>
          <span style={{textDecoration: 'line-through', color: 'gray'}}>$200</span> <span>$100</span>
        </div>
      </div>

      <div className={"card"+ style.carta} style={{width: '18rem'}}>
        <img src="/K-Siss V8-Masculino.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p style={{color: 'gray'}}>tenis</p>
          <p className="card-text" style={{color: 'gray'}}>K-Siss V8 - masculino</p>
          <span style={{textDecoration: 'line-through', color: 'gray'}}>$200</span> <span>$100</span>
        </div>
      </div>
      
      <div className={"card"+ style.carta} style={{width: '18rem'}}>
        <img src="/K-Siss V8-Masculino.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p style={{color: 'gray'}}>tenis</p>
          <p className="card-text" style={{color: 'gray'}}>K-Siss V8 - masculino</p>
          <span style={{textDecoration: 'line-through', color: 'gray'}}>$200</span> <span>$100</span>
        </div>
      </div>

      <div className={"card"+ style.carta} style={{width: '18rem'}}>
        <img src="/K-Siss V8-Masculino.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p style={{color: 'gray'}}>tenis</p>
          <p className="card-text" style={{color: 'gray'}}>K-Siss V8 - masculino</p>
          <span style={{textDecoration: 'line-through', color: 'gray'}}>$200</span> <span>$100</span>
        </div>
      </div>


        {/* são 4 */}
      </div>

</main>
    </div>

    
  )
}

export default Detalhes
