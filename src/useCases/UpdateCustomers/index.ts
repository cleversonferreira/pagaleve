import { MongoCustomersRepository } from '../../repositories/implementations/mongoDB/MongoCustomersRepository';
import { UpdateCustomerController } from './CustomerController';
import { UpdateCustomerUseCase } from './UpdateCustomerUseCase';

const mongoCustomersRepository = new MongoCustomersRepository();

const updateCustomerUseCase = new UpdateCustomerUseCase(
  mongoCustomersRepository,
);

const updateCustomerController = new UpdateCustomerController(
  updateCustomerUseCase,
);

export { updateCustomerUseCase, updateCustomerController };
