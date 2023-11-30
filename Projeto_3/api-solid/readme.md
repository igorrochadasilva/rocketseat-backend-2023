# App

GymPass style app.

## RFs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar
- [ ] Deve ser possível se autenticar
- [ ] Deve ser possível obter o perfil de um usuário logado
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado
- [ ] Deve ser possível o usuário obter seu histórico de check-ins
- [ ] Deve ser possível o usuário buscar academias próximas
- [ ] Deve ser possível o usuário buscar academias pelo nome
- [ ] Deve ser possível o usuário realizar check-in em uma academia
- [ ] Deve ser possível validar o check-in de um usuário
- [ ] Deve ser possível cadastrar uma academia

## RNs (Regras de negócio)

- [ ] O usuário não deve poder ser cadastrar com um e-mail duplicado
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia
- [ ] O check-in só pode ser validado até 20 minutos após criado
- [ ] O check-in só pode ser validado por administradores
- [ ] A academia só pode ser cadastrada por administradores

## RNFs (Requisitos não funcionais)

- [ ] A senha do usuário precisa estar criptografada
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token)

**Criando projeto node.js**

- iniciando projeto com npm init
- Instalando typescript e tsx `npm i typescript @types/node tsx tsup -D`
- `npx tsc --init` para criação de tsconfig
- instalando fastify

**Usando versões exatas do NPM**

**Carregando variáveis ambiente**

- Utilizando library `zod` para fazer validação das variáveis
- Instalado dotenv.

**Configurando ESLint**

- Instalando eslint `npm i eslint @rocketseat/eslint-config -D`
- npx eslint --init para configurar

**Criando aliases de importação**

**Quiz**

Questão 1. O que é um alias de importação no TypeScript?
Resposta correta
Uma forma de importar arquivos no projeto com um nome mais curto

Questão 2. Qual o benefício de se utilizar um alias de importação no TypeScript?
Resposta
Melhor legibilidade e organização do código, através da utilização de apelidos mais descritivos para caminhos de importação complexos

Questão 3. Para que serve o "save-exact" no arquivo .npmrc?
Resposta
Uma opção para salvar a versão exata de um pacote instalado

## Integração com Prisma ORM

**Fundamentos do Prisma ORM**

- O Prisma é um Object-Relational Mapping (ORM) moderno e poderoso que facilita a interação entre sua aplicação e o banco de dados. Ele oferece uma abordagem declarativa para modelar seus dados e executar operações de banco de dados.
- Modelagem de dados declarativa
- Mapeamento de banco de dados
- Gerenciamento de migrações
- Consultas flexíveis
- Relacionamentos e junções
- Segurança e validação de dados
- Instalando prisma: npm i prisma -D
- Rodando: npx prisma generate
- Com o comando `generate` é criado.

**Fundamentos do Docker**
Docker estão relacionados ao conceito de contêinerização, que permite empacotar um aplicativo e suas dependências em uma unidade isolada chamada contêiner. Aqui estão os principais fundamentos do Docker:
magens: Uma imagem Docker é um pacote executável e somente leitura que inclui tudo o que é necessário para executar um aplicativo, incluindo o código, as bibliotecas, as dependências e as configurações do ambiente. As imagens são criadas a partir de um arquivo de definição chamado Dockerfile, que especifica as etapas necessárias para construir a imagem.

Contêineres: Um contêiner Docker é uma instância em execução de uma imagem. Eles são isolados uns dos outros e da máquina hospedeira, mas compartilham o mesmo kernel do sistema operacional. Os contêineres são leves, portáteis e podem ser iniciados, parados, reiniciados e removidos facilmente. Eles fornecem um ambiente consistente para executar aplicativos em diferentes sistemas operacionais e ambientes.

Docker Engine: O Docker Engine é o componente central do Docker, responsável por criar e gerenciar os contêineres. Ele inclui o daemon do Docker, que executa os contêineres e gerencia as imagens, e a interface de linha de comando (CLI) do Docker, que permite interagir com o Docker de forma fácil e intuitiva.

