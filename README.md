# Sistema de Autenticação de Usuário

Este é um projeto de exemplo que implementa um sistema de autenticação de usuário utilizando Node.js, Express, MongoDB e a biblioteca bcrypt para criptografar senhas.

## Funcionalidades

O projeto possui as seguintes funcionalidades:

1. **Cadastro de Usuário**: Permite o cadastro de novos usuários com nome de usuário, senha e a opção de ser um administrador.

2. **Login**: Permite que os usuários façam login utilizando suas credenciais de nome de usuário e senha. Após o login bem-sucedido, um token JWT é gerado para autenticação futura.

3. **Proteção de Rotas**: Algumas rotas do sistema exigem autenticação e, em alguns casos, permissão de administrador. Um middleware verifica o token JWT para proteger essas rotas.

4. **Listagem de Usuários**: Uma rota protegida permite listar todos os usuários cadastrados no sistema, disponível apenas para administradores autenticados.

5. **Atualização de Usuário**: Usuários autenticados podem atualizar seu próprio nome de usuário e senha.

6. **Deleção de Usuário**: Usuários autenticados e administradores têm permissão para excluir usuários.

## Configuração

1. Clone este repositório.
2. Execute `npm install` para instalar as dependências.
3. Renomeie o arquivo `.env.example` para `.env` e defina as variáveis de ambiente necessárias, como a URL do banco de dados e a chave secreta JWT.
4. Execute `npm start` para iniciar o servidor.

## Endpoints

- **POST /cadastro**: Cadastra um novo usuário. Requer um corpo JSON contendo `usuario`, `senha` e opcionalmente `isAdmin` (true/false).
- **POST /login**: Realiza o login de um usuário. Requer um corpo JSON contendo `usuario` e `senha`.
- **GET /getUsuarios**: Lista todos os usuários cadastrados. Requer um token JWT de um administrador.
- **PUT /atualizaUsuario/:nome**: Atualiza o nome de usuário e/ou senha de um usuário autenticado.
- **DELETE /deletaUsuario/:nome**: Deleta um usuário autenticado ou administrador.

## Observações


Este projeto foi desenvolvido com o propósito de aprendizado e demonstração de conceitos básicos de autenticação. Ele não foi projetado para ser utilizado em ambientes de produção, pois não contempla todos os aspectos de segurança e otimização necessários para um sistema real.

Sinta-se à vontade para explorar o código-fonte, fazer modificações e experimentar para aprimorar seus conhecimentos sobre autenticação de usuário e Node.js.

