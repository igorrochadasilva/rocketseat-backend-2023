# Projeto 2

## Estrutura da Aplicação

**Introdução**

- Introdução do Projeto e tecnologias a serem utilizadas.

**Conhecendo o Fastify**

- Microframerwork fastify, semelhante ao express.
- Fastify é mais atualizado que express.
- Mais utilizado com Node.
- Mais performatico, e integração com Typescript, e saber lidar com async await.

**Entendendo o Typescript**

- Instalando typescript `npm i -D typescript`
- Iniciando tsconfig `npx tsc --init`

**Criando aplicação**

- instalando `fastify`
- Utilizando o tsx para converter o ts para js sem gerar arquivo, `npm i tsx -D`
- Utilizado somente em desenvolvimento o tsx.

**Configurando ESLint**

- Instalando ESlint para padronização do código.
- Configuração do eslint no settings files e instalação da extensão

**Quiz**

Questão 1. O que é o Fastify?
Resposta
Um microframework web rápido e minimalista para Node.js

Questão 2. TypeScript pode ser considerado uma linguagem de programação?
Resposta
Sim, apesar de antes ser considerado apenas um superset, com a presença de runtimes (Deno e Bun) que executam o TypeScript nativamente, ele pode ser considerado uma linguagem.

Questão 3. Qual é a principal vantagem do TypeScript em relação ao JavaScript?
Resposta
TypeScript fornece tipagem estática, melhorando a qualidade do código e facilitando a manutenção

Questão 4. O que é uma "interface" em TypeScript?
Resposta
Um conjunto de tipos que especificam as propriedades e métodos que um objeto deve ter

Questão 5. É possível usar TypeScript com o Fastify?
Resposta
Sim, o Fastify tem suporte nativo ao TypeScript

## Banco de Dados

**Estratégia de acesso ao banco**

- Knex query builder, construtor de queries para facilitar as querys sql utilizando javascript

**Configurando o Knex**

- Criado configuração do Knex

**Criando primeira migration**

- São controle de versão dentro do Banco de Dados, são historicos de todas as mudanças feitas no DB
- `npx knex migrate:make create-documents`

**Criando tabela de transação**

- Criando tabelas com migration e knex usando javascript

**Realizando queries com knex**

- Criando rota hello e executando queries para testar.

**Variáveis de ambiente**

- Criando arquivo `.env` para variáveis globais.
- Criando arquivo `.env-example` para exemplificar .env e seus valores a serem definidos

**Tratando env com Zod**

- Criando arquivo env, e utilizado o zod para criação de schema de env para validar se variaveis de ambiente estão setadas ou não

**Quiz**

Questão 2. Com um query builder é possível trocar de banco de dados sem modificar as querys?
Resposta
Depende da documentação e da compatibilidade do query builder com outros bancos de dados.

Questão 3. O que são migrations?
Resposta
São scripts que modificam o esquema do banco de dados

Questão 4. Por que é importante usar migrations ao invés de modificar diretamente o esquema do banco de dados?
Resposta
Todas as opções acima

Questão 5. Qual é o comando do Knex para criar uma nova migration?
Resposta
knex migrate:make

Questão 6. Qual é o comando do Knex para rodar todas as migrations pendentes?
Resposta
knex migrate:latest

Questão 7. Qual é o comando do Knex para reverter a última migration aplicada?
Resposta
knex migrate:rollback

Questão 8. Qual é o método do Knex para realizar uma query de inserção em uma tabela?
Resposta
knex...insert()

Questão 9. Qual é o método do Knex para realizar uma query de seleção de todos os registros de uma tabela?
Resposta
knex...select()

Questão 10. O que são variáveis ambiente?
Resposta
Variáveis que só existem em determinado ambiente, como o desenvolvimento ou produção

Questão 11. Em que situações é importante usar variáveis ambiente?
Resposta
Alternativa A e B estão corretas

Questão 12. Como é possível acessar uma variável ambiente em um programa escrito em JavaScript?
Resposta
Usando a variável global process.env

Questão 13. Qual é o principal objetivo da biblioteca Zod?
Resposta
Validar tipos e formatos de dados

## Implementando as rotas

**Requisitos da aplicação**

RF

- O usuario deve poder criar uma nova transação
- O usuario deve poder obter um resumo da sua conta
- O usuário deve poder listar todas transações que já ocorreram
- O usuário deve poder visualizar uma transação única

RN

- A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá
- Deve ser possível identificarmos o usuário entre as requisições
- O usuário só pode visualizar transações o qual ele criou

**Plugins do Fastify**

- Utilizando o fastify para utilizar o plugin de gerenciamento de rotas.

**Criação de transações**

- Criado rota transação utilizando fastify e zod para tipagem

**Tipagem no Knex**

- Criando tipagem de tabela transactions pro knex

**Listagem das transações**

- Criação de rota de busca de todas as transactions
- Criado rota que busca transação por id

**Resumo de transações**

- criação de rota summary

**Utilizando cookies no Fastify**

- Utilizando os cookies do fastify nas rotas de criação e validando se existe ou não.
- Setando cookies para salvar nas requisições

