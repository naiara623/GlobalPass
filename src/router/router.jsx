import { createBrowserRouter } from "react-router-dom";
import BoasVindas from "../pages/BoasVindas.jsx";
import Inicio from "../pages/Inicio.jsx";
import Login from "../pages/Login.jsx";
import Cadastro from "../pages/cadastro.jsx";
import Estudo from "../pages/Estudo.jsx";
// import Saude from "../pages/Saude.jsx";
import Transporte from "../pages/Transporte.jsx";

const router = createBrowserRouter([
    {path: "/", element: <BoasVindas/>},
    {path: "/cadastro", element: <Cadastro />},
    {path: "/login", element: <Login />},
    {path: "/inicio", element: <Inicio />},
    {path: "/estudo", element: <Estudo/>},
    // {path: "/saude", element: <Saude />},
    {path: "/transporte", element: <Transporte />},
])


export default router;
