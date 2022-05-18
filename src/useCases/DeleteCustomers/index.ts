import { MongoCustomersRepository } from '../../repositories/implementations/mongoDB/MongoCustomersRepository';
import { DeleteCustomerController } from './DeleteCustomerController';
import { DeleteCustomerUseCase } from './DeleteCustomerUseCase';

const mongoCustomersRepository = new MongoCustomersRepository();

const deleteCustomerUseCase = new DeleteCustomerUseCase(
  mongoCustomersRepository,
);

const deleteCustomerController = new DeleteCustomerController(
  deleteCustomerUseCase,
);

export { deleteCustomerUseCase, deleteCustomerController };
