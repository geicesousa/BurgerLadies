import Register from "../../src/Pages/adm/Register";
import { render, screen, waitFor } from "@testing-library/react";
import { createUser } from "../services/api.jsx";
import { toast } from "react-toastify";
import userEvent from "@testing-library/user-event";
import { error } from "console";

// afterEach(cleanup)
jest.mock("../services/api.jsx");
jest.mock("react-router-dom");
jest.mock("react-toastify", () => {
  return { toast: { success: jest.fn(), 
		error: jest.fn((error)=>{
			console.log(error)
		}) } };
});
const user = {
  email: "geice@gmail.com",
  password: "$2a$10$AOgwMSHDJlfckHNYe4B4/O4WItZzocsogjkEHwbJKZnpBlLKUo0kG",
  name: " Geice Souza",
  role: "atendente",
  id: 12,
};

describe("Register", () => {
  it("should render a form", () => {
    render(<Register />);

    const colaborador = screen.getByLabelText("Nome do colaborador");
    const email = screen.getByLabelText("E-mail do colaborador");
    const senha = screen.getByLabelText("Senha");
    const select = screen.getByText("Selecione o cargo");
    const btn = screen.getByText("Efetuar cadastro");

    expect(colaborador).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(btn).toBeEnabled();
  });

  it("should register employee", async () => {
    render(<Register />);

    createUser.mockResolvedValue({ ok: true }); // resposta com response.ook

    const colaborador = screen.getByTestId("Nome do colaborador");
    const email = screen.getByTestId("E-mail do colaborador");
    const senha = screen.getByTestId("Senha");
    const select = screen.getByRole("combobox");
    const cadastra = screen.getByText("Efetuar cadastro");

		email.value = "geice2@mail.com"
    userEvent.type(colaborador, "Geice Sousa");
    userEvent.type(email, "geice@gmail.com");
    userEvent.type(senha, "123456");
    userEvent.selectOptions(select, screen.getByText("Atendente"));
    // userEvent.click(cadastra);
		cadastra.click()

    await waitFor(() => {
			expect(toast.success).toHaveBeenCalledTimes(1)
			
			expect(createUser).toHaveBeenCalledTimes(1);
			expect(createUser).toHaveBeenCalledWith(colaborador, email, senha, select);
		});

  });
});
