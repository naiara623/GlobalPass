import { createBrowserRouter } from "react-router-dom";
import BoasVindas from "../pages/BoasVindas.jsx";
import Inicio from "../pages/Inicio.jsx";
import Login from "../pages/Login.jsx";
import Saude from "../pages/Saude.jsx";
import Transporte from "../pages/Transporte.jsx";
import CadastroEscuro from "../pages/CadastroEscuro.jsx";
import Perfil from "../pages/Perfil.jsx";
import Educação from "../pages/Educação.jsx";
import Navbar from "../components/Navbar.jsx";
import GlobalPost from "../pages/GlobalPost.jsx";
import TelaDePostagem from "../pages/TelaDePostagem.jsx";
import PerfilDePostagem from "../pages/PerfilDePostagem.jsx";


const router = createBrowserRouter([
    {path: "/", element: <BoasVindas/>},
    {path: "/login", element: <Login />},
    {path: "/saude", element: <Saude />},
    {path: "/transporte", element: <Transporte />},
    {path: "/telainicial", element: <Inicio />},
    {path: "/cadastro", element: < CadastroEscuro />},
    {path: "/perfildeusuario", element: <Perfil/>},
    {path: "/educação", element: <Educação />},
    {path: "/navbar", element: <Navbar/>},
    {path: "/transporte", element: <Transporte/>},
    {path:"/postagem", element: <GlobalPost/>},
    {path:"/telapostagem", element: <TelaDePostagem/>},
    {path:"/Perfilpostagem", element: <PerfilDePostagem/>}
   

   
])


export default router;
