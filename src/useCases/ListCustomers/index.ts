import { MongoCustomersRepository } from '../../repositories/implementations/mongoDB/MongoCustomersRepository';
import { ListCustomerController } from './ListCustomerController';
import { ListCustomerUseCase } from './ListCustomerUseCase';

const mongoCustomersRepository = new MongoCustomersRepository();

const listCustomerUseCase = new ListCustomerUseCase(
  mongoCustomersRepository,
);

const listCustomerController = new ListCustomerController(
  listCustomerUseCase,
);

export { listCustomerUseCase, listCustomerController };
