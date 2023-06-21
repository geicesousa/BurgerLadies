
const PrivateRoute = ({ children, redirectTo }) => {
	const isAuth = localStorage.getItem("accessToken") !== null;
	return isAuth ? children : <Navigate to={redirectTo} />;
  };

export default PrivateRoute;