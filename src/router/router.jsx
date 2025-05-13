import { createBrowserRouter } from "react-router-dom";
import BoasVindas from "../pages/BoasVindas.jsx";
import Inicio from "../pages/Inicio.jsx";
// import Login from "../pages/Login.jsx";
import CadastroEscuro from "../pages/CadastroEscuro.jsx";
import LoginClaro from "../pages/LoginClaro.jsx";
import Perfil from "../pages/Perfil.jsx"
import Educação from "../pages/Educação.jsx";



const router = createBrowserRouter([
    {path: "/", element: <BoasVindas/>},
    {path: "/telainicial", element: <Inicio />},
    {path: "/cadastro", element: < CadastroEscuro />},
    {path: "/login", element: <LoginClaro/>},
    {path: "/perfildeusuario", element: <Perfil />},
    {path: "/educação", element: <Educação />}
  
   
])


export default router;