**Validando existência do cookie**

- Validando existencia de cookie na rota listagem de transações e retornando somente transação do usuario que criou a transação

- Criando middleware para validação de cookie existente ou não e repassando no prehandler.

**Configurando um hook global**

- Criação de hook que atenda todas as requisições de modal global

**Quiz - Implementando as rotas**

Questão 1. O que são requisitos funcionais?
Resposta
Características do sistema que devem ser atendidas para atingir seus objetivos

Questão 2. No Fastify, como configuramos rotas com um path em comum?
Resposta
Utilizando o método register para registrar um plugin que contém todas as rotas com o mesmo path

Questão 3. Para que serve o termo `declare module` no TypeScript?
Resposta
Para declarar módulos personalizados

Questão 4. Como você pode criar tipos personalizados para representar suas tabelas e colunas no TypeScript?
Resposta
Escrevendo manualmente as definições de tipos

Questão 5. Como podemos acessar os cookies enviados por um cliente no Fastify?
Resposta
request.cookies

Questão 6. Seguindo as aulas, como podemos definir um cookie no Fastify?
Sua resposta
reply.setCookie

Resposta correta
reply.cookie

Questão 7. É possível configurar opções para os Cookies, como o tempo de expiração, ao escrever um cookie no Fastify?
Resposta
Sim, passando um objeto com as opções como terceiro parâmetro da função

Questão 8. O que é o `preHandler` no Fastify?
Resposta
Uma função que é executada antes de uma rota

Questão 9. Os contextos dentro de um plugin no Fastify são isolados entre eles.
Sua resposta
Falso

Resposta correta
Verdadeiro

Questão 10. O que são Hooks no contexto do Fastify?
Resposta
Funções que são executadas de acordo ao hook configurado.

## Testes automatizados

**Entendo testes automatizados**

- unitario: testa unidade da sua aplicação
- integração: comunicação entre duas ou mais unidades
- e2e: ponta a ponta: simulam um usuário operando na nossa aplicação
- Front-end: abre a página de login, digite o texto teste@gmail.com no campo com id email, clique no botão
- backend: chamados http, websockets
- Pirâmide de testes: e2e (não dependem de nenhuma tecnologia, não dependem de arquitetura)
- 2000 testes -> testes e2e -> 16 min

**Criando primeiro teste**

- Utilizando o vitest para criação de teste.
- https://vitest.dev/
- Vitest é totalmente compatível com o jest
- muito mais rápido que o jest.
- fácil a instalação.

**Testando criação de transação**

- Instalação do `supertest` e seus tipos.
- Supertest é utilizado para criação de requisição sem a necessidade de colocar o app no ar
- Utilizando o `beforeAll` para a aplicação estar pronta para assim começar a fazer os testes

**Categorizando os testes**

- Categorização de testes, utilizando o `describe`

**Testando listagem de transações**

- Criado teste de listagem de transações

**Configurando banco de testes**

- Criando banco de testes
- Antes de cada um dos testes, usar `execSync` para executar comandos do terminal
- Antes de qualquer teste, apagar banco e criar novamente

**Finalizando testes da aplicação**

- Criando teste de busca de transação por ID

**Quiz - Testes automatizados**

Questão 1. O que é a pirâmide de testes?
Resposta
Uma representação gráfica das quantidades de diferentes tipos de testes na aplicação

Questão 2. Qual é a finalidade dos testes unitários?
Resposta
Testar uma pequena unidade de código de forma isolada

Questão 3. Qual é a finalidade dos testes de integração?
Resposta
Testar a integração entre diferentes módulos da aplicação

Questão 4. Qual é a finalidade dos testes e2e (end-to-end)?
Resposta
Testar o sistema completo de uma só vez, simulando a interação do usuário

Questão 5. Qual método é executado uma única vez antes de todos os testes em um bloco de teste?
Resposta
beforeAll

Questão 6. Qual método é executado antes de cada teste em um bloco de teste?
Resposta
beforeEach

Questão 7. Qual método é executado depois de todos os testes em um bloco de teste?
Resposta
afterAll

Questão 8. Qual método é executado depois de cada teste em um bloco de teste?
Resposta
afterEach

Questão 9. Qual método é utilizado para preparar o ambiente antes de todos os testes?
Resposta
beforeAll

Questão 10. Qual é o objetivo do supertest no contexto de testes e2e?
Resposta
Realizar requisições HTTP para uma aplicação e validar suas respostas

Questão 11. É possível fazer verificações no corpo da resposta de uma requisição HTTP feita com o supertest?
Resposta
Sim, usando o método .expect()

Questão 12. Como você pode enviar dados em uma requisição HTTP feita com o supertest?
Resposta
Usando o método .send()

Questão 13. Qual a função principal do "describe" em testes automatizados?
Resposta
Criar uma categoria de testes para que eles sejam agrupados

## Preparando app p/ deploy

**Preparando para deploy**

- Convertendo typescript para javascript
- Inserindo pasta build no eslintignore e gitignore

**Deploy do app no Render**
