import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../Components/Login.jsx';
import { render} from "@testing-library/react";


describe('Login', () => {
	it('should display elements', () => {
		render (<BrowserRouter>
			<Routes>   
				<Route path="*" element= {<Login policyTypes={false} />}/>
			</Routes>
		</BrowserRouter>)
	})
})