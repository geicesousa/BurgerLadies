import { Navigate } from "react-router";

const PrivateRoute = ({ children, redirectTo }) => {
  const isAuth = localStorage.getItem("accessToken") !== null;
  return isAuth ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute

// import React from 'react'
// import { Navigate } from 'react-router-dom'
// function Protected({ isSignedIn, children }) {
//   if (!isSignedIn) {
//     return <Navigate to="/" replace />
//   }
//   return children
// }
// export default Protected
