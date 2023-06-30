<div align="center"> <img width= "300px" src= "./src/assets/ladies.png"> </div>

## Resumo do projeto
O projeto Burger Ladies foi criado para um pequeno restaurante de hambúrgueres que está crescendo e necessita de uma interface em que se possa realizar pedidos utilizando um tablet, e enviá-los para a cozinha para que sejam preparados de forma ordenada e eficiente.

Este projeto tem duas áreas: a interface (cliente) e a API (servidor). A interface está sendo desenvolvida utilizando o framework React.

O cliente nos deu um [link](https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0) para a documentação que especifica o comportamento esperado da API HTTP que deve consumir. Aqui você pode encontrar todos os detalhes dos endpoints , como, por exemplo, quais parâmetros esperam, quais devem responder, etc.

*** 
<br>

  ### Logins e senhas: 

~~~javascript 
  [ { "Adm": [
      { "email": "adm@gmail.com", 
        "senha": 123456 
      } ] 
    }, 
    { "Atendente": [
      { "email": "atendente@gmail.com",
        "senha": 123456
      } ] 
    },
    { "Cozinha": [
      { "email": "cozinha@gmail.com", 
        "senha": 123456
      } ] 
    }
  ]
~~~~

***

<br>
<div align="center"><img width="500px" src="./src/assets/image-1.png" alt="Tela de Login" title="Tela de Login"></div>

### História do usuário 1
O garçom deve conseguir fazer login, se o administrador já tiver atribuído credenciais

***"Como garçon, quero poder entrar no sistema de pedidos".***

#### Critérios de aceitação
Acessar uma tela de login. <br>
Digitar e-mail e senha.<br>
Receber mensagens de erro compreensíveis, dependendo do que há de errado com as informações inseridas.<br>
Entrar no sistema de pedidos se as credenciais estiverem corretas.<br>

<br>

***

<br>

<div align="center"><img width="500px" src="./src/assets/image-2.png" alt="Tela Garçon" title="Tela Garçon"> <img width="500px" src="./src/assets/image-3.png" alt="Tela Garçon Novo Pedido" title="Tela Garçon Novo Pedido"> <img width="500px" src="./src/assets/image-6.png" alt="Tela Garçon Novo Pedido Carrinho" title="Tela Garçon Novo Pedido Carrinho"></div>

### História do usuário 2
O garçom deve ser capaz de anotar o pedido do cliente 

***"Como garçom, quero receber o pedido de um cliente para não depender da minha memória, para saber quanto cobrar e enviar para a cozinha para evitar erros e para que possam ser preparados na ordem."***

#### Critérios de aceitação
Anotar o nome do cliente. <br>
Adicionar produtos ao pedido. <br>
Excluir produtos. <br>
Ver resumo e compra total. <br>
Enviar o pedido para a cozinha (salve em algum banco de dados).
Funcionar bem em um tablet.

<br>

***

<br>

<div align="center"><img width="500px" src="./src/assets/image-7.png" alt="Tela Cozinha" title="Tela Cozinha"> <img width="500px" src="./src/assets/image-8.png" alt="Tela Visualização de Pedidos" title="Tela Visualização de Pedidos"></div>

### História do usuário 3
O chef precisa ver os pedidos

***"Como chefe de cozinha, quero ver os pedidos dos clientes em ordem e marcar quais estão prontos para saber o que precisa ser preparado e avisar aos atendentes que um pedido está pronto para ser servido a um cliente."***

#### Critérios de aceitação
Visualizar os pedidos solicitados à medida que são feitos.<br>
Marcar os pedidos que foram preparados e estão prontos para serem servidos. <br>
Ver o tempo que levou para preparar o pedido desde a chegada até o momento em que foi marcado como concluído.

<br>

***

<br>

<div align="center"><img width="500px" src="./src/assets/image-8.png" alt="Tela Visualização de Pedidos" title="Tela Visualização de Pedidos"></div>

### História do usuário 4
Os garçons devem ver os pedidos que estão prontos para serem entregues.

***"Como garçom, quero ver os pedidos que estão prontos para serem entregues rapidamente aos clientes que os fizeram."***

#### Critérios de aceitação
Veja a lista de pedidos prontos para servir.

<br>

***

<br>

<div align="center"><img width="500px" src="./src/assets/image-9.png" alt="Tela Adm" title="Tela Adm"> <img width="500px" src="./src/assets/image-10.png" alt="Tela Adm Registro de Colaboradores" title="Tela Adm Registro de Colaboradores"> <img width="500px" src="./src/assets/image-11.png" alt="Tela Adm Colaboradores" title="Tela Adm Colaboradores"></div>

### História do usuário 5
O gerente da loja precisa gerenciar seus funcionários

***"Como administrador de loja, quero gerenciar os usuários da plataforma para manter as informações de meus funcionários atualizadas."***

#### Critérios de aceitação
Veja a lista de trabalhadores.<br>
Adicionar trabalhadores.<br>
Excluir trabalhadores.<br>
Atualize os dados do trabalhador.

<br>

***

<br>

<div align="center"><img width="500px" src="./src/assets/image-12.png" alt="Tela Adm Itens do Menu" title="Tela Adm Itens do Menu"> <img width="500px" src="./src/assets/image-13.png" alt="Tela Adm Adicionar Produtos ao Menu" title="Tela Adm Adicionar Produtos ao Menu"></div>

### História do usuário 6
O gerente da loja deve gerenciar seus produtos.

***"Como administrador da loja deseja gerenciar os produtos para manter o cardápio atualizado."***

#### Critérios de aceitação 
Veja a lista de produtos. <br>
Adicione produtos. <br>
Excluir produtos.<br>
Atualize os dados do produto.

<br>
