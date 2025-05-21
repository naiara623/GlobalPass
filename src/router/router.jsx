import { createBrowserRouter } from "react-router-dom";
import BoasVindas from "../pages/BoasVindas.jsx";
import Cadastro from "../pages/Cadastro.jsx"


const router = createBrowserRouter([
    {path: "/", element: <BoasVindas/>},
    {path: "/cadastro", element: <Cadastro/>}
])


export default router;
