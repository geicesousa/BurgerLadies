import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Home from './Components/Home';
import NotFound from './Components/NotFound';


function Router() {
  return (
	<BrowserRouter>
		<Header/>
		<Routes>
			
			<Route path="/" element={<Login/>} />
			<Route path="/home" element={<Home/>} />
			<Route path="*" element={<NotFound/>} />			

		
		</Routes>	
	</BrowserRouter>
  )
}

export default Router




