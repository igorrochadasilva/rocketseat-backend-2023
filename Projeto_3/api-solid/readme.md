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
