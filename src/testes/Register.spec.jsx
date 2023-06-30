import Register from "../../src/Pages/adm/Register";
import { render, screen, waitFor } from "@testing-library/react";
import { createUser } from "../services/api.jsx";
import { toast } from "react-toastify";
import userEvent from "@testing-library/user-event";

// afterEach(cleanup)
jest.mock("../services/api.jsx");
jest.mock('react-router-dom');
jest.mock("react-toastify", () => ({
  toast: { success: jest.fn(), error: jest.fn() }
}));
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
    const select = screen.getByRole("combobox");
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

    const colaborador = screen.getByPlaceholderText("Digite o nome do colaborador");
    const email = screen.getByPlaceholderText("Digite o e-mail do colaborador");
    const senha = screen.getByPlaceholderText("Digite uma senha");
    const select = screen.getByRole("combobox");
    const cadastra = screen.getByText("Efetuar cadastro");

    const funcionario = {
      nome: "Geice Sousa",
      email: "teste@teste.com",
      senha: "123456",
      cargo: "Atendente"
    }

    await userEvent.type(colaborador, funcionario.nome);
    await userEvent.type(email, funcionario.email);
    await userEvent.type(senha, funcionario.senha);
    await userEvent.selectOptions(select, screen.getByText(funcionario.cargo));
    await userEvent.click(cadastra);

    await waitFor(() => 
			expect(toast.success).toHaveBeenCalledTimes(1) // toast error, msg de erro , creat user not.tohavebeencalled()
		);
		expect(toast.success).toHaveBeenCalledWith('Cadastro realizado com sucesso!')

    expect(createUser).toHaveBeenCalledTimes(1);
    expect(createUser).toHaveBeenCalledWith(funcionario.nome, funcionario.email, funcionario.senha, funcionario.cargo);
  });

  // it("should NOT register employee", async () => {
  //   render(<Register />);

  //   createUser.mockResolvedValue({ ok: true }); // resposta com response.ook

  //   const colaborador = screen.getByPlaceholderText("Digite o nome do colaborador");
  //   const email = screen.getByPlaceholderText("Digite o e-mail do colaborador");
  //   const senha = screen.getByPlaceholderText("Digite uma senha");
  //   const select = screen.getByRole("combobox");
  //   const cadastra = screen.getByText("Efetuar cadastro");

  //   const funcionario = {
  //     nome: "Geice Sousa",
  //     email: "teste.com",
  //     senha: "123456",
  //     cargo: "Atendente"
  //   }

  //   await userEvent.type(colaborador, funcionario.nome);
  //   await userEvent.type(email, funcionario.email);
  //   await userEvent.type(senha, funcionario.senha);
  //   await userEvent.selectOptions(select, screen.getByText(funcionario.cargo));
  //   await userEvent.click(cadastra);

  //   await waitFor(() => 
	// 		expect(toast.error).toHaveBeenCalledTimes(1) 
	// 	);
	// 	expect(toast.error).toHaveBeenCalledWith('E-mail no formato errado')

  //   expect(createUser).toHaveBeenCalledTimes(1);
  //   expect(createUser).toHaveBeenCalledWith(funcionario.nome, funcionario.email, funcionario.senha, funcionario.cargo);
  // });

  // it("should NOT register employee because input empty", async () => {
  //   render(<Register />);

  //   const colaborador = screen.getByPlaceholderText("Digite o nome do colaborador");
  //   const email = screen.getByPlaceholderText("Digite o e-mail do colaborador");
  //   const senha = screen.getByPlaceholderText("Digite uma senha");
  //   const select = screen.getByRole("combobox");
  //   const cadastra = screen.getByText("Efetuar cadastro");

  //   const funcionario = {
  //     nome: " ",
  //     email: "teste@teste.com",
  //     senha: "123456",
  //     cargo: "Atendente"
  //   }

  //   await userEvent.type(colaborador, funcionario.nome);
  //   await userEvent.type(email, funcionario.email);
  //   await userEvent.type(senha, funcionario.senha);
  //   await userEvent.selectOptions(select, screen.getByText(funcionario.cargo));
  //   await userEvent.click(cadastra);

  //   await waitFor(() => 
	// 		expect(toast.error).toHaveBeenCalledTimes(1) 
	// 	);
	// 	expect(toast.error).toHaveBeenCalledWith('Por favor digite o nome');

  //   // não chega nem a chamar o createuser
  // });

  // it("should register employee ERROR", async () => {
  //   render(<Register />);

  //   createUser.mockResolvedValue({ ok: false }); // resposta com response.ook

  //   const colaborador = screen.getByPlaceholderText("Digite o nome do colaborador");
  //   const email = screen.getByPlaceholderText("Digite o e-mail do colaborador");
  //   const senha = screen.getByPlaceholderText("Digite uma senha");
  //   const select = screen.getByRole("combobox");
  //   const cadastra = screen.getByText("Efetuar cadastro");

  //   const funcionario = {
  //     nome: "Geice Sousa",
  //     email: "geice@gmail.com",
  //     senha: "123456BB",
  //     cargo: "Atendente"
  //   }

  //   await userEvent.type(colaborador, funcionario.nome);
  //   await userEvent.type(email, funcionario.email);
  //   await userEvent.type(senha, funcionario.senha);
  //   await userEvent.selectOptions(select, screen.getByText(funcionario.cargo));
  //   await userEvent.click(cadastra);

  //   await waitFor(() => 
	// 		expect(toast.error).toHaveBeenCalledTimes(1) 
	// 	);
	// 	expect(toast.error).toHaveBeenCalledWith('Algo deu errado, confira os dados e tente novamente!')

  //   expect(createUser).toHaveBeenCalledTimes(1);
  //   expect(createUser).toHaveBeenCalledWith(funcionario.nome, funcionario.email, funcionario.senha, funcionario.cargo);
  // });
});
