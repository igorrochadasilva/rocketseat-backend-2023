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

**Abstraindo criação de entidades**

**Getters & Setters das entidades**

**Path aliases e Vitest globals**

**Glossário: DDD**

**Mapeando o domínio**
