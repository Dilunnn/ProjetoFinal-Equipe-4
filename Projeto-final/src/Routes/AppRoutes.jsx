import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Entrar from '../pages/Entrar';
import Carrinho from '../pages/Carrinho'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/entrar' element={<Entrar/>}/>
      <Route path='/carrinho' element={<Carrinho/>}/>
      
    </Routes>
  );
}
