import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Components/Login.jsx";
import { render} from "@testing-library/react";


describe('Login', () => {
	it('renderizar o Login corretamente', () => {
		render (<BrowserRouter>
			<Routes>   
				<Route path="*" element= {<Login policyTypes={false} />}/>
			</Routes>
		</BrowserRouter>)
	})
})