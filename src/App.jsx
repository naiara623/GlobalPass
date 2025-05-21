import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'
import BoasVindas from './pages/BoasVindas';
import CadastroEscuro from './pages/CadastroEscuro';
import LoginClaro from './pages/Login';
import Inicio from './pages/Inicio';
import Perfil from './pages/Perfil';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoasVindas />} />
        <Route path="/cadastro" element={<CadastroEscuro />} />
        <Route path="/login" element={<LoginClaro />} />
        <Route path="/telainicial" element={<Inicio />} />
        <Route path="/perfildeusuario" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App