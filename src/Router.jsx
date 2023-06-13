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
import TesteOrdered from "./Pages/TesteOrdered";
import Cart from "./Pages/Cart";
import PrivateRoute from "./privateRoute";
import AdcProducts from "./Pages/AdcProducts";

import ListProducts from "./Pages/listProducts";




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
            path="/adcproducts"
            element={
              <PrivateRoute redirectTo="/">
                <AdcProducts />
              </PrivateRoute>
            }
          />
          <Route
            path="/listproducts"
            element={
              <PrivateRoute redirectTo="/">
                <ListProducts />
              </PrivateRoute>
            }
          />
          


        </Routes>
      </BrowserRouter>
    )
};

export default Router