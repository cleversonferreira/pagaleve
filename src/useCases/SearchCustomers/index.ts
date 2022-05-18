import { MongoCustomersRepository } from '../../repositories/implementations/mongoDB/MongoCustomersRepository';
import { SearchCustomerController } from './SearchCustomerController';
import { SearchCustomerUseCase } from './SearchCustomerUseCase';

const mongoCustomersRepository = new MongoCustomersRepository();

const searchCustomerUseCase = new SearchCustomerUseCase(
  mongoCustomersRepository,
);

const searchCustomerController = new SearchCustomerController(
  searchCustomerUseCase,
);

export { searchCustomerUseCase, searchCustomerController };
