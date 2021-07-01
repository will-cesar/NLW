### Ferramentas
- Node
- VsCode
- Postman
- Beekeeper Studio

### Métodos HTTP
- GET    => Buscar informações
- POST   => Inserir (criar) uma informação
- PUT    => Alterar uma informação 
- DELETE => Remover um dado
- PATCH  => Alterar uma informação específica

### Tipos de parâmetros utilizados nas requisições
- Routes params
    - parâmetros que fazem parte da rota
    - exemplos: http://localhost:3000/produtos -> "produtos" é o parâmetro da rota
               http://localhost:3000/produtos/1 -> "produtos" e"1" são os parâmetros da rota

- Query params
    - parâmetros que fazem parte de uma query
    - parâmetros não obrigatórios
    - não são explícitos na url da requisição
    - normalmente utilizado para filtros
    - exemplo: http://localhost:3000/produtos?name=teclado&description=tecladobom
        - name = teclado
        - description = teclado bom

- Body params
    - parâmetros que vão no corpo da requisição
    - utilizados nos métodos POST, PUT, PATCH

### Formas de utilizar o banco de dados na aplicação
- Drivers do próprio banco de dados
    - é a forma mais "raiz" de utilizar o banco com a aplicação
    - utiliza a própria biblioteca do banco
    - necessário conhecimento com SQL
    - código mais verboso
    - maior performance

- Query builders
    - utilizado para escrever as query de uma forma menos verbosa em relação aos drivers do banco
    - necessário conhecimento com SQL
    - utilizado em diversos bancos de dados
    - Knex.js

- Object-Relational Mapping (ORM)
    - frameworks que ajudam no mapeamento entre a entidade e o objeto
    - pega o código em js e transforma da forma que o banco de dados consegue entender
    - Sequelize, TypeORM, Prisma.io

### Migrations
- forma de versionar o schema da aplicação
- trabalha na manipulação da base de dados: criando, alterando ou removendo
- forma de controlar as alterações do banco juntamente com o versionamento da aplicação
- migrations com o TypeORM
    - configurar a "cli" para criar uma migrations
    - configurar no package.json um script de "typeorm" para rodar os comandos da cli do TypeORM
    - npm run typeorm migration:create -- -n Nome_da_migration == para criar uma migration
    - npm run typeorm migration:run == roda as migrations
    - npm run typeorm migration:revert == remove as migrations

### Entities
- referenciamos uma entidade como se fosse uma tabela

### Repositories
- toda camada que faz a comunicação entre a entidade e o banco de dados
- responsável pelos métodos de CRUD com o banco de dados

### Services
- responsável por fazer a validação e verificação dos dados antes de enviar as informações para o banco de dados
- fluxo: Service -> Repository -> BD

### Controllers
- responsável por acessar o request e o response da requisição 
- pega essas informações e repassa para o service

### Fluxo da requisição
- Rota -> Controller -> Service -> Repository -> Banco de dados

### JWT - Json Web Token
- https://jwt.io/
- é divido em Header, Payload e Signature (todas divididas por ponto ".")
- Header
    - configura o tipo de token utilizado e o algoritmo de criptografia
- Payload
    - informações que vão ser passadas dentro do token
    - por exemplo o Id, Email e Nome do usuário
    - não pode passar informações sensíveis no payload
- Signature
    - passar uma chave única (secreta) para cada aplicação