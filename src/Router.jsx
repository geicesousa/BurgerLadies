import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Register from "./Pages/adm/Register";
import Login from "./Pages/login/Login";
import Attendance from "./Pages/attendance/Attendance";
import NotFound from "./Pages/notfound/NotFound";
import Adm from "./Pages/adm/Adm";
import Kitchen from "./Pages/kitchen/Kitchen";
import ListUsers from "./Pages/users/ListUsers";
import OrderedProgress from "./Pages/ordered/OrderedProgress";
import Cart from "./Pages/ordered/Cart";
import PrivateRoute from "./privateRoute";
import AdcProducts from "./Pages/products/AdcProducts";
import ListProducts from "./Pages/products/listProducts";

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
                <OrderedProgress />
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