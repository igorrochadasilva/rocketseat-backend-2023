# Projeto 4

This project will be divided into two parts. The first module will focus on building the Domain layer of a forum API, following the concepts of DDD and Clean Architecture. In the next module, this domain layer will be connected to the infrastructure layer using the NestJS Framework.

## DDD no Node.js

In this module you will learn the fundamentals of Domain-Driven Design and Clean Architecture in building a REST API for a forum. You will learn to design the application architecture using DDD concepts, create Value Objects and Relationships, deal with errors in a functional way, develop use cases, unit tests, apply Subdomains and Domain Events.

### Fundamentos do DDD

**Design de software e DDD**

In this class, the concept of Software Design and Domain-Driven Design (DDD) will be presented.

Software Design refers to the intentional and organized creation of software systems, with the aim of satisfying specific user needs, meeting quality and performance requirements, and ensuring code maintainability.

DDD (Domain Driven Design) is a software design approach that focuses on modeling the application domain to represent real-world business rules and concepts.

**Entidades e casos de uso**

In this class, the concepts of Entities and Use Cases in software development will be addressed.

Entities represent real-world objects that have an identity and that maintain a state that is relevant to the application.

Use cases describe the functionality (actions) that the software must perform to meet the needs of users or the business.

They are essential for defining the scope and architecture of the system, and help ensure that the software is developed to meet the end user's needs.

**Primeiro caso de uso**

In this class, we will implement the entities and use cases using Object Oriented Programming (OOP).

Through OOP, we can create classes that represent these entities and use cases, making the code more organized and structured.

**Mapeando relacionamentos**

In this class, it will be presented how to map the relationships between the entities of a system, using only the id property of each entity.

**Dependências externas**
In this class, the contract interface of the AnswersRepository class, which is an external dependency of the persistence layer, will be broken. This will allow a usage class to be able to use it without relying directly on the concrete implementation of the class.

**Value Object de slug**

In this class, the concept of Value Object will be explained and how to use it to represent a property that has its own rules independent of the entity.

A Value Object class will be implemented to represent the slug value of a question.


**Classe base de entidades**

In this class, a class called Entity will be broken, which will serve as the basis for the other entities in the application. Entities will be created from the Entity class, thus inheriting its common properties and methods.

**ID das entidades**
In this class, a class called UniqueEntityID is implemented, whose purpose is to manage the creation of unique identifiers for application entities. This class will be used by the Entity base class to manage the identification of other entities in the application.

**Mapeando propriedades**
In this class, the properties of the Answer and Question entities will be mapped.

**Abstraindo criação de entidades**
In this class, the creation of entities will be covered in summary using a static method called create, allowing the creation of entity instances to be done in a simpler and more readable way. Furthermore, a TypeScript Generic will be implemented to allow some properties to be indicated.

**Getters & Setters das entidades**
In this class, getters and setters methods will be implemented in the application entities, allowing access and modification of the values ​​of their properties in a controlled manner.

**Path aliases e Vitest globals**
In this class, it will be explained how to configure TypeScript alias paths, in order to improve code organization, and how to configure Jest globally so that it is possible to use vitest methods without having to import them.

**Glossário: DDD**

Com base no diálogo fornecido, podemos identificar as seguintes entidades de domínio:

Produto: Esta é uma entidade que representa os produtos em estoque. Cada produto possui informações como um número de identificação único, tamanho, cor e quantidade em estoque.

Estoque: Representa o conjunto de produtos armazenados em um determinado momento.

Limite Mínimo de Estoque: Uma quantidade mínima predefinida para cada produto que indica quando um alerta deve ser gerado.

Alerta: Uma notificação que é acionada quando a quantidade de um produto no estoque está próxima ou abaixo do limite mínimo de estoque.

Histórico de Vendas: Um registro das vendas passadas que inclui informações sobre a quantidade de produtos vendidos, o lucro gerado e os produtos mais vendidos em um determinado período.

Ordem de Compra: Uma solicitação para adquirir produtos quando o estoque atinge o limite mínimo.

Fornecedor: Entidade que fornece produtos à empresa.

Com base nas informações fornecidas no diálogo, as seguintes ações (casos de uso) que essa aplicação deve ter podem ser identificadas:

Rastreamento Individual de Produtos: A aplicação deve permitir a atribuição de números de identificação únicos a cada produto e a inclusão de informações adicionais, como tamanho e cor, para rastreamento preciso.

Definição de Quantidades Mínimas de Estoque: Os usuários devem ser capazes de definir limites mínimos de estoque para cada produto.

Recebimento de Alertas: O sistema deve ser capaz de gerar alertas por e-mail e notificações quando a quantidade de um produto estiver próxima ou abaixo do limite mínimo de estoque.

Visualização de Histórico de Vendas e Estoque: Os usuários devem poder visualizar informações sobre vendas passadas, lucros, produtos mais vendidos e tendências de estoque ao longo do tempo.

Criação e Gerenciamento de Ordens de Compra: A aplicação deve permitir a criação e gerenciamento de ordens de compra automaticamente com base nas quantidades mínimas de estoque e nas tendências de vendas.

Integração com Fornecedores: Ser capaz de integrar o sistema com fornecedores para receber atualizações automáticas sobre os prazos de entrega de novas remessas.

Essas são as principais ações e entidades identificadas com base no diálogo fornecido para o sistema de gerenciamento de estoque.

**Mapeando o domínio**