Registries: Os registros Docker são repositórios onde as imagens Docker são armazenadas e compartilhadas. O Docker Hub é o registro público padrão, mas você também pode configurar registros privados para armazenar suas próprias imagens. Os registros permitem que você compartilhe suas imagens com outras pessoas, baixe imagens existentes e colabore em projetos.

Networking: O Docker fornece recursos de rede para permitir a comunicação entre contêineres e com a rede externa. Você pode configurar redes internas para conectar contêineres e expor portas para se comunicar com o mundo exterior. O Docker também suporta recursos avançados de rede, como balanceamento de carga e redes sobrepostas.

Orquestração: Para gerenciar e dimensionar aplicativos em contêineres, existem ferramentas de orquestração, como o Docker Swarm e o Kubernetes. Essas ferramentas permitem que você implante e gerencie clusters de contêineres, balanceie a carga de trabalho, atualize e dimensione os serviços de forma eficiente.

**Doc: Instalação do Docker**

- https://docs.docker.com/desktop/install/windows-install/

**PostgreSQL com Docker**

- Utilizando imagem bitname/postgresql
- docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql
- docker ps -a: lista todos os containers
- docker start api-solid-pg: rodar banco
- docker rm api-solid-pg: apaga container
- npx prisma migrade dev: criação de migrate
- npx prisma studio: abrir prisma studio

**Utilizando o Docker Compose**

- docker compose up -d: rodar containers em background baseado no file docker-compose.yml
- docker-compose down: deleta os containers
- docker-compose stop

**Criando schema do Prisma**

- Criando tabelas
- npx prisma migrate deploy: roda as migrations em prod

**Relacionamentos entre tabelas**

- Criando relação entre tabelas
- Criando migration de relação entre tabelas

**Quiz - Integração com Prisma ORM**

Questão 1. O que é o Prisma Client?
Resposta
Uma biblioteca de acesso ao banco de dados gerada automaticamente a partir do schema do Prisma

Questão 2. Qual o comando do Prisma utilizado para gerar um novo arquivo de migração?
Resposta
prisma migrate dev

Questão 3. Qual o comando do Prisma utilizado para atualizar o esquema do banco de dados de produção?
Resposta
prisma migrate deploy

Questão 4. O que é um contêiner Docker?
Resposta
Uma aplicação isolada com suas dependências

Questão 5. Como os contêineres Docker diferem das máquinas virtuais?
Resposta
Os contêineres compartilham o kernel do host, enquanto as máquinas virtuais têm um kernel próprio

Questão 6. Qual comando é usado para criar um novo contêiner Docker a partir de uma imagem?
Resposta
docker run

Questão 7. O que é o Docker Compose?
Resposta
Uma ferramenta de gerenciamento de containers que faz parte do Docker

Questão 8. Qual comando é usado para criar os containers pela primeira vez pelo Docker Compose?
Resposta
docker-compose up

Questão 9. Como é representado um relacionamento N para N em um banco de dados relacional?

Resposta
Com uma tabela intermediária que registra as associações entre os registros nas duas tabelas.

## Caso de uso e design patters

**Criação de um usuário**

- Criação de roda de novo usuário

**Controller de registro**

- Criando controller de registro de novo usuário

**Hash da senha e validação**

- instalando bcryptjs e suas tipagem
- Utilizando hash para criar senha

**Caso de uso de registro**

- Criado use-case registro, onde ficará o registro do usuario com prisma.
- Desta maneira deixamos as ações no banco de dados separados das validações.

**Repository Pattern**

- Os arquivos dentro do repository ficaram encarregados somente de executar ações no db

**Inversão de dependências**

- SOLID
- Dependency Inversion Principle

**Interface do repositório**

- Criado interface user-repository que defini os métodos e parametros que devem tem a class

**Lidando com erros do use case**

- Criado class user-already-exists error para lidar com mensagens de erro.

**Handler de erros global**

- Criado `setErrorHandler` no file app, para lidar com erros de forma global.

**Quiz - Caso de Uso e Design Patterns**

