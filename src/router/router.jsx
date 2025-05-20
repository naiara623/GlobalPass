import { createBrowserRouter } from "react-router-dom";
import BoasVindas from "../pages/BoasVindas.jsx";
import Inicio from "../pages/Inicio.jsx";
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
])


export default router;
