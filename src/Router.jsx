import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Home from './Components/Home';

function Router() {
  return (
	<BrowserRouter>
		<Header/>
		<Routes>
			<Route path="/" element={<Login/>} />
			<Route path="/home" element={<Home/>} />
		</Routes>	
	</BrowserRouter>
  )
}

export default Router