Questão 1. Para que servem os casos de uso?
Resposta
Para orquestrar as entidades e regras da aplicação

Questão 2. Quais a principais responsabilidades dos Controllers?
Resposta
Intermediar a requisição, repassar os dados para os casos de uso e retornar dados quando necessário.

Questão 3. Qual é o fator de custo no Bcrypt?
Resposta
O número de iterações usadas na função de hash

Questão 4. O que é um "salt" no contexto de hashing de senha?
Resposta
Um valor aleatório adicionado à senha antes de gerar o hash

Questão 5. Para que serve o padrão Repository?
Resposta
Para abstrair a persistência de dados

Questão 6. No SOLID, para que serve a Inversão de dependência?
Resposta
Para evitar acoplamento e tornar a aplicação mais flexível

Questão 7. Qual é o principal benefício da utilização de interfaces de contrato na inversão de dependência?
Resposta
Permitir a substituição de implementações sem modificar o código cliente

Questão 8. Ao utilizarmos uma interface para um repositório, é correto afirmar que:
Resposta
Nossa aplicação dependerá de uma abstração e isso a tornará mais flexível e menos acoplada

Questão 9. No Fastify, qual o método que nos auxilia a criarmos erros globais?
Resposta
setErrorHandler

## Degisn Patterns & Testes

**Configurando Vitest**

- Instalado vitest and vite-tsconfig-paths
- Configurado vite.config.ts
- Criado register.spec.ts

**Primeiro teste unitário**

- Criando teste unitário de registro totalmente desconectada de suas dependências.
- Teste unitario nunca vai tocar em banco de dados ou camadas externas da aplicação.
- Principal vantagem de inversão de dependências para testes,

**In-Memory Databases**

- Com os dados em memoria, os testes ficam bem mais rapido.
- Criando pasta `in-memory` e `file in-memory-users-repository`
- Criado teste de registrar usuário
- Criado teste de hash de senha se é valido
- Criado teste de duplicação de usuário e retornando erro

**Gerando coverage de testes**

- Sempre passar await quando é utilizado um expect que aguarda uma promise
- Gerar coverage e ver porcentagem de testes feitos de acordo com servidos da aplicação

**Utilizando UI do Vitest**

- npm i -D @vitest/ui: para instalar vitest ui

**Quiz - Design Patterns & Testes**

Questão 1. Quais são as vantagens de usar um InMemoryDatabase em testes?
Resposta 
Todas as anteriores

Questão 2. O que é um "falso" InMemoryTestDatabase?
Resposta 
Um banco de dados que armazena os dados em memória, mas também usa o disco para armazenar os dados permanentemente

Questão 3. Qual é a principal razão para medir a cobertura de testes?
Resposta 
Identificar fluxos no código que não foram testados   

**Implementando casos de uso**

**caso de uso de autenticação**
- Created "invalid-credentials-error" file to return message error
- Created "authenticate" file use-case, it's responsable to find email from DB, valid the email and password and return user got from db.

**testes e controller de autenticação**
- Created the "authenticate.spec.ts" file to test the authenticate function
- Created tests to wrong password, wrong email and when both are right

**Refatorando instâncias nos testes**
- Using the  "beforeEach" to execute the repository before the tests to instance them

**Utilizando Factory Pattern**
- Creating factory to instance class to use in the controls

**Caso de uso de perfil**
- Creating profile use case and test, "get-user-profile" creted

**Caso de uso de checkin**
- Created use case `check-in-spec` that will be responsible to do the check-in of the users
- Created the checkIn in memory `in-memory-check-ins-repository.ts` to test in memory
- Created the checkIn spec test `check-in-spec.ts` to test `should be able to check in`

**TDD & Mocking**

Software development methodology where developers write tests before writing the actual code. This approach emphasizes writing automated tests that define the desired behavior of the code, and then writing the code itself to fulfill those tests.

In the context of backend development, TDD involves the following steps:

Write a Test: Begin by writing a test that describes the functionality you want to implement. This test will initially fail since you haven't written the actual code yet.

Run the Test: Run all the tests, including the new one you just wrote. Since the new test will fail, you'll know that the desired functionality is not yet implemented.

