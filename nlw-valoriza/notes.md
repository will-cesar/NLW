### Comandos utilizados no projeto
- npm init -y ==> comando para iniciar o projeto e criar o arquivo package.json

- npm i typescript -D ==> comando para instalar o pacote do typescript

- tsc --init ==> comando para iniciar o typescript e criar o arquivo tsconfig.json
    - configuração do tsconfig.json:
        - deixar a propriedade "strict" como false

- npm i express ==> instala o pacote do express, responsável pelas rotas e configurações da api
- npm i --save-dev @types/express ==> instala as tipagens do express

- npm i ts-node-dev -D ==> biblioteca responsável para a conversão do código typescript para javascript

- npm i typeorm --save ==> instala o TypeORM no projeto
- npm i reflect-metadata --save ==> biblioteca que permite a utilização de decorators
    - criar o arquivo "ormconfig.json" na raiz do projeto para fazer a configuração do ORM
    - ao rodar o projeto logo em seguida da configuração, o banco é criado automaticamente
    - é possível visualizar o banco dentro do Beekeeper-Studio

- npm i sqlite3 --save ==> instala o banco SQLite na aplicação

- npm i uuid ==> pacote para gerar id único
- npm i @types/uuid -D ==> instala as tipagens do uuid

### Ferramentas utilizadas
- Express
- Typescript
- TypeORM
- SQLite
- uuid

### Modelagem dos dados
- User
    - ID (Pk) (uuid)
    - name (varchar)
    - email (varchar)
    - password (varchar)
    - admin (boolean)
    - created_at (Date)
    - updated_at (Date)

- Tag
    - ID (Pk) (uuid)
    - name (varchar)
    - created_at (Date)
    - updated_at (Date)

- Compliments
    - ID (Pk) (uuid)
    - user_sender (FK) (uuid)
    - user_receiver (FK) (uuid)
    - tag_id (FK) (uuid)
    - message (varchar)
    - created_at (Date)

### Regras
- Cadastro de usuários
    - [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail
    - [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG
    - [ ] Não é permitido cadastrar mais de uma tag com o mesmo nome
    - [ ] Não é permitido cadastrar tag sem nome
    - [ ] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios
    - [ ] Não é permitido um usuário cadastrar um elogio para si
    - [ ] Não é permitido cadastrar elogios para usuários inválidos
    - [ ] O usuário precisa estar autenticado na aplicação