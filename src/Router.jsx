import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Attendant from './Pages/Attendant';
import NotFound from './Pages/NotFound';
import Admin from './Pages/Admin';
import Ordered from './Pages/Ordered';
import Kitchen from './Pages/Kitchen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from './Pages/Menu';



function Router() {
  return (
	<BrowserRouter>
		<ToastContainer autoClose={2000} />
	  	<Header/>
		<Routes>
			<Route path="*" element={<NotFound/>} />
			<Route path="/" element={<Login/>} />
			<Route path="/register" element={<Register/>} />
			<Route path="/attendance" element={<Attendance/>} />				
			<Route path="/admin" element={<Admin/>} />		
			<Route path="/ordered" element={<Ordered/>} />		
			<Route path="/kitchen" element={<Kitchen/>} />	
			<Route path="/menu" element={<Menu/>} />
		</Routes>	
	
	</BrowserRouter>
  )
}

export default Router




