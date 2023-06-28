 **Resumo do projeto**
 <img width= "300px" src= "./src/assets/ladies.png">
O projeto Burger Ladies foi criado para um pequeno restaurante de hambúrgueres que está crescendo e necessita de uma interface em que se possa realizar pedidos utilizando um tablet, e enviá-los para a cozinha para que sejam preparados de forma ordenada e eficiente.

Este projeto tem duas áreas: a interface (cliente) e a API (servidor). A interface está sendo desenvolvida utilizando o framework React.

O cliente nos deu um [link](https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0) para a documentação que especifica o comportamento esperado da API HTTP que deve consumir. Aqui você pode encontrar todos os detalhes dos endpoints , como, por exemplo, quais parâmetros esperam, quais devem responder, etc.

*** 
[História do usuário 1] O garçom deve conseguir fazer login, se o administrador já tiver atribuído credenciais
*****Como garçon, quero poder entrar no sistema de pedidos.******

Critérios de aceitação
O que precisa acontecer para que as necessidades do usuário sejam atendidas.

Acesse uma tela de login.
Digite e-mail e senha.
Receba mensagens de erro compreensíveis, dependendo do que há de errado com as informações inseridas.
Entre no sistema de pedidos se as credenciais estiverem corretas.
definição de acabado
O acordado que deve acontecer para dizer que a história está acabada.
 <img width= "300px" src= "./src/assets/login.png">

***

[História do usuário 2] O garçom deve ser capaz de anotar o pedido do cliente
Como garçom, quero receber o pedido de um cliente para não depender da minha memória ruim, para saber quanto cobrar e enviar para a cozinha para evitar erros e para que possam ser preparados na ordem.

Critérios de aceitação
O que precisa acontecer para que as necessidades do usuário sejam atendidas

Anote o nome do cliente.
Adicione produtos ao pedido.
Excluir produtos.
Ver resumo e compra total.
Envie o pedido para a cozinha (salve em algum banco de dados).
funciona bem em um tablet
***

[História do usuário 3] O chef precisa ver os pedidos
Como chefe de cozinha, quero ver os pedidos dos clientes em ordem e marcar quais estão prontos para saber o que precisa ser preparado e avisar aos atendentes que um pedido está pronto para ser servido a um cliente.

Critérios de aceitação
Visualize os pedidos solicitados à medida que são feitos.
Marque os pedidos que foram preparados e estão prontos para serem servidos.
Veja o tempo que levou para preparar o pedido desde a chegada até o momento em que foi marcado como concluído.

***
[História do usuário 4] Os garçons devem ver os pedidos que estão prontos para serem entregues.
Como garçom, quero ver os pedidos que estão prontos para serem entregues rapidamente aos clientes que os fizeram.

Critérios de aceitação
Veja a lista de pedidos prontos para servir.

***
[História do usuário 5] O gerente da loja precisa gerenciar seus funcionários
Como administrador de loja, quero gerenciar os usuários da plataforma para manter as informações de meus funcionários atualizadas.

Critérios de aceitação
Veja a lista de trabalhadores.
Adicionar trabalhadores.
Excluir trabalhadores.
Atualize os dados do trabalhador.

***
[História do usuário 6] O gerente da loja deve gerenciar seus produtos
Você como administrador da loja deseja gerenciar os produtos para manter o cardápio atualizado.

Critérios de aceitação
Veja a lista de produtos.
Adicione produtos.
Excluir produtos.
Atualize os dados do produto.