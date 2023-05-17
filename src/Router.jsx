import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Login from './Components/Login'
import NotFound from './Components/NotFound'

function Router() {
  return (
	<BrowserRouter>
		<Header/>
		<Routes>		
			<Route path="/" element={<Login />} />
			<Route path="*" element={<NotFound />} />			
		</Routes>
	</BrowserRouter>
  )
}

export default Router




