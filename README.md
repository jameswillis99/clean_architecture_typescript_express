# Clean Architecture Typescript Express

![example workflow](https://github.com/EggyRice/clean_architecture_typescript_express/actions/workflows/main.yml/badge.svg)
## Technology 

* Express (Server)
* TypeORM (Database Object Relationship Model - using SQLite as an example db engine)
* TSyringe (Dependency Injection)
* Mocha Sinon Chai (Testing Suite)


## Architecture

This project is based upon the principles of [The Clean Code Blog
by Robert C. Martin (Uncle Bob)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

This project took inspiration from [jbuget/nodejs-clean-architecture-app](https://github.com/jbuget/nodejs-clean-architecture-app), a javascript clean architecture app, however this used slightly outdated tech, and more importantly didnt use typescript!!!

### Our Layers

One of the main principles of the clean architecture is the dependency rule, which involves different layers which can only communicate inwards.

The list below is our folder structure and can only communicate upwards (e.g. 2 cannot depend on 1 but 1 can reference 2).  An example of the issues this causes is where the Application or Domain wants to query the database located in the Infrastructure Layer.  To achieve this an interface for the methods on the Repo class is created in the Domain layer which the Application references.  But when the code is running the dependency on the repo is injected into the Application from Infrastructure.

1. Infrastructure - Frameworks and Drivers layer
2. Interfaces - Interface Adapters Layer
3. Application - Application Business Rules Layer
4. Domain - Enterprise Business Rules Layer

### Boundary Crossing

When data transfers between a layer, there is one important rule. The function/method that receieves the call from an outer layer should only be transfered the data it needs and should only return the data that is important.

We are using ESLint to limit boundary crossing to the Clean Architecture principles.


### Design Patterns Used
My main aim of this project was to learn design patterns in real life applications, to enable me to implement them in the real world.  Below is a list of my known design patterns and where I have implemented them.

Pattern     | File Location 
----------- | ----------- 
Template    | interfaces/controllers/Controller.ts
Decorator   | interfaces/RouteWrapper.ts
Singleton   | infrastructure/server/ExpressServer.ts
Facade      | infrastructure/repo/DogsRepo.ts
