# Software Automotivo

O projeto é feito com as seguintes tecnologias:

> No Backend é utilizado a biblioteca <strong>Express</strong> na criação de rotas, <strong>Sequelize</strong> para a conexão com o banco de dados <strong>Mysql</strong>,
> <strong>Bcrypt</strong> para a criptografia de senhas e <strong>JSON Web Token(JWT)</strong> para geração de tokens de sessão dos usuários.

Para realizar a instalação dessas dependências, basta rodar o seguinte comando:

```
npm install express sequelize mysql2 bcrypt jsonwebtoken nodemon cors nodemailer
```

> No Frontend é utilizado o <strong>ReactJS</strong>, <strong>styled components</strong> aplicando CSS-in-JS, <strong>axios</strong> para realizar a conexão com o backend, <strong>react-icons<strong> para os ícones, <strong>react-router-dom</strong> para a criação de rotas, <strong>react-toastify</strong> para as notificações de ações dos usuários, <strong>validator</strong> para realizar a validação de e-mail.

Para realizar a instalação dessas dependências, basta rodar o seguinte comando:

```
npm install styled-components axios react-icons react-router-dom react-toastify validator @mui/material @emotion/react @emotion/styled react-hook-form zod @hookform/resolvers
```

> Esta sendo utilizado o docker para rodar o Banco de Dados MYSQL

Pode ser iniciado pelos seguintes comandos:

Para baixar a imagem

```
docker pull mysql
```

Para iniciar o container

```
docker run -p 3306:3306 --name mysql-tcc -e MYSQL_ROOT_PASSWORD=root -d mysql
```

Para acessar o container

```
docker exec -it  mysql-tcc /bin/bash
```

Para acessar o banco de dados dentro do container

```
mysql -p
```