Write Code: Write the minimum amount of code necessary to make the failing test pass. This means implementing the functionality described by the test.

Run Tests Again: Run all the tests again. If the new test passes and all existing tests continue to pass, you can be confident that your new code didn't break any existing functionality.

Refactor: Once the tests pass, you can refactor your code if necessary to improve its structure, performance, or readability, knowing that you have tests in place to catch regressions.

Repeat: Repeat this cycle for each new feature or piece of functionality you want to add to your backend.

Benefits of TDD in backend development include:

Higher Code Quality: Writing tests before code encourages developers to think about the requirements and design before diving into implementation.

Regression Prevention: The automated tests act as a safety net, catching regressions that might occur when changes are made in the future.

Design Improvement: Writing tests first often leads to more modular and loosely coupled code, making it easier to maintain and extend.

Documentation: The tests serve as living documentation of how the code is expected to behave.

Faster Debugging: When a test fails, it's usually easier to pinpoint the issue since you know exactly what functionality is affected.

**Validando data do checkin**
- npm i dayjs, to work with date info
- valid the date using dayjs, according with different date
- creating `gyms-repository`
- Updated `CheckInUseCaseRequest` and added `latitude` and `longitude`


**Validando distância do checkin**
- creating test: `shoud not be able to check in on distant gym` inside the check-in.spec.ts
- created `get-distance-between-coordinate` to create the calculate to get the distance between point A and B

**Caso de uso de criação de academia**
- creating `create-gym` use-case.
- the create-gym use case will receive `title, description, phone, latitude, longitude`
- Created function `create` inside the in-memory-gyms-repository to create gym
- Created `create-gym.spec.ts` file
- Created `max-distance-error` file error
- Created `max-number-of-check-ins-error` file error

**Caso de uso de histórico**
- Creating `fetch-member-check-ins-history.ts` use case
- Creating `fetch-member-check-ins-history.spec.ts`
- Creating new function inside the `CheckInsRepository`, `findManyByUserId`

**Caso de uso de métricas**
- Creating `get-user-metricts.ts` use case.
- Creating method `countByUserId` inside `check-ins-repository`
- creating `get-user-metricts.spec.ts` for tests

**Caso de uso de busca de academias**
- Creating `search-gyms.ts` use case.
- Creating method `searchMany` inside `gyms-repository`
- creating `search-gyms.spec.ts` for tests

**Caso de uso de academias próximas**
- Creating `featch-nearby-gyms.ts` use case.
- Creating method `findManyNearby` inside `gymns-repository`
- Creating method `findManyNearby` inside `in-memory-gyms-repository`
- Creating `featch-nearby-gyms.ts` for tests

**Caso de uso de validar de checkin**
- Creating `validate-check-in.ts` use case.
- Creating method `findById` inside `check-ins-repository`
- Creating method `findById` inside `in-memory-gyms-check-ins`
- Creating method `save` inside `check-ins-repository`
- Creating method `save` inside `in-memory-gyms-check-ins`
- creating `validate-check-in.spec.ts` for tests


**Validando horário do checkin**

- Creating `late-check-in-validation-error.ts` file to show error message

Quiz - Implementando casos de uso

1. Qual é o objetivo principal de limpar o contexto dos repositórios entre os testes unitários?
R: Evitar interferências de testes anteriores nos testes subsequentes

2. Seguindo a aula, em qual fase do ciclo de vida dos testes unitários deve ocorrer a limpeza do contexto?
R: Antes de cada teste

3. Em que tipo de testes a limpeza de contexto é especialmente importante?
R: Testes de unidade

4. Para que serve o padrão Factory Pattern?
R: Para abstrair a criação de objetos sem expor a lógica de criação beneficiando a reutilização

5. O que é TDD
R: Um método de desenvolvimento de software que envolve escrever testes antes do código

6. Quais os ciclos do TDD?
R: Red, Green, Refactor

7. O que é o mocking?
R: Uma técnica para simular a execução de funções ou objetos


## Controllers & Testes E2E

