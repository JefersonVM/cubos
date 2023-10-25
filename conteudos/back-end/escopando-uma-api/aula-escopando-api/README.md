# Nosso Mini Instagram


## O que o usuário pode fazer?

- fazer login
- fazer cadastro
- Ver os dados do seu perfil
- Editar os dados do seu perfil
- Ver postagens de outras pessoas
    - Ver quantidade de curtidas nas postagens
    - Ver comentários nas postagens
- Curtir postagens de outras pessoas
- Comentar postagens de outras pessoas  

## O que não será possível fazer

- Ver a localização de uma postagem
- Ver pessoas que curtiram uma postagem 
- Curtir um comentário
- Comentar em outros comentários

## Endpoints

### POST - Login

#### Dados enviados
- user name
- senha

#### Dados retornados
- sucesso / erro
- token

#### Objetivos gerais
- validar username e a senha
- buscar o usuário no banco de dados
- Verificar se a senha informada está correta
- Gerar o token de autenticação 
- Retornar os dados do usuário e o token 

---

### POST - Cadastro

#### Dados enviados
- user name
- senha
#### Dados retornados
- sucesso / erro

#### Objetivos gerais
- validar username e a senha
- Verificar se o username já existe no banco de dados
- Criptografar a senha 
- Cadastrar o usuário no banco de dados 


---

### GET - Perfil

#### Dados enviados
- token (que terá id ou username)

#### Dados retornados
- URL da foto
- Nome
- Username 
- Site
- Bio
- Email
- Telefone
- Gênero

#### Objetivos gerais
- validar token do usuário
- Buscar o cadastro do usuário com a informação do token 

---

### PUT - Perfil

#### Dados enviados
- token (que terá id ou username)
- URL da foto
- Nome
- Username 
- Site
- Bio
- Email
- Telefone
- Gênero
- Senha

#### Dados retornados
- Sucesso / erro

#### Objetivos gerais
- validar token do usuário
- Buscar o cadastro do usuário com a informação do token
- Exigir que ao menos um campo seja atualizado
- Criptografar a senha se for informada 
- Verificar se o email e o username já existe no banco de dados se caso forem informados
- Atualizar o registro do usuário no banco de dados 

---

### GET - Postagens

#### Dados enviados
- token
- offset 

#### Dados retornados

- Postagens [] 
    - id
    - texto
    - foi curtido por mim
    - Usuário
        - URL da foto
        - username
        - é perfil oficial
    - Fotos [] 
    - quantidades de curtidas
    - Comentários [] 
        - username
        - texto
    - Data

#### Objetivos gerais
- validar token do usuário
- Buscar o cadastro do usuário com a informação do token
- Retornar postagens de outros usuários

---

### POST - Postagens

#### Dados enviados
- token
- texto
- array com fotos 

#### Dados retornados

- sucesso ou erro

#### Objetivos gerais
- validar token do usuário
- Buscar o cadastro do usuário com a informação do token
- Exigir que seja informado ao menos uma foto no array
- Cadastrar postagem para o usuário logado
- Cadastro das fotos da postagem

---

### POST - Curtir

#### Dados enviados
- token (contém usermane ou id do usuário)
- id da postagem

#### Dados retornados
- sucesso ou erro

#### Objetivos gerais
- validar token do usuário
- Buscar o cadastro do usuário com a informação do token
- Buscar o cadastro da postagem com o id informado
- Verificar se o usuário já curtiu a postagem
- Cadastrar curtida da postagem no banco de dados

---

### POST - Comentar

#### Dados enviados
- token (contém username oi id do usuário)
- id da postagem 
- texto

#### Dados retornados
- sucesso ou erro

#### Objetivos gerais
- validar token do usuário
- Buscar o cadastro do usuário com a informação do token
- Validar texto
- Buscar a postagem com o id informado
- Cadastrar comentário da postagem
