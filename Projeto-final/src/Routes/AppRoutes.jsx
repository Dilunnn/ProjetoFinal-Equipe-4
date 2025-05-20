import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cadrasto from '../pages/Cadrasto';
import Entrar from '../pages/Entrar';
import Carrinho from '../pages/Carrinho'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/cadrasto' element={<Cadrasto/>}/>
      <Route path='/entrar' element={<Entrar/>}/>
      <Route path='/carrinho' element={<Carrinho/>}/>
      
    </Routes>
  );
}
