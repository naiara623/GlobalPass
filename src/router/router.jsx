import { createBrowserRouter } from "react-router-dom";
import BoasVindas from "../pages/BoasVindas.jsx";
import Inicio from "../pages/Inicio.jsx";
<<<<<<< HEAD
import Login from "../pages/Login.jsx";
import Cadastro from "../pages/cadastro.jsx";
import Saude from "../pages/Saude.jsx";
import HealthMap from "../components/HealthMap.jsx";
// import Transporte from "../pages/Transporte.jsx";

const router = createBrowserRouter([
    {path: "/", element: <BoasVindas/>},
     {path: "/map", element: <HealthMap/>},
    {path: "/cadastro", element: <Cadastro />},
    {path: "/login", element: <Login />},
    {path: "/inicio", element: <Inicio />},
     {path: "/saude", element: <Saude />},
    // {path: "/transporte", element: <Transporte />},
=======
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
  
   
>>>>>>> 91e7e2f37027bfc29f7de23803af0d14fa6f0df3
])


export default router;
