import { createBrowserRouter } from "react-router-dom";
import BoasVindas from "../pages/BoasVindas.jsx";
import Inicio from "../pages/Inicio.jsx";
// import Login from "../pages/Login.jsx";
import CadastroEscuro from "../pages/CadastroEscuro.jsx";
import LoginClaro from "../pages/LoginClaro.jsx";
import Perfil from "../pages/Perfil.jsx"



const router = createBrowserRouter([
    {path: "/", element: <BoasVindas/>},
    {path: "/inicio", element: <Inicio />},
    {path: "/cadastroescuro", element: < CadastroEscuro />},
    {path: "/login", element: <LoginClaro/>},
    {path: "/perfil", element: <Perfil />}
  
   
])


export default router;