**Repositórios do Prisma**
- Updating `prisma-users-repository` and add `findById`
- Creating `prisma-check-ins-repository` to implement CheckInsRepository
- Creating methods of the `prisma-repository`

**Repositório de academias**
- Creating `prisma-gyms-repository.ts` it's implements the `GymsRepository` and it's methods
- Implemented Haversibe Formula to calculate the distance betwen point A and B

**Factories dos casos de uso**
- Creating `make-authenticate-use-case.ts`
- Creating `make-check-in-use-case.ts`
- Creating `make-create-gym-use-case.ts`
- Creating `make-fetch-nearby-gyms-use-case.ts`
- Creating `make-fetch-user-metrics-use-case.ts`
- Creating `make-get-user-metrics-use-case.ts`
- Creating `make-get-user-profile-use-case.ts`
- Creating `make-register-use-case.ts`
- Creating `make-search-gyms-use-case.ts`
- Creating `make-validate-check-in-use-case.ts`

**Princípios da autenticação JWT**

- When the user try to log, is sended the email and password, the backend create the unique token, STATELESS
- JWT will have: header.payload.sign
- Think of a JWT (JSON Web Token) like a digital ID card that contains some information about you. This ID card has three parts:7
- Header: This part says how the ID card was made and how it should be checked.
- Payload: This is the actual information on the ID card. It can include your name, role, and other details.
- Signature: It's like a special lock that makes sure the ID card hasn't been changed.

**Implementando JWT no Fastify**
- Installed JWT: `npm i @fastify/jwt`
- Created `authenticate.ts` inside the controllers
- Created `fastify-jwt.d.ts`
- When you create the a session and the jwt token, if you try to access the profile, we use the `request.jwtVerify` to check if token exists.

**Controller de perfil**
- Created `profile controller`
- Created file `verify-jwt` that it'll be responsable for check if jwt exists when call routes that's necessary the jwt
- Created middleware that can be used to all the routes that's necessary the verification

**Criando test environment**

- Config test environment to test some cases in differents environments
- `npm link` inside the vitest-environment-prisma to create a local repository package 

**Organizando NPM scripts**
- Creating script `pretest:e2e` to execute the command before the script
- the package.json scripts will be organized to automate the vitest-environment-prisma linking process when running the e2e tests. This will be done through the npm-run-all package, allowing the process to run efficiently.

**Test Environment do Prisma**
- In this class, the objective is to implement the functionality of Prisma's environment file for Vitest. This will be manipulating the `DATABASE_URL` environment variable to generate a new URL with a unique `scheme` and running the migrations. At the end of each test cycle, a `schema` drop will be performed to ensure that each test runs with a clean and isolated environment.

**Teste E2E do registro**
- the end-to-end test (e2e) is implemented for creating a user in the API, using the Supertest package to carry out HTTP requests. The goal is to test the user creation functionality from the route layer to the database persistence layer, ensuring the integrity of the system as a whole.


**Teste E2E da autenticação**
- In this class, an e2e test for the authentication controller will be implemented. The purpose of the test is to validate that the session route is returning a valid token as a string. Supertest will be used to perform HTTP requests and Jest to write and run the tests.


**Teste E2E do perfil**
- In this class, the e2e test will be implemented for the application's profile controller, using the supertest to perform the requests and validating whether the route is returning the correct data from the logged-in user's profile.


**Controller de criação de academia**
- In this class, the focus is on refactoring the routes file, leaving only the routes related to the users resource and creating a new route file for the gyms resource. Next, the controller for creating gyms is created, which will be used in the previously created routes.


**Outros controllers da academia**
- In this class, you will create the remaining controllers (search and next) for the gyms feature. Upon creation, controllers will be added to the routes file.


**Controllers das rotas de check-ins**
- In this class, you'll create the set of controllers needed for the check-ins feature, including check-in, check-in history, check-in metrics, and check-in validation. After that, these controllers will be added to the routes file corresponding to the check-ins feature.


**Testes E2E de rotas de academias**

- In this class, the e2e tests will be created for the routes of the check-ins resource, using Supertest and the utility function created earlier to authenticate a user during the tests. They will be tested as check-in creation features, check-in history, analytics

**Testes E2E de rotas de check-ins**
- In this class, the e2e tests will be created for the routes of the check-ins resource, using Supertest and the utility function created earlier to authenticate a user during the tests. They will be tested as check-in creation features, check-in history, analytics

**Quiz - Controllers & Testes E2E**
Questão 1. O que significa a sigla JWT?
Resposta
JSON Web Token

Questão 2. Qual é o formato padrão de um JWT?
Resposta
Um conjunto de pares chave-valor codificado em base64

Questão 3. Como é feita a validação de um JWT?
Resposta
O servidor valida a assinatura digital contida no token

Questão 4. Qual é a melhor forma de garantir a segurança de um JWT?
Resposta
Utilizar uma chave secreta forte para assinar e verificar a assinatura do token

Questão 5. Qual é o risco de expor a chave secreta usada para assinar um JWT?
Resposta
Um atacante pode criar tokens falsos e se passar pelo usuário autenticado

Questão 6. Qual o principal motivo de ser criado um Test Environment?
Resposta
Isolar o banco de dados para cada grupo de testes

## Refresh Token & E2E

**Estratégia de refresh de token**

- In this class, the concept of Refresh Token in the context of JWT will be explained, and the initial implementation will be made, where the refresh token will be returned through cookies.

[About Refresh Token]

- The Refresh Token is a technique used to renew the authentication token after its expiration time. The Refresh Token is a long-lived token that is generated when the user logs in with their credentials. This token is used to get a new Access Token when the old one expires.

- The Refresh Token is stored securely, usually in an HttpOnly cookie, so that it cannot be accessed by client-side scripts. When the Access Token expires, the client sends the Refresh Token to the server to get a new valid Access Token. This allows users to stay logged in for an extended period of time without having to log in repeatedly.

- The use of Refresh Tokens is a recommended security practice in web applications, as it helps to minimize the risk of unauthorized access by third parties, especially if the authentication token is stolen or compromised.

**Implementação do refresh token**

- In this class, the refresh token controller will be implemented, which will check if the refresh token is present in the cookies and, if it is valid, will generate a new JWT token for the user.

**Autorização por cargos (RBAC)**
- RBAC (Role-Based Access Control) is a role-based access control model, where permissions are assigned based on the role or role that a user has within an organization.

In class, it will be explained how this model works and how to implement RBAC validation in the application. This includes creating user roles with specific permissions and validating those permissions on routes and controllers. Proper implementation of RBAC can help ensure that only authorized users can access certain parts of the application and perform specific actions.

**Testes de RBAC**

- In this class, the goal is to fix the tests that broke after implementing function validation in the application. It will be necessary to adjust the tests to pass the correct role information to the routes, according to the new RBAC policy.

**Quiz - Refresh Token & RBAC**

Questão 1. O que é um Refresh Token?
Resposta
Um token usado para solicitar um novo Access Token sem precisar fazer login novamente.

Questão 2. Qual é a principal vantagem do uso de Refresh Tokens em uma aplicação?
Resposta
Permitir que o usuário permaneça conectado por períodos mais longos sem precisar digitar suas credenciais novamente.

Questão 3. O que acontece se um Refresh Token expirar?
Resposta
O usuário deve fazer login novamente.

Questão 4. Como um Refresh Token é diferente de um Access Token?
Resposta
Um Refresh Token é usado para solicitar um novo Access Token, enquanto um Access Token é usado para acessar recursos do aplicativo.

## CI/CD da Aplicação

**Executando testes unitários no CI**

In this class you will learn about CI/CD, its advantages and how to implement it. A GitHub Action will be created to run the unit tests automatically every time a push is made to the repository. This will help ensure that the code is working correctly before being merged into the main agency.

**Executando testes E2E no CI**

This class will explain how to configure a GitHub Action to run the e2e tests automatically every time a pull request is created. The steps required to configure the Action and ensure that the tests run consistently and reliably will be presented.
