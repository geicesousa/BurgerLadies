import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Register from './Pages/Register';
import Login from './Pages/Login';
import Attendance from './Pages/Attendance';
import NotFound from './Pages/NotFound';
import Admin from './Pages/Admin';
import Kitchen from './Pages/Kitchen';
import Menu from './Pages/Menu';
import ListUsers from './Pages/ListUsers';
import TesteOrdered from './Components/TesteOrdered';
import Cart from './Components/Cart';
//não pode usar o useState dentro do Router
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
			<Route path="/ordered" element={<TesteOrdered/>}/>		
			<Route path="/kitchen" element={<Kitchen />} />	
			<Route path="/menu" element={<Menu/>} />
			<Route path="/listusers" element={<ListUsers/>} />
			<Route path="/cart" element={<Cart/>} />

		</Routes>	
	
	</BrowserRouter>
  )
}

export default Router




