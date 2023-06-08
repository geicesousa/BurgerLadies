import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Attendance from "./Pages/Attendance";
import NotFound from "./Pages/NotFound";
import Adm from "./Pages/Adm";
import Kitchen from "./Pages/Kitchen";
import ListUsers from "./Pages/ListUsers";
import TesteOrdered from "./Components/TesteOrdered";
import Cart from "./Components/Cart";
import PrivateRoute from "./privateRoute";
import AdicionarProdutos from "./Pages/AdcionarProdutos";



const Router = () => {
    return (
      <BrowserRouter>
        <ToastContainer autoClose={500} />

        <Routes>
          {/* Rotas publicas */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login />} />

          {/* Rotas privadas */}
          <Route
            path="/register"
            element={
              <PrivateRoute redirectTo="/">
                <Register />
              </PrivateRoute>
            }
          />
          <Route
            path="/attendance"
            element={
              <PrivateRoute redirectTo="/">
                <Attendance />
              </PrivateRoute>
            }
          />
          <Route
            path="/adm"
            element={
              <PrivateRoute redirectTo="/">
                <Adm />
              </PrivateRoute>
            }
          />
          <Route
            path="/ordered"
            element={
              <PrivateRoute redirectTo="/">
                <TesteOrdered />
              </PrivateRoute>
            }
          />
          <Route
            path="/kitchen"
            element={
              <PrivateRoute redirectTo="/">
                <Kitchen />
              </PrivateRoute>
            }
          />
          <Route
            path="/listusers"
            element={
              <PrivateRoute redirectTo="/">
                <ListUsers />
              </PrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute redirectTo="/">
                <Cart />
              </PrivateRoute>
            }
          />
           <Route
            path="/adicionarprodutos"
            element={
              <PrivateRoute redirectTo="/">
                <AdicionarProdutos />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    )
};

export default Router