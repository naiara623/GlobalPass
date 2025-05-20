<<<<<<< HEAD
  // import './App.css'
  // import HealthMap from './components/HealthMap'
  // import Saude from './pages/Saude'

=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoasVindas from './pages/BoasVindas';
import CadastroEscuro from './pages/CadastroEscuro';
import LoginClaro from './pages/LoginClaro';
import Inicio from './pages/Inicio';
import Perfil from './pages/Perfil';


>>>>>>> 91e7e2f37027bfc29f7de23803af0d14fa6f0df3
function App() {
  return (
<<<<<<< HEAD
    <>
    {/* <TermosUso/> */}
    {/* <Cadastro/> */}
    {/* <BoasVindas/> */}
    {/* <Login/>  */}
    {/* <Inicio/> */}
    {/* <Saude/> */}
    {/* <HealthMap/> */}
    </>
  )
=======
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
>>>>>>> 91e7e2f37027bfc29f7de23803af0d14fa6f0df3
}

export default App
