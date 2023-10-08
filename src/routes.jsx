import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Prediction from "./views/prediction";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/prediction",
        element: <Prediction />
    }
])

export default router;