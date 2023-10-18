# E-Store API

A "E-Store API" é uma aplicação completa e segura que oferece funcionalidades para gerenciar usuários, autenticação por JWT, operações de CRUD para produtos e uma conexão segura com um banco de dados SQL. A API foi projetada com a segurança em mente e é ideal para projetos de comércio eletrônico, sistemas de gerenciamento de produtos e muito mais.

## Recursos Principais

- Cadastro seguro de usuários.
- Autenticação de usuários através de tokens JWT.
- Operações CRUD para produtos, permitindo criar, ler, atualizar e excluir informações de produtos.
- Conexão segura com um banco de dados SQL.
- Deploy do banco de dados no ElephantSQL.
- Deploy do backend no Cyclic.

Para começar a utilizar a "E-Store API", siga estas etapas:

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/e-store-api.git
cd e-store-api
```
2. Instale as dependências:

```bash
npm install
```
3. Configure as variáveis de ambiente em um arquivo .env na raiz do projeto. Exemplo:

```bash
JWT_SECRET=seu-segredo
DB_HOST=seu-host
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
DB_DATABASE=seu-banco-de-dados
```
4. Inicie o servidor:

```bash
npm start
```

O servidor estará em execução em http://localhost:3000.

Rotas da API
A "E-Store API" fornece as seguintes rotas:

POST /api/auth/register: Rota para registro seguro de usuários.

POST /api/auth/login: Rota para autenticação de usuários e geração de token JWT.

GET /api/products: Rota para listar todos os produtos.

GET /api/products/:id: Rota para obter informações de um produto específico.

POST /api/products: Rota para adicionar um novo produto.

PUT /api/products/:id: Rota para atualizar informações de um produto.

DELETE /api/products/:id: Rota para excluir um produto.

Certifique-se de revisar a documentação do código fonte para obter mais detalhes sobre o uso das rotas.

Contribuindo
Se você deseja contribuir para a "E-Store API", fique à vontade para criar um fork e enviar solicitações pull com melhorias ou correções de bugs.