import { MongoCustomersRepository } from '../../repositories/implementations/mongoDB/MongoCustomersRepository';
import { CreateCustomerController } from './CreateCustomerController';
import { CreateCustomerUseCase } from './CreateCustomerUseCase';

const mongoCustomersRepository = new MongoCustomersRepository();

const createCustomerUseCase = new CreateCustomerUseCase(
  mongoCustomersRepository,
);

const createCustomerController = new CreateCustomerController(
  createCustomerUseCase,
);

export { createCustomerUseCase, createCustomerController };